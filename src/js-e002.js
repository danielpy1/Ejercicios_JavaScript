//Ejercicio 1
console.log("Hola mundo");
function ejer1(){
    let A,B,C,D;
    A=parseInt(document.getElementById("a").value);
    B=parseInt(document.getElementById("b").value);
    C=parseInt(document.getElementById("c").value);
    D=( (-B +Math.sqrt(Math.pow(B,2)-(4*A*C)))/2*A );
    if(isNaN(D)){
        D="Resultado no valido.";
    }
    document.getElementById("resultado").innerHTML=D;
}
function ejer2(){
    let A,B,C,D;
    A=parseInt(document.getElementById("a").value);
    B=parseInt(document.getElementById("b").value);
    C=parseInt(document.getElementById("c").value);
    D=( (-B -Math.sqrt(Math.pow(B,2)-(4*A*C)))/2*A );
    if(isNaN(D)){
        D="Resultado no valido.";
    }
    document.getElementById("resultado").innerHTML=D;
}
function ejer4(){
    let a = Math.floor( Math.random() * (101 - 1) + 1);
    var Myelement = document.getElementById("res");
    Myelement.value = a;
}
//Calculadora
var primer_numero=false;
var segundo_numero=false;
var primer_numero_auxiliar="";
var segundo_numero_auxiliar="";

