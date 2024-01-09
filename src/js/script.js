const buttons = document.querySelectorAll('button')

for (let i = 0; i < buttons.length; i++) {
    buttons[i].setAttribute('id',`button${i}`)
}

buttons.forEach(button => {
    button.addEventListener('click',function(){
        console.log(button.id)
    })
})