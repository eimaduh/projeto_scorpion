window.addEventListener('load', function() {

    const input = document.getElementById('cep-serach');
    const button = document.getElementById('cep-ok')
    const paragrafo = document.getElementById('frete-value')
    const frete = document.getElementById('frete');

        button.addEventListener('click', function(event) { 
            event.preventDefault();

            if(input.value == ''){
                input.style.border = '2px solid red';
            } else {
                paragrafo.innerText = 'Valor do frete R$ 8,00'
                frete.innerText = 'Frete R$ 8,00'
            }
        });
   
});