import { moduleForComponent, test } from 'ember-qunit';
import createPilasTest from "../../helpers/createPilasTest";

moduleForComponent('demo', 'Integration | Component | x-canvas | etiquetas', {
  integration: true
});

test('el actor tiene etiquetas iniciales', function(assert) {
  return createPilasTest(this, (pilas, resolve) => {

    let actor = pilas.actores.actor();

    assert.ok(actor.etiquetas, "Existe el objeto etiquetas dentro del actor.");

    assert.equal(actor.etiquetas.tiene_etiqueta('actor'), true, "Tiene la etiqueta de la clase.");
    assert.equal(actor.etiquetas.tiene_etiqueta('ejemplo'), false, "No tiene otra etiqueta incorrecta.");
    assert.deepEqual(actor.etiquetas.obtener_como_lista(), ['actor'], "Puede retornar las etiquetas como una lista.");
    assert.equal(actor.etiquetas.obtener_cantidad(), 1, "Tiene exactamente dos etiquetas.");

    assert.equal(actor.tiene_etiqueta('actor'), true, "El método de consulta también funciona directamente en el actor.");
    assert.equal(actor.obtener_cantidad_de_etiquetas(), 1, "Solo tiene una etiqueta.");

    /* Si agrega otra etiqueta ... */
    actor.agregar_etiqueta('protagonista');
    assert.equal(actor.etiquetas.obtener_cantidad(), 2, "Luego de agregar la etiqueta protagonista ya son dos las etiquetas.");

    resolve({});
  });

});
