function validar(event){
    event.preventDefault();
    let usuario=document.getElementById("usuario").value;
    var senha=document.getElementById("senha").value;
    let validado = false;

    var usuarioCadastrado=['AnaRonqui', 'ClioMaas', 'JoaoSantos', 'ReginaldoJunior'];
    var senhaCadastrada=['86641', '87046', '88372', '86696', '89050'];
    if(usuario && senha) {
        for(let i=0; i < usuarioCadastrado.length; i++) {
            if((usuario === usuarioCadastrado[i]) && (senha === senhaCadastrada[i])){
                validado = true;
                break
            }
        }
        if (validado){
            window.location.href = "./portal.html";
        } else {
            alert("Usuário ou senha incorretos!");
        }
    } else {
        alert("Usuário e senha são obrigatórios")
    }
}