texto.focus();

var botonEncriptar = document.querySelector("#encriptar");
botonEncriptar.addEventListener("click",function(event){
   event.preventDefault();
   var txe = Array.from(texto.value);
   var arr =" ";
     for(i=0; i< txe.length; i++){

        if (txe[i] == "a"){

           txe[i] = "ai";
            arr += txe[i];

        }
        else if (txe[i] == "e"){

           txe[i] = "enter";
            arr += txe[i]; 

        }
        else if (txe[i] == "i"){

            txe[i] = "imes";
            arr += txe[i];

        }
       else if (txe[i] == "o"){

            txe[i] = "ober";
            arr += txe[i];

        }
        else if (txe[i] == "u"){

            txe[i] = "ufat";
            arr += txe[i];

        } 
        else{
            
         arr += txe[i];

        }
     } 

    document.getElementById("texto1").value = arr;
    document.getElementById("texto").value = "";

});


var botonDesencriptar = document.querySelector("#desencriptar");
botonDesencriptar.addEventListener("click",function(event){
   event.preventDefault();
   var tx = texto.value;
   var txd = tx.replace(/ai/g, "a").replace(/enter/g, "e").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ufat/g, "u");
   texto1.value = txd;
   document.getElementById("texto").value = "";

}); 

var botonCopiar = document.querySelector("#copiar");
botonCopiar.addEventListener("click",function(event){
     event.preventDefault();
     var tc = document.querySelector("#texto1");
     tc.select();
     document.execCommand("copy");
});

