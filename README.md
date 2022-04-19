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

<button (click)="onSave()">
  Save
</button>

```