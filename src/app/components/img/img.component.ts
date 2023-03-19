import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  @Input() img:string = '' //@input -> decorador para recibir datos desde el padre -> no olvidarse de importar Input
  imgDefault = './assets/images/bike.jpg'

  @Output() loaded = new EventEmitter<string>(); //enviar info al padre ->loaded -> variable que debe llamarese igual en el padre, se usa en la etiqueta app-img ->

  constructor(){}

  ngOnInit(): void {

  }

  imgError(){
    this.img = this.imgDefault;
  }
  imgLoaded(){
    console.log('loaded log hijo')
    this.loaded.emit(this.img); // asi se emite un evento al padre
  }

}
