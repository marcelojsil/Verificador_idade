function verificar(){
    var data = new Date()
    var ano = data.getFullYear() //ano atual
    var fano = document.getElementById('txtano') //ano preenchido
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || Number(fano.value) > ano) { 
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        img.width = 300;
        img.height = 300;

        if(fsex[0].checked){genero = 'Homem'
            if(idade >= 0 && idade < 10){img.setAttribute('src', 'kidsmas.jpg')}
            else if(idade < 21){img.setAttribute('src', 'adolsmas.jpg')}
            else if(idade < 50){img.setAttribute('src', 'adultomas.jpg')}
            else{img.setAttribute('src', 'velhomas.jpg')}
        
        }
        else if(fsex[1].checked){genero = 'Mulher'
            if(idade >= 0 && idade < 10){img.setAttribute('src', 'kidsfem.jpg')}
            else if(idade < 21){img.setAttribute('src', 'adolsfem.jpg')}
            else if(idade < 50){img.setAttribute('src', 'adultofem.jpg')}
            else{img.setAttribute('src', 'velhafem.jpg')}
        }
        
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
        
        
    }
}