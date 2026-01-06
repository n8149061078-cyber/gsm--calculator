function calculateGSM() {
    let weight = document.getElementById("weight").value;
    let length = document.getElementById("length").value;
    let width = document.getElementById("width").value;
    let result = document.getElementById("result");

    if (!weight || !length || !width) {
        result.innerText = "Please fill all fields";
        result.classList.add("show");
        return;
    }

    let gsm = (weight * 10000) / (length * width);
    result.innerText = "GSM = " + gsm.toFixed(2);
    result.classList.add("show");
}
