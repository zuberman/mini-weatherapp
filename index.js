// weatherapikey ba952ac5bba8a3501d9f27b84a1e7ed6
// Unsplashaccesskey b86a7bedd1b8ec0a69b8569aa17c9b1fa7c8377200e6c71c99d09e92da2c1a0d
// Unsplashsecretkey c29bb657094e575e87ea558c08a4ba9df69aaf030ee9dd595be2b8c959928b27
// api.openweathermap.org/data/2.5/weather?q={city name}
// api.openweathermap.org/data/2.5/weather?q={city name},{country code}
// api.openweathermap.org/data/2.5/weather?q=London&apiKey=ba952ac5bba8a3501d9f27b84a1e7ed6

let cityweather
let regular
let regularPhoto = document.querySelector(".photo")
let thumbs = document.querySelector(".thumbs")
let mappedImageArray
let form = document.querySelector("form")
let searchQuery = "Barcelona"
let user = document.querySelector("#credit-user")

function searchPhotos() {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&apiKey=ba952ac5bba8a3501d9f27b84a1e7ed6`
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(content) {
      cityweather = content.weather[0].description
      retrievePhotos()
    })
}

function retrievePhotos() {
  let photoUrl = `https://api.unsplash.com/search/photos?page=1&query=${cityweather}&client_id=b86a7bedd1b8ec0a69b8569aa17c9b1fa7c8377200e6c71c99d09e92da2c1a0d`
  fetch(photoUrl)
    .then(function(response){
    return response.json();
    })
    .then(function(content) {
        regular = content.results[0].urls.regular;
        const idForMainImage = content.results[0].id;
        mappedImageArray = content.results.map(function(item) {
        return `<img src="${item.urls.thumb}" class="thumb" data-id="${item.id}"
        data-regular-image="${item.urls.regular}" data-name="${item.user.name}" data-portfolio="${item.user.portfolio_url}"/>`
      })
        console.log(content.results)
        thumbs.innerHTML = mappedImageArray
        regularPhoto.innerHTML = `<img src="${regular}" data-id="${idForMainImage}"/>`
        user.textContent = content.results[0].user.name
        user.href = content.results[0].user.portfolio_url
    })
}


thumbs.addEventListener("click", function(event){
  if(event.target.matches('.thumb')){
    console.log(event.target.dataset)
    let targetdata = event.target.dataset.regularImage
    let userName = event.target.dataset.name
    let portfolioLink = event.target.dataset.portfolio
    // let id = event.target.dataset.id
    regularPhoto.innerHTML = `<img src="${targetdata}"/>`
    user.textContent = userName
    user.href = portfolioLink

  let activeElement =  document.querySelector(".active")
    if (activeElement !== null) {
    activeElement.classList.toggle("active")
    }
    event.target.classList.toggle("active")
  }
})

searchPhotos()

form.addEventListener("submit", function(event){
  // searchQuery = event.target.value
  event.preventDefault()
  searchQuery = event.target.city.value
  searchPhotos()
})
