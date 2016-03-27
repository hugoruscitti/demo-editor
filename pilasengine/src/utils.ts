class Utils {
  pilas: Pilas;

  constructor(pilas: Pilas) {
    this.pilas = pilas;
  }

  /**
   * Concatena dos rutas de manera similar a la función ``os.path.join`` de python.
   */
  join(a: string, b: string) {
    let path = [a, b].map(function (i) {
      return i.replace(/(^\/|\/$)/, "");
    }).join("/");

    return path;
  }

  /**
   * Intentan autocompletar el nombre de una función, método o varible.
   *
   * Esta función se utiliza dentro del editor de pilas-engine y sirve
   * para que el intérprete interactivo retorne información de la API
   * mientras se escribe.
   */
  autocompletar(prefijo:string) {
    console.log("CASO: ", prefijo);

    if (prefijo.length === 0) {
      return [];
    }

    function comienza_con(cadena:string, stringBuscada:string) {
      return cadena.indexOf(stringBuscada) === 0;
    }

    function obtener_atributos(objeto:any) {
      let atributos:Array<String> = [];

      for (let i in objeto) {
        atributos.push(i);
      }

      return atributos;
    }

    if (!prefijo) {
      return [];
    } else {
      let values:Array<String> = [];
      let partes = prefijo.split(".");

      if (partes.length === 1) {

        return obtener_atributos(window).filter(function (e:string) {
          return comienza_con(e, prefijo.toLowerCase());
        });

      } else {
        //console.log(prefijo, partes);

        let inicio = partes.slice(0, partes.length-1).join(".")
        let prefijo = partes[partes.length-1];

        if (partes[0] == "pilas") {
          partes[0] = "this.pilas";
        }

        try {
          return obtener_atributos(eval.call(window, inicio)).filter(function (e:string) {
            return comienza_con(e, prefijo.toLowerCase());
          });
        } catch (e) {
          console.info(e);
          return [];
        }
      }
    }
  }
}
