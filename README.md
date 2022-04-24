# fundamentosAngular

## Configuraciones basicas:
### Verificando Node 
  ***usamos el comando*** `node -v` para ver la version de node

### Verificando npm 
  ***usamos el comando*** `npm -v` para verificar que tenemos npm instalado

### Instalando el cliente de comandos de Angular 
  ***comando:*** `npm i -g @angular/cli`

### Verificando la version de angular (mejor si es en la carpeta de nuestro proyecto): 
  `ng version`

### Creando la primer aplicacion: 
 **comando:** `ng new appName`

`Angular routing? Y`  yes para angular routing.


1. nos movemos a la carpeta creada con el nombre que le dimos.
2. `ng serve` ejecuta un servidor para ver nuestro proyecto ya vivo.
  `ng serve -o` *para abrir el navedador por defecto*.
  `ng serve -o --port=3500` *Cambia el puerto donde abrimos la aplicacion*.

### Node Version: .nvmrc debemos AGREGAR el siguiente archivo: 

  `.nvmrc` Si estas trabajando con diferentes versiones de Node, va indicar cual es la version de Node recomendada para correr este proyecto. (COPIA Y PEGA la version de Node que estas usando para el proyecto).


### .browqserlistrc: 

Lista los navegadores que son soportados por angular y alli tambien podemos cambiar las versiones de los navegadores si queremos hacer pruebas en diferentes versiones.


### .editorconfig: 

archivo de configuracion para el editor de codigo. 
**Tip:** instalar el plugin de editorconfig para que este archivo funcione correctamente.



# Angular Basics: 


## String interpolation: 

Es la forma que desde la logica podemos pasar datos a renderizar a nuestro template. 
Es similar a usar el \`${ }\` que usamos en javaScript.
Las propiedads vienen del **app.componet.ts** y deben tener visibilidad public para que funcione.

0. Ejemplos: 

{{ 1 + 1 }}

{{myVariable}}

{{ myFunction() }}



## Property \[Binding\] :

Es la forma en la que podemos MODIFICAR atributos, tambien desde el controlador "app.component.ts" y mandarle esto a los atributos de HTML.

Ejemplo: el tag de una imagen, el hre='' de un link, el estado de un boton.

0. Ejemplos: 

`<button [disabled]="btnDisable">Enviar</button>`

`<input type="text" [value]="name">`


## Event \(Binding\) : 

Asi es como se manejan los eventos en Angular


0. Ejemplos: 

```
<button (click)="onSave()"> Save </button>

<div class="box" (scroll)="scrollPage()">

<div class="box" (scroll)="onScroll($event)">
```

**Importante!!!** Hay que notar que en el evento scroll se le pasa el paramentro `($event)` esto pasa cuando manipulamos eventos diferentes al click en elemntos como los div o los input.

`const element = event.target as HTMLElement;` para los <\div\ >

`const element = event.target as HTMLInputElement;` para los <\input\ >


## Data binding con **NgModel**

Es una fusion entre escuchar un evento (event binding) y setear una propiedad. (propery binding).
Trabaja con funciones NATIVAS de HTML por eso las validaciones se hacen en HTML.

- Sintaxis: 

`[(ngModel)] = "someValue"`

Data binding siempre **esta pendiente de los inputs** viendo el campo es valido o no aparte de sincronizar el valor. 

*es necesario Angular Forms* 

### Es necesario para instalar el NgModel: 

en el **app.modules.ts** hay que escribir lo siguiente: 


`import { FormsModuel } from '@angular/forms';`.


luego en la seccion de **imports {}** agregar el FormsModules para que quede funcionando.



0. Ejemplos: 

```
<p>Nombre: {{ person.name }}</p>
<input type="text" [(ngModel)]="person.name">

<!-- Haciendo validaciones nativas de Html -->

<p>Nombre: {{ person.name }}</p>
<input type="text" required #nameInput="ngModel" [(ngModel)]="person.name">
<p>Valid: {{ nameInput.valid }}</p>


<p>Age: {{ person.age }}</p>
<input type="number" max="18" min="10" required #ageInput="ngModel" [(ngModel)]="person.age">
<p>Valid: {{ ageInput.valid }}</p>

```

# Estructuras de control en Angular

## Uso de *ngIf

Estas son estructuras de control.

*ngIf lo que se hace es tener un elemento y luego una directiva = *ngIf y luego una condicional. 

- Sintaxis: 

`<div *ngIf='show'> text to show </div>`


0. Ejemplos: 


```
<!-- Directivas y condicionales simples -->

<input type="text" required [(ngModel)]="person.name">
<p *ngIf="person.name === 'angel'">Mi nombre es Angel</p>
<p *ngIf="person.name === 'luis'">Mi nombre es Luis</p>

<!-- Usando el bloque Else -->

<input type="text" required [(ngModel)]="person.name">

<p *ngIf="person.name === 'luis' && person.age >= 18; else myBlock">Mi nombre es Luis</p>

<ng-template #myBlock>
  <p>Bloque else</p>
</ng-template>

```


## uso de *ngFor

Otra importate estructura de control es *ngFor, nos SIRVE para iterar un array de elementos, strings, numeros u objetos. 

Los arrays deben estan en el "app.component.ts" para que los podamos usar.

0. Ejemplos: 

```
<!-- Iteracion simple -->

<ul>
  <li *ngFor="let name of yourArrayHere">
    {{ name }}
  </li>
</ul>

<!-- Obeteniendo el indice del array -->

<ul>
  <li *ngFor="let name of yourArrayHere; index as i ">
    {{ i }} {{ name }}
  </li>
</ul>
```


## *ngFor para arrays 

0. Ejemplos: 


```
<div>
  <div *ngFor="let product of products">
    <img [src]="product.image" width="200" alt="gatito">
    <h2>{{ product.price }}</h2>
    <p>{{ product.name }}</p>
  </div>
</div>
```

### Interfaces para tipos de datos: 

Es necesario el uso de la palabra **export** para poder usar esto dentro de otros archivos, por buenas practicas iria en un documento aparte del que estamos trabajando, ejemplo: 'product.model.ts'

```
export interface Product {
  name: string;
  price: number;
  image: string;
  category?: string;    // ? Este es un valor opcional por eso el ? antes de la declaracion
}
```


## uso de ngSwitch

```
<input type="text" required [(ngModel)]="person.name">
<div [ngSwitch]="person.name">
  <p *ngSwitchCase="'angel'">
    La persona es: Angel
  </p>
  <p *ngSwitchCase="'julian'">
    La persona es: Julian
  </p>
  <p *ngSwitchCase="'carlos'">
    La persona es: Carlos
  </p>
  <p *ngSwitchDefault> <!-- Defaul es para cuando no hay match con ninguno de los casos  -->
    No hace match
  </p>
</div>
```


# Estilos

## clases dinamicas: 

Asi se agregan las clases dinamicas: 

```
        <!-- De lado del HTML -->

<input type="text" required #nameInput2="ngModel" [(ngModel)]="person.name">
<p class="message-error" [class.invalid]="nameInput2.invalid">El campo es requerido</p>

      <!-- Luego del lado del SCSS -->

.message-error {
  background: red;
  color: white;
  opacity: 0;   // ? Esto lo hace invisible
  transition: all linear 0.5s;
  &.invalid {   // ! &.invalid, significa que si .message-error tambien tiene la clase .invalid, se rederizara el codigo de abajo
    opacity: 1;
  }
}
```

## Cambiado estilos, directamente: 

```
<label>Nombre</label>

<input type="text" required #nameInput3="ngModel" [(ngModel)]="person.name">

<p [style.font-style]="nameInput3.invalid ? 'italic' : 'normal'"> <!-- Cambias el estilo aqui -->
  Lorem ipsum dolor sit amet consectetur.
</p>    <!-- Operador ternario, si invalid da true entonces: italic, si da false usara normal -->

```


## Cambiando el tamaño de las imagenes con el ngModel: 

```
<div class="estilos">
  <div>
    <p>Cambia el tamaño de la imagen aqui!</p>
    <input type="number" [(ngModel)]="widthImg"> <!--Aqui podemos manipular el tamaño de la imagen -->
  </div>
  <div>
    <img [style.width.px]="widthImg" [src]="person.avatar" >
  </div>
</div>
```


## NgClass

0. Ejemplos de codigo: 

```
<input type="text" required #nameInput4="ngModel" [(ngModel)]="person.name">

<hr class="line-error" 
  [ngClass]="{
    'valid': nameInput4.valid,  <!-- ! Agrega la clase 'valid' si y solo si nameInput4 es valid -->
    'invalid': nameInput4.invalid <!-- ! Agrega la clase 'invalid' si y solo si nameInput4 es invalid -->
  }">

<p class="message-error" [class.invalid]="nameInput4.invalid">
  El campo es requerido
</p>

```


## NgStyle:

0. Ejemplos de codigo:

```
<!-- Del lado del HTML: -->

<div class="styles">
  <div>
    <input type="number" [(ngModel)]="box.width"> <!-- ? Aqui podemos cambiar los valores a nuestro gusto -->
    <input type="number" [(ngModel)]="box.height">
    <input type="color" [(ngModel)]="box.background">
  </div>
  <div>
    <div [ngStyle]="{
      'width.px': box.width, 
      'height.px': box.height,
      'background-color': box.background,
      'display': 'block'
    }">
    </div>
  </div>
</div>


<!-- Del lado de app.component.ts, aqui se le van los valores iniciales -->

box = { 
    width: 100,
    height: 100,
    background: 'red'
  } 

```

