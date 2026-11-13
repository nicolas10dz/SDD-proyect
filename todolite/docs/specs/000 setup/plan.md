# Plan 000
## Backend
- Crear /backend con npm init, instalar express y cors (supertest como 
devDependency).
- app.js crea la app y la exporta (sin listen), con ruta GET /api/health.
- index.js importa app.js y hace listen en el puerto 3000.- Scripts: "dev": "node --watch index.js", "test": "node --test".
## Frontend- Crear /frontend con ng new (standalone, sin SSR).
- Configurar HttpClient en app.config.ts.- AppComponent llama a /api/health y muestra el resultado.
## Pruebas- Backend: test/health.test.js → GET /api/health devuelve 200 y { status: 
"ok" }.- Frontend: app.spec.ts → el componente muestra "TodoLite" (HttpClient 
simulado).