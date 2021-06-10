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

function isValidCPF(cpf) {
    let novoCpf = String(cpf)
    var soma = 0
    var resto
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
    var cpf = document.getElementById("cpf");
    var idade = document.getElementById("idade");
    var sexo = document.getElementById("sexo");
    var email = document.getElementById("email");
    var telefone = document.getElementById("telefone");
    var logradouro = document.getElementById("logradouro");
    var cep = document.getElementById("cep");
    var numero = document.getElementById("numero");
    var complemento = document.getElementById("complemento");
    var bairro = document.getElementById("bairro");
    var cidade = document.getElementById("cidade");
    var estado = document.getElementById("estado");
    var pais = document.getElementById("pais");

    var cadastro=[nome,cpf,idade,sexo,email,telefone,logradouro,cep,numero,bairro,cidade,estado,pais];
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
        let variaveisParaMostrar = {};
        cadastro.forEach(function(chave,index){
            variaveisParaMostrar[chave.name] = cadastro[index].value;
        });
        alert("As informações preenchidas são: " + JSON.stringify(variaveisParaMostrar, null,4));
        window.location.href="portal.html"
    }
}

function cadastroCnpj(event) {
    event.preventDefault();

    var nome = document.getElementById("nome");
    var cnpj = document.getElementById("cnpj");
    var idade = document.getElementById("idade");
    var descricao = document.getElementById("descricao");
    var email = document.getElementById("email");
    var telefone = document.getElementById("telefone");
    var cep = document.getElementById("cep");
    var logradouro = document.getElementById("logradouro");
    var numero = document.getElementById("numero");
    var complemento = document.getElementById("complemento");
    var bairro = document.getElementById("bairro");
    var cidade = document.getElementById("cidade");
    var estado = document.getElementById("estado");
    var pais = document.getElementById("pais");

    var cadastro=[nome,cnpj,idade,descricao,email,telefone,logradouro,cep,numero,bairro,cidade,estado,pais];
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
        let variaveisParaMostrar = {};
        cadastro.forEach(function(chave,index){
            variaveisParaMostrar[chave.name] = cadastro[index].value;
        });
        alert("As informações preenchidas são: " + JSON.stringify(variaveisParaMostrar, null,4));
        window.location.href="portal.html"
    }
}