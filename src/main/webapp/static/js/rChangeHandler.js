(function () {
    'use strict';

    function handleRadioChange(event) {
        const target = event.target;
        if (target.matches && target.matches('input[type="radio"][name$="rRadio"]')) {
            const r = parseFloat(target.value);
            if (!isNaN(r)) {
                drawGraph(r);
                drawPoints();
            }
        }
    }

    function initGraphFromSelectedRadio() {
        const selected = document.querySelector('input[type="radio"][name$="rRadio"]:checked');
        if (selected) {
            const r = parseFloat(selected.value);
            if (!isNaN(r)) {
                drawGraph(r);
                drawPoints();
            }
        }
    }

    document.addEventListener('change', handleRadioChange, false);

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initGraphFromSelectedRadio);
    } else {
        initGraphFromSelectedRadio();
    }

    // Поддержка AJAX в PrimeFaces
    if (typeof window.PrimeFaces !== 'undefined') {
        PrimeFaces.addCallback('onAjaxComplete', initGraphFromSelectedRadio);
    }
})();