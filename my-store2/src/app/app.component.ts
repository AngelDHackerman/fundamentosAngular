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

  btnDisable = true;
}
