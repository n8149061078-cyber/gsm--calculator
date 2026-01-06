    function calculateGSM() {
        let weight = document.getElementById("weight").value;
        let length = document.getElementById("length").value;
        let width = document.getElementById("width").value;

        if (weight === "" || length === "" || width === "") {
            document.getElementById("result").innerText = "Please fill all fields";
            return;
        }

        let gsm = (weight * 10000) / (length * width);
        document.getElementById("result").innerText = 
            "GSM = " + gsm.toFixed(2);
    }