# Prueba Técnica – Backend (NestJS + TypeORM + MySQL)

## Instalación

```bash
npm install
```

## Configuración

```
type: 'mysql',
host: 'localhost',
port: 3306,
username: 'root',
password: '244148@Mari0',
database: 'horarios',
autoLoadEntities: true,
synchronize: true,
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
