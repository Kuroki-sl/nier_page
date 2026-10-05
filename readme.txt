=========================================================================================================================
                                                 PROYECTO: SISTEMA YoRHa (NIER PAGE)
=========================================================================================================================

DESCRIPCIÓN:
Este proyecto es una aplicación web interactiva que simula la interfaz del sistema
operativo de las unidades androide YoRHa, inspirada en el videojuego "NieR: Automata".

El objetivo es recrear la estética minimalista y postapocalíptica 
del juego original, fusionándola con una arquitectura web moderna basada 
en una SPA (Single Page Application) ligera, modular y sin dependencias de frameworks pesados.

CARACTERÍSTICAS PRINCIPALES:

1. Interfaz Táctica YoRHa (GUI & UX):
   - Barra de navegación superior con pestañas tácticas e indicadores de selección dinámica (◈, ❖).
   - Barra de estado inferior con ayuda contextual e indicadores de comandos estilo consola.
   - Efecto visual de pantalla CRT mediante scanlines discretas con gradientes CSS y animación de secuencia de arranque.
   - Tipografía técnica y militar acompañada de una paleta cromática fiel a YoRHa.

2. Arquitectura SPA y Enrutador Modular (Vanilla JS Router):
   - Enrutador cliente SPA propio desarrollado en JavaScript Vanilla mediante la API History.
   - Carga dinámica asíncrona de vistas bajo demanda (Dynamic import()) con sistema de caché en memoria para rendimiento.
   - Ciclo de vida estructurado por vista: renderizado con transición cinemática y funciones de desmontaje/limpieza de memoria.
   - Detección y manejo de rutas inválidas con pantalla temática de "ERROR: DATOS CORRUPTOS [Vista no encontrada]".

3. Registros y Módulos del Sistema (Vistas):
   - [ INICIO ]: Diagnóstico inicial ("ESTADO DEL SISTEMA: OPERATIVO"), resumen de bienvenida, panel lateral de notificaciones y lema "GLORY TO MANKIND".
   - [ DATOS UNIDAD (About) ]: Ficha técnica del operador con submenú interactivo:
     * Presentación: Registro biográfico y notas de perfil.
     * Herramientas: Matriz de módulos instalados con iconos vectoriales de Devicon.
     * Aplicaciones: Módulo de utilidades y software activo.
     * Espacio de Trabajo: Registro del entorno físico de cómputo.
     * Panel de Estado: Monitoreo de Clase e indicador de integridad.
   - [ PROYECTOS ]:
     * Registro de proyectos de desarrollo.
   - [ ARCHIVOS ]:
     * Archivo clasificado por categorías tácticas (Favoritos, Sandbox, Gachas, Misceláneos).
     * Catálogo detallado de títulos con iconos dedicados y previsualizaciones en formato WebP con marco CRT.
   - [ SONIDO ]:
     * Módulo de reproductor audiovisual conectado dinámicamente con YouTube (iframes integrados para temas individuales y playlists).
     * Visualizador gráfico interactivo con barras de ecualizador animadas mediante CSS Keyframes.
     * Selección de pistas destacadas (Epic The Musical, Weight of the World, etc.).
   - [ CONTACTO ]: Vías de comunicación encriptadas (Email, GitHub, LinkedIn).


REQUISITOS:
Para ejecutar este proyecto localmente, necesitas:
- Node.js instalado.


INSTALACIÓN Y EJECUCIÓN:
1. Abre la terminal en el directorio raíz del proyecto.
2. Instala las dependencias necesarias:
   npm install
3. Inicia el Pod de Comunicación (Servidor Express):
   npm start
   (o alternativamente: node server.js)
4. Accede mediante tu navegador web a:
   http://localhost:3000


TECNOLOGÍAS:
- Frontend: HTML5 Semántico, CSS3.
- Lógica & Enrutador: JavaScript ES6+.
- Audio Procedural: Web Audio API.
- Backend: Node.js + Express .
- Tipografía y Assets: Rajdhani, Devicon, WebP optimizado.
