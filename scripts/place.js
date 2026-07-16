const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const lastMod = document.lastModified;
document.getElementById("lastModified").innerHTML = `Last Modification: ${lastMod}`;

function calculateWindChill(temperature, windSpeed){
    return 13.12 + (0.6215*temperature) - (11.37*Math.pow(windSpeed, 0.16)) + (0.395*temperature*Math.pow(windSpeed, 0.16));
}

window.addEventListener("DOMContentLoaded", () => {
    const temp = 10;
    const wind = 5;

    const chillElement = document.querySelector("#wind-chill");

    if (chillElement){
        
        if (temp <= 10 && wind > 4.8){

            const chillReal = calculateWindChill(temp, wind);

            chillElement.textContent = `${chillReal.toFixed(1)} °C`;
        }

        else{
            chillElement.textContent = "N/A";
        }
    }
});