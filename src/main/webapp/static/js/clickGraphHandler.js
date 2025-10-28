canvas.addEventListener('click', function (e) {
    const canvasRect = canvas.getBoundingClientRect();
    const xClick = e.clientX - canvasRect.left;
    const yClick = e.clientY - canvasRect.top;

    var r = getR();

    var { x, y } = getCanvasCoords(xClick, yClick, r);

    x = x.toFixed(0);
    y = y.toFixed(3);

    const resultX = checkX(x.toString());
    const resultY = checkY(y.toString());

    if(!resultX.isValid) {
        showError(resultX.message);
        return;
    }

    if(!resultY.isValid) {
        showError(resultY.message);
        return;
    }

    setFormValues(x, y);

    submitForm();
});

function setFormValues(x, y) {
    const xHiddenInput = document.querySelector('[id*="xValue"]');
    if (xHiddenInput) {
        xHiddenInput.value = x;
        xHiddenInput.dispatchEvent(new Event('change', { bubbles: true }));
    }

    const yInput = document.querySelector('[id*="yInput"]');
    if (yInput) {
        yInput.value = y;
        yInput.dispatchEvent(new Event('input', { bubbles: true }));
    }
}

function submitForm() {
    const form = document.querySelector('form');
    if (form) {
        const submitEvent = new Event('submit', {
            bubbles: true,
            cancelable: true
        });

        if (form.dispatchEvent(submitEvent)) {
            form.submit();
        }
    }
}