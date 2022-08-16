window.addEventListener('load', function() {
    let button = document.querySelector('#see-more');
    let requests = document.querySelector('.requests-status');
    
    if(button){
    button.addEventListener('click', () =>{
        if(requests.style.display === 'block'){
            requests.style.display = 'none';
        }else {
            requests.style.display = 'block'
        }
    })
};
});