import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Angel';
  age = 18;
  img = 'https://source.unsplash.com/random';
  btnDisabled = true; // ? Esto lo vamos a configurar con Biding de propiedad
  person = {
    name: 'Angel D',
    age: 26,
    avatar: 'https://source.unsplash.com/random',
  }
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
}
