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
            window.location.href = "./home.html";
        } else {
            alert("Usuário ou senha incorretos!");
        }
    } else {
        alert("Usuário e senha são obrigatórios")
    }
}

function isValidCPF(cpf) {
    let novoCpf = String(cpf)
    var soma = 0
    var resto
    if (novoCpf == "00000000000") {
        alert("CPF inválido!");
        return false
    }
    for (var i = 1; i <= 9; i++) 
        soma = soma + parseInt(novoCpf.substring(i-1, i)) * (11 - i)
    resto = (soma * 10) % 11
    if ((resto == 10) || (resto == 11))  resto = 0
    if (resto != parseInt(novoCpf.substring(9, 10)) ) {
        alert("CPF inválido!");
        return false;
    }
    soma = 0
    for (var i = 1; i <= 10; i++) 
        soma = soma + parseInt(novoCpf.substring(i-1, i)) * (12 - i)
    resto = (soma * 10) % 11
    if ((resto == 10) || (resto == 11))  resto = 0
    if (resto != parseInt(novoCpf.substring(10, 11) ) ) {
        alert("CPF inválido!");
        return false;
    }
    return true;
}

function cadastroCpf(event) {
    event.preventDefault();

    var nome = document.getElementById("nome");
    var sobrenome = document.getElementById("sobrenome");
    var cpf = document.getElementById("cpf");
    var email = document.getElementById("email");
    var telefone = document.getElementById("telefone");
    var senha = document.getElementById("senha");

    var cadastro=[nome,sobrenome,cpf,email,telefone,senha];
    var camposVazios=[];
    var camposPreenchidos=[]
    for(i=0;i<cadastro.length;i++){
        if(cadastro[i].value == ""){
            if(cadastro[i].name == "CPF"){
                isValidCPF(cadastro[i].value);
            }
            camposVazios.push(cadastro[i].name);

        }else{

            camposPreenchidos.push(cadastro[i].value);
        }
    }
    if(camposVazios.length){
    alert("os campos " + camposVazios.join(", ") + " precisam ser preenchidos!");
    }else{            
        if( !isValidCPF(cpf.value)){
            return false;
        }
        alert("Cadastro realizado com sucesso!");
        window.location.href="index.html"
    }
}

function cadastroCnpj(event) {
    event.preventDefault();

    var nome = document.getElementById("nome");
    var cnpj = document.getElementById("cnpj");
    var email = document.getElementById("email");
    var telefone = document.getElementById("telefone");
    var ramo = document.getElementById("ramo");
    var senha = document.getElementById("senha");

    var cadastro=[nome,cnpj,email,telefone,ramo,senha];
    var camposVazios=[];
    var camposPreenchidos=[]
    for(i=0;i<cadastro.length;i++){
        if(cadastro[i].value == ""){
            camposVazios.push(cadastro[i].name);
        }else{

            camposPreenchidos.push(cadastro[i].value);
        }
    }
    if(camposVazios.length){
    alert("os campos " + camposVazios.join(", ") + " precisam ser preenchidos!");
    }else{            
        alert("Cadastro feito com sucesso! Cadastre seus produtos.");
        window.location.href="index.html"
    }
}