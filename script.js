function calculateNEWS() {
    let totalScore = 0;
    
    totalScore += parseInt(document.getElementById("respiratoryRate").value);
    totalScore += parseInt(document.getElementById("breathingEffort").value);
    totalScore += parseInt(document.getElementById("temperature").value);
    totalScore += parseInt(document.getElementById("heartRate").value);
    totalScore += parseInt(document.getElementById("skinColor").value);
    totalScore += parseInt(document.getElementById("behavior").value);
    totalScore += parseInt(document.getElementById("parentConcern").value);
    
    let riskFactor = document.getElementById("riskFactor").value;
    if (riskFactor === "yes") {
        totalScore += parseInt(document.getElementById("oxygenSaturation").value);
        totalScore += parseInt(document.getElementById("bloodSugar").value);
        totalScore += parseInt(document.getElementById("lactate").value);
        totalScore += parseInt(document.getElementById("scalp").value);
    }
    
    let interpretation = "";
    if (totalScore === 1) {
        interpretation = "Ulang pemeriksaan 1 jam berikutnya. Jika tidak berubah, maka diskusikan dengan dokter anak.";
    } else if (totalScore === 2) {
        interpretation = "Perlu pemeriksaan oleh dokter anak dalam 30 menit.";
    } else if (totalScore >= 3) {
        interpretation = "Perlu pemeriksaan segera oleh dokter anak.";
    } else {
        interpretation = "Tidak ada tindakan khusus yang diperlukan.";
    }
    
    document.getElementById("result").innerHTML = `Total Skor: ${totalScore} <br> Interpretasi: ${interpretation}`;
}
