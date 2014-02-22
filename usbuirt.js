exports.action = function(data, callback, config){
 
 var exec = require('child_process').exec;
 var commande = data.code;
 var resultat = data.faire;
 resultat += ' ' + data.surquoi;
 var process = '%CD%/plugins/usbuirt/bin/uutx.exe'; 
 process +=  ' "'+ commande + '"';
 
 var child = exec(process,
   function (error, stdout, stderr) {
    console.log(resultat);  
   });
 callback({'tts': resultat}); 
 //callback({'tts': "Reçu !"});
}
