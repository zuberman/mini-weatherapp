# Mini-weather

![Screenshot](assets/meteoropolis.png)

[Click here for live demo](https://codebar.oliverturner.cloud/#HmieZw0YOC0)

This app blends data from [openweathermap.org](https://openweathermap.org/) and 
[Unsplash](https://unsplash.com/developers) to create a visual depiction of the
current weather in your area.

## Set-up

You will need to visit both the links above to create accounts and generate API
keys that will allow your application to access the data.

The HTML and CSS have been supplied if you wish to focus on the programming and 
not the UI, but you should feel free to customise your application as you see fit!

## Objectives

Use the `fetch` API to access the weather. For now, we'll set London as the 
location (we'll look at using the browser's native Geolocation API presently!).

Once you've retrieved the weather data, use its `description` property to get 
matching images from Unsplash.

Display the images as a gallery of clickable thumbnails (clicking loads the main
image)

## Stretch goals

- Display the credits for each image displayed
- Create an input field that lets us see what the weather is like in other cities