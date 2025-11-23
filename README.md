# Prueba Técnica – Backend (NestJS + TypeORM + MySQL)

## Instalación

```bash
npm install
```

## Configuración

Cree un archivo `.env`:

```
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=tu_password
DB_DATABASE=horarios
```

## Ejecutar

```bash
npm run start:dev
```

## Endpoints

### Usuarios

GET /users
GET /users/:id
POST /users
PATCH /users/:id
DELETE /users/:id

### Subjects

POST /subjects/create
GET /subjects
GET /subjects/:id
PATCH /subjects/actualizar/:id
DELETE /subjects/eliminar/:id

### Schedules

POST /schedule
GET /schedule
GET /schedule/:id
PATCH /schedule/:id
DELETE /schedule/eliminar/:id
