import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  @Input() img:string = '' //@input -> decorador para recibir datos desde el padre -> no olvidarse de importar Input

  constructor(){}

  ngOnInit(): void {

  }

}
