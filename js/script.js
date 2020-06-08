//Burger for the mobile page.
const nav3 = document.querySelector('.nav3list')
const burger = document.querySelector('.burger')

function toggleMeny(){
    nav3.classList.toggle('nav3Active')
    burger.classList.toggle('toggle')
}

document.querySelector('.burger').addEventListener('click', toggleMeny)