---
description: Notas del curso práctico de React JS de Platzi
---

# CURSO PRACTICO DE REACT JS

## ¿Qué es React JS?

React es una librería o mejor conocida como biblioteca de JS para construir interfaces de usuario, esta es su única finalidad, por este motivo es muy amada por la comunidad de frontend developers. React está basado en componentes, esto nos permite separar cada uno de los elementos de nuestra página web en pequeños pedazos llamados componentes y después proceder a conectarlos para crear sorprendentes apps.

React se puede utilizar en la web, también se pueden crear aplicaciones para Windows, MAC o Linux, además de crear aplicaciones moviles utilizando React Native. 

![](.gitbook/assets/react.png)

### ¿Dónde nace React?

Remontando al año 2013 dentro de Facebook, ahí nace React. React nace como una necesidad para solventar una pequeña particularidad que era Timeline hasta llegar al punto que hoy podemos observar en dicha red social. Además de esto, se empezó a implementar React en Instagram y cuando se dieron cuenta que habían creado un buen producto se liberó a la comunidad y así es cómo ha llegado a los desarrolladores. Es importante aclarar que Facebook está detrás de React, actualizandolo y añadiendo nuevas funcionalidades \(los Hooks siendo la más destacable\), esto genera confianza entre la comunidad de desarrolladores para trabajar con esta librería y a los nuevos developers para aprender a usarla. 



## DOM, Virtual DOM y React DOM

### ¿Qué es el virtual DOM?

Es una herrmaienta que implementa React para darle performance y velocidad a nuestros desarrollos, esto significa que tenemos una copia fiel del **REAL DOM.** 

Tenemos una aplicación hecha con React la cuál tiene una serie de elementos que debemos llenar, en nuestro caso será nuestro perfil, imaginemos que debemos llenar cada uno de estos y por cada uno de los elementos que vamos a actualizar nuestro **DOM** se debía refrescar totalmente \(así es como actualmente el trabaja el **DOM**\), ****pero con React y el virtual DOM ahora tenemos esta copia del **DOM** que nos permite identificar cada uno de estos elementos y saber cuál ha sido el que se actualizó. 

