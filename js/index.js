// Your code goes here

const nav = document.querySelector(".nav")

nav.addEventListener('mouseover', function(event){
    event.target.style.color = "blue";
})

const header = document.querySelector('html')

header.addEventListener('keydown', function(event) {
    event.target.style.color = "aqua";
 
})
header.addEventListener('scroll', function(event) {
    event.target.style.fontFamily = 'Helvetica'
})

const button = document.querySelector('.btn')

button.addEventListener('dblclick', function(event) {
    event.target.style.color = 'red';
})

const image = document.querySelector('.bus')

image.addEventListener('click', function(event) {
    event.target.style.display = 'none'

})