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
        // Soporte para ambos formatos: string simple (legacy) o objeto { html, init } (nuevo)
        const viewData = typeof module.default === 'string'
            ? { html: module.default, init: null }
            : module.default;

        viewCache[viewName] = viewData;
        return viewData;
    } catch (e) {
        console.error(`Error cargando vista ${viewName}:`, e);
        return {
            html: `<div class="error-panel">ERROR: DATOS CORRUPTOS [Vista no encontrada]</div>`,
            init: null
        };
    }
}

async function navigate(path) {
    const route = path === '/' ? '/' : path.replace(/\/$/, "");
    const viewName = routes[route] || '404';

    window.history.pushState({}, "", path);
    await render(viewName);
    updateActiveLink(path);
}

// Variable para almacenar la función de limpieza de la vista actual
let currentCleanup = null;

async function render(viewName) {
    const appView = document.getElementById('app-view');

    appView.style.opacity = '0';
    appView.style.transform = 'translateX(-10px)';

    // Ejecutar limpieza de la vista anterior si existe
    if (currentCleanup && typeof currentCleanup === 'function') {
        currentCleanup();
        currentCleanup = null;
    }

    const view = await loadView(viewName);

    setTimeout(() => {
        appView.innerHTML = view.html;

        // Inicializar lógica de la nueva vista
        if (view.init && typeof view.init === 'function') {
            currentCleanup = view.init();
        } else if (window.initViewScripts) {
            // Fallback para lógica global antigua
            window.initViewScripts(viewName);
        }

        appView.style.opacity = '1';
        appView.style.transform = 'translateX(0)';

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
