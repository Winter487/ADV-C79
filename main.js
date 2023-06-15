var arrayAlunos = [];

function enviar() {
    
    //var nome1 = document.getElementById("aluno1").value;
    //var nome2 = document.getElementById("aluno2").value;
    //var nome3 = document.getElementById("aluno3").value;
    //var nome4 = document.getElementById("aluno4").value;

    //COLOCAR NA LISTA O NOME (PUSH)
    //arrayAlunos.push(nome1);
    //arrayAlunos.push(nome2);
    //arrayAlunos.push(nome3);
    //arrayAlunos.push(nome4);

    for(var i = 3; i<=9; i+2){
        var nome;
        nome = i;
        console.log(nome);
        arrayAlunos.push(nome);

    }

    console.log(arrayAlunos);
    //COLOCAR DENTRO DO HTML
    document.getElementById("mostrarNomes").innerHTML = arrayAlunos;

    document.getElementById("enviarInformação").style.display = "none";
    document.getElementById("organizarInformação").style.display = "inline-block";
} 
//O método sort() ordena os elementos do próprio array e retorna o array. A ordenação não é necessariamente estável. A ordenação padrão é de acordo com a pontuação de código unicode.
function organizar() {
    arrayAlunos.sort();
    console.log(arrayAlunos);
    document.getElementById("mostrarNomes").innerHTML = arrayAlunos;
}