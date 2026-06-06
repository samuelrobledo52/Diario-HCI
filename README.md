# Diario de HCI

Repositorio de entrega final del curso Interaccion Humano Computador, Universidad del Valle de Guatemala, 2025.

El proyecto consiste en una pagina web tipo diario academico que recopila observaciones, analisis y reflexiones sobre principios de diseno, usabilidad y experiencia de usuario aplicados a situaciones cotidianas. Cada seccion corresponde a una actividad del curso y fue desarrollada con enfasis en redaccion natural, analisis critico y documentacion visual.

---

## Autor

| Campo | Detalle |
|---|---|
| Nombre | Samuel Antonio Robledo Lopez |
| Carne | 241282 |
| Curso | Interaccion Humano Computador |
| Universidad | Universidad del Valle de Guatemala |
| Ano | 2025 |

---

## Contenido del diario

| Seccion | Tema | Descripcion |
|---|---|---|
| 1 | Gestalt | Analisis de 3 objetos cotidianos bajo los principios de la psicologia de Gestalt: proximidad, similitud, continuidad y figura-fondo |
| 2 | Importancia de HCI | Experiencia con User Inyerface, sitio disenado deliberadamente para ser frustrante, y reflexion sobre la importancia del diseno centrado en el usuario |
| 3 | Modelo de Norman | Analisis de una interaccion confusa con una maquina de parqueo usando las 7 etapas del Modelo de Interaccion de Norman |
| 4 | Interfaces extranas | Analisis critico de Canvas en movil como interfaz confusa, con identificacion de heuristicas violadas y recomendaciones de mejora |
| 5 | Interacciones reales | Registro de 3 interacciones cotidianas: dispensador de agua, terminal POS y Canvas, analizando intuitividad, senales y mejoras posibles |
| 6 | Colores | Analisis de la teoria del color aplicada a los logos de McDonald's, Spotify y Pepsi |
| 7 | Diseno de objetos | Analisis de un grifo automatico de sensor como objeto de uso cotidiano con affordance deficiente |
| 8 | Diseno con IA | Prompt enviado a una IA para generar una pagina de delivery, con analisis de heuristicas de Nielsen, teoria de color y UX del resultado |

---

## Estructura del repositorio

```
diario-hci/
├── index.html                  — Pagina principal con todo el contenido
├── styles.css                  — Estilos visuales y responsive
├── script.js                   — Navegacion activa, animaciones y scroll
├── README.md                   — Este archivo
└── assets/
    ├── gestalt/
    │   ├── iconos-celular.svg
    │   ├── senalizacion.svg
    │   └── empaque-bebida.svg
    ├── user-inyerface/
    │   └── tiempo-final.svg
    ├── norman/
    │   └── maquina-parqueo.svg
    ├── interfaces/
    │   └── canvas-movil.svg
    ├── interacciones/
    ├── colores/
    │   ├── mcdonalds.svg
    │   ├── spotify.svg
    │   └── pepsi.svg
    ├── objetos/
    │   └── grifo-sensor.svg
    └── ai-design/
        ├── delivery-page.svg
        └── analisis-heuristico.svg
```

---

## Tecnologias utilizadas

- **HTML5** — Estructura semantica del contenido
- **CSS3** — Diseno visual, variables, grid, flexbox y responsive design
- **JavaScript** — Navegacion activa por scroll, animaciones de entrada y boton volver arriba
- **SVG** — Ilustraciones vectoriales generadas para cada seccion del diario

---

## Como ejecutar localmente

Clonar el repositorio y abrir `index.html` en el navegador. No requiere servidor ni dependencias.

```bash
git clone https://github.com/samuelrobledo52/Diario-HCI.git
cd Diario-HCI
# Abrir index.html en el navegador
```