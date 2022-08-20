function verificar(){
    var ano=new Date();
    var a_atual=ano.getFullYear();
    var nasc=document.querySelector('input#nasc');
    var res=document.querySelector('div#res')
    var img=document.createElement('img');
    img.setAttribute('id', 'foto');
    
    if(nasc.value.length==0||Number(nasc.value)>a_atual){
        window.alert('verifique os dados e tente novamente!')
    }else{
        var sexo=document.getElementsByName('sexo');
        var idade=a_atual-Number(nasc.value);
        var genero='';
        if(sexo[0].checked){
            genero='Homen';
            if(idade>=0&&idade<10){
                img.setAttribute('src', 'imagens/criancam.png')
            }else if(idade<21){
                img.setAttribute('src', 'imagens/jovemm.png')
            }else if(idade<50){
                img.setAttribute('src', 'imagens/adulto.png')
            }else{
                img.setAttribute('src', 'imagens/idoso.png')
            }
        }else{
            genero='Mulher';
            if(idade>=0&&idade<10){
                img.setAttribute('src', 'imagens/criancaf.png')
            }else if(idade<21){
                img.setAttribute('src', 'imagens/jovemf.png')
            }else if(idade<50){
                img.setAttribute('src', 'imagens/adulta.png')
            }else{
                img.setAttribute('src', 'imagens/idosa.png')
            }
        }
        res.style.textAlign='center'
        res.innerHTML=`Detectamos ${genero} com idade de ${idade} anos`;
        res.appendChild(img)
    }

}
