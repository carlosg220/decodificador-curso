
function verificarInput(){
    var textInput = document.getElementById("input-area");
    var btnCript = document.getElementById("btn-cript");
    var btnDesript = document.getElementById("btn-descript");

    if(textInput.value.trim() !== ""){
        btnCript.disabled = false;
        btnDesript.disabled = false;
    } else {
        btnCript.disabled = true;
        btnDesript.disabled = true;
    }
}

function reset(){
   var textArea = document.getElementById('input-area');


   if(textArea.value.trim() !== ""){
        textArea.value = "";
        document.getElementById('output__content__area').innerHTML = '<img src="img/coffe.png" alt="logo-output" class="logo__output">' +
        '<h2 class="text__output__content">' + 'Nenhuma mensagem encontrada ' + '</h2>' +
        '<p class="text__output__content">' + 'Digite um texto que você deseja criptografar ou descriptografar.' + '</p>';
   }

   verificarInput();
}

function criptografar(){
    var text = document.getElementById('input-area').value;
    var criptResult = text.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');

    document.getElementById('output__content__area').innerHTML = '<textarea readonly class="output__area__descript" id="output__area__descript">' + criptResult + '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>' + '<button onclick="reset()" class="btn-reset" id="reset">Resetar</button>'
    
}

function descriptografar(){
    var textOut = document.getElementById('input-area').value;
    var descriptResult = textOut.replace(/ai/g, 'a').replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ober/g, 'o').replace(/ufat/g, 'u');

    document.getElementById('output__content__area').innerHTML = '<textarea readonly class="output__area__descript" id="output__area__descript">' + descriptResult + '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>' + '<button class="btn-reset" id="reset" onclick="reset()">Resetar</button>'
}

function copiar(){
    var textCopy = document.getElementById('output__area__descript');
    textCopy.select();
    document.execCommand('copy');
    document.getElementById('copiar').innerHTML = 'Copiado!!';

}