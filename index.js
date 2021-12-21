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
        
        // selecionando sexo
        if(sexo[0].checked) {
            genero = 'masculino'
        } else if(sexo[1].checked){
            genero = 'feminino'
        }
        resposta.innerHTML  = `${nome.value} do sexo ${genero} tem ${idade} anos.`
        // selecionando etnia do homem 
        if(genero == 'masculino' && cor[0].checked){
            //branco
            if(idade >= 0 && idade < 6){
                img.src='bebe_homem_branco.png'
            } else if(idade >= 6 && idade < 18){
                img.src='adolecente_homem_branco.png'
            }else if(idade >= 18 && idade < 60){
                img.src='adulto_homem_branco.png'
            }else if(idade >= 60 && idade < 120){
                img.src = 'idoso_homem_branco.png'
            }
        } else if(genero == 'masculino' && cor[1].checked){
            //negro
            if(idade >= 0 && idade < 6){
                img.src='bebe_homem_negro.png'
            } else if(idade >= 6 && idade < 18){
                img.src='adolecente_homem_negro.png'
            }else if(idade >= 18 && idade < 60){
                img.src='adulto_homem_negro.png'
            }else if(idade >= 60 && idade < 120){
                img.src = 'idoso_homem_negro.png'
            }
        }else if(genero == 'masculino' && cor[2].checked){
            //asiatico
            if(idade >= 0 && idade < 6){
                img.src='bebe_homem_asiatico.png'
            } else if(idade >= 6 && idade < 18){
                img.src='adolecente_homem_asiatico.png'
            }else if(idade >= 18 && idade < 60){
                img.src='adulto_homem_asiatico.png'
            }else if(idade >= 60 && idade < 120){
                img.src = 'idoso_homem_asiatico.png'
            }
        }

        // selecionando etnia da mulher
        if(genero == 'feminino' && cor[0].checked){
            //branca
            if(idade >= 0 && idade < 6){
                img.src='bebe_mulher_branco.png'
            } else if(idade >= 6 && idade < 18){
                img.src='adolecente_mulher_branco.png'
            }else if(idade >= 18 && idade < 60){
                img.src='adulto_mulher_branco.png'
            }else if(idade >= 60 && idade < 120){
                img.src = 'idoso_mulher_branco.png'
            }
        } else if(genero == 'feminino' && cor[1].checked){
            //negra
            if(idade >= 0 && idade < 6){
                img.src='bebe_mulher_negro.png'
            } else if(idade >= 6 && idade < 18){
                img.src='adolecente_mulher_negro.png'
            }else if(idade >= 18 && idade < 60){
                img.src='adulto_mulher_negro.png'
            }else if(idade >= 60 && idade < 120){
                img.src = 'idoso_mulher_negro.png'
            }
        }else if(genero == 'feminino' && cor[2].checked){
            //asiatica
            if(idade >= 0 && idade < 6){
                img.src='bebe_mulher_asiatico.png'
            } else if(idade >= 6 && idade < 18){
                img.src='adolecente_mulher_asiatico.png'
            }else if(idade >= 18 && idade < 60){
                img.src='adulto_mulher_asiatico.png'
            }else if(idade >= 60 && idade < 120){
                img.src = 'idoso_mulher_asiatico.png'
            }
        }
    }
}