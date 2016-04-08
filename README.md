# pilas-editor

[![Build Status](https://travis-ci.org/pilas-engine/pilas-editor.svg?branch=develop)](https://travis-ci.org/pilas-engine/pilas-editor) [![Build Status](https://travis-ci.org/pilas-engine/pilas-editor.svg?branch=master)](https://travis-ci.org/pilas-engine/pilas-editor) [![Stories in Ready](https://badge.waffle.io/hugoruscitti/demo-editor.png?label=ready&title=Ready)](http://waffle.io/hugoruscitti/demo-editor)




Este repositorio contiene todos los componentes del editor de pilas-engine, con ejemplos, documentación y todo lo demás.

# ¿Cómo instalar?

Para desarrolladores, la mejor forma de instalar el proyecto es utilizando un terminal
de texto (linux u osx preferentemente).

Necesitas tener instalado nodejs, y luego ejecutar estos comandos:


```
git clone git@github.com:pilas-engine/pilas-editor
cd pilas-editor

make iniciar
(esperar unos minutos)
```

Luego, para iniciar la aplicación podrías escribir:

```
make serve
```

O escribir ``make`` y ver un listado de todos los comandos disponibles.


## Descargas adicionales

Este proyecto también incluye una versión desktop, una versión mobile, un generador de manual y varias cosas más.

Así que para tener la posibilidad de generar cualquiera de estos componentes
tendrías que instalar alguna de las dependencias adicionales:

```
npm install mobile-icon-resizer -g
brew install imagemagick  # o bien, apt-get install imagemagick
pip install mkdocs
```


# Licencias y bibliotecas utilizadas

Este proyecto está desarrollado por [Hugo Ruscitti](https://github.com/hugoruscitti) y el equipo de [pilas-engine](http://pilas-engine.com.ar/#/acercade).

Se utiliza la licencia LGPL v3, que se puede [consultar aquí](http://choosealicense.com/licenses/lgpl-3.0/).

El motor multimedia que utilizamos es [phaser](http://phaser.io/) y las interpolaciones se generan usando [tweenjs](https://github.com/tweenjs/tween.js), mirá los autores en la sección ["People"](https://github.com/tweenjs/tween.js#people) del repositorio.

# Colaboraciones

Las colaboraciones son muy bien recibidas, te recomendamos hacer un fork del proyecto y enviarnos tus pull-requests.

Si no estás seguro acerca de tu contribución o alguna idea, escribinos en el [foro de pilas-engine](http://foro.pilas-engine.com.ar/) o directamente creá un issue en github.
