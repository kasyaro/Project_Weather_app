
//EXAMPLES:
//api.openweathermap.org/data/2.5/weather?q=London 
//api.openweathermap.org/data/2.5/weather?q=London,uk
//683db29376b558f18b6caf7d2731e321
//Stamford,us&APPID=683db29376b558f18b6caf7d2731e321
//*****BRAKING UP URL */
// const baseURL = `http://api.openweathermap.org/data/2.5/weather?q=`
// let cityName = `""`
// const key = `,us&APPID=683db29376b558f18b6caf7d2731e321`
// let quieryURL = baseURL + cityName + key
// url: quieryURL,//=> in ajax
//****NOTE */ =>
//when we need just a city name to be variable (value of it we type in input field)
//insted of breaking up URL with "+" in between we use syntax like : `${cityName}` 

//************************Function to get data AJAX*/
//cityName here as aparameter with  argument(city name) in an input field in a browser !!
 let getWeather = (cityName) =>
{ 
    $.ajax(
    {   url: `http://api.openweathermap.org/data/2.5/weather?q=${cityName},us&APPID=683db29376b558f18b6caf7d2731e321`,
        // url: `http://api.openweathermap.org/data/2.5/weather?q=Fairfield,us&APPID=683db29376b558f18b6caf7d2731e321` ,
        type: "GET",
        // data:
        // {
        // //"$limit" : 100,
        // //"$$app_token" : "683db29376b558f18b6caf7d2731e321"
        // }
    }).done(function(data) 

    { 
     //**************data_reviel@.answers_in_browser */  

     //console.log(data)//=> we retrive our object with data first!

// data for name:
// first we create <h3> with j.query and add method.text().
// inside text(data.name)=> parameter we retrive from object of console.log(data).
// second: we append it to our <div class='answer'> elementof html.
        const h3forName = $('<h3>').text(data.name)
        $('.answer').append(h3forName)
        console.log(data.name)

         // data for Description.
const pforDescription = $('<p>').text(data.weather[0].description)
$('.answer').append(pforDescription)
       console.log(data.weather[0].description) 

// create an image for our description.
let image = $('<div>').addClass('image')
$('.answer').append(image)
let description = data.weather[0].description;
// if else staments for our different weather discription.
// if (description === 'overcast clouds'|| description === 'fog') {
//     $(image).css('background', 'url("img/fog.png")no-repeat')
// }

//  else if (description === 'light rain','mist','rain') {
//     $(image).css('background', 'url("img/rain.png")no-repeat')
// }
// else if (description === 'sun', 'clear sky') {
//     $(image).css('background', 'url("img/sun.png")no-repeat')
// }
// else {
//     $(image).css('background', 'url("img/bee.png")no-repeat')
// }

switch (description) {
    case 'overcast clouds': 
        $(image).css('background', 'url("img/fog.png")no-repeat')
        break;
    case 'scattered clouds': 
        $(image).css('background', 'url("img/partly-sun.png")no-repeat')
        break;
        case 'broken clouds': 
        $(image).css('background', 'url("img/partly-sun.png")no-repeat')
        break;
        case 'clear sky':
        $(image).css('background', 'url("img/sun.png") no-repeat')
        break;
        case 'rain':
        $('image').css('background', 'url("img/rain.png")no-repeat')
        break;
    default:
        $(image).css('background', 'url("img/bee.png")no-repeat')
}


       //data for temperature
       let currentKelvin = data.main.temp;
       let tempKelvinTo = (currentKelvin - 273.15)*9/5+32
       let numTemp = tempKelvinTo.toFixed(0)
       //
       const pforTemperature = $('<h2>').text(numTemp)
       $('.answer').append(pforTemperature)
       console.log(numTemp)

//***************end_of_data_reveal */
    });
}

//***************** */ Jqiuery set up : 

$( () =>
{ 
//     //*************Button to get weather from AJAX */

    $(".subm").on("click", (event) =>
    { event.preventDefault()
        //this let us store the value of input field in variable inputValue so we can use it when calling for getWeather function.
        let inputValue = $('#inputValue').val() 
        // pass value we typed in an input field.
        // $(inputValue).remove()
        $('.answer').empty();
        getWeather(inputValue);   
    });


//*************Buttons to list images */

    let currentImage = 0;//we assign first img to currentImage
    let allImages = $('.carusel').children().length -1;
    //console.log(allImages)
   // function for button next => next image to show.
    $('.next').on('click', ()=> {
        //here we hide our first img,when .next(button) clicked
        $('.carusel').children().eq(currentImage).css('display','none');
        
        //here condidin for rotating images
        if(currentImage < allImages) {
            currentImage++;//we incrementing by 1 here.
        }
        else{
            currentImage = 0;
        }  
        //now we write a statement to list the next img.
        $('.carusel').children().eq(currentImage).css('display', 'block'); 

    })

// function for button back => next image to show.
$('.back').on('click', ()=> {
    $('.carusel').children().eq(currentImage).css('display','none');
    if (currentImage < allImages) {
        currentImage++;
    }
    else{
        currentImage = 0;
    }
$('.carusel').children().eq(currentImage).css('display', 'block')

})
//********************* end buttons to list images */

});


