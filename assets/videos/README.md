# Portfolio films

Deployment-ready project films are grouped by portfolio section and project:

```text
videos/
|-- ai-engineer/
|   |-- 01-retail-demand-prediction-api/
|   |-- 02-sales-forecasting-dashboard-api/
|   `-- 03-classical-model-comparison-suite/
|-- software-engineer/
|   `-- 01-retail-intelligence-platform/
`-- university/
    |-- electrocorp/
    `-- lowcortisol/
```

Only web-ready files belong here because the complete `assets/` directory is
copied into the production build. Original high-resolution recordings remain
under `video-sources/` and are intentionally ignored by Git.
