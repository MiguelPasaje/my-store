import { Component, OnInit,Input,Output,EventEmitter,OnChanges, AfterViewInit,OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

 /*  counter = 0 */
  counterFn: number | undefined;



  //@Input() img:string = '' //@input -> decorador para recibir datos desde el padre -> no olvidarse de importar Input

  img:string = ''

  @Input('img')
  set changeImg(newImg:string){
    this.img = newImg
    console.log('change just img => ' , this.img )
  }

  @Input() alt:string = ''
  imgDefault = './assets/images/bike.jpg'

  @Output() loaded = new EventEmitter<string>(); //enviar info al padre ->loaded -> variable que debe llamarese igual en el padre, se usa en la etiqueta app-img ->

  constructor(){
    //bebore render
    console.log('constructor','imageValue => ' , this.img)
  }

  ngOnChanges(changes: SimpleChanges){
    //before render
    //changes inputs -- times
    console.log('ngOnChanges','imageValue => ' , this.img)
    console.log(changes,'changes')
  }

  ngOnInit(): void {
    //before render
    console.log('ngOnInit','imageValue => ' , this.img)
    // async - fetch -- once time
/*
    this.counterFn =  window.setInterval(()=>{
      this.counter += 1;
      console.log('run counter')
    },1000) */



  }
  ngAfterViewInit(): void {
    //after render
    //handler children
    console.log('ngAfterViewInit ')
  }

  ngOnDestroy(): void {
    // delete component
    console.log('OnDestroy')
   /*  window.clearInterval(this.counterFn)
 */
  }

  imgError(){
    this.img = this.imgDefault;
  }
  imgLoaded(){
    console.log('loaded log hijo')
    this.loaded.emit(this.img); // asi se emite un evento al padre
  }

}
