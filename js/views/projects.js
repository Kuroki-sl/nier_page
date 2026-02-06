import { projectsDB } from '../data/projects.js';

const html = `
<div class="content-wrapper">
    <!-- Panel Izquierdo: Lista de Proyectos -->
    <main class="main-panel" style="flex: 1.5;">
        <h1 class="section-title">REGISTRO DE MISIONES</h1>
        
        <div class="project-list">
            <!-- Lain Page -->
            <div class="project-item" data-id="lain_page">
                <h3 style="margin-bottom: 5px;">> Lain Page</h3>
                <p style="font-size: 0.9em; opacity: 0.7;">Página que simula un escritorio inspirada en "Serial experiments Lain"</p>
            </div>
            
            <!-- Wired Guestbook -->
            <div class="project-item" data-id="wired">
                <h3 style="margin-bottom: 5px;">> The Wired Guestbook</h3>
                <p style="font-size: 0.9em; opacity: 0.7;">Aplicación de mensajería asíncrona ("Guestbook") inspirada 
en la estética de "Serial Experiments Lain" y el concepto de "The Wired".</p>
            </div>

            <!-- Retinopatía -->
            <div class="project-item" data-id="retinopatia">
                <h3 style="margin-bottom: 5px;">> Detección de Retinopatía Diabética con Algoritmos Genéticos</h3>
                <p style="font-size: 0.9em; opacity: 0.7;">Proyecto que explora y compara el rendimiento de diferentes algoritmos de clasificación aplicados al dataset "messidor_features.arff".</p>
            </div>
        </div>
    </main>

    <!-- Panel Derecho: Detalle (Preview) -->
    <aside class="status-panel" style="flex: 1; display: flex; flex-direction: column; gap: 20px;">
        <!-- Zona Azul: Captura -->
        <div id="project-param-image" style="
            width: 100%; 
            height: auto; 
            min-height: 200px;
            background-color: rgba(0,0,0,0.2); 
            border: 1px solid var(--border-color);
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;">
            <span style="opacity: 0.5;">[ SIN IMAGEN ]</span>
        </div>

        <!-- Zona Roja: Descripción -->
        <div class="project-description" style="flex: 1;">
            <div class="status-header">DETALLES DE MISIÓN</div>
            <div id="project-param-desc">
                <p>Seleccione un archivo de misión para ver los detalles.</p>
            </div>
        </div>
    </aside>
</div>
`;

function init() {
    const projectItems = document.querySelectorAll('.project-item');

    function previewProject(id) {
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
    }

    function selectProject(e) {
        const item = e.currentTarget;
        const id = item.getAttribute('data-id');

        previewProject(id);

        // Resetear clase activa
        projectItems.forEach(b => b.classList.remove('active-project'));
        // Activar seleccionado
        item.classList.add('active-project');
    }

    // Bind events
    projectItems.forEach(item => {
        item.addEventListener('click', selectProject);
        item.addEventListener('mouseover', (e) => previewProject(e.currentTarget.getAttribute('data-id')));
    });

    // Cleanup function
    return () => {
        projectItems.forEach(item => {
            item.removeEventListener('click', selectProject);
            // Mouseover cleanup usually not strictly necessary if elements are removed, but good practice
        });
    };
}

export default { html, init };
