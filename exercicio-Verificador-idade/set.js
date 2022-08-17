function verificar(){
    var data=new Date();
    var a_atual=data.getFullYear();
    var a_nasc=document.querySelector('input#nasc');
    var res=document.querySelector('div#res');
    var img=document.createElement('img');

    // set atributo id para foto
    img.setAttribute('id', 'foto')

    if(a_nasc.value.length==0||Number(a_nasc.value)>a_atual){
        window.alert('[ERRO], digite seus dados novamente');
    }else{
        var sex=document.getElementsByName('sexo');
        var idade=a_atual-Number(a_nasc.value);
        var genero='';

        if(sex[0].checked){
            genero='Homem';
            if(idade>=0&&idade<10){
                //criança
                img.setAttribute('src', 'imagens/criancam.png');
            }else if(idade<21){
                //jovem
                img.setAttribute('src', 'imagens/jovemm.png');
            }else if(idade<50){
                //adulto
                img.setAttribute('src', 'imagens/adulto.png');
            }else{
                //idoso
                img.setAttribute('src', 'imagens/idoso.png');
            }
        }else if(sex[1].checked){
            genero='Mulher';
            if(idade>=0&&idade<10){
                //criança
                img.setAttribute('src', 'imagens/criancaf.png');
            }else if(idade<21){
                //jovem
                img.setAttribute('src', 'imagens/jovemf.png');
            }else if(idade<50){
                //adulto
                img.setAttribute('src', 'imagens/adulta.png');
            }else{
                //idoso
                img.setAttribute('src', 'imagens/idosa.png');
            }
        }
        res.style.textAlign='center';
        res.innerHTML=`Detectamos ${genero} com ${idade} anos.`;

        // ADICIONA UM NOVO ELEMENTO DEPOIS
        res.appendChild(img)
    }
}