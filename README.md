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

```
POST /users/create
GET /users/all
GET /users/:id
PATCH /users/edit/:id
DELETE /users/delete/:id
```

### Subjects

```
POST /subjects/create
GET /subjects/all
GET /subjects/:id
PATCH /subjects/actualizar/:id
DELETE /subjects/delete/:id
```

### Schedules

```
POST /schedule/create
GET /schedule/all
GET /schedule/:id
GET /schedule/user/:id
PATCH /schedule/edit/:id
DELETE /schedule/delete/:id
```
