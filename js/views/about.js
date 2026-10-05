const html = `
<div class="content-wrapper">
    <main class="main-panel" style="display: flex; gap: 20px;">
        <div style="flex: 1;">
            <h1 class="section-title">DATOS</h1>
            <ul class="vertical-menu">
                <li class="menu-item">
                    <button class="menu-btn active-sub" data-target="presentation">
                        Presentación
                    </button>
                </li>
                <li class="menu-item">
                    <button class="menu-btn" data-target="tools">
                        Herramientas
                    </button>
                </li>
                <li class="menu-item">
                    <button class="menu-btn" data-target="apps">
                        Aplicaciones
                    </button>
                </li>
                <li class="menu-item">
                    <button class="menu-btn" data-target="workspace">
                        Espacio de Trabajo
                    </button>
                </li>
            </ul>
        </div>

        <div style="flex: 2;">
            <div id="presentation" class="content-panel active-panel">
                <div class="status-header">Presentación</div>
                <p>
                    Mi formación en Ingeniería Civil Informática me ha dado las herramientas para entender y construir el motor de las aplicaciones. Hoy, cursando mi penúltimo semestre, busco llevar esa base técnica desde los entornos locales universitarios hacia el mundo laboral real.
                </p>
                <br>
                <p>
                    He centrado mi aprendizaje en dominar el ecosistema backend. Mi experiencia abarca desde la programación con lenguajes como Python, C++ y C#, hasta la estructuración de bases de datos relacionales mediante Oracle SQL. Le doy el valor que merece al ciclo de vida del software, asegurando que cada proyecto no solo funcione de manera robusta, sino que esté respaldado por una evaluación técnica exhaustiva y buenas prácticas de desarrollo.
                </p>
                <br>
                <p>
                    Actualmente, estoy buscando realizar mi práctica profesional entre los meses de diciembre y marzo. Busco sumarme a un área de desarrollo de software que me imponga nuevos desafíos, permitiéndome sumar valor al equipo técnico mientras potencio mis habilidades en el mundo laboral.
                </p>
                <br>
                <p>
                    Me gusta Nier Automata y Epic The Musical.
                </p>
            </div>

            <div id="tools" class="content-panel">
                <div class="status-header">Módulos Instalados</div>
                
                <!-- Lenguajes -->
                <div class="skill-box">
                    <span class="skill-title">Lenguajes</span>
                    <i class="devicon-javascript-plain skill-icon" data-title="JavaScript"></i>
                    <i class="devicon-typescript-plain skill-icon" data-title="TypeScript"></i>
                    <i class="devicon-python-plain skill-icon" data-title="Python"></i>
                    <i class="devicon-c-plain skill-icon" data-title="C"></i>
                    <i class="devicon-cplusplus-plain skill-icon" data-title="C++"></i>
                    <i class="devicon-csharp-plain skill-icon" data-title="C#"></i>
                    <i class="devicon-php-plain skill-icon" data-title="PHP"></i>
                    <i class="devicon-html5-plain skill-icon" data-title="HTML5"></i>
                    <i class="devicon-css3-plain skill-icon" data-title="CSS3"></i>
                </div>

                <!-- Frameworks & Libs -->
                <div class="skill-box">
                    <span class="skill-title">Frameworks / Libs</span>
                    <i class="devicon-nodejs-plain-wordmark skill-icon" data-title="Node.js"></i>
                    <i class="devicon-pandas-plain skill-icon" data-title="Pandas"></i>
                    <i class="devicon-numpy-plain skill-icon" data-title="Numpy"></i>
                    <i class="devicon-express-original skill-icon" data-title="Express"></i>
                </div>

                <!-- Bases de Datos -->
                <div class="skill-box">
                    <span class="skill-title">Bases de Datos</span>
                    <i class="devicon-oracle-original skill-icon" data-title="Oracle SQL"></i>
                    <i class="devicon-mysql-plain-wordmark skill-icon" data-title="MySQL"></i>
                    <i class="devicon-mongodb-plain-wordmark skill-icon" data-title="MongoDB"></i>
                    <i class="devicon-sqlite-plain skill-icon" data-title="SQLite"></i>
                </div>

                <!-- Herramientas -->
                <div class="skill-box">
                    <span class="skill-title">Herramientas</span>
                    <i class="devicon-git-plain skill-icon" data-title="Git"></i>
                    <i class="devicon-vscode-plain skill-icon" data-title="VS Code"></i>
                    <i class="devicon-postman-plain skill-icon" data-title="Postman"></i>
                    <div class="skill-icon" data-title="Power BI" style="display: flex; align-items: center; justify-content: center; width: 1em; height: 1em;">
                        <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
                            <rect x="3" y="12" width="4.5" height="10" rx="1.2"/>
                            <rect x="9.75" y="7" width="4.5" height="15" rx="1.2"/>
                            <rect x="16.5" y="2" width="4.5" height="20" rx="1.2"/>
                        </svg>
                    </div>
                    <i class="devicon-jupyter-plain skill-icon" data-title="Jupyter"></i>
                    <div class="skill-icon" data-title="Antigravity" style="display: flex; align-items: center; justify-content: center;">
                        <div style="
                            width: 1em; 
                            height: 1em; 
                            background-color: currentColor; 
                            -webkit-mask-image: url(antigravity.webp); 
                            mask-image: url(antigravity.webp); 
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
                <p>Procesador : Ryzen 5 7500f 3,7GHz.</p>
                <p>Tarjeta Gráfica : RX 7600 8GB.</p>
                <p>Memoria RAM : 32GB DDR5 5200MHz.</p>
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

function init() {
    const buttons = document.querySelectorAll('.menu-btn');
    const panels = document.querySelectorAll('.content-panel');

    function showPanel(e) {
        const btn = e.currentTarget;
        const targetId = btn.getAttribute('data-target');

        // Reset UI
        panels.forEach(p => p.classList.remove('active-panel'));
        buttons.forEach(b => b.classList.remove('active-sub'));

        // Activate
        const targetPanel = document.getElementById(targetId);
        if (targetPanel) {
            targetPanel.classList.add('active-panel');
        }
        btn.classList.add('active-sub');
    }

    buttons.forEach(btn => {
        btn.addEventListener('click', showPanel);
    });

    return () => {
        buttons.forEach(btn => btn.removeEventListener('click', showPanel));
    };
}

export default { html, init };
