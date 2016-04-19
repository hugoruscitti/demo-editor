VERSION=0.0.22
NOMBRE="pilas-editor"

N=[0m
G=[01;32m
Y=[01;33m
B=[01;34m
PHASER_VERSION="v2.4.6"

define log
	@echo "${G}▷$(1) ${N}"
endef

define task
	@echo ""
	@echo "${Y}-$(1)${N}"
endef

comandos:
	@echo ""
	@echo "${B}Comandos disponibles para ${Y}${NOMBRE}${N} (versión: ${VERSION})"
	@echo ""
	@echo "  ${Y}Generales de la aplicación${N}"
	@echo ""
	@echo "    ${G}iniciar${N}              Instala dependencias."
	@echo "    ${G}compilar${N}             Compila la aplicación."
	@echo "    ${G}electron${N}             Compila y ejecuta electron (modo live)."
	@echo "    ${G}serve${N}                Ejecuta la aplicación en modo desarrollo."
	@echo "    ${G}test${N}                 Ejecuta los tests de la aplicación."
	@echo ""
	@echo "  ${Y}Relacionados con pilas ${N}"
	@echo ""
	@echo "    ${G}pilas${N}                Genera pilasengine.js."
	@echo "    ${G}pilas_live${N}           Genera pilasengine.js, ejemplos y tests."
	@echo "    ${G}api${N}                  Genera la documentación de API para pilas."
	@echo "    ${G}docs${N}                 Genera el manual de pilas."
	@echo "    ${G}generar_ejemplo${N}      Permite crear un ejemplo nuevo."
	@echo "    ${G}actualizar_imagenes${N}  Genera los spritesheets"
	@echo ""
	@echo "  ${Y}Para distribuir${N}"
	@echo ""
	@echo "    ${G}cordova_icons${N}        Genera los iconos para cordova."
	@echo "    ${G}cordova${N}              Compila y genera la versión mobile."
	@echo ""
	@echo "  ${Y}Para distribuir${N}"
	@echo ""
	@echo "    ${G}version_patch${N}        Genera una nueva versión."
	@echo "    ${G}version_minor${N}        Genera una nueva versión."
	@echo "    ${G}subir_version${N}        Sube version generada al servidor."
	@echo "    ${G}deploy${N}               Sube la web editor.pilas-engine.com.ar"
	@echo "    ${G}binarios${N}             Genera los binarios de la aplicación"
	@echo ""

_crear_enlaces:
	$(call log, "Creando enlaces a vendor y data.")
	@cd pilasengine/ejemplos; rm -rf libs data; ln -s ../../public/libs; ln -s ../../public/data

iniciar:
	$(call task, "Iniciando el proyecto.")
	$(call log, "Instalando dependencias.")
	@npm install
	@bower install
	$(call log, "Instalando dependencias de pilas-engine")
	@cd pilasengine; npm install
	@make _instalar_phaser
	@make _crear_enlaces


compilar:
	$(call log, "Iniciando compilación.")
	@ember build


s: serve


serve:
	$(call log, "Iniciando ember s")
	@ember s

_instalar_phaser:
	$(call log, "Descargando phaser.js ...")
	@wget -q https://raw.githubusercontent.com/photonstorm/phaser/${PHASER_VERSION}/build/phaser.js
	@mv phaser.js public/libs/
	$(call log, "Descargando Tween.js ...")
	@wget -q https://raw.githubusercontent.com/tweenjs/tween.js/6cb21f23975d0230499a11e567d6c954815dd7f2/src/Tween.js
	@mv Tween.js pilasengine/libs/
	$(call log, "Descargando definiciones de typescript ...")
	@wget -q https://raw.githubusercontent.com/photonstorm/phaser/master/typescript/phaser.d.ts
	@wget -q https://raw.githubusercontent.com/photonstorm/phaser/master/typescript/pixi.d.ts
	@wget -q https://raw.githubusercontent.com/photonstorm/phaser/master/typescript/p2.d.ts
	@wget -q https://raw.githubusercontent.com/edsilv/tween.ts/master/src/Tween.d.ts
	@mv phaser.d.ts pilasengine/libs/
	@mv pixi.d.ts pilasengine/libs/
	@mv p2.d.ts pilasengine/libs/
	@mv Tween.d.ts pilasengine/libs/

version_patch:
	@bumpversion patch --current-version ${VERSION} Makefile pilasengine/src/version.ts ember-cordova/cordova/config.xml --list
	make _help_version

version_minor:
	@bumpversion minor --current-version ${VERSION} Makefile pilasengine/src/version.ts ember-cordova/cordova/config.xml --list
	make _help_version

_help_version:
	@echo "Es recomendable escribir el comando que genera los tags y sube todo a github:"
	@echo ""
	@echo "make subir_version"

ver_sync: subir_version

subir_version:
	git commit -am 'release ${VERSION}'
	git tag '${VERSION}'
	git push
	git push --all
	git push --tags
	make changelog
	@git add CHANGELOG.txt
	@git commit -m "actualizando changelog."
	@git push

electron:
	ember build
	electron dist &
	ember build --watch

changelog:
	@git log `git describe --tags --abbrev=0` --pretty=format:"  * %s" > CHANGELOG.txt
	@echo "Generando el archivo CHANGELOG.txt"

pilasengine/node_modules:
	$(call log, "Instalando dependencias de pilas-engine")
	@cd pilasengine; npm install

api:
	$(call log, "Generando documentacion de pilas-engine")
	@grunt --gruntfile pilasengine/Gruntfile.js typedoc --base pilasengine
	$(call log, "Copiando imagenes ...")
	@cp -rf pilasengine/docs/imagenes pilasengine/docs/dist/

pilas: pilasengine/node_modules
	$(call log, "Compilando pilas-engine")
	@grunt --gruntfile pilasengine/Gruntfile.js compilar --base pilasengine

pilas_live:
	$(call log, "Compilando ejemplos de pilas-engine en modo live")
	@grunt --gruntfile pilasengine/Gruntfile.js compilar-con-ejemplos-livereload --base pilasengine

generar_ejemplo:
	@node pilasengine/utils/generar_ejemplo.js

deploy:
	$(call log, "Subiendo a la web...")
	@ember deploy development --activate=true
	@echo ""
	@echo "${G}Listo, la nueva versión tiene que estar activa en:"
	@echo ""
	@echo "    http://editor.pilas-engine.com.ar${N}"
	@echo ""

actualizar_imagenes:
	$(call log, "Actualizando imagenes ...")
	@spritesheet-js pilasengine/data/src/* -p public/data/ -f pixi.js --padding=10
	@echo ""
	@echo "${G}Listo, las archivos que se generaron son:"
	@echo ""
	@echo "    public/data/spritesheet.json"
	@echo "    public/data/spritesheet.png"
	@echo "${N}"

docs:
	$(call log, "Generando documentación")
	@cd docs; make generar;
	@rm -rf public/docs
	@mv docs/site public/docs
	@echo ""
	@echo "${G}OK, la documentación quedó en public/docs"
	@echo ""

cordova: _cordova_build _cordova_open
	@echo "${G}Listo, ahora se abrirá xcode"
	
cordova_icons:
	$(call log, "Generando iconos")
	@mobile-icon-resizer -i ember-cordova/cordova/res/pilas_logo_1024-fondo-color.png  --iosprefix="icon" --iosof=ember-cordova/cordova/res/ios/ --androidof=ember-cordova/cordova/res/android/

_cordova_build:
	$(call log, "Compilando con cordova:build")
	@ember cordova:build

_cordova_open:
	$(call log, "Abriendo con cordova:open")
	@ember cordova:open
	

test:
	$(call log, "Ejecutando test...")
	@ember test

binarios:
	$(call task, "Comenzando a generar binarios.")
	$(call log, "Compilando ...")
	@ember build
	$(call log, "Generando binarios ...")
	@node_modules/.bin/electron-packager dist pilasEditor --platform=darwin --arch=x64 --version=0.37.6 --ignore=node_modules
	@tar czf pilas-editor-darwin-x64/pilas-editor.app.tar.gz pilas-editor-darwin-x64/pilas-editor.app


.PHONY: tmp docs
