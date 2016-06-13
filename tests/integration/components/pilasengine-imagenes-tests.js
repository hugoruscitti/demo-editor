import { moduleForComponent, test } from 'ember-qunit';
import createPilasTest from "../../helpers/createPilasTest";

moduleForComponent('demo', 'Integration | Component | x-canvas | imagenes', {
  integration: true
});

test('las imágenes cargadas se pueden listar y consultar', function(assert) {
  return createPilasTest(this, (pilas, resolve) => {

    //let actor = pilas.actores.actor();

    assert.ok(pilas.imagenes.obtener_como_lista(), "Existe el método para listar todas las imágenes.");
    assert.ok(pilas.imagenes.obtener_como_lista().length, "Retorna una lista como se espera.");

    assert.equal(pilas.imagenes.existe_imagen('data:sin_imagen.png'), true, "Se puede cargar la imagenen 'data:sin_imagen.png'");
    assert.equal(pilas.imagenes.existe_imagen('data:pepepe.png'), true, "Se puede cargar la imagenen 'data:sin_imagen.png'");

    resolve({});
  });

});
