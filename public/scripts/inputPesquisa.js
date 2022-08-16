window.addEventListener('load', function() {

    const input = document.getElementById('input-pesquisa');
    const button = document.getElementById('button-pesquisa')

        button.addEventListener('click', function(event) { 
            event.preventDefault();

            if(input.value == ''){
                input.style.border = '2px solid red';
            } else {
                document.location.href = '/categoria'
            }
        });
});