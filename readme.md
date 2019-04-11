Title: Weather App
Type: Project_1
Duration: "week"
A README.md file with explanations of the technologies used, the approach taken, a link to your live site, installation instructions, unsolved problems, etc.

Creator: Alexandra Romanova
Competencies: Use AJAX to make a request to an external data source like OMDBapi and insert some of the data retrieved into the DOM.
Implement responsive design (i.e. it should be fully functional on desktop, tablet, mobile, etc).
Have one or more complex user interface modules such as a carousel, drag and drop, a sticky nav, tooltips, etc.
Prerequisites: AJAX , JavaScript, jQuery ,HTML , CSS 

WEATHER App
Intro
This project is done with elegant siplicity of style , to reflect primary function of weather app - to get current weather forcast. 

Setup 
1.Make a files inside your project folder.
touch index.html
touch main.css
touch app.js
mkdir img
open them in code .
2. Eastablish connections between files , boilerplate HTML , and check in browser JS working.

PART ONE:

1. Thirst I establish functionality of my web page. 
In an app.js file I copied base URL from  https://openweathermap.org/api needed to make a connection between my project files and external data of that web site. 
I used AJAX here ( promise function ). 
I make sure I can retrive data in console window first to move forward! (//console.log(data)//=> we retrive our object with data first!)
2. Than I retrive name , description, and weather temperature from the data object in console:
 (data.name), (data.weather[0].description), (data.main.temp).
 * For converting Kelvin temperature into F. some math has been applied.*
 Make sure the data search is exact and appear in console => (console.log(data.weather[0].description) ect.)
 3. I used Jquery to see the data in a browser and in exact location .
    I created a function for getting Weather on a click button in abrowser - I used Jquery. 
     $(".subm").on("click", (event) =>{ 
      getWeather(); }) 
      => that let me see data in a browser.
 I created a tag in app.js file and append the search data to that tag :
     const h3forName = $('<h3>').text(data.name)
        $('.answer').append(h3forName)
        => that let me see tha data in exact location a browser.

PART TWO

 1. make chages to my CSS togive a touch of style to the page .
 work on colors pallet , used filter fro grayscale for first img.
 2. Used interface module carusel .
 I dowload images into my img folder , paste them into HTML and work the rest of it in app.js fie.
 Java Script if else statement was used to list images in a carusel .
 Methods .children().eq(currentImage).css('display','none')were used here.

 THE FINISH
 I download my project into the githubfor public view.





