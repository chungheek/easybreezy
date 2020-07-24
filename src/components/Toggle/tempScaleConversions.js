export let fahrenheitToCelsius = (tempInF) => {
    return (tempInF -32) * 5/9;
};

export let celsiusToFahrenheit = (tempInC) => {
    return (tempInC*9/5 + 32);
};

export let kelvinToCelsius = (tempInK) => {
    return tempInK - 273.15 
};

//you apparently can't get directly from K to F; you have to convert to C first :)
export let kelvinToFahrenheit = (tempInK) => {
    return celsiusToFahrenheit(kelvinToCelsius(tempInK));
};
