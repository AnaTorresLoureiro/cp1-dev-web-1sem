//1
function dataTypes(){
    //indefinido
    let aula;
    console.log(aula)

    //vazio
    let disciplina = null
    console.log(disciplina)

    //com valor
    let aluno="Fiaper"
    console.log(aluno)
}

//2
function operadores(){
    let valor = 10

    //== (igual)
    if (valor==10){
        document.write("O valor é igual\n")
    }
    document.write("<br>")

    //>= (menor igual) ou <= (maior igual)

    if (valor<=15){
        document.write("O valor 15 é maior que 10")
    }else{
        document.write("\n O valor é menor ou igual a 10")
    }
    document.write("<br>")

    //!= (diferente)

    if (valor!=8){
        document.write(" É diferente de 10 ")
    }
}

//3
function imc(pesoInput){
    let peso = parseFloat(pesoInput);

    if (peso < 18.5 ){
        console.log("Abaixo do peso");
    } else if (peso > 24.9) {
        console.log("Acima do peso");
    } else {
        console.log("Peso ideal");
    }

}
