# Contact

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Production server

Run `ng build --configuration=production`

## Notas

- **Usar SASS** (mejor organización del código):  
    - **Variables**: $redondeo = 5px; $colorPrimario = #ff00ff;
    - **Mixins**, reutilizar código: @mixin bordeRedondo { border-radius: $redondeo }
        para usar el mixins: @include en la clase, por ej. @include bordeRedondo 
    - **Funciones**: @function colorFondo($colorPrimario){
                @return {
                    background-color: $colorPrimario;
                }
            }
    - **Importar archivos**: @import 'variables'
    - **Herencia**
    - **Nesting**
- **Alias** en el archivo <u>tsconfig.json</u>:
    ```{
        "compileOnSave": false,
        "compilerOptions": {
            "baseUrl":"./",
            "paths": {
            "@shared/*" : ["src/app/shared/*"],
            "@features/*" : ["src/app/features/*"],
            "@envs/*" : ["src/environments/*"],
            "@components/*" : ["src/app/components/*"]
    },
-   **Angular material**: Instalar con `ng add @angular/material`, es un schematics.
-   **environments** Generar archivos de environments: `ng g environments`
-   **Firebase**: Tener una cuenta en Firebase. Instalar las tools de Firebase con `npm i -g firebase-tools`. Probar si se está logeado con `firebase login`
-   **Angular fire**: Para manejar mejor Firebase, instalar el schematics fire con: `ng add @angular/fire`. Seleccionar las funcionalidades que se quieren manejar, el proyecto nuevo o alguno existente (para este caso muestra una lista). Finalmente colocar el provider firebase que quedará en el archivo app.config.ts en una variable *environments*.
-   Generar componentes reducidos, en un solo archivo: `ng g c nombreComponente -t -s --skip-tests`. El "-t" incluye el template en el mismo archivo del componente y el "-s" hace lo mismo con el estilo.
