const F_TO_C = 5/9;
const C_TO_F = 9/5;
const THIRTY_TWO_DEGREES = 32;
const K_TO_C = 273.15

export let fahrenheitToCelsius = (tempInF) => {
    return (tempInF - THIRTY_TWO_DEGREES) * F_TO_C;
};

export let celsiusToFahrenheit = (tempInC) => {
    return (tempInC * C_TO_F + THIRTY_TWO_DEGREES);
};

export let kelvinToCelsius = (tempInK) => {
    return tempInK - K_TO_C; 
};

//you apparently can't get directly from K to F; you have to convert to C first :)
export let kelvinToFahrenheit = (tempInK) => {
  return celsiusToFahrenheit(kelvinToCelsius(tempInK));
};
