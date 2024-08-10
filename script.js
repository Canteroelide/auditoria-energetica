document.getElementById('energyAuditForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const floorSize = document.getElementById('floorSize').value;
    const numPeople = document.getElementById('numPeople').value;
    const appliances = Array.from(document.getElementById('appliances').selectedOptions).map(option => option.value);

    let consumption = calculateConsumption(floorSize, numPeople, appliances);
    displayResults(consumption);
});

function calculateConsumption(floorSize, numPeople, appliances) {
    let baseConsumption = floorSize * numPeople * 5; 
    let applianceConsumption = appliances.length * 100;

    let totalConsumption = baseConsumption + applianceConsumption;
    let cost = totalConsumption * 0.12; // Asumiendo $0.12 por kWh

    return { totalConsumption, cost };
}

function displayResults(data) {
    document.getElementById('results').innerHTML = `
        <h3>Consumo Energético Estimado: ${data.totalConsumption} kWh/año</h3>
        <h4>Costo Estimado: $${data.cost.toFixed(2)} al año</h4>
    `;
}
