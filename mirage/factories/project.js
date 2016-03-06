import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  title: function(i) {
     return 'project ' + i + ' ' + faker.name.firstName();
  },
  initialCode: `// comienzo del juego

pilas.fondos.Plano();

/*
class Game {

    iniciar() {
        var canvas = document.getElementById('canvas');
        var context = canvas.getContext('2d');

        context.font = '38pt Arial';
        context.fillStyle = 'cornflowerblue';
        context.strokeStyle = 'blue';

        context.fillText("Hello Canvas", canvas.width/2 - 150, canvas.height/2 + 15);
        context.strokeText("Hello Canvas", canvas.width/2 - 150, canvas.height/2 + 15 );

    }
}

var game = new Game()
game.iniciar();
*/
`});
