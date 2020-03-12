$("#btnEnvia").click(function(event) {
  var usuario = $("#usuario").val();
  var senha = $("#password").val();
  var autenticado = false;
  var fraseResposta = 0;

  if (usuario == "" || senha == "") {
    alert("Usuário e/ou senha está vazio. Tente novamente...")
  } else {
    if (usuario != "syscoin" || senha != "meEscolhe") {
      fraseResposta = 2;
      buscaMensagem(autenticado, fraseResposta);
    } else {
      autenticado = true;
      fraseResposta = 1;
      buscaMensagem(autenticado, fraseResposta);
    }
  }

});

function buscaMensagem(autenticado, fraseResposta) {
  var estaAutenticado = autenticado;
  var frase = fraseResposta;

  $.get("https://danguimaraes86.github.io/syscoin-estagio/docs/frases.json", function(arquivoJson) {

    if (estaAutenticado) {
      $("#campo-mensagem").val(arquivoJson[frase].texto);
    } else {
      if (frase == 0) {
        $("#campo-mensagem").val(arquivoJson[frase].texto);
      }
      if (frase == 2) {
        $("#campo-mensagem").val(arquivoJson[frase].texto);
      }
    }
  });
}

$("#btnLimpa").click(function() {
  $("#usuario").val("");
  $("#password").val("");
  $("#campo-mensagem").val("");
});
