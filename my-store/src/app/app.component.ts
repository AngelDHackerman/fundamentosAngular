import { Component } from '@angular/core';

import { Product } from './product.model'; // ! Asi se importan las interfaces desde otros archivos

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  widthImg = 50;
  name = 'Angel';
  age = 18;
  img = 'https://source.unsplash.com/random';
  btnDisabled = true; // ? Esto lo vamos a configurar con Biding de propiedad
  register = { // ? Formulario
    name: '',
    email: '',
    password: '',
  }
  person = {
    name: 'Angel D',
    age: 26,
    avatar: 'https://source.unsplash.com/random',
  }

  names: string [] = ['Angel', 'Nicolas', 'Santiago', 'Alejandro', 'Dario'];
  newName = '';
  box  = {
    width: 100,
    height: 100,
    background: 'red'
  }
  products: Product [] = [
    {
      name: 'El mejor juguete',
      price: 565,
      image: 'https://source.unsplash.com/random',
      category: 'Bizzard', // ? Propiedad opcional (ver el product.model.ts)
    },
    {
      name: 'bicileta nueva',
      price: 356,
      image: 'https://source.unsplash.com/random',
    },
    {
      name: 'collecion de albunes',
      price: 34,
      image: 'https://source.unsplash.com/random',
    },
    {
      name: 'Mis libros',
      price: 23,
      image: 'https://source.unsplash.com/random',
    },
    {
      name: 'El mejor juguete V2.0',
      price: 100,
      image: 'https://source.unsplash.com/random',
    },
    {
      name: 'play station 7',
      price: 56500,
      image: 'https://source.unsplash.com/random',
    },

  ];

  toggleButton () {
    this.btnDisabled = !this.btnDisabled; // ! Asi se crea un button toggle
  }

  increaseAge () {
    this.person.age += 1;
    this.age += 1;
  }

  onScroll (event: Event) { // ? (event: Event) con esto podemos capturar el evento que nos esta enviando Angular con Event
    const element = event.target as HTMLElement; // ? el "target" es el elemento HTML  y esto significa que se el evento se va a comportar como un HTML Element
    console.log(element.scrollTop); // ? con esto vemos en que posicion esta el scroll.
  }

  changeName (event: Event) {
    const element = event.target as HTMLInputElement; // ? el "target" se comportara como un input, osea tendra valores input
    this.person.name = element.value;
  }

  addName () {
    this.names.push(this.newName);
    this.newName = ''; // ! Asi limpiamos el input para ingreasr un nuevo nombre;
  }

  deleteName (index: number) {
    this.names.splice(index, 1);
  }

  onRegister () {
    console.log(this.register)
  }
}
