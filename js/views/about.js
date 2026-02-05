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
                
                <!-- Languages -->
                <div class="skill-box">
                    <span class="skill-title">Lenguajes</span>
                    <i class="devicon-c-plain skill-icon" title="C"></i>
                    <i class="devicon-cplusplus-plain skill-icon" title="C++"></i>
                    <i class="devicon-csharp-plain skill-icon" title="C#"></i>
                    <i class="devicon-python-plain skill-icon" title="Python"></i>
                    <i class="devicon-javascript-plain skill-icon" title="JavaScript"></i>
                    <i class="devicon-mysql-plain skill-icon" title="SQL"></i>
                </div>

                <!-- Frameworks & Libs -->
                <div class="skill-box">
                    <span class="skill-title">Frameworks / Libs</span>
                    <i class="devicon-nodejs-plain-wordmark skill-icon" title="Node.js"></i>
                    <i class="devicon-pandas-plain skill-icon" title="Pandas"></i>
                    <i class="devicon-numpy-plain skill-icon" title="Numpy"></i>
                    <i class="devicon-express-original skill-icon" title="Express"></i>
                </div>

                <!-- Databases -->
                <div class="skill-box">
                    <span class="skill-title">Bases de Datos</span>
                    <i class="devicon-mysql-plain-wordmark skill-icon" title="MySQL"></i>
                    <i class="devicon-mongodb-plain-wordmark skill-icon" title="MongoDB"></i>
                    <i class="devicon-sqlite-plain skill-icon" title="SQLite"></i>
                </div>

                <!-- Tools -->
                <div class="skill-box">
                    <span class="skill-title">Herramientas</span>
                    <i class="devicon-git-plain skill-icon" title="Git"></i>
                    <i class="devicon-vscode-plain skill-icon" title="VS Code"></i>
                    <i class="devicon-jupyter-plain skill-icon" title="Jupyter"></i>
                    <div class="skill-icon" title="Antigravity" style="display: flex; align-items: center; justify-content: center;">
                        <div style="
                            width: 1em; 
                            height: 1em; 
                            background-color: currentColor; 
                            -webkit-mask-image: url(antigravity.png); 
                            mask-image: url(antigravity.png); 
                            -webkit-mask-size: contain; 
                            mask-size: contain; 
                            -webkit-mask-repeat: no-repeat; 
                            mask-repeat: no-repeat;
                            -webkit-mask-position: center; 
                            mask-position: center;">
                        </div>
                    </div>
                </div>
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
