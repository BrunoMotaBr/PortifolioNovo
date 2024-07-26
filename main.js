const carroselCertificados = document.querySelectorAll("#imagemCertificado");
let contador = 0;

setInterval((event) => {
    trocaImagem();
}, 3500);


function trocaImagem(){
    if(contador < carroselCertificados.length){
        contador += 1;
        carroselCertificados[contador - 1].classList.remove('ativo');
        if(contador === carroselCertificados.length){
            carroselCertificados[0].classList.add('ativo');
        }else{
            carroselCertificados[contador].classList.add('ativo');
        }
        if(contador >= carroselCertificados.length){
            contador = 0;
        }
    }
}
    