Ya que “DOM virtual” es más un patrón que una tecnología específica, las personas a veces le dan significados diferentes. En el mundo de React, el término “DOM virtual” es normalmente asociado con [elementos de React](https://es.reactjs.org/docs/rendering-elements.html) ya que son objetos representando la interfaz de usuario. Sin embargo, React también usa objetos internos llamados “fibers” para mantener información adicional acerca del árbol de componentes. Éstos pueden ser también considerados como parte de la implementación de “DOM virtual” de React. 

#### ¿Es el Shadow DOM lo mismo que el DOM virtual? <a id="es-el-shadow-dom-lo-mismo-que-el-dom-virtual"></a>

No, son diferentes. El Shadow DOM es una tecnología de los navegadores diseñada principalmente para limitar el alcance de variables y CSS en componentes web. El DOM virtual es un concepto que implementan bibliotecas en JavaScript por encima de las APIs de los navegadores.

## Create React APP y Tipos de Componentes

### Create React App

**Create React App** is an officially supported way to create single-page React applications. It offers a modern build setup with no configuration.

En español y en palabras un poco más coloquiales, **Create React App** es un comando el cuál nos genera el mejor entorno de desarrollo posible para crear una aplicación con React, utilizando las últimas actualizaciones de JavaScript y trayendo consigo una configuración que facilita el desarrollo de nuestras apps. Para crear un proyecto se ejecuta: 

```text
npx create-react-app my-app
cd my-app
npm start
```

> Note:
>
> Cabe aclarar que para esto es necesario tener instalado node, dado que npx es una herramienta de ejecución de paquetes compatible con NodeJS a partir de su versión 5.2

Como sabemos de antemano, **Create React App** nos crea una configuración para trabajar con React en el frontend, dicha configuración no involucra el _backend_ en ningún momento, por lo cuál es posible trabajar con cualquier tecnología backend \(NodeJS, PHP, Django, Ruby, etc\). 

Finalmente, como en la mayoría de tecnologías, la mejor fuente de información es la documentación. Además, la documentación de Create React App es muy amigable y te ayudará en la mayoría de dudas que tengas. Para digirte a ella puedes hacer click [aquí](https://create-react-app.dev/docs/getting-started).

Ahora, al ejecutar el comando **Create React App** nuestro directorio en VS Code se verá de la siguiente forma: 

![Configuraci&#xF3;n inicial Create React App](.gitbook/assets/selection_029.png)

En estos momentos solo nos va a interesar la carpeta src \(sources\), en dicha carpeta vamos a crear una nueva carpeta llamanda **components** y en esa vamos  a crear nuestros componentes. 

### Componentes con estado y sin estado

Una característica de los componentes, es su estado, el cual determina tanto la información que se muestras en pantalla, hasta como se representa la información, de esta forma, el estado puede cambiar la apariencia gráfica de un componente y la forma en que se muestra la información. Un ejemplo básico de un estado, es, por ejemplo, un formulario que puede pasar de modo lectura a escritura.

### Component Stateul

Este componente es particularmente conocido como la estructura de clase, nos va a permitir tener ciclo de vida y estado, además de esto es el componente más robusto que tiene React. 

Para construirlo, primeramente identficamos nuestra carpeta de **components,** nos ubicamos allí y dentro de ella creamos un documento `Stateful.js.`

> Nota:
>
> Los componentes en React empiezan con mayúscula, es una convención adoptada por la comunidad dado que los componentes que empiezan con minúscula serían interpretados por React como elementos del DOM.

![Component Stateful](.gitbook/assets/r1.png)

Como es posible observar, Stateful es un **componente con estado**, este componente tiene un estado asociado el cual se manipula a medida que el usuario interactúa con la aplicación. 

Para entender un poco mejor que es lo que significa cada uno de las líneas que conforman este componente, recomiendo ir a la documentación, a la cuál puedes acceder [aquí](https://es.reactjs.org/docs/state-and-lifecycle.html)

### Component Stateless

Este es un componente más sencillo que el anterior. Para crearlo, empezaremos importando React, y seguimos con la creación de nuestra arrow function que retorna directamente el elemento HTML que necesitamos. Una vez tenemos dichos elementos, exportamos nuestro componente. 

![Stateless Component](.gitbook/assets/r2.png)

Este tipo de componentes son los más simples, pues solo se utilizan para representar la información que les llega como parámetros. En algunas ocasiones, estos componentes pueden transformar la información con el único objetivo de mostrarla en un formato más amigable, sin embargo, estos compontes no consumen datos de fuentes externas ni modifican la información que se les envía.

## JSX: JavaScript +HTML

### [¿Qué es JSX?](https://es.reactjs.org/docs/introducing-jsx.html)

JSX es una extensión de sintaxis de JavaScript que nos permite mezclar JS y HTML \(XML\), de ahí su nombre JavaScript XML.

Esta extensión nos facilita la vida pues nos permite escribir un código más limpio, sin tantas repeticiones \(DRY\), y con muy pocos factores o condiciones a tener en cuenta.

### ¿Por qué JSX?

React acepta el hecho de que la lógica de renderizado está intrínsecamente unida a la lógica de la interfaz de usuario: cómo se manejan los eventos, cómo cambia el estado con el tiempo y cómo se preparan los datos para su visualización.

En lugar de separar artificialmente _tecnologías_ poniendo el maquetado y la lógica en archivos separados, React separa _intereses_ con unidades ligeramente acopladas llamadas “componentes” que contienen ambas. Volveremos a los componentes en [otra sección](https://es.reactjs.org/docs/components-and-props.html), pero si aún no te sientes cómodo maquetando en JS, [esta charla](https://www.youtube.com/watch?v=x7cQ3mrcKaY) podría convencerte de lo contrario.

React [no requiere](https://es.reactjs.org/docs/react-without-jsx.html) usar JSX, pero la mayoría de la gente lo encuentra útil como ayuda visual cuando trabajan con interfaz de usuario dentro del código Javascript. Esto también permite que React muestre mensajes de error o advertencia más útiles.

### Primer acercamiento a JSX

A la hora de crear nuestros componentes, estos pueden llevar la extensión .JS y funcionar completamente, pero es igual de viable crearlos con la extensión .JSX. En el último caso, nuestro editor de código detectará que estamos trabajando con archivos de JavaScript, pero en particular con archivos de React.

> Nota:
>
> React utiliza clases, vamos a trabajar con clases dentro de nuestro proyecto. Es importante saber que class es una palabra reservada dentro de JavaScript, por lo cuál utilizaremos className en lugar de class.

![Componente de ejemplo](.gitbook/assets/r3.png)

JSX presenta una sintáxis un tanto peculiar. Como podemos observar, este componente **no tiene estado**. Además, vemos que es posible con el uso de `{}` utilizar herramientas propias de JavaScript, tal como llamar una variable o incluso manejar condicionales para decidir si mostrar o no un elemento en el HTML. 

Ahora nos interesa conectar nuestro componente a nuestra aplicación y verlo en en browser. Para esto, buscaremos un archivo llamando `index.js` en el cuál se encuentra toda la configuración de nuestro proyecto. En dicho documento vamos a importar nuestro componente, por defecto dentro de las etiquetas de **React.StrictMode** estará el componente _App_, así que cambiaremos este por nuestro componente _HolaMundo_.

![index.js](.gitbook/assets/r4.png)

Y finalmente, así debería verse nuestro componente en el navegador:

![Componente HolaMundo en el navegador](.gitbook/assets/selection_031.png)

Finalmente, para complementar la información de JSX, se deja el link para acceder a la [documentación oficial](https://es.reactjs.org/docs/introducing-jsx.html) :\) .

## ¿Qué son los métodos del ciclo vida?

Todos los componentes en React pasan por una serie de fases que generalmente se denominan “Ciclo de Vida del componente” es un proceso que React hace en cada componente, en algunos casos no podemos verlos como un bloque de código y en otros podemos llamarlos en nuestro componente para asignar una actividad según sea el caso necesario.

Los componentes en react pasan por un Montaje, Actualización, Desmontaje y Manejo de errores.

### Montaje:

En esta fase nuestro componente se crea junto a la lógica y los componentes internos y luego es insertado en el DOM.

### Actualización:

En esta fase nuestro componente está al pendiente de cambios que pueden venir a través de un cambio en “state” o “props” esto en consecuencia realizan una acción dentro de un componente.

### Desmontaje:

En esta etapa nuestro componente “Muere” cuando nosotros no necesitamos un elemento de nuestra aplicación, podemos pasar por este ciclo de vida y de esta forma eliminar el componente de la representación que tiene en el DOM.

### Manejo de Errores:

Cuando nuestro código se ejecuta y tiene un error, podemos entrar en una fase donde se puede entender mejor qué está sucediendo con la aplicación.

Algo que debemos tener en cuenta es que un componente NO debe pasar por toda las fases, un componente puede ser montado y desmontado sin pasar por la fase de actualización o manejo de errores.

Ahora que entendemos las fases que cumple el ciclo de vida en React vamos a entrar a detalle en cada uno de ellos para ver qué piezas de código se ejecutan y nos ayudarán a crear aplicaciones en React pasando por un ciclo de vida bien estructurado.

### Montado:

**Constructor\(\)**

Este es el primer método al que se hace un llamado, aquí es donde se inicializan los métodos controladores, eventos del estado.

**getDerivedStateFromProps\(\)**

Este método se llama antes de presentarse en el DOM y nos permite actualizar el estado interno en respuesta a un cambio en las propiedades, es considerado un método de cuidado, ya que su implementación puede causar errores sutiles.

**render\(\)**

Si queremos representar elementos en el DOM en este método es donde se escribe esta lógica, usualmente utilizamos JSX para trabajar y presentar nuestra aplicación.

**ComponentDidMount\(\)**

Este método se llama inmediatamente que ha sido montado en el DOM, aquí es donde trabajamos con eventos que permitan interactuar con nuestro componente.

#### Actualización:

getDerivedStateFromProps\(\)

Este método es el primero en ejecutarse en la fase de actualización y funciona de la misma forma que en el montaje.

**shouldComponentUpdate\(\)**

Dentro de este método se puede controlar la fase de actualización, podemos devolver un valor entre verdadero o falso si queremos actualizar o no el componente y es utilizado principalmente para optimización.

**render\(\)**

Se llama el método render que representa los cambios en el DOM.

**componentDidUpdate\(\)**

Este método es invocado inmediatamente después de que el componente se actualiza y recibe como argumentos las propiedades y el estado y es donde podemos manejar nuestro componente.

#### Desmontado

**componentWillUnmount\(\)**

Este método se llama justo antes de que el componente sea destruido o eliminado del DOM.

#### Manejo de Errores:

**getDerivedStateFromError\(\)**

Una vez que se lanza un error este es el primer método que se llama, el cual recibe el error como argumento y cualquier valor devuelto en este método es utilizado para actualizar el estado del componente.

**componentDidCatch\(\)**

Este método es llamado después de lanzarse un error y pasa como argumento el error y la información representada sobre el error.

Ahora que entendemos cada una de las fases que tiene el ciclo de vida de react, podemos utilizarlas según sea necesario en nuestra aplicación y de esta forma crear las interacciones que necesitemos.



![react-cycle.png](https://static.platzi.com/media/user_upload/react-cycle-d59109ef-5760-475a-a0ce-a2d990c0493e.jpg)

## Props: Comunicación entre componentes

Así como las funciones en JS reciben parámetros, nosotros podemos pasar propiedades a nuestros distintos componentes, indiferente si es de tipo clase o solamente presentacional. Estas propiedades son solo de lectura, y en dado caso que deseamos cambiarlas o modificarlas, es necesario instanciarlas en una nueva variable. 

Teniendo en cuenta esto, vamos a hacer un pequeño ejercicio en el cuál quedará más claro como pasamos propiedades a nuestros componentes. Crearemos un nuevo componente llamado Button

![Componente Button](.gitbook/assets/r5.png)

Existen dos formas para trabajar con las props:

La primera consiste en mandarle nuestras props desde Index.js, como se muestra a continuación: 

![index.js](.gitbook/assets/r6.png)

Vemos que en este caso, mandamos el `text="Click"` que vendrian siendo las props para nuestro componente _Button._

\_\_

La otra forma consiste en destructurar los datos, lo cuál significa que extraemos el valor de text de las props. Para que quede esto claro, crearemos otro botón en nuestro componente _Button_

\_\_

![Componente Button actualizado](.gitbook/assets/r7.png)

Como podemos observar, el segundo botón presenta una sintaxis un tanto más amigable. Sin embargo, para poder realizarlo es necesario tener claro el concepto de desestructuración de objetos. Si no lo tienes claro o quieres reforzar, puedes ir al curso de [fundamentos de JS](https://platzi.com/clases/fundamentos-javascript/).

## State-Events

