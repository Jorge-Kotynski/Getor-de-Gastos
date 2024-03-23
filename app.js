document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('gasto-form');
    const descripcionInput = document.getElementById('descripcion');
    const montoInput = document.getElementById('monto');
    const gastosList = document.getElementById('gastos');
    const totalAmountElement = document.getElementById('total-amount');

    let totalGasto = 0;

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const descripcion = descripcionInput.value;
        const monto = parseFloat(montoInput.value);

        if (descripcion.trim() === '' || isNaN(monto)) {
            alert('Por favor, ingresa una descripción y un monto válido.');
            return;
        }

        agregarGasto(descripcion, monto);
        form.reset();
    });

    function agregarGasto(descripcion, monto) {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${descripcion}</strong>: $${monto.toFixed(2)}`;
        gastosList.appendChild(li);

        totalGasto += monto;
        totalAmountElement.textContent = totalGasto.toFixed(2);
    }
});
