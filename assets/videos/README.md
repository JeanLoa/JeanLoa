# Portfolio films

Deployment-ready project films are grouped by portfolio section and project:

```text
videos/
|-- ai-engineer/
|   |-- 01-retail-demand-prediction-api/
|   |-- 02-sales-forecasting-dashboard-api/
|   |-- 03-classical-model-comparison-suite/
|   |-- 04-customer-segmentation-and-churn-api/
|   |-- 05-inventory-optimization-ml-service/
|   `-- 06-ai-software-foundations-platform/
|-- internships/
|   `-- decodelabs/
|       |-- 01-decodebot-assistant/
|       |-- 02-decode-classify/
|       |-- 03-decodepath-recommender/
|       `-- 04-decodevision-ocr/
|-- software-engineer/
|   `-- 01-retail-intelligence-platform/ (Sprint 01-03)
`-- university/
    |-- electrocorp/
    `-- lowcortisol/
```

Only web-ready files belong here because the complete `assets/` directory is
copied into the production build. Original high-resolution recordings remain
under `video-sources/` and are intentionally ignored by Git.
