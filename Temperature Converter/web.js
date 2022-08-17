const kelvin = document.getElementById('kelvin');
const fahrenheit = document.getElementById('fahrenheit');
const celcius = document.getElementById('celcius');

const inputs = document.getElementsByClassName('inputs');

for (let i = 0; i < inputs.length; i++)
{
    let myInput = inputs[i];
    console.log(myInput)
    
    myInput.addEventListener("input", (e) => {
        let value = parseFloat(e.target.value);
        console.log(e.target.value);

        switch (e.target.name) {
            case "celcius":
                fahrenheit.value = (value * 1.8) + 32;
                kelvin.value = value + 273.15;
                break;

            case "fahrenheit":
                celcius.value = (value - 32 / 1.8);
                kelvin.value = ((value - 32) / 1.8) + 273.15;
                break;

            case "kelvin":
                celcius.value = value - 273.15;
                fahrenheit.value = ((value - 273.15) * 1.8) + 32;
                break;
        }
    })
}