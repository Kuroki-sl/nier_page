const routes = {
    '/': 'home',
    '/about': 'about',
    '/projects': 'projects',
    '/games': 'games',
    '/music': 'music',
    '/contact': 'contact'
};

import { uiSounds } from './audio.js';

const viewCache = {};

async function loadView(viewName) {
    if (viewCache[viewName]) return viewCache[viewName];

    try {
        const module = await import(`./views/${viewName}.js`);
        viewCache[viewName] = module.default;
        return module.default;
    } catch (e) {
        console.error(`Error cargando vista ${viewName}:`, e);
        return `<div class="error-panel">ERROR: DATOS CORRUPTOS [Vista no encontrada]</div>`;
    }
}

async function navigate(path) {
    //Manejo de ruta
    const route = path === '/' ? '/' : path.replace(/\/$/, ""); //Normalizar
    const viewName = routes[route] || '404';

    //Actualizar URL
    window.history.pushState({}, "", path);

    //Renderizar Vista
    await render(viewName);

    //Actualizar Navegacion Activa
    updateActiveLink(path);
}

async function render(viewName) {
    const appView = document.getElementById('app-view');

    //Efecto de transicion
    appView.style.opacity = '0';
    appView.style.transform = 'translateX(-10px)';

    const content = await loadView(viewName);

    setTimeout(() => {
        appView.innerHTML = content;

        if (window.initViewScripts) window.initViewScripts(viewName);

        //Efecto de entrada
        appView.style.opacity = '1';
        appView.style.transform = 'translateX(0)';

        //Reproducir sonido de cambio de UI
        if (window.playUiSound) window.playUiSound('move');

    }, 200);
}

function updateActiveLink(path) {
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === path) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', e => {
        if (e.target.matches('a.nav-link') || e.target.closest('a.nav-link')) {
            e.preventDefault();
            const link = e.target.matches('a.nav-link') ? e.target : e.target.closest('a.nav-link');
            navigate(link.getAttribute('href'));
        }
    });

    window.addEventListener('popstate', () => {
        navigate(window.location.pathname);
    });
    document.body.addEventListener('mouseover', e => {
        if (e.target.matches('a, button, .menu-item')) {
            uiSounds.hover();
        }
    });

    navigate(window.location.pathname);
});
