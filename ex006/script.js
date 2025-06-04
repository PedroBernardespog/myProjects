function verificar(){
    var data = new Date()
    var ano= data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert("Verifique os dados e tente novamente!!")
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', "babyM.webp")
            }else if (idade < 21) {
                // jovem
                img.setAttribute('src', "youngM.webp")
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src', "men.webp")
            } else {
                //idoso
                img.setAttribute('src', "oldM.webp")
            }

        } else if (fsex[1].checked){
            genero = 'Mulher'
               if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', "babyF.webp")
            }else if (idade < 21) {
                // jovem
                img.setAttribute('src', "youngF.webp")
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src', "woman.webp")
            } else {
                //idoso
                img.setAttribute('src', "oldF.webp")
            }
        }
        res.style.textAlign = 'center'
        img.style.width = '300px'
        img.style.borderRadius = '50%'
        res.innerHTML = `Detectamos   ${genero}   com  ${idade}  anos.`
        res.appendChild(img)
    }


}
function limpar() {
    // Limpa o campo de ano
    var fano = document.getElementById('txtano');
    if (fano) fano.value = '';

    // Desmarca os radio buttons de sexo
    var fsex = document.getElementsByName('radsex');
    for (var i = 0; i < fsex.length; i++) {
        fsex[i].checked = false;
    }

    // Limpa o resultado e remove a imagem, se existir
    var res = document.querySelector('div#res');
    if (res) res.innerHTML = '';

    var img = document.getElementById('img');
    if (img) img.remove();

    // Opcional: foca no campo de ano
    if (fano) fano.focus();
}