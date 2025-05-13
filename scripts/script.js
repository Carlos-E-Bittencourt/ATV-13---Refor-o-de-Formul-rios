function validarDados() {


    const nome = document.getElementById('nome').value.trim();

    const nascimento = document.getElementById('nascimento').value.trim();

    const cpf = document.getElementById('cpf').value.trim();

    const email = document.getElementById('email').value.trim();

    const senha = document.getElementById('senha').value.trim();

    const tel = document.getElementById('tel').value.trim();

    const gender = document.querySelector('input[name="sex"]:checked');

    const cidade = document.getElementById('cidade').value.trim();

    const estado = document.getElementById('estado').value.trim();

    const pais = document.getElementById('pais').value.trim();

    const rua = document.getElementById('rua').value.trim();

    const numeroCasa = document.getElementById('numeroCasa').value.trim();

    const cep = document.getElementById('CEP').value.trim();

    const color = document.querySelector('input[name="color"]:checked');

    const mundial = document.querySelector('input[name="mundial"]:checked');

    const libertadores = document.querySelector('input[name="libertadores"]:checked');

    const brasil = document.querySelector('input[name="brasil"]:checked');

    const adversario = document.querySelector('input[name="adversario"]:checked');

    const fund = document.querySelector('input[name="fund"]:checked');

    const torcida = document.getElementById('torcida').value.trim();

    const odiar = document.getElementById('odiar').value.trim();

    const time = document.getElementById('time').value.trim();

    const opiniAlan = document.getElementById('opiniAlan').value.trim();

    const notaAlan = document.getElementById('notaAlan').value.trim();

    const luan = document.getElementById('luan').value.trim();

    const opiniLuan = document.getElementById('opiniLuan').value.trim();

    const notaLuan = document.getElementById('notaLuan').value.trim();

    console.log(nome, nascimento, cpf, email, senha, tel, gender, cidade, estado, pais, 
    rua, numeroCasa, cep, color, mundial, libertadores, brasil, adversario, fund,
    torcida, odiar, time, opiniAlan, notaAlan, luan, opiniLuan, notaLuan);



    const baseNome = /^[A-Za-zÀ-ÿ\s]+$/;
    
    if(!nome){
        alert('Por favor insira seu nome');
        return false;
    }

    if(!baseNome.test(nome)){
        alert("O nome deve conter letras apenas");
        return false;
    }

}

function passouOunao(){
    
}