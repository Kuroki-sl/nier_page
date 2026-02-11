import { musicDB } from '../data/music.js';

const html = `
<div class="content-wrapper">
    <main class="main-panel">
        <h1 class="section-title">SONIDO</h1>
        
        <div class="content-panel active-panel" style="display: block;">
            <div class="status-header">REGISTROS DE AUDIO</div>
            <p style="margin-bottom: 20px; opacity: 0.8;">
                Seleccione una frecuencia para iniciar la reproducción.
            </p>

            <div id="music-list" class="music-list">
                <!-- Se llena dinámicamente -->
            </div>
        </div>
    </main>

    <aside class="status-panel">
        <div class="status-header">REPRODUCTOR</div>
        
        <div id="player-container" class="player-container crt-effect">
            <!-- Visualizador por defecto -->
            <div class="music-visualizer-container">
                <div class="visualizer-bar"></div>
                <div class="visualizer-bar" style="animation-delay: 0.1s"></div>
                <div class="visualizer-bar" style="animation-delay: 0.2s"></div>
                <div class="visualizer-bar" style="animation-delay: 0.3s"></div>
                <div class="visualizer-bar" style="animation-delay: 0.1s"></div>
                 <div class="visualizer-bar" style="animation-delay: 0.4s"></div>
                <div class="visualizer-bar" style="animation-delay: 0.2s"></div>
                <div class="visualizer-bar" style="animation-delay: 0.5s"></div>
            </div>
            <div style="text-align: center; padding: 20px; opacity: 0.5;">
                [ESPERANDO ENTRADA]
            </div>
        </div>
        
        <div class="status-header" style="margin-top: 30px;">DETALLES</div>
        <div id="music-details">
            <p style="opacity: 0.5; text-align: center; margin-top: 20px;">
                Seleccione una pista.
            </p>
        </div>
    </aside>
</div>
`;

function init() {
    const listContainer = document.getElementById('music-list');
    const detailsContainer = document.getElementById('music-details');
    const playerContainer = document.getElementById('player-container');

    if (!listContainer) return;

    function playTrack(track) {
        // Actualizar Info
        if (detailsContainer) {
            detailsContainer.innerHTML = `
                <p><strong>TÍTULO:</strong> ${track.title}</p>
                <p><strong>ARTISTA:</strong> ${track.artist}</p>
                <p><strong>TIPO:</strong> ${track.type.toUpperCase()}</p>
                <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 10px 0;">
                <p style="font-size: 0.9em;">"${track.desc}"</p>
            `;
        }

        // Actualizar Player
        if (playerContainer && track.youtubeId) {
            let embedUrl = '';
            if (track.type === 'playlist') {
                embedUrl = `https://www.youtube.com/embed/videoseries?list=${track.youtubeId}&autoplay=1`;
            } else {
                embedUrl = `https://www.youtube.com/embed/${track.youtubeId}?autoplay=1`;
            }

            playerContainer.innerHTML = `
                <div class="player-wrapper">
                    <iframe 
                        src="${embedUrl}" 
                        title="YouTube video player" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>
            `;
        }
    }

    let htmlContent = '';
    musicDB.forEach(track => {
        const icon = track.type === 'playlist' ? '≡' : '♪';

        // Removemos el <a> href para que sea un botón de acción interna
        htmlContent += `
            <div class="menu-item music-item" data-id="${track.id}">
                <div class="music-info">
                    <span class="music-icon">${icon}</span>
                    <span class="music-title">${track.title}</span>
                </div>
                <span class="music-artist">${track.artist}</span>
            </div>
        `;
    });

    listContainer.innerHTML = htmlContent;

    const newItems = listContainer.querySelectorAll('.music-item');
    newItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            if (window.playUiSound) window.playUiSound('hover');
        });

        item.addEventListener('click', () => {
            if (window.playUiSound) window.playUiSound('click');

            // Marcar activo
            newItems.forEach(i => i.style.backgroundColor = 'transparent');
            newItems.forEach(i => i.classList.remove('active-sub')); // Reuse active style if possible or custom

            item.style.backgroundColor = 'rgba(75, 75, 75, 0.2)';

            const id = item.dataset.id;
            const track = musicDB.find(t => t.id === id);
            if (track) playTrack(track);
        });
    });

    return () => {
    };
}

export default { html, init };
