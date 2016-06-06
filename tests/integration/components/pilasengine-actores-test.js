import { moduleForComponent, test } from 'ember-qunit';
import createPilasTest from "../../helpers/createPilasTest";

moduleForComponent('demo', 'Integration | Component | x-canvas', {
  integration: true
});

test('puede crear un actor personalizado', function(assert) {
  return createPilasTest(this, (pilas, resolve) => {
    let mensaje_error_esperado = /Solo se admiten clases como parámetro./;

    assert.throws(() => {
      pilas.actores.vincular();
    }, mensaje_error_esperado, "Laza un error si no se especifica una clase.");

    assert.throws(() => {
      pilas.actores.vincular("cadena");
    }, mensaje_error_esperado, "También lanza error si no se envía una clase.");

    resolve({});
  });

});

test('puede crear un actor', function(assert) {

  return createPilasTest(this, (pilas, resolve) => {
    let actor = pilas.actores.actor();
    assert.equal(actor.x, 0, "El actor está en la posición inicial X=0.");
    assert.equal(actor.y, 0, "El actor está en la posición inicial Y=0.");

    setTimeout(resolve, 500);
  });

});


test('puede crear un actor patito', function(assert) {

  return createPilasTest(this, (pilas, resolve) => {
    let patito = pilas.actores.patito();
    assert.equal(patito.x, 0, "El actor está en la posición inicial.");
    patito.x = 100;

    setTimeout(resolve, 500);
  });

});


test('puede autocompletar', function(assert) {

  return createPilasTest(this, (pilas, resolve) => {
    assert.deepEqual(pilas.utils.autocompletar(""),                  [], "Retorna vacío si no especifica prefijo.");
    assert.deepEqual(pilas.utils.autocompletar("noexiste"),          [], "Retorna vacío si la variables es incorrecta.");
    assert.deepEqual(pilas.utils.autocompletar("pilasen"),           ['pilasengine'], "Autocompleta pilasengine.");
    assert.deepEqual(pilas.utils.autocompletar("PiLASEN"),           ['pilasengine'], "Autocompleta incluso ignorando mayúsculas o minúsculas.");
    //assert.deepEqual(pilas.utils.autocompletar("pilas.actores.pat"), ['pilas.actores.patito'], "Autocompleta funciones dentro de un objeto.");
    //assert.deepEqual(pilas.utils.autocompletar("pilas.acto"),        ['pilas.actores'], "Autocompleta funciones dentro de un objeto.");

    setTimeout(resolve, 2000);
  });

});


test('Puede inicializar y crear actores', function(assert) {
  return createPilasTest(this, (pilas, resolve) => {
    assert.ok(pilas.escenas.normal, "Existe la escena normal.");
    assert.ok(!pilas.escenas.norsdsdmal, "No existe una escena norsdsdmal.");
    pilas.reiniciar();

    assert.equal(pilas.obtener_cantidad_de_actores(), 1, "Luego de reiniciar vuelve a haber un solo actor (el fondo).");

    setTimeout(resolve, 2000);
  });
});


test('Puede cambiar propiedades de los actores', function(assert) {
  return createPilasTest(this, (pilas, resolve) => {
    pilas.reiniciar();

    var patito = pilas.actores.patito();

    assert.equal(patito.x, 0, "El actor está en el centro de la pantalla.");
    assert.equal(patito.y, 0, "El actor está en el centro de la pantalla.");


    assert.equal(patito.rotacion, 0, "El actor está sin rotacion.");
    patito.rotacion = 180;
    assert.equal(patito.rotacion, 180, "Pudo cambiar de rotación.");
    patito.rotacion = 0;
    assert.equal(patito.rotacion, 0, "Y pudo restaurar la rotación.");

    setTimeout(resolve, 2000);
  });
});


test('Puede aplicar interpolaciones a los actores', function(assert) {

  return createPilasTest(this, (pilas, resolve) => {
    pilas.reiniciar();

    let patito = pilas.actores.patito();
    patito.escala = [2, 1, 2];

    setTimeout(function() {
      //assert.equal(patito.escala, 2, "Luego de unos segundos escaló correctamente.");

      patito.rotacion = [180];

      setTimeout(function() {
        assert.equal(patito.rotacion, 180, "Puede dar media vuelta.");
        patito.escala = [0];

        setTimeout(function() {
          assert.equal(patito.escala, 0, "Puede cambiar la escala a 0.");
          resolve();
        }, 1000);

      }, 1000);

    }, 2000);

  });
});

test('test-iniciar: Puede inicializar y crear actores', function(assert) {

  return createPilasTest(this, (pilas, resolve) => {
    pilas.reiniciar();

    assert.equal(pilas.obtener_cantidad_de_actores(), 1, "Hay un solo actor en pantalla (el fondo).");

    var patito = pilas.actores.patito();
    assert.ok(patito, "Pudo crear correctamente al actor parito.");

    assert.equal(pilas.obtener_cantidad_de_actores(), 2, "Ahora hay dos, el fondo y el patito.");

    pilas.reiniciar();
    assert.equal(pilas.obtener_cantidad_de_actores(), 1, "Luego de reiniciar vuelve a haber un solo actor (el fondo).");

    resolve();
  });
});
