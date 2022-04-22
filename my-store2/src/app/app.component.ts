import { Component } from '@angular/core';
import { Product } from './product.model';    // ? importado la interface desde app.models.ts

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public widhtImg = 80;
  public name = 'Angel';    // ? Por defecto la visibilidad es public
  public age = 26;
  public img = 'https://http.cat/100.jpg';

  btnDisabled = true;
  person = {
    name: 'Angel',
    age: 26,
    avatar: 'https://http.cat/506.jpg'
  }

  register = {
    name: '',
    email: '',
    password: ''
  }

  names:string[] = ['Nico', 'Juli', 'Santiago'];
  newName = '';
  box = {
    width: 100,
    height: 100,
    background: 'red'
  }
  products:Product[] = [    // ? Declaramos que el array products ser de tipo Product
    {
      name: 'EL mejor juguete',
      price: 565,
      image: 'https://placekitten.com/200/300',
      category: 'all'
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: 'https://placekitten.com/g/200/300'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: 'https://placekitten.com/200/300'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: 'https://placekitten.com/g/200/300'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: 'https://placekitten.com/200/300'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: 'https://placekitten.com/g/200/300'
    }
  ]

  toggleButton () {
    this.btnDisabled = !this.btnDisabled; // ! Asi creamos un boton que se enciende y se apaga
  }

  ageIncrease() {
    if (this.person.age < 100 ) {
      this.person.age += 1;
    }
  }

  ageDecrease () {
    if (this.person.age > 0) {
      this.person.age -= 1;
    }
  }

  onScroll (event: Event) { // el parametro es de tipo Event
    const element = event.target as HTMLElement;    // ! Esto es porque es un <div> si fuera un input seria diferente
    console.log(element.scrollTop);   // * leemos en que position esta el scroll
  }

  changeName (event: Event) {
    const element = event.target as HTMLInputElement; // ! Asi se colocan cuando son elementos input
    this.person.name = element.value;   // * Leemos lo que esta en el input y al mismo tiempo cambiamos el valor del person.name
  }

  addName () {
    this.names.push(this.newName);    // * esto agrega el nuevo nombre a la lista.
    this.newName = ''; // * Esto hace que se limpie el input
  }

  removeName (index: number) {
    this.names.splice(index, 1);    // ? para borrar valores de un array es mejor usar SPLICE()
  }

  onRegister () {
    console.log(this.register)
  }

}
