import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ["spliter"],

  didInsertElement() {

    this.$().on("mousedown", (e) => {
      e.preventDefault();

      let left = $(this.get('left'));
      let right = $(this.get('right'));

      /* Si alguno de los bloques laterales desaparece evita iniciar el drag */
      if (!left[0] || !right[0]) {
        return;
      }

      $('.over').show();

      //let initialX = event.pageX;

      $('.over').on("mousemove", function(event) {
        let dx = -event.pageX;
        let totalWidth = left.width() + 10 + right.width();
        let p = (dx / totalWidth / 2);
        console.log({totalWidth, dx});

        console.log(p, 1 - p);

        left.css("flex", `${1-p} 1 0%`);
        right.css("flex", `${p} 1 0%`);
      });

      $('.over').on("mouseup", function(/*event*/) {
        $('.over').off("mousemove");
        $('.over').hide();
      });

    });

  }
});
