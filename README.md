# AyDS_T1_202202481

## Descripción
API REST sencilla desarrollada con Express.js que proporciona información básica y estado de salud del servicio.

## Instalación y Ejecución

### Requisitos
- Node.js
- npm

### Pasos para ejecutar
1. Instalar dependencias:
```bash
npm install express
```

2. Ejecutar la aplicación:
```bash
node app.js
```

La API estará disponible en: `http://localhost:3000`

## Endpoints

### 1. Health Check
**GET** `/health`

Verifica el estado de la API.

**Respuesta:**
```json
{
  "status": "OK",
  "message": "API funcionando correctamente"
}
```

**Ejemplo de uso:**
```bash
curl http://localhost:3000/health
```

### 2. Información Personal
**GET** `/info`

Retorna información personal del desarrollador.

**Respuesta:**
```json
{
  "nombre": "Josué Nabí Hurtarte Pinto",
  "album_fav": "The world is Mine - BURNOUT SYNDROMES",
  "version": "2.0"
}
```

**Ejemplo de uso:**
```bash
curl http://localhost:3000/info
```

## 👨‍💻 Autor

[@Josue013](https://www.github.com/Josue013)