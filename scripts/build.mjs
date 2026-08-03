import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const root = process.cwd();
const dist = join(root, "dist");
await rm(dist, { recursive: true, force: true });
await mkdir(join(dist, "client"), { recursive: true });
await mkdir(join(dist, "server"), { recursive: true });
for (const file of [
  "index.html",
  "styles.css",
  "app.js",
  "projects-data.js",
  "favicon.svg",
  "og-v2.png",
  ".nojekyll"
]) {
  await cp(join(root, file), join(dist, "client", file));
}
for (const asset of [
  "assets/electrocorp-home.jpg",
  "assets/lowcortisol-reports.png",
  "assets/audio/audio1.mp3",
  "assets/audio/audio2.mp3",
  "assets/audio/audio3.mp3",
  "assets/audio/audio4.mp3",
  "assets/audio/audio5.mp3"
]) {
  const destination = join(dist, "client", asset);
  await mkdir(dirname(destination), { recursive: true });
  await cp(join(root, asset), destination, { recursive: true });
}
const galleryManifest = JSON.parse(
  await readFile(join(root, "content", "project-galleries.json"), "utf8")
);
const galleryAssets = new Set(
  Object.values(galleryManifest)
    .flat()
    .map(item => item?.src)
    .filter(Boolean)
);

for (const asset of galleryAssets) {
  const normalizedAsset = asset.replaceAll("\\", "/");
  if (!/^assets\/project-captures\/[a-z0-9_./-]+\.(png|jpe?g|webp)$/i.test(normalizedAsset)
      || normalizedAsset.includes("../")) {
    throw new Error(`Invalid project gallery asset: ${asset}`);
  }

  const destination = join(dist, "client", ...normalizedAsset.split("/"));
  await mkdir(dirname(destination), { recursive: true });
  await cp(join(root, ...normalizedAsset.split("/")), destination);
}

const worker = `const worker = {
  async fetch(request, env) {
    const url = new URL(request.url);
    const isDocument = request.method === "GET" && (url.pathname === "/" || !url.pathname.includes("."));
    if (isDocument) {
      const indexRequest = new Request(new URL("/index.html", request.url), request);
      const asset = await env.ASSETS.fetch(indexRequest);
      if (!asset.ok) return asset;
      const html = (await asset.text()).replaceAll("__SITE_ORIGIN__", url.origin);
      return new Response(html, { headers: { "content-type": "text/html; charset=utf-8", "cache-control": "public, max-age=120" } });
    }
    return env.ASSETS.fetch(request);
  }
};
export default worker;
`;

await writeFile(join(dist, "server", "index.js"), worker, "utf8");
const index = await readFile(join(dist, "client", "index.html"), "utf8");
if (!index.includes("Jean Loa") || !index.includes("projects-data.js")) {
  throw new Error("Portfolio build verification failed");
}
console.log("Built Jean Loa portfolio into dist/");
