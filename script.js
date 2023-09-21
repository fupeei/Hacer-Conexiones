function removerConexion(eliminarDeLista){
    eliminarDeLista.closest('.card-list-item').remove();
    let vnumeroDeRequest = document.querySelector('.badge')
    let numeroDeRequest = vnumeroDeRequest.innerText;
    numeroDeRequest --;
    vnumeroDeRequest.innerText = numeroDeRequest;
}
function agregarConexion(agregarALista){
    agregarALista.closest('.card-list-item').remove();
    let vnumeroDeRequest = document.querySelector('.badge')
    let numeroDeRequest = vnumeroDeRequest.innerText;
    numeroDeRequest --;
    vnumeroDeRequest.innerText = numeroDeRequest;
    let eListaDeAmigos = document.querySelector('#numeroDeAmigos');
    let listaDeAmigos = eListaDeAmigos.innerText;
    listaDeAmigos ++;
    eListaDeAmigos.innerText = listaDeAmigos;
}
function cambiarNombre(CambiarNombre){
    let eRenombrar = document.querySelector('#nombreUsuario')
    let renombrar = eRenombrar.innerText;
    renombrar = ("Pulentokyo");
    eRenombrar.innerText = renombrar;
}