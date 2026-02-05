function showPanel(panelId, btnElement) {
    //Ocultar todos los paneles de contenido
    const panels = document.querySelectorAll('.content-panel');
    panels.forEach(panel => panel.classList.remove('active-panel'));

    //Desactivar todos los botones del menu vertical
    const buttons = document.querySelectorAll('.menu-btn');
    buttons.forEach(btn => btn.classList.remove('active-sub'));

    //Mostrar el panel seleccionado
    const selectedPanel = document.getElementById(panelId);
    if (selectedPanel) {
        selectedPanel.classList.add('active-panel');
    }

    if (btnElement) {
        btnElement.classList.add('active-sub');
    }
}

// --- LOGICA DE PROYECTOS (Global para acceso desde inline onclick) ---
const projectsDB = {
    lain_page: {
        title: "Copland OS Enterprise",
        desc: "Simulación web interactiva del sistema operativo de Serial Experiments Lain. Recrea un entorno de escritorio funcional con ventanas arrastrables, terminal de comandos y visualización de audio mediante Canvas y Web Audio API. El backend, impulsado por Node.js y Socket.io, habilita características en tiempo real como chat y sincronización de estado, todo bajo una rigurosa estética CRT y cyberpunk.",
        tech: "HTML | CSS | JS | Node.js | Express | Socket.io | Bcrypt | SQLite"
    },
    wired: {
        title: "The Wired Guestbook",
        desc: "Aplicación de mensajería en tiempo real inspirada en la estética de Serial Experiments Lain. Implementa un sistema de autenticación seguro (Bcrypt) y persistencia de datos mediante SQLite. Su frontend ofrece una experiencia inmersiva con efectos visuales retro (CRT, Glitch) y animaciones dinámicas, fusionando un diseño atmosférico con una arquitectura backend funcional.",
        tech: "JS | Node.js | Socket.io | Express | Bcrypt | SQLite"
    },
    retinopatia: {
        title: "Detección de Retinopatía Diabética con Algoritmos Genéticos",
        desc: "Proyecto de Machine Learning desarrollado en Python para la clasificación clínica utilizando el dataset Messidor. Compara el rendimiento de modelos SVM, MLP y Random Forest, implementando una capa de optimización evolutiva de hiperparámetros mediante la librería sklearn-genetic-opt. El flujo incluye preprocesamiento de datos, normalización (MinMaxScaler), validación cruzada y generación automática de métricas y gráficos de rendimiento.",
        tech: "Python | Scikit-learn | Scikit-learn-genetic-opt | Pandas | Numpy | Matplotlib | Seaborn"
    }
};

window.previewProject = (id) => {
    const data = projectsDB[id];
    if (!data) return;

    // Actualizar Imagen
    const imgPath = `assets/projects/${id}.png`;
    const imgContainer = document.getElementById('project-param-image');
    if (imgContainer) {
        imgContainer.innerHTML = `
            <img src="${imgPath}" 
                 style="width: 100%; height: auto; display: block;" 
                 onerror="this.style.display='none'; this.parentElement.innerHTML='<span style=\\'opacity:0.5\\'>[ SIN IMAGEN ]</span>'">
        `;
    }

    // Actualizar Descripción
    const descContainer = document.getElementById('project-param-desc');
    if (descContainer) {
        descContainer.innerHTML = `
            <h3 style="margin-bottom: 10px; color: var(--text-color);">${data.title}</h3>
            <p style="margin-bottom: 15px;">${data.desc}</p>
            <div style="font-size: 0.8em; padding: 5px; border-top: 1px dotted var(--border-color);">
                STACK: <strong>${data.tech}</strong>
            </div>
        `;
    }
};

window.selectProject = (id) => {
    previewProject(id);

    // Resetear clase activa
    document.querySelectorAll('.project-item').forEach(b => {
        b.classList.remove('active-project');
    });

    // Activar seleccionado (si fue disparado por evento)
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active-project');
    }
};