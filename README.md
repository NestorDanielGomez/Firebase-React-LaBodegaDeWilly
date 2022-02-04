# Tienda de bebidas - "La Bodela de Willy" - Desarrollada por Nestor Gomez

Proyecto final del curso de React, camada 19770

## Herramientas utilizadas para el desarrollo:

- `React Js` ✔️
- `React Router DOM` ✔️
- `React-Bootstrap` ✔️
- `CSS 3` ✔️
- `Sweet Alert 2` ✔️
- `Firebase` ✔️

In the project directory, you can run:

## `Descripción del proyecto`

El sitio consiste en:

- La pagina principal (se accede tambien haciendo click en el logo del sitio) consiste en un video de presentación y una descripción del tipo de bebidas que se ofrecen, tambien resalta que los envios dentro de las ciudades indicadas son gratuitos.
- Luego tenes las opciondes de acceder a los productos, ya sean todos (PRODUCTOS) o a cada sección en particular (VINOS / DESTILADOS / ESPUMANTES)
  <img src="./public/gifs/Navegacion.gif" />

## `Inicio de sesión`

Para loguearse y poder acceder al carro de compras disponemos de 2 opciones.
1- En el header mientas no estamos registrados nos aparece el texto **"¿todavia no te Logueaste? Crea tu cuenta o accede desde tu Gmail o Facebook"**.Este es un link a la pagina del login.
2- Accedemos tambien al login desde su icono correpondiente al lado del icono del carrito.

En el caso de querer crear una nueva cuenta y no usar google y facebook. En el formulario de login contamos con elk link \*"No tenes cuenta? Crear Cuenta"\* donde nos redirecciona a la pagina para crear un nuevo usuario.

## `Como comprar un producto`

Para buscar un producto podemos optar por las pestañas de **PRODUCTOS** donde muestra todos los productos disponibles, o las pestañas **VINOS-ESPUMANTES-DESTILADOS** que filtran los productos por categoria.

Una vez que elegimos un producto contamos con 2 opciones:
1- El Boton **Agregar:** nos lleva a la pagina del producto donde podemos ver una descripcion mas completa del producto y elegir la cantidad a comprar. Cuando agregamos el producto al carro, lanza un mensaje de advirtiendo que dicho producto fue agregado con exito al carro.
2- El Boton **whatsapp:** nos comunica con el dueño del local con un mensaje personalizado con los datos del producto a consultar

## `Como comprar un producto`

- El Carro de compras es una ruta protegida solo se puede acceder estando registrado (ya sea con la cuenta que creamos, con la cuenta de google o con la de facebook.).
  Una vez registrados podemos ver los productos que tenemos en el carro con su correpondiente cantidad, como asi tambien el valor de la compra.

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
