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
        let totalWidth = left.width() + right.width();
        let dx = (event.pageX - 20) - ((totalWidth) / 2);
        let p = dx / totalWidth;

        console.log({p, dx, totalWidth});

        left.css("flex", `${p + 0.5} 1 0%`);
        right.css("flex", `${0.5 - p} 1 0%`);
      });

      $('.over').on("mouseup", function(/*event*/) {
        $('.over').off("mousemove");
        $('.over').hide();
      });

    });

  }
});
