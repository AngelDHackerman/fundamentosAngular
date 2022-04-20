## fundamentosAngular

## Verificando Node 
  ***usamos el comando*** `node -v` para ver la version de node

## Verificando npm 
  ***usamos el comando*** `npm -v` para verificar que tenemos npm instalado

## Instalando el cliente de comandos de Angular 
  ***comando:*** `npm i -g @angular/cli`

## Verificando la version de angular (mejor si es en la carpeta de nuestro proyecto): 
  `ng version`

## Creando la primer aplicacion: 
 **comando:** `ng new appName`

`Angular routing? Y`  yes para angular routing.


1. nos movemos a la carpeta creada con el nombre que le dimos.
2. `ng serve` ejecuta un servidor para ver nuestro proyecto ya vivo.
  `ng serve -o` *para abrir el navedador por defecto*.
  `ng serve -o --port=3500` *Cambia el puerto donde abrimos la aplicacion*.

## Node Version: .nvmrc debemos AGREGAR el siguiente archivo: 

  `.nvmrc` Si estas trabajando con diferentes versiones de Node, va indicar cual es la version de Node recomendada para correr este proyecto. (COPIA Y PEGA la version de Node que estas usando para el proyecto).


### .browqserlistrc: 

Lista los navegadores que son soportados por angular y alli tambien podemos cambiar las versiones de los navegadores si queremos hacer pruebas en diferentes versiones.


### .editorconfig: 

archivo de configuracion para el editor de codigo. 
**Tip:** instalar el plugin de editorconfig para que este archivo funcione correctamente.




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


## Data binding con ngModel

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
<input type="text" required #ageInput="ngModel" [(ngModel)]="person.age">
<p>Valid: {{ nameInput.valid }}</p>

```


