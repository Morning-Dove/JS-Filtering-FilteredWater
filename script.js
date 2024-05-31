// Change current water condition here:
const waterInput = ["salt", "dirt", "calcite", "uranium", "rubber"];

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("waterContaminates").textContent = `Current water condition: ${waterInput.join(", ")}`;
});


function filterWater(){
    let filterOutStr = prompt("What would you like to filter out of your water? Please write it in the box below seperated by commas. ");
    let filterOut = filterOutStr.split(",").map(item => item.trim());
    const filteredWater = waterInput.filter(item => !filterOut.includes(item));
    
    console.log(filteredWater);
    console.log(filterOut);
    document.getElementById("result").textContent = `Results after water filtration: ${filteredWater.join(", ")}`;
    return filteredWater;
    }
