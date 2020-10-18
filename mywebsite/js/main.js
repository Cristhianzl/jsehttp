function clicou(){
    //alert("Obrigado por clicar!");
    document.getElementById("agradecimento").innerHTML="<b>Obrigado por Clicar!</b>";
    
    //console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
    //window.open("https://github.com/Cristhianzl/jsehttp");
    window.location.href = "https://github.com/Cristhianzl/jsehttp";
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse!"
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!"
    //alert("Trocar texto!");
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui!"
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!"
    //alert("Trocar texto!");
}

function load(){
    alert("Pagina carregada!");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}
/*function soma (n1, n2){
    return n1+n2;
}
var validar = 0;
function validaIdade(idade){
    if(idade>=18){
        validar = true;
    }
    else{
        validar = false;
    }
    return validar;
}

var idade = prompt ("Qual sua idade?");
validaIdade(idade);
console.log(validaIdade(idade));
alert(soma(5,10));
*/
/*var d = new Date();
alert(d.getDay());*/

/*var count;
for (count=1; count<=5; count++){
    alert(count);
}*/

/*var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count = count+1;
}

*/


/*
var idade = prompt("Qual sua idade?");
if (idade >= 18) {
    alert("Maior de Idade!");
}
else {
    alert("Menor de Idade!");
}
*/



/*var frutas = [{nome: "maça", cor: "vermelha"}, {nome: "uva", cor: "roxa"}]
console.log(frutas);
alert(frutas[1].nome);*/




/*
var fruta = {nome: "maça", cor: "vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/
//var lista = ["maca", "pera", "laranja"];
//lista.push ("uva");
//lista.pop ();
//console.log(lista.length);
/*
console.log(lista[0]);
console.log(lista.toString());
console.log(lista.join(" - "));*/

/*var nome = "Cristhian Zanforlin";
var n1 = 5;
var n2 = 10;
var frase = "Japão é o melhor time do Brasil!"
//alert(idade + idade2);
console.log(nome);
console.log(n1*n2);
console.log(frase.toUpperCase());*/