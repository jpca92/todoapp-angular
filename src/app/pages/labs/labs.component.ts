import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {

  welcome = 'Hola';
  tasks = [
    'Instalar angular cli',
    'crear proyecto',
    'crear componentes'
  ];
  name= 'Usuario';
  age= 20;
  disabled = true;

  person={
    name:'User',
    age: 20,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png' 
  }

  clickHandler(){
    alert('Me diste click')
  }

  changeHandler(event: Event){
    console.log(event)

  }

}
