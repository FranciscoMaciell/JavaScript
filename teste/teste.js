function verificar(){
    var ano=new Date();
    var a_atual=ano.getFullYear();
    var d_nasc=document.querySelector('input#nasc');
    var res=document.querySelector('div#res');
    var img=document.createElement('img');
    img.setAttribute('id', 'foto');

    if(d_nasc.value.length==0||Number(d_nasc.value)>a_atual){
        window.alert('[erro], digite os dados novamente')
    }else{
        var sex=document.getElementsByName('sexo');
        var idade=a_atual-Number(d_nasc.value);
        var genero='';
        if(sex[0].checked){
            genero='Homem';
            if(idade>=0&&idade<10){
                img.setAttribute('src', 'imagens/criancam.png')
            }else if(idade<21){
                img.setAttribute('src', 'imagens/jovemm.png')
            }else if(idade<51){
                img.setAttribute('src', 'imagens/aduto.png')
            }else{
                img.setAttribute('src', 'imagens/idoso.png')
            }
        }else if(sex[1].checked){
            genero='Mulher';
            if(idade>=0&&idade<10){
                img.setAttribute('src', 'imagens/criancaf.png')
            }else if(idade<21){
                img.setAttribute('src', 'imagens/jovemf.png')
            }else if(idade<51){
                img.setAttribute('src', 'imagens/aduta.png')
            }else{
                img.setAttribute('src', 'imagens/idosa.png')
            }
        }
        res.innerHTML=`Detectamos ${genero} com idade de ${idade} anos`;
        res.appendChild(img)
    }
}