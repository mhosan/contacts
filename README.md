# Contact

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Notas

    - **Usar SASS** (mejor organización del código):  
        - *Variables*: $redondeo = 5px; $colorPrimario = #ff00ff;
        - *Mixins*, reutilizar código: @mixin bordeRedondo { border-radius: $redondeo }
            - para usar el mixins: @include en la clase, por ej. @include bordeRedondo 
        - *Funciones*: @function colorFondo($colorPrimario){
                @return {
                    background-color: $colorPrimario;
                }
            }
        - *Importar archivos*: @import 'variables'
        - *Herencia*
        - *Nesting*
Generar archivos de environments: `ng g environments`

