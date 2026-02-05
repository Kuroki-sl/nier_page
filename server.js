const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

//Archivos estaticos
app.use(express.static(path.join(__dirname)));

app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.use((req, res) => {
    res.status(404).send('<h1 style="font-family: monospace; color: #333;">ERROR: DATOS CORRUPTOS (404)</h1>');
});

app.listen(PORT, () => {
    console.log(`\n--- POD DE COMUNICACIÓN ACTIVO ---`);
    console.log(`Acceso: http://localhost:${PORT}`);
});