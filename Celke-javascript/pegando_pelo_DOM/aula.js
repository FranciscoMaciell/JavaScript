let nome=document.getElementsByName('nome')[0].value;

document.getElementById('user').innerHTML=nome;

function receberTurma(){
    let turma=document.getElementsByName('turma')[0].value;
    document.getElementById('user1').innerHTML=turma;
}