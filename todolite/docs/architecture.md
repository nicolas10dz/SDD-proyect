# Arquitectura
- /backend: API REST en Express, puerto 3000, rutas bajo /api- /backend/store.js: datos en memoria (se pierden al reiniciar el backend)
- /frontend: app Angular, puerto 4200- El frontend llama a http://localhost:3000/api (CORS habilitado)