import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-store2';
  public name = 'Angel';    // ? Por defecto la visibilidad es public
  public age = 26;
  public img = 'https://http.cat/100.jpg';

  btnDisabled = true;
  person = {
    name: 'Angel',
    age: 26,
    avatar: 'https://http.cat/506.jpg'
  }

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

}
