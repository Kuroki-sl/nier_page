export default `
<div class="content-wrapper">
    <main class="main-panel" style="display: flex; gap: 20px;">
        <div style="flex: 1;">
            <h1 class="section-title">DATOS</h1>
            <ul class="vertical-menu">
                <li class="menu-item">
                    <button class="menu-btn active-sub" onclick="showPanel('presentation', this)">
                        Presentación
                    </button>
                </li>
                <li class="menu-item">
                    <button class="menu-btn" onclick="showPanel('tools', this)">
                        Herramientas
                    </button>
                </li>
                <li class="menu-item">
                    <button class="menu-btn" onclick="showPanel('apps', this)">
                        Aplicaciones
                    </button>
                </li>
                <li class="menu-item">
                    <button class="menu-btn" onclick="showPanel('workspace', this)">
                        Espacio de Trabajo
                    </button>
                </li>
            </ul>
        </div>

        <div style="flex: 2;">
            <div id="presentation" class="content-panel active-panel">
                <div class="status-header">Presentación</div>
                <p>
                    Hola, no se que poner aqui :p
                </p>
                <p>
                    Me gusta Nier Automata y Epic The Musical.
                </p>
            </div>

            <div id="tools" class="content-panel">
                <div class="status-header">Módulos Instalados</div>
                <p>Lista de lenguajes y tecnologías.</p>
            </div>

            <div id="apps" class="content-panel">
                <div class="status-header">Aplicaciones</div>
                <p>Lista de aplicaciones.</p>
            </div>

            <div id="workspace" class="content-panel">
                <div class="status-header">Entorno Físico</div>
                <p>Descripción y foto del setup.</p>
            </div>
        </div>
    </main>

    <aside class="status-panel">
        <div class="status-header">Estado de Unidad</div>
        <div class="status-row">
            <span class="status-label">Clase:</span>
            <span class="status-value">Desarrollador</span>
        </div>
        <div class="status-row">
            <span class="status-label">Estado:</span>
            <span class="status-value">Estable</span>
        </div>
    </aside>
</div>
`;
