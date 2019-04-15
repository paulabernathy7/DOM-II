// Your code goes here

const nav = document.querySelector(".nav")

nav.addEventListener('mouseover', function(event){
    event.target.style.color = "blue";
})

const background = document.querySelector('html')

background.addEventListener('keydown', function(event) {
    event.target.style.color = "aqua";
 
})
background.addEventListener('scroll', function(event) {
    event.target.style.fontFamily = 'Helvetica'
})

const button = document.querySelector('.btn')

button.parentElement.addEventListener('dblclick', function(event){
    event.target.style.color = "yellow";

})

button.addEventListener('dblclick', function(event) {
    event.stopPropagation()
    event.target.style.color = 'red';
})

const image = document.querySelector('.bus')

image.addEventListener('click', function(event) {
    event.target.style.display = 'none'

})

const header = document.querySelectorAll('h2')
header.forEach(function(element){
    element.addEventListener('mousemove', function(event) {
        event.target.style.color = 'green';
    }) 
    element.addEventListener('mouseout', function(event) {
        event.target.style.color = "black"
    })
})


