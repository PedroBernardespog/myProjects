function carregar() {
var msg = window.document.getElementById("msg");
var img = window.document.getElementById("imagem");
var data = new Date();
var hora = data.getHours();
msg.innerHTML = `Agora são ${hora} horas.`;
document.body.style.background = '#fbf8f8'; 
if (hora >= 0 && hora < 12){
    // BOM DIA!!
    img.src = 'foto sol.webp' 
    document.body.style.background = '#fef39c'

} else if (hora >= 12 && hora <= 18){
    // BOA TARDE!!
    img.src = 'foto sol 2.webp'
    document.body.style.background = '#e09155'
}else  {    
    // BOA NOITE!!
    img.src = 'foto lua.webp'
    document.body.style.background = '#3f3f3f'
}

}