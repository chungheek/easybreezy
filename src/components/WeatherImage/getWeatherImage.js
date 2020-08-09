export let getWeatherImage = (weatherMain) => {
    
    let imageID = "";

    if (weatherMain === "Thunderstorm") {
        imageID = "11d";
    } 
    else if (weatherMain === "Drizzle"){
        imageID = "09d";
    }
    else if (weatherMain === "Rain"){
        imageID = "10d";
    }
    else if (weatherMain === "Snow"){
        imageID = "14d";
    }
    else if (weatherMain === "Clear"){
        imageID = "01d";
    }
    else if (weatherMain === "Clouds"){
        imageID = "03d";
    }
    else{
        imageID = "50d";
    }

    return imageID;
};
