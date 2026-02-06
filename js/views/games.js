import { gamesDB } from '../data/games.js';

const html = `
<div class="content-wrapper game-wrapper">
    <!-- Panel 1: Categorías -->
    <aside class="game-categories-panel content-panel-transparent">
        <div class="status-header inverse-header">CATEGORÍAS</div>
        <div class="game-categories">
            <button class="menu-btn category-btn active-sub" data-category="favoritos">Favoritos</button>
            <button class="menu-btn category-btn" data-category="sandbox">Sandbox</button>
            <button class="menu-btn category-btn" data-category="gachas">Gachas</button>
            <button class="menu-btn category-btn" data-category="miscelaneos">Misceláneos</button>
        </div>
    </aside>

    <!-- Panel 2: Lista de Juegos -->
    <main class="game-list-panel">
        <div class="status-header inverse-header">JUEGOS</div>
        <div id="game-list" class="game-list">
            <!-- Se llena dinámicamente -->
            <div class="empty-state">Selecciona una categoría...</div>
        </div>
    </main>

    <!-- Panel 3: Detalles -->
    <aside class="game-details-panel content-panel-transparent">
        <!-- Imagen -->
        <div id="game-preview-image" class="game-preview-container">
            <span class="placeholder-text">[ VISTA PREVIA ]</span>
        </div>

        <!-- Descripción -->
        <div class="status-header inverse-header">DETALLES</div>
        <div id="game-preview-desc" class="game-description-area">
            <p>Selecciona un juego para ver su información.</p>
        </div>
    </aside>
</div>
`;

function init() {
    const categoryBtns = document.querySelectorAll('.category-btn');
    const listContainer = document.getElementById('game-list');

    function selectGame(id, desc) {
        // Actualizar imagen grande
        const container = document.getElementById('game-preview-image');
        if (container) {
            const capturePath = `assets/games/${id}_capture.png`;
            // Usamos una imagen con onerror manejado inline por simplicidad en el HTML inyectado, 
            // aunque idealmente usaríamos un handler también.
            container.innerHTML = `
                <img src="${capturePath}" class="preview-img"
                onerror="this.style.display='none'; this.parentElement.innerHTML='<span class=\\'placeholder-text\\'>[ SIN CAPTURA ]</span>'">
            `;
        }

        // Actualizar descripción
        const descEl = document.getElementById('game-preview-desc');
        if (descEl) {
            descEl.innerHTML = `<p>${desc}</p>`;
        }
    }

    function renderGameList(category) {
        const games = gamesDB[category];

        if (!games) {
            listContainer.innerHTML = '<div class="empty-state">No hay datos.</div>';
            return;
        }

        let htmlContent = '';
        games.forEach(game => {
            const iconPath = `assets/games/${game.id}_icon.png`;
            // SVG fallback en base64 para evitar peticiones externas si falla
            const fallbackIcon = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iIzQ0NCIgZD0iTTEyIDJMMiAxMmwxMCAxMCAxMC0xMEwxMiAyeiIvPjwvc3ZnPg==';

            htmlContent += `
                <div class="game-item" data-id="${game.id}" data-desc="${game.desc}">
                    <div class="game-icon-container">
                         <img src="${iconPath}" class="game-icon" onerror="this.src='${fallbackIcon}'">
                    </div>
                    <span class="game-name">${game.name}</span>
                </div>
            `;
        });
        listContainer.innerHTML = htmlContent;

        // Bind click events for new items
        const newItems = listContainer.querySelectorAll('.game-item');
        newItems.forEach(item => {
            item.addEventListener('click', () => {
                selectGame(item.dataset.id, item.dataset.desc);
            });
            // Efecto hover simple vía JS si CSS no es suficiente o para efectos de sonido
            item.addEventListener('mouseenter', () => {
                if (window.playUiSound) window.playUiSound('hover');
            });
        });
    }

    function handleCategoryClick(e) {
        const btn = e.currentTarget;
        const category = btn.dataset.category;

        // UI Update
        categoryBtns.forEach(b => b.classList.remove('active-sub'));
        btn.classList.add('active-sub');

        renderGameList(category);
    }

    // Initial Render
    // Check if there is an active category or default to favorities
    const defaultCategory = 'favoritos';
    renderGameList(defaultCategory);

    // Bind Events
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', handleCategoryClick);
    });

    return () => {
        categoryBtns.forEach(btn => btn.removeEventListener('click', handleCategoryClick));
    };
}

export default { html, init };