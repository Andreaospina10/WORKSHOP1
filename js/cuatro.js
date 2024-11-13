function convertirMoneda() {
    const monto = parseFloat(document.getElementById('monto').value);
    const moneda = document.getElementById('moneda').value;
  
    if (isNaN(monto) || monto <= 0) {
      alert("Por favor, ingresa un monto válido.");
      return;
    }
  
    let tasaDeCambio;
    
    if (moneda === "eur") {
      tasaDeCambio = 0.92; 
    } else if (moneda === "mxn") {
      tasaDeCambio = 18.0; 
    }
  
    const resultado = monto * tasaDeCambio;
    document.getElementById('resultado').textContent = `Resultado: ${resultado.toFixed(2)} ${moneda === "eur" ? "EUR" : "MXN"}`;
  }