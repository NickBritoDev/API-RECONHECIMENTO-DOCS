import os from 'os';

export function monitorarRecursos() {
    const cpuUsage = os.loadavg()[0]; // Uso médio da CPU nos últimos 1 minuto
    const memoriaTotal = os.totalmem();
    const memoriaUsada = memoriaTotal - os.freemem();
    const memoriaPercentual = (memoriaUsada / memoriaTotal) * 100;
    const storageTotal = os.totalmem();
    const storageUsado = storageTotal - os.freemem();
    const storagePercentual = (storageUsado / storageTotal) * 100;

    console.clear();
    console.table([
        {
            'CPU Usage (%)': cpuUsage.toFixed(2),
            'Memory Usage (MB)': `${(memoriaUsada / 1024).toFixed(2)} / ${(memoriaTotal / 1024).toFixed(2)}`,
            'Memory Usage (%)': memoriaPercentual.toFixed(2)
        }
    ]);
}

setInterval(monitorarRecursos, 1000);