function b1(){
    if(primer_numero==true){
        primer_numero_auxiliar=primer_numero_auxiliar+1;
        console.log(primer_numero_auxiliar);
        let element=document.getElementById("dA");
        element.value=primer_numero_auxiliar;
    }else if(segundo_numero){
        segundo_numero_auxiliar=segundo_numero_auxiliar+1;
        var element=document.getElementById("dB");
        element.value=segundo_numero_auxiliar;
    }
}
function b2(){
    if(primer_numero==true){
        primer_numero_auxiliar=primer_numero_auxiliar+2;
        console.log(primer_numero_auxiliar);
        var element=document.getElementById("dA");
        element.value=primer_numero_auxiliar;
    }else if(segundo_numero){
        segundo_numero_auxiliar=segundo_numero_auxiliar+2;
        var element=document.getElementById("dB");
        element.value=segundo_numero_auxiliar;
    }
}
function b3(){
    if(primer_numero==true){
        primer_numero_auxiliar=primer_numero_auxiliar+3;
        console.log(primer_numero_auxiliar);
        var element=document.getElementById("dA");
        element.value=primer_numero_auxiliar;
    }else if(segundo_numero){
        segundo_numero_auxiliar=segundo_numero_auxiliar+3;
        var element=document.getElementById("dB");
        element.value=segundo_numero_auxiliar;
    }
}
function b4(){
    if(primer_numero==true){
        primer_numero_auxiliar=primer_numero_auxiliar+4;
        console.log(primer_numero_auxiliar);
        var element=document.getElementById("dA");
        element.value=primer_numero_auxiliar;
    }else if(segundo_numero){
        segundo_numero_auxiliar=segundo_numero_auxiliar+4;
        var element=document.getElementById("dB");
        element.value=segundo_numero_auxiliar;
    }
}
function b5(){
    if(primer_numero==true){
        primer_numero_auxiliar=primer_numero_auxiliar+5;
        console.log(primer_numero_auxiliar);
        var element=document.getElementById("dA");
        element.value=primer_numero_auxiliar;
    }else if(segundo_numero){
        segundo_numero_auxiliar=segundo_numero_auxiliar+5;
        var element=document.getElementById("dB");
        element.value=segundo_numero_auxiliar;
    }
}
function b6(){
    if(primer_numero==true){
        primer_numero_auxiliar=primer_numero_auxiliar+6;
        console.log(primer_numero_auxiliar);
        var element=document.getElementById("dA");
        element.value=primer_numero_auxiliar;
    }else if(segundo_numero){
        segundo_numero_auxiliar=segundo_numero_auxiliar+6;
        var element=document.getElementById("dB");
        element.value=segundo_numero_auxiliar;
    }
}
function b7(){
    if(primer_numero==true){
        primer_numero_auxiliar=primer_numero_auxiliar+7;
        console.log(primer_numero_auxiliar);
        var element=document.getElementById("dA");
        element.value=primer_numero_auxiliar;
    }else if(segundo_numero){
        segundo_numero_auxiliar=segundo_numero_auxiliar+7;
        var element=document.getElementById("dB");
        element.value=segundo_numero_auxiliar;
    }
}
function b8(){
    if(primer_numero==true){
        primer_numero_auxiliar=primer_numero_auxiliar+8;
        console.log(primer_numero_auxiliar);
        let element=document.getElementById("dA");
        element.value=primer_numero_auxiliar;
    }else if(segundo_numero){
        segundo_numero_auxiliar=segundo_numero_auxiliar+8;
        let element=document.getElementById("dB");
        element.value=segundo_numero_auxiliar;
    }
}
function b9(){
    if(primer_numero==true){
        primer_numero_auxiliar=primer_numero_auxiliar+9;
        console.log(primer_numero_auxiliar);
        var element=document.getElementById("dA");
        element.value=primer_numero_auxiliar;
    }else if(segundo_numero){
        segundo_numero_auxiliar=segundo_numero_auxiliar+9;
        var element=document.getElementById("dB");
        element.value=segundo_numero_auxiliar;
    }
}
function b0(){
    if(primer_numero==true){
        primer_numero_auxiliar=primer_numero_auxiliar+0;
        console.log(primer_numero_auxiliar);
        var element=document.getElementById("dA");
        element.value=primer_numero_auxiliar;
    }else if(segundo_numero){
        segundo_numero_auxiliar=segundo_numero_auxiliar+0;
        var element=document.getElementById("dB");
        element.value=segundo_numero_auxiliar;
    }
}
function focusA(){
    primer_numero=true;
    segundo_numero=false;
    let element1=document.getElementById("AA");
    let element2=document.getElementById("BB");
    element1.style.color="red";
    element2.style.color="black";
}
function focusB(){
    primer_numero=false;
    segundo_numero=true;
    let element1=document.getElementById("AA");
    let element2=document.getElementById("BB");
    element1.style.color="black";
    element2.style.color="red";
}
function reset(){
    let element1=document.getElementById("AA");
    let element2=document.getElementById("BB");
    let element3=document.getElementById("dA");
    let element4=document.getElementById("dB");
    let element5=document.getElementById("suma");
    let element6=document.getElementById("resta");
    let element7=document.getElementById("multiplicacion");
    let element8=document.getElementById("division");
    let element9=document.getElementById("dO");
    element1.style.color="black";
    element2.style.color="black";
    element5.style.color="black";
    element6.style.color="black";
    element7.style.color="black";
    element8.style.color="black";
    primer_numero_auxiliar="";
    segundo_numero_auxiliar="";
    element3.value="";
    element4.value="";
    element9.value="";
    primer_numero=false;
    segundo_numero=false;
}
function icono_suma(){
    let element1=document.getElementById("suma");
    let element2=document.getElementById("dO");
    let element3=document.getElementById("resta");
    let element4=document.getElementById("multiplicacion");
    let element5=document.getElementById("division");
    element1.style.color="red";
    element2.value="+";
    element3.style.color="black";
    element4.style.color="black";
    element5.style.color="black";
}
function icono_resta(){
    let element1=document.getElementById("resta");
    let element2=document.getElementById("dO");
    let element3=document.getElementById("suma");
    let element4=document.getElementById("multiplicacion");
    let element5=document.getElementById("division");
    element1.style.color="red";
    element2.value="-";
    element3.style.color="black";
    element4.style.color="black";
    element5.style.color="black";
}
function icono_multiplicacion(){
    let element1=document.getElementById("multiplicacion");
    let element2=document.getElementById("dO");
    let element3=document.getElementById("suma");
    let element4=document.getElementById("resta");
    let element5=document.getElementById("division");
    element1.style.color="red";
    element2.value="*";
    element3.style.color="black";
    element4.style.color="black";
    element5.style.color="black";
}
function icono_division(){
    let element1=document.getElementById("division");
    let element2=document.getElementById("dO");
    let element3=document.getElementById("suma");
    let element4=document.getElementById("resta");
    let element5=document.getElementById("multiplicacion");
    element1.style.color="red";
    element2.value="/";
    element3.style.color="black";
    element4.style.color="black";
    element5.style.color="black";
}
function calcular(){
    let element1=document.getElementById("dA").value;
    let element2=document.getElementById("dB").value;
    let element3=document.getElementById("dO").value;
    let res=document.getElementById("resultado_definitivo");
    element1=parseFloat(element1);
    element2=parseFloat(element2);
    if(element3==="+"){
        res.value=element1+element2;
    }else if(element3==="-"){
        res.value=element1-element2;
    }else if(element3==="*"){
        res.value=element1*element2;
    }else if(element3==="/"){
        if(element1!==0){
            res.value=element1/element2;
        }else{
            res.value="No se puede dividir entre 0"
        }
    }
}
var generar_dados=document.getElementById("generar_dados");
var reset_dados=document.getElementById("reset_dados");
generar_dados.addEventListener("click",GD);
reset_dados.addEventListener("click",RD);
function GD(){
    let vector=[];
    for(let i=0;i<5;i++){
        vector.push(Math.floor( Math.random() * (7 - 1) + 1));
    }
    vector.forEach((elemento,indice)=>{
        document.getElementById("img_"+(indice+1)).src="img/"+elemento+".png"
    })
}
function RD(){
    for(let i=1;i<=5;i++){
        document.getElementById("img_"+(i)).src="img/none.png";
    }
}
var jugador_1="";
var jugador_2="";
var tateti=[[10,11,12],[13,14,15],[16,17,18]];
var controlador=false;
var jugador_ganador="";
var empate=0;
function enviarMensaje(){
    return false;
}
function verificar_jugar(){
    jugador_1=document.getElementById("nombre_x").value;
    jugador_2=document.getElementById("nombre_y").value;
    if(jugador_1!=="" && jugador_2!==""){
        jugador_1=document.getElementById("nombre_x").value+" -X";
        jugador_2=document.getElementById("nombre_y").value+" -Y";
        document.getElementById("turno_de").value=jugador_1;
        document.getElementById("tabla3").style.pointerEvents="auto";
    }
}
function pintadorGenerico(idPintar){
    if(qj()==="X" && controlador===false){
        document.getElementById(idPintar).src="img/x.png";
        tateti[parseInt(idPintar[1])][parseInt(idPintar[2])]=1;
        empate=empate+1;
        procedimiento();
        if(controlador===false){
            document.getElementById("turno_de").value=jugador_2;
        }
    }else if(qj()==="Y" && controlador===false){
        document.getElementById(idPintar).src="img/o.png";
        tateti[parseInt(idPintar[1])][parseInt(idPintar[2])]=2;
        empate=empate+1;
        procedimiento();
        if(controlador===false){
            document.getElementById("turno_de").value=jugador_1;
        }
    }
    if(empate===9 && controlador===false) {
        jugador_ganador = "EMPATE";
        document.getElementById("tabla3").style.pointerEvents = "none";
        desplegarModal();
    }
}
function qj(){
    let x=document.getElementById("turno_de").value;
    x=x.split("-");
    return x[1];
}
function procedimiento(){
    if(tateti[0][0]===tateti[1][0] && tateti[1][0]===tateti[2][0]){
        document.getElementById("tabla3").style.pointerEvents = "none";
        controlador=true;
        if(tateti[0][0]===1){
            jugador_ganador=jugador_1;
        }else{
            jugador_ganador=jugador_2;
        }
        desplegarModal();
    }else if(tateti[0][1]===tateti[1][1] && tateti[1][1]===tateti[2][1]){
        document.getElementById("tabla3").style.pointerEvents = "none";
        controlador=true;
        if(tateti[0][1]===1){
            jugador_ganador=jugador_1;
        }else{
            jugador_ganador=jugador_2;
        }
        desplegarModal();
    }else if(tateti[0][2]===tateti[1][2] && tateti[1][2]===tateti[2][2]){
        document.getElementById("tabla3").style.pointerEvents = "none";
        controlador=true;
        if(tateti[0][2]===1){
            jugador_ganador=jugador_1;
        }else{
            jugador_ganador=jugador_2;
        }
        desplegarModal();
    }else if(tateti[0][0]===tateti[0][1] && tateti[0][1]===tateti[0][2]){
        document.getElementById("tabla3").style.pointerEvents = "none";
        controlador=true;
        if(tateti[0][0]===1){
            jugador_ganador=jugador_1;
        }else{
            jugador_ganador=jugador_2;
        }
        desplegarModal();
    }else if(tateti[1][0]===tateti[1][1] && tateti[1][1]===tateti[1][2]){
        document.getElementById("tabla3").style.pointerEvents = "none";
        controlador=true;
        if(tateti[1][0]===1){
            jugador_ganador=jugador_1;
        }else{
            jugador_ganador=jugador_2;
        }
        desplegarModal();
    }else if(tateti[2][0]===tateti[2][1] && tateti[2][1]===tateti[2][2]){
        document.getElementById("tabla3").style.pointerEvents = "none";
        controlador=true;
        if(tateti[2][0]===1){
            jugador_ganador=jugador_1;
        }else{
            jugador_ganador=jugador_2;
        }
        desplegarModal();
    }else if(tateti[2][0]===tateti[1][1] && tateti[1][1]===tateti[0][2]){
        document.getElementById("tabla3").style.pointerEvents = "none";
        controlador=true;
        if(tateti[2][0]===1){
            jugador_ganador=jugador_1;
        }else{
            jugador_ganador=jugador_2;
        }
        desplegarModal();
    }else if(tateti[0][0]===tateti[1][1] && tateti[1][1]===tateti[2][2]){
        document.getElementById("tabla3").style.pointerEvents = "none";
        controlador=true;
        if(tateti[0][0]===1){
            jugador_ganador=jugador_1;
        }else{
            jugador_ganador=jugador_2;
        }
        desplegarModal();
    }
}
// Javascript pra el modal
function desplegarModal(){
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    var body = document.getElementsByTagName("body")[0];
    document.getElementById("nombre_ganador").innerHTML = jugador_ganador;
    modal.style.display = "block";
    body.style.position = "static";
    body.style.height = "100%";
    body.style.overflow = "hidden";
    span.onclick = function() {
        modal.style.display = "none";
        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }
    /* para sacar el modal al darle click en el body
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            body.style.position = "inherit";
            body.style.height = "auto";
            body.style.overflow = "visible";
        }
    }*/
}
//