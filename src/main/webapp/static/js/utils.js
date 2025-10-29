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