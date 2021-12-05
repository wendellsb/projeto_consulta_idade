function verificar(){
    var nome = document.getElementById('pessoa')
    var nasc = document.getElementById('nasc')
    var resposta = document.getElementById('res')
    var img = document.getElementById('imagem')
    
    var data = new Date()
    var anoAtual = data.getFullYear()

    /* Teste de informações */
    if (nome.value.length == '') {
        window.alert('Nome inválido!')
    } else if (nasc.value > anoAtual || nasc.value.length == 0 || (anoAtual - nasc.value) > 120) {
        window.alert('Data de nascimento inválida!')
    } else {
        var sexo = document.getElementsByName('sexo')
        var cor = document.getElementsByName('cor')
        var idade = anoAtual - nasc.value
        var genero = ''
            