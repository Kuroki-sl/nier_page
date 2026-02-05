export default `
<div class="content-wrapper">
    <main class="main-panel">
        <h1 class="section-title">INICIO</h1>
        
        <div class="content-panel active-panel" style="display: block;">
            <p style="font-size: 1.2rem; margin-bottom: 15px;">
                ESTADO DEL SISTEMA: OPERATIVO.
            </p>
            <p>
                Bienvenido a la interfaz de registro personal. 
                Navegue por las pestañas superiores para acceder a la información de la unidad, 
                registros de misiones (proyectos), y archivos de datos (gustos personales).
            </p>
            <br>
            <p style="text-align: center; opacity: 0.7;">
                GLORY TO MANKIND.
            </p>
        </div>
    </main>

    <aside class="status-panel">
        <!-- El panel de estado lateral se mantendrá estático en index.html, 
             pero si queremos cambiar su contenido por vista, aquí iría.
             Por ahora, dejamos el espacio o usamos el global. -->
        <div class="status-header">Notificaciones</div>
        <div style="opacity: 0.7; font-size: 0.9em;">
            <p>> No hay mensajes nuevos.</p>
            <p>> Escaneo de red: Completo.</p>
        </div>
    </aside>
</div>
`;
