![npm](https://user-images.githubusercontent.com/39087395/47368566-43864680-d6b8-11e8-9b8d-fe435875c6cf.png)



Instalación
Enlace de descarga: https://www.npmjs.com/package/cynthia-md-links

O a través de npm con el comando: npm i cynthia-md-links
para la correcta instalacion y ejecucion de esta librería procure tener instalada las últimas versiones de NodeJs y Npm, si usted no conoce la version instalada ejecute:

node --v

Ejemplos de uso

busqueda y listado de enlaces.
Para listar enlaces de un archivo markdown se utiliza el comando md-links y la ruta del archivo:

mdlinks <file> md-links

Ej. md-links ../scl-2018-05-bc-core-pm-socialnetwork/README.md

mdlinks devolverá el link y el numero de la linea donde fue encontrado, tambien mostrará el status "is ok" o "is broken" hasta ahora solo mostrara los links sin hacer ninguna validación.

Ejemplo:

285 https://www.youtube.com/watch?v=WgSc1nv_4Gwis Broken
225 https://nodejs.org/api/path.html is OK
5 https://es.wikipedia.org/wiki/Markdown is OK
173 http://www.google.com/ is OK


para verificar si el enlace encontrado es valido se debe de ejecutar --Validate
Ej. md-links ../scl-2018-05-bc-core-pm-socialnetwork/README.md --validate 
en el ejemplo abajo se puede ver el status en el que se encuentra el link, siendo "is ok" o 300 siendo este url funcional

:279 https://nodejs.org/es/about/ is OK
:74 https://nodejs.org/en/jaja is OK
:281 https://nodejs.org/api/http.html#http_http_get_options_callback is OK
:223 https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback is



Versiones
0.0.1 - Versión inicial no funcional
0.1.1 - Version beta funciones básicas
1.0.0 - Version beta funcionalidad completa y pendientes de mejoras
