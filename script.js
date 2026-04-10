function calculate() {
    let r = document.getElementById("radius").value;

    if (r === "" || r <= 0) {
        document.getElementById("area").innerText = "--";
        document.getElementById("volume").innerText = "--";
        return;
    }

    let radius = parseFloat(r);

    let area = Math.PI * radius * radius;
    let volume = (4/3) * Math.PI * Math.pow(radius, 3);

    document.getElementById("area").innerText =
        area.toFixed(2);

    document.getElementById("volume").innerText =
        volume.toFixed(2);
}

function toggleTheme() {
    document.body.classList.toggle("light");
}
