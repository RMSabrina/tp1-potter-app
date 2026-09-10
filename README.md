# Wizarding World Search 🪄
![React](https://img.shields.io/badge/react-19.0.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![PWA](https://img.shields.io/badge/PWA-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white)

Es una aplicación web desarrollada como Trabajo Integrador del módulo 1, que permite buscar y explorar personajes, hechizos y pociones del universo de Harry Potter, consumiendo la API pública de [PotterDB](https://potterdb.com/).

**Demo en línea (GitHub Pages):** https://rmsabrina.github.io/tp1-potter-app/

## Requisitos previos

- [Node.js](https://nodejs.org/) v18 o superior
- npm (incluido con Node.js)

## Instalación y ejecución local

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/RMSabrina/tp1-potter-app.git
   cd tp1-potter-app
   ```

2. Instalar las dependencias:
   ```bash
   npm install
   ```

3. Levantar el servidor de desarrollo:
   ```bash
   npm run dev
   ```
   La aplicación quedará disponible en `http://localhost:5173/` (o el puerto que indique la terminal).

## Scripts disponibles

| Comando           | Descripción                                              |
|--------------------|-----------------------------------------------------------|
| `npm run dev`      | Inicia el servidor de desarrollo con hot reload           |
| `npm run build`    | Genera la build de producción en la carpeta `dist/`       |
| `npm run preview`  | Sirve localmente la build de producción para probarla     |

## Tecnologías principales

- **React 19** + **Vite** como framework y bundler
- **React Router DOM** para el ruteo entre vistas
- **React Leaflet** / **Leaflet** para el mapa de la sección de contacto
- **vite-plugin-pwa** (Workbox) para el soporte offline / PWA
- **PotterDB API** como fuente de datos

## Documentación adicional

Para el detalle del enfoque, las decisiones técnicas y la relación con los requisitos funcionales, ver [`ENFOQUE.md`](./ENFOQUE.md).