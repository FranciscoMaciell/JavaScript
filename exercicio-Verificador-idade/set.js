function verificar(){
    var ano=document.querySelector('input#nasc');
    var data=Number(ano.value);
    var masc=document.querySelector('input#masc');
    var mas=Number(masc.value);
    var fem=document.querySelector('input#fem');
    var femi=Number(fem.value);
    var img=document.querySelector('div#imagem');

    var atual=new Date();
    var a_atual=atual.getDate();
    var res=a_atual-data;
    if(mas&&!femi){
        img.innertext=`Detectamos um individuo do sexo Masculino de ${res} de idade`;
    }else{
        img.innertext=`Detectamos um individuo do sexo Feminino de ${res} de idade`;
    }
}