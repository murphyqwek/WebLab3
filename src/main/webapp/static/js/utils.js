function getCanvasCoords(xClick, yClick, r) {
    let xPlot = (xClick - centerX )* r / rLength;
    let yPlot = -(yClick - centerY) * r / rLength;

    return { x: xPlot, y: yPlot};
}

function getR() {
    const selectedRadio = document.querySelector('input[type="radio"][name*="rRadio"]:checked');
    return selectedRadio ? parseFloat(selectedRadio.value) : 1;
}

function showError(message) {
    PrimeFaces.showMessageInDialog({
        severity: 'error',
        summary: 'Ошибка!',
        detail: message
    });
}