VERSION=0.0.31
NOMBRE="pilas-editor"
NOMBREBIN="pilasEditor"

N=[0m
G=[01;32m
Y=[01;33m
B=[01;34m
PHASER_VERSION="v2.4.7"

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
	@echo "    ${G}sprites${N}              Genera las imágenes de la aplicación."
	@echo ""
	@echo "  ${Y}Relacionados con pilas ${N}"
	@echo ""
	@echo "    ${G}pilas${N}                Genera pilasengine.js."
	@echo "    ${G}pilas_live${N}           Genera pilasengine.js, ejemplos y tests."
	@echo "    ${G}api${N}                  Genera la documentación de API para pilas."
	@echo "    ${G}docs${N}                 Genera el manual de pilas."
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
	@echo "    ${G}binarios${N}             Genera los binarios de la aplicación"
	@echo "    ${G}binario_osx_test${N}     Genera un binario para osx de prueba."
	@echo ""

iniciar:
	$(call task, "Iniciando el proyecto.")
	$(call log, "Instalando dependencias.")
	@npm install
	@bower install
	$(call log, "Instalando dependencias de pilas-engine")
	@cd pilasengine; npm install
	@make _instalar_phaser
	@make _instalar_greensock


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
	@mv phaser.js pilasengine/libs/
	$(call log, "Descargando definiciones typescript para phaser ...")
	@wget -q https://raw.githubusercontent.com/photonstorm/phaser/master/typescript/phaser.d.ts
	@wget -q https://raw.githubusercontent.com/photonstorm/phaser/master/typescript/pixi.d.ts
	@wget -q https://raw.githubusercontent.com/photonstorm/phaser/master/typescript/p2.d.ts
	@mv phaser.d.ts pilasengine/libs/
	@mv pixi.d.ts pilasengine/libs/
	@mv p2.d.ts pilasengine/libs/

_instalar_greensock:
	$(call log, "Descargando GreenSock .js ...")
	@wget -q https://raw.githubusercontent.com/greensock/GreenSock-JS/master/src/uncompressed/TweenMax.js
	@mv TweenMax.js pilasengine/libs/
	$(call log, "Descargando definiciones typescript para GreenSock ...")
	@wget -q https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/master/greensock/greensock.d.ts
	@mv greensock.d.ts pilasengine/libs/

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
	make changelog
	@git add CHANGELOG.txt
	git commit -am 'release ${VERSION}'
	git tag '${VERSION}'
	git push
	git push --all
	git push --tags

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

deploy_DEPRECATED:
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
	@rm -rf binarios
	$(call log, "Generando binarios ...")
	@node_modules/.bin/electron-packager dist ${NOMBREBIN} --platform=all --arch=all --version=0.37.6 --ignore=node_modules --out=binarios
	$(call log, "Comprimiendo ...")
	@zip -qr binarios/${NOMBREBIN}-darwin-x64.zip binarios/${NOMBREBIN}-darwin-x64/
	@zip -qr binarios/${NOMBREBIN}-linux-ia32.zip binarios/${NOMBREBIN}-linux-ia32/
	@zip -qr binarios/${NOMBREBIN}-linux-x64.zip binarios/${NOMBREBIN}-linux-x64/
	@zip -qr binarios/${NOMBREBIN}-win32-ia32.zip binarios/${NOMBREBIN}-win32-ia32/
	@zip -qr binarios/${NOMBREBIN}-win32-x64.zip binarios/${NOMBREBIN}-win32-x64/

binario_osx_test:
	$(call log, "Compilando...")
	ember build
	$(call log, "Empaquetando...")
	@node_modules/.bin/electron-packager dist ${NOMBREBIN} --platform=darwin --arch=x64 --version=0.37.6 --ignore=node_modules --out=binarios --overwrite
	$(call log, "Ejecutando...")
	@open binarios/pilasEditor-darwin-x64/pilasEditor.app
	
sprites:
	$(call log, "Generando Spritesheets ...")
	@spritesheet-js images/sprites/* -p public/images -f css --padding=2

.PHONY: tmp docs binarios


