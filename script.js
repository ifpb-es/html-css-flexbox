// TODO: refatorar para demais arquivos usarem este aqui
// https://stackoverflow.com/questions/950087/how-do-i-include-a-javascript-file-in-another-javascript-file
// ECMAScript modules in browsers
export function addEventListener(seletorAlvo, nomePropriedade) {
    let alvo = document.querySelector(seletorAlvo);
    
    let radios = document.querySelectorAll('input');
    
    for(let i = 0; i < radios.length; i++) {
        let radio = radios[i];
        if (radio.checked) {
            alvo.style[nomePropriedade] = radio.value;
        }
        radio.addEventListener('click', (event) => {
            let value = event.target.value;
            alvo.style[nomePropriedade] = value;
        });
    }
   
}