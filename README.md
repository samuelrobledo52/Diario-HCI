# 📓 Diario de HCI

**Estudiante:** Samuel Antonio Robledo López  
**Carné:** 241282  
**Curso:** Interacción Humano Computador  
**Universidad:** Universidad del Valle de Guatemala  
**Entrega:** Diario de HCI — URL de página web

---

## Descripción

Página web académica tipo diario que recopila las actividades del curso de Interacción Humano Computador. Incluye análisis de Gestalt, User Inyerface, el Modelo de Norman, interfaces confusas, interacciones cotidianas, análisis de colores, diseño de objetos y una evaluación de diseño generado por IA.

---

## Estructura de archivos

```
diario-hci/
├── index.html          ← Página principal (todo el contenido)
├── styles.css          ← Estilos visuales
├── script.js           ← Interactividad (nav, animaciones, scroll)
├── README.md           ← Este archivo
└── assets/
    ├── gestalt/        ← Fotos de objetos Gestalt
    ├── user-inyerface/ ← Captura del tiempo en User Inyerface
    ├── norman/         ← Foto del sistema analizado (máquina de parqueo)
    ├── interfaces/     ← Screenshot de Canvas (interfaz confusa)
    ├── interacciones/  ← Fotos opcionales de interacciones
    ├── colores/        ← Imágenes de los logos analizados
    ├── objetos/        ← Foto del objeto extraño
    └── ai-design/      ← Capturas del diseño generado por IA
```

---

## Cómo agregar tus imágenes

1. Coloca las fotos en la carpeta correspondiente dentro de `assets/`.
2. En `index.html`, cada placeholder dice exactamente qué imagen va ahí.
3. Cambia la ruta del `src` en el tag `<img>` correspondiente.

**Ejemplo:**
```html
<!-- Antes (placeholder) -->
<img src="assets/gestalt/iconos-celular.jpg" alt="..." onerror="...placeholder...">

<!-- Después (con tu foto) -->
<img src="assets/gestalt/iconos-celular.jpg" alt="Íconos de apps en mi celular">
```

Los placeholders se muestran automáticamente si la imagen no existe, así que puedes subir sin imágenes primero y agregarlas después.

---

## Cómo abrirlo localmente

1. Descarga o clona el repositorio.
2. Abre el archivo `index.html` directamente en tu navegador.
3. No requiere servidor ni instalación de nada.

```bash
# Si usas VS Code, puedes usar Live Server:
# Clic derecho en index.html → "Open with Live Server"
```

---

## Cómo publicarlo en GitHub Pages

1. **Crea un repositorio** en [github.com](https://github.com) (puede ser público o privado).

2. **Sube los archivos:**
   ```bash
   git init
   git add .
   git commit -m "Diario de HCI - entrega final"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/diario-hci.git
   git push -u origin main
   ```

3. **Activa GitHub Pages:**
   - Ve a tu repositorio en GitHub.
   - Clic en **Settings** (pestaña superior).
   - En el menú izquierdo, clic en **Pages**.
   - En "Branch", selecciona `main` y carpeta `/ (root)`.
   - Clic en **Save**.

4. **Espera 1-2 minutos.** GitHub generará una URL pública como:
   ```
   https://TU_USUARIO.github.io/diario-hci/
   ```

5. **Copia esa URL** y entrégala en Canvas.

---

## Alternativas de publicación

### Netlify (más rápido)
1. Ve a [netlify.com](https://netlify.com) y crea cuenta gratuita.
2. Arrastra la carpeta `diario-hci/` completa al panel de Netlify.
3. Netlify genera una URL en segundos.

### Vercel
1. Ve a [vercel.com](https://vercel.com) y conecta tu cuenta de GitHub.
2. Importa el repositorio.
3. Vercel detecta que es HTML estático y lo despliega automáticamente.

---

## Cómo entregar la URL en Canvas

1. Publica el sitio en GitHub Pages, Netlify o Vercel.
2. Copia la URL pública generada.
3. En Canvas, entra a la tarea **"Entrega de Diario"**.
4. Selecciona el tipo de entrega **"URL de la página web"**.
5. Pega la URL y envía.

---

## Notas

- El sitio funciona sin conexión a internet si abres `index.html` directamente.
- Los placeholders de imagen se muestran automáticamente cuando no hay imagen real.
- El diseño es responsive: se adapta a celular y computadora.
- Todos los textos están redactados; solo faltan las imágenes propias.
