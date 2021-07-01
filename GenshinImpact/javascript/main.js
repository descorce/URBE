class IndexForSiblings{
  static get(el){
      let children = el.parentNode.children;

      for(let i = 0;i < children.length;i++){
          let child = children[i];
          if(child == el) return i;
      }
  }
}

class Slider{
  constructor(selector,movimiento=true){
      this.move = this.move.bind(this);
      this.moveByButton = this.moveByButton.bind(this);
      this.slider = document.querySelector(selector);
      this.itemsCount = this.slider.querySelectorAll('.imgs-container > *').length;
      this.interval = null;
      this.contador = 0;
      this.movimiento = movimiento;


      this.start();
      this.buildControls();
      this.bindEvents();
  }

  start(){
      if(!this.movimiento) return;
      this.interval = window.setInterval(this.move,3000);
  }

  restart(){
      if(this.interval) window.clearInterval(this.interval);
      this.start();
  }

  buildControls(){
      for(let i = 0; i< this.itemsCount; i++){
          let control = document.createElement('li');
          if(i == 0) control.classList.add('active');
          this.slider.querySelector('.controls ul').appendChild(control);
      }
  }

  bindEvents(){
      this.slider.querySelectorAll('.controls li').forEach(element => {
          element.addEventListener('click',this.moveByButton);
      });
  }

  moveByButton(ev){
      let index = IndexForSiblings.get(ev.currentTarget);
      this.contador = index;
      this.moveTo(index);
      this.restart();
  }

  move(){
      this.contador++;
      if(this.contador > this.itemsCount - 1){
          this.contador = 0;
      }
      this.moveTo(this.contador);
  }

  moveTo(index){
      let left = index * 100;

      this.resetIndicator();
      this.slider.querySelector('.controls li:nth-child('+(index + 1)+')').classList.add('active');

      this.slider.querySelector('.imgs-container').style.left = `-${left}%`;
  }

  resetIndicator(){
      this.slider.querySelectorAll('.controls li.active').forEach(element => element.classList.remove('active'));
  }

}
(function(){

  new Slider('.slider'/* ,false */);

})();

document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();
  return false;
});
