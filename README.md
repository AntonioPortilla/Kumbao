# Kumbao

Creando una nueva historia para el mundo.
Viva una nueva experiencia en habilidades lúdicas para niños y haga que sus hijos escriban las nuevas reglas del futuro. [Kumbao.com](http://www.kumbao.com)

### Requerimientos (Instalar)

- [nodejs](http://nodejs.org)
- [bower.io](http://bower.io/)

### Preparando el proyecto para desarrollo

- Descargar los scripts necesarios para usar el automatizador GruntJS, en la consola ir hacia la raiz del proyecto y ejecutar `npm install` y `bower install`.
- Para trabajar con los css y js ejecutar `>> grunt serve` y se simulara el entorno remoto, habilitandose el puerto 9000.

Esto es solo cuando ya has comprimido todos los estilos utilizando el comando:
	* `>> grunt build`

*Estilos (para el DESARROLLO - Localhost)
```php
	** para el layout app.blade.php **
	<link rel="stylesheet" href="/bower_components/animate-css/animate.min.css">
	<link rel="stylesheet" href="styles/sabecarousel.css">
	<link rel="stylesheet" href="styles/modal.css">
	<link rel="stylesheet" href="styles/main.css">
```
*Estilos (para PRODUCCIÓN - Remoto)
```php
	** para el header **
	<link rel=stylesheet href=styles/main.min.a9f5e6bf.css>
```

*Scripts (para el DESARROLLO - Localhost)
```php
	** para el footer **
	<script src="/bower_components/jquery/dist/jquery.min.js"></script>
	<script src="scripts/jquery.sabecarousel.js"></script>
	<script src="scripts/main.js"></script>
```
*Scripts (para PRODUCCIÓN - Remoto)
```php
	** para el footer **
	<script src="/bower_components/jquery/dist/jquery.min.js"></script>
	<script src="scripts/jquery.sabecarousel.js"></script>
	<script src=scripts/main.min.f6ec6944.js></script>
```


## NO OLVIDAR
* **Para los estilos:** Ubicado en `dist/styles/`, ahi se encuentran los estilos con la sintaxis de sass `.scss` en estos se deben poner todas las clases, pseudoclases e ids para el proyecto. para generarlo a .css no olvidar ejecutar el comando `>> grunt build`.

* **OJO OJO OJO = 3 OJOS:** Para producción nuestra nueva carpeta pública será dist/ y para ver el contenido HTML se deberá apuntar a la carpeta mencionada.
