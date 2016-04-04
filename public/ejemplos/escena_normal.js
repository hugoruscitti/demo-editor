let pilas;

pilas.cuando('inicia', function() {
  pilas.escenas.normal();
  let patito = pilas.actores.patito();
  patito.escala = [2];
});
