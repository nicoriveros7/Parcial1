<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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
=======
# Proyecto de Actividades Deportivas

## Descripción

Este proyecto es una aplicación web que permite a los usuarios visualizar sus actividades deportivas.

## Pasos para Ejecutar la Aplicación

1. Instala las librerías necesarias para el proyecto:
   npm install bootstrap
   npm install react-i18next i18next

2. Inicia la aplicación:
   npm start

## Reporte de Decisiones y Proceso de Desarrollo

### Decisiones de Diseño

1. **Estructura de la Aplicación**: Opté por utilizar una arquitectura basada en componentes de React como las cards para facilitar la reutilización y el mantenimiento del código. La aplicación está compuesta por varios componentes, cada uno con su propia responsabilidad

2. **Internacionalización**: Para hacer la aplicación accesible a un público más amplio, implementé la biblioteca `react-i18next`, que permite ofrecer opciones en español e inglés.

3. **Interfaz de Usuario**: Utilicé `Bootstrap` para asegurar un diseño responsivo y amigable. Esto simplificó la creación del layout, minimizando la necesidad de escribir mucho CSS personalizado y aprovechando los componentes listos para usar de Bootstrap.

4. **Manejo de Estado**: Hice uso del hook `useState` para manejar el estado de los datos del usuario y las actividades.

### Proceso de Desarrollo

1. **Planificación**: Comencé el proyecto definiendo los requisitos y funcionalidades clave, que incluían la visualización de actividades deportivas y la funcionalidad de inicio de sesión para los usuarios.

2. **Configuración del Entorno**: Configuré el entorno de desarrollo utilizando Create React App, que proporciona una configuración inicial óptima y rápida para empezar a construir aplicaciones en React.

3. **Desarrollo de Componentes**:

   - **Login.js**: Desarrollé el componente de inicio de sesión, que permite a los usuarios autenticarse y acceder a su perfil.
   - **Home.js**: Este es el componente principal que muestra las actividades del usuario. Implementé la lógica para filtrar las actividades por tipo (ciclismo, correr, nadar) y mostré esta información en cards interactivas.
   - **Modal**: Utilicé el componente modal de Bootstrap para mostrar detalles sobre cada actividad cuando el usuario hace clic en una card.

### Componentes Usados

- **Home.js**: Componente principal que muestra las actividades del usuario y su información.
- **Login.js**: Componente que permite a los usuarios iniciar sesión.
- **Modal**: Componente de Bootstrap utilizado para mostrar detalles de las actividades.
- **i18n.js**: Archivo de configuración para la internacionalización.

### Elementos del Ambiente de Desarrollo

- **React**: Librería principal que utilicé para construir la interfaz de usuario.
- **JavaScript**: Lenguaje de programación empleado para la lógica de la aplicación.
- **CSS**: Para estilos personalizados que complementan Bootstrap.
- **Bootstrap**: Framework CSS que utilicé para el diseño responsivo y componentes de la interfaz.
- **react-i18next**: Biblioteca implementada para la internacionalización de la aplicación.
>>>>>>> master
