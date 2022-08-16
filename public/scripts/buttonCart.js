window.addEventListener('load', function() {
    let buttonIncrement = document.querySelector('.btn-primary');
    let input = document.querySelector('#display');
    let buttonDecrement = document.querySelector('.btn-secondary');
    
    if(buttonIncrement){
    buttonIncrement.addEventListener('click', () =>{
        input.value = parseInt(input.value) + 1
    });
};
if(buttonDecrement){
    buttonDecrement.addEventListener('click', () =>{
        input.value = parseInt(input.value) - 1
    });
};
});