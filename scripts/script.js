function passouOunao(){
    
    const respostas = {
        mundial: "1983",
        libertadores: "198319952017",
        brasil: "2",
        adversario: "lanus",
        fund: "1903"
    };

    let acertos = 0;
    let passou = 0;
    let total = Object.keys(respostas).length;

    for (let key in respostas) {
        const selecionado = document.querySelector(`input[name="${key}"]:checked`);
        
        if (!selecionado) {
            alert(`Você não respondeu a pergunta: ${key}`);
            return false;
        }

        if (selecionado.value === respostas[key]) {
            acertos++;
        }
    }

    if (acertos >= 3){
        passou = 1;
    }

    if (passou != "1"){
        alert('Pae tu errou alguma questão');
        return false;
    }else{
        alert('Tu passou menó');
        return false;
    }

    
}

function validarDados() {

    const nome = document.getElementById('name').value.trim();

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

    const opiniAlan = document.getElementById('opini').value.trim();

    const notaAlan = document.getElementById('notaAlan').value;

    const luan = document.getElementById('luan').value;

    const opiniLuan = document.getElementById('opiniLuan').value.trim();

    const notaLuan = document.getElementById('notaLuan').value;

    console.log(nome, nascimento, cpf, email, senha, tel, gender.value, cidade, estado, pais, 
    rua, numeroCasa, cep, color.value, mundial.value, libertadores.value,
     brasil.value, adversario.value, fund.value,
    torcida, odiar, time, opiniAlan, notaAlan, luan, opiniLuan, notaLuan);



    const baseNome = /^[A-Za-zÀ-ÿ\s]+$/;
    const baseEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const baseTelefone = /^\d{10,11}$/;
    
    if(!nome){
        alert('Por favor insira seu nome');
        return false;
    }

    if(!baseNome.test(nome)){
        alert("O nome deve conter letras apenas");
        return false;
    }

    if(!nascimento){
        alert('Por favor insira sua data de nascimento');
        return false;
    }

    if(!cpf){
        alert('Por favor insira seu CPF')
        return false
    }

    if(cpf.length !== 11){
        alert('Por favor insira um cpf válido')
    }

    if (!email) {
        alert('Por favor insira seu e-mail');
        return false;
    }

    if (!baseEmail.test(email)) {
        alert('Por favor insira um e-mail válido');
        return false;
    }

    if (!senha) {
        alert('Por favor insira sua senha');
        return false;
    }

    if (!tel) {
        alert('Por favor insira seu telefone');
        return false;
    }

    if (!baseTelefone.test(tel)) {
        alert('Telefone inválido. Deve conter apenas números e ter 10 ou 11 dígitos');
        return false;
    }

    if (!gender) {
        alert('Por favor selecione seu gênero');
        return false;
    }

    if (!cidade) {
        alert('Por favor insira sua cidade');
        return false;
    }

    if (!baseNome.test(cidade)){
        alert('Cidade pode ter só letra pae')
    }

    if (!estado) {
        alert('Por favor insira seu estado');
        return false;
    }
    
    if (!baseNome.test(estado)){
        alert('Estado pode ter só letra pae')
    }

    if (!pais) {
        alert('Por favor insira seu país');
        return false;
    }

    if (!baseNome.test(pais)){
        alert('País pode ter só letra pae')
    }

    if (!rua) {
        alert('Por favor insira sua rua');
        return false;
    }

    if (!numeroCasa) {
        alert('Por favor insira o número da sua casa');
        return false;
    }

    if (!cep) {
        alert('Por favor insira seu CEP');
        return false;
    }

    if (!color) {
        alert('Por favor selecione uma cor');
        return false;
    }

    if (color.value != "Azul"){
        alert('Mermao, por que tu não prefere a cor Azul? TU NÃO É GREMISTA?')
        return false;
    }
    
    if (!torcida) {
        alert('Por favor diga o que acha da torcida');
        return false;
    }

    if (!odiar) {
        alert('Por favor fale o quanto você odeia o inter');
        return false;
    }

    if(odiar < 10){
        alert('PORQUE NÃO COLOCOU QUE ODEIA O INTER NO 10? TU NÃO É GREMISTA PAE?')
        return false;
    }

    if (time.value.toLowerCase() != "gremio") {
        alert('O GRÊMIO NÂO É O MELHOR TIME DO MUNDO PIA?');
        return false;
    }

    if (!opiniAlan) {
        alert('Por favor insira sua opinião sobre Alan');
        return false;
    }

    if (!notaAlan) {
        alert('Por favor insira uma nota para Alan');
        return false;
    }

    if (!luan) {
        alert('Por favor insira sua opinião sobre Luan');
        return false;
    }

    if (!opiniLuan) {
        alert('Por favor insira sua opinião sobre Luan');
        return false;
    }

    if (!notaLuan) {
        alert('Por favor insira uma nota para Luan');
        return false;
    }

    window.location.href = "index.html";
    return false;
}