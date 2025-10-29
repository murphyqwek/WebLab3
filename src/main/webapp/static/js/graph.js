const canvas = document.getElementById('graph');
const ctx = canvas.getContext('2d');

canvas.width = 400;
canvas.height = 400;

const centerX = canvas.width / 2; //Координата X центра системы координат относительно полотна
const centerY = canvas.height / 2; //Координата Y центра системы координат относительно полотна

const graphOffset = 20; //Отсуп системы координата от полонта

const rScaleWidth = 5; //Длина засечки значений +-R и +- R/2
const lineWidth = 2;

const graphWidth = canvas.width / 2 - graphOffset; //Длина осей
const rLength = graphWidth - 20; //Отсуп от центра координат для значений R


function drawGraph(r) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    setTextSettings();

    drawFigures();

    drawAxes();
    drawAxesLabels();

    drawRScale();
    drawRLables(r);
}

function drawFigures() {
    ctx.fillStyle = 'rgba(0, 100, 255, 0.5)';
    drawRect();
    drawTriangle();
    drawQuartercircle();
    ctx.fillStyle = '#000';
}

function drawRect() {
    ctx.beginPath();
    ctx.rect(centerX + rLength, centerY + rLength, -rLength, -rLength)
    ctx.fill();
}

function drawTriangle() {
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX, centerY - rLength);
    ctx.lineTo(centerX - rLength / 2, centerY);
    ctx.fill();
}

function drawQuartercircle() {
    ctx.beginPath();
    ctx.arc(centerX, centerY, rLength, Math.PI/2, Math.PI, false);
    ctx.lineTo(centerX, centerY);
    ctx.fill();
}

function drawRLine(x, y, up) {
    ctx.beginPath();
    if (up) {
        ctx.moveTo(x + rScaleWidth, y);
        ctx.lineTo(x - rScaleWidth, y);
    }
    else {
        ctx.moveTo(x, y + rScaleWidth);
        ctx.lineTo(x, y - rScaleWidth);
    }
    ctx.stroke();
}



function drawRScale() {
    ctx.strokeStyle = '#000';
    ctx.lineWidth = lineWidth;

    ctx.beginPath();
    drawRLine(centerX - rLength, centerY, false);
    drawRLine(centerX + rLength, centerY, false);


    drawRLine(centerX, centerY - rLength, true);
    drawRLine(centerX, centerY + rLength, true);


    drawRLine(centerX - rLength / 2, centerY, false);
    drawRLine(centerX + rLength / 2, centerY, false);


    drawRLine(centerX, centerY - rLength / 2, true);
    drawRLine(centerX, centerY + rLength / 2, true);

    ctx.stroke();
}

function drawRLables(r) {
    ctx.fillText('-' + r, centerX - graphWidth + 20, centerY + rScaleWidth * 3);
    ctx.fillText(r.toString(), centerX + rLength, centerY + rScaleWidth * 3);

    ctx.fillText(r.toString(), centerX + rScaleWidth * 3, centerY - graphWidth + 20);
    ctx.fillText('-' + r, centerX + rScaleWidth * 3, centerY + rLength);

    ctx.fillText('-' + (r/2), centerX - rLength / 2, centerY + rScaleWidth * 3);
    ctx.fillText((r/2).toString(), centerX + rLength / 2, centerY + rScaleWidth * 3);

    ctx.fillText((r/2).toString(), centerX + rScaleWidth * 4, centerY - rLength / 2);
    ctx.fillText('-' + (r/2), centerX + rScaleWidth * 4, centerY + rLength / 2);
}

function setTextSettings() {
    ctx.strokeStyle = '#ccc';
    ctx.lineWidth = lineWidth;
    ctx.fillStyle = '#000';
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
}

function drawAxes() {
    ctx.strokeStyle = '#000';
    ctx.lineWidth = lineWidth;

    ctx.beginPath();
    ctx.moveTo(graphOffset, centerY);
    ctx.lineTo(canvas.width - graphOffset, centerY);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(centerX, canvas.height - graphOffset);
    ctx.lineTo(centerX, graphOffset);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(canvas.width - 10 - graphOffset, centerY - 5);
    ctx.lineTo(canvas.width - graphOffset, centerY);
    ctx.lineTo(canvas.width - 10 - graphOffset, centerY + 5);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(centerX - 5, 10 + graphOffset);
    ctx.lineTo(centerX, graphOffset);
    ctx.lineTo(centerX + 5, 10 + graphOffset);
    ctx.stroke();
}

function drawAxesLabels() {
    ctx.fillText('X', canvas.width - 10 - graphOffset, centerY - 15);
    ctx.fillText('Y', centerX + 15, 10 + graphOffset);
}

function getPointsFromTable() {
    const points = [];
    const rows = document.querySelectorAll('.results-table tbody tr:not(.no-data-row)');

    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        if (cells.length >= 3) {
            const r = parseFloat(cells[0].textContent.trim());
            const x = parseFloat(cells[1].textContent.trim());
            const y = parseFloat(cells[2].textContent.trim());
            const isHit = cells[2].textContent.trim() === "Да";

            // Проверяем, что значения числовые
            if (!isNaN(x) && !isNaN(y)) {
                points.push({ r, x, y, isHit });
            }
        }
    });

    return points;
}

function drawPoints() {
    const points = getPointsFromTable();
    let r = getR();

    points.forEach(point => {
        let x = point.x;
        let y = point.y;

        let graphX = x * rLength / r + centerX
        let graphY = -y * rLength / r + centerY;

        ctx.beginPath();
        ctx.arc(graphX, graphY, 4, 0, Math.PI * 2);
        ctx.fillStyle = point.isHit ? 'green' : 'red';
        ctx.fill();
        ctx.stroke();
    });
}

function getCanvasCoords(xClick, yClick, r) {
    let xPlot = (xClick - centerX )* r / rLength;
    let yPlot = -(yClick - centerY) * r / rLength;

    return { x: xPlot, y: yPlot};
}

drawGraph(1);

drawPoints();