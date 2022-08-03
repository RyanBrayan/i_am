const btnHamburger = document.querySelector('.menuHamburguer')
const navList = document.querySelector('.navlist')

btnHamburger.addEventListener('click', () => {
    if(btnHamburger.classList.contains('active')){
        btnHamburger.classList.remove('active') 
        navList.classList.remove('active')
    }  else {
        btnHamburger.classList.add('active') 
        navList.classList.add('active')
    }
  
})