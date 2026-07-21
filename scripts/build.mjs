import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";

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
  "og.png",
  ".nojekyll",
  "electrocorp-trailer.webm",
  "electrocorp-trailer-poster.webp",
  "lowcortisol-trailer.webm",
  "lowcortisol-trailer-poster.webp"
]) {
  await cp(join(root, file), join(dist, "client", file));
}
await cp(join(root, "assets"), join(dist, "client", "assets"), { recursive: true });

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
