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

    //Activar el boton presionado
    if (btnElement) {
        btnElement.classList.add('active-sub');
    }
}