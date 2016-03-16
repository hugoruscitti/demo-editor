var fs = require('fs')
var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

main();

/*
*/

function reemplazar_y_copiar(archivo_fuente, archivo_destino, nombre) {
  fs.readFile(archivo_fuente, 'utf8', function(err, data) {

    if (err) {
      return console.log(err);
    }

    var result = data.replace(/codigo/g, nombre);

    fs.writeFile(archivo_destino, result, 'utf8', function (err) {
       if (err) {
         return console.log(err);
       } else {
         console.log(" - Creando el archivo:", archivo_destino);
       }
    });

  });

}


function crear_ejemplo(nombre, callback) {
  reemplazar_y_copiar("pilasengine/utils/plantillas/codigo.js", "pilasengine/ejemplos/src/" + nombre + ".js", nombre);
  reemplazar_y_copiar("pilasengine/utils/plantillas/simple.html", "pilasengine/ejemplos/" + nombre + ".html", nombre);

  setTimeout(function() {
    console.log("Se ha creado correctamente el ejemplo ", nombre);
    callback.call();
  }, 2000);
}


function main() {

  rl.setPrompt('¿Cómo se llamará el ejemplo?: ');
  rl.prompt();

  rl.on('line', function(line) {

      if (line.length > 3) {
        crear_ejemplo(line, function() {
          rl.close();
        });
      } else {
        console.log("El nombre del ejemplo debe tener más de 3 letras");
        rl.prompt();
      }

  }).on('close',function(){
      process.exit(0);
  });

}
