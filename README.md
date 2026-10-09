# FORMA — лендинг предзаказа

Монорепозиторий:

- `web` — Next.js (TypeScript, CSS Modules, FSD)
- `api` — NestJS (заявки на предзаказ)

## Запуск

```bash
# терминал 1 — API на :3001
npm run dev:api

# терминал 2 — лендинг на :3000
npm run dev:web
```

## FSD (web)

| Слой | Папка | Назначение |
|------|--------|------------|
| app | `src/app` | Next.js App Router |
| pages | `src/views` | композиция страниц (папка `views`, чтобы не конфликтовать с Pages Router) |
| widgets | `src/widgets` | блоки лендинга |
| features | `src/features` | предзаказ |
| entities | `src/entities` | программа, заявка, отзывы |
| shared | `src/shared` | UI, конфиг, lib, model, стили |

Контент и бренд: `web/src/shared/config/site.ts`, `web/src/entities/program/model/constants.ts`.

Общие контракты (`TariffId`) лежат в `shared/model`, чтобы entities не зависели друг от друга.

## API

- `POST /preorders` — создать заявку (rate limit: 5 запросов / мин с IP)
- `GET /health` — проверка живости

Заявки сохраняются в `api/data/preorders.json` (файл в `.gitignore`).

CORS: переменная `CORS_ORIGINS` (см. `api/.env.example`).
