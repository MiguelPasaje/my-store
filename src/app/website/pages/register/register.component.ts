/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { OnExit } from 'src/app/guards/exit.guard';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnExit {


  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void {
  }

  onExit(){
    const rta = confirm('seguro deseas Salir? (desde component register)')
    return rta
  }

}
