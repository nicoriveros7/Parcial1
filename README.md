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
