function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById("inputTemp").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const resultElement = document.getElementById("result");
    
    if (fromUnit === "celsius") {
        const fahrenheit = (inputTemp * 9/5) + 32;
        resultElement.textContent = `${inputTemp}°C is ${fahrenheit.toFixed(2)}°F`;
    } else if (fromUnit === "fahrenheit") {
        const celsius = (inputTemp - 32) * 5/9;
        resultElement.textContent =`${inputTemp}°F is ${celsius.toFixed(2)}°C`;
    } else {
        resultElement.textContent = "Invalid unit selected";
    }
}
