//somente funciona no Debug Mode 

function $(elemento){
  return document.querySelector(elemento);
}
//var wsocket = new WebSocket("ws://achex.ca:4010");
var wsocket = new WebSocket("ws://sandbox.kaazing.net/echo");
//var wsocket = new WebSocket("ws://echo.websocket.org");
var teste = function() {
  
  wsocket.onopen = function() {
    wsocket.send("JADEMIR entrou na sala...");
  };

  wsocket.onmessage = function(e) {
    console.log("mensagem retornada: "+e.data);
    $("#msgs").innerHTML += "<br>"+e.data;
  };
  $("#enviar").addEventListener("click", function(e){
    e.preventDefault();
    var txt = $("#msg").value;
    if(txt!=""){
      wsocket.send(txt);  
      $("#msg").value = "";
    }else{
      alert("digite alguma coisa");
    }
  });
};
teste();