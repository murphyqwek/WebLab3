function setupRRadioListener() {
    const radioButtons = document.querySelectorAll('input[type="radio"][name*="rRadio"]');

    radioButtons.forEach(radio => {
        radio.addEventListener('change', function() {
            const r = parseInt(this.value);

            drawGraph(r);
        });
    });

    const selectedRadio = document.querySelector('input[type="radio"][name*="rRadio"]:checked');
    if (selectedRadio) {
        if (window.updateGraphWithR) {
            updateGraphWithR(parseFloat(selectedRadio.value));
        }
    }
}

function updateGraphWithR(r) {
    drawGraph(r);
}

document.addEventListener('DOMContentLoaded', function() {
    setupRRadioListener();
});

if (window.PrimeFaces) {
    PrimeFaces.onAjaxUpdate(function() {
        setTimeout(setupRRadioListener, 50);
    });
}