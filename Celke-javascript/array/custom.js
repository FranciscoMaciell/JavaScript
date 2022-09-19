let frutas=Array();

varrer();

console.log(frutas);

function enviar(){
    let valList=document.querySelector('#val_list').value;
    frutas.push(valList);
    varrer();
    console.log(frutas);
}

function varrer(){
    let lista=document.querySelector('#lista');
    for(let i=0; i<frutas.length; i++){
        if(document.getElementById('val_list').value[i]!=frutas[i]){
            lista.innerHTML+="<li>"+frutas[i]+"</li><br>";
        }
    }
}
