let list = document.querySelectorAll('.item')
let next = document.getElementById('next')
let prev = document.getElementById('prev')


// se começa a contar os itens do 0 na programação
// temos 3 itens, então na programação temos 2 itens
let count = list.length // serão três itens, o length vai contar quantos itens eu tenho
let active = 0

next.onclick = () => {
    let activeOld = document.querySelector('.active')
    activeOld.classList.remove('active')

    active = active >= count -1 ? 0 : active + 1
    list[active].classList.add('active')
}
prev.onclick = () => {
    let activeOld = document.querySelector('.active')
    activeOld.classList.remove('active')

    active = active <= 0 ? count -1 : active - 1 
    list[active].classList.add('active')

}


