import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
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
}
