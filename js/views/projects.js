export default `
<div class="content-wrapper">
    <!-- Panel Izquierdo: Lista de Proyectos -->
    <main class="main-panel" style="flex: 1.5;">
        <h1 class="section-title">REGISTRO DE MISIONES</h1>
        
        <div class="project-list">
            <!-- Proyecto 1 -->
            <div class="project-item" 
                 onclick="selectProject('lain_page')"
                 onmouseover="previewProject('lain_page')">
                <h3 style="margin-bottom: 5px;">> Lain Page</h3>
                <p style="font-size: 0.9em; opacity: 0.7;">Página que simula un escritorio inspirada en "Serial experiments Lain"</p>
            </div>
            
            <!-- Proyecto 2 -->
            <div class="project-item" 
                 onclick="selectProject('wired')"
                 onmouseover="previewProject('wired')">
                <h3 style="margin-bottom: 5px;">> The Wired Guestbook</h3>
                <p style="font-size: 0.9em; opacity: 0.7;">Aplicación de mensajería asíncrona ("Guestbook") inspirada 
en la estética de "Serial Experiments Lain" y el concepto de "The Wired".</p>
            </div>

            <!-- Proyecto 3 -->
            <div class="project-item" 
                 onclick="selectProject('retinopatia')"
                 onmouseover="previewProject('retinopatia')">
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
