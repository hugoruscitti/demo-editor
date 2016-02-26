VERSION=0.0.1
NOMBRE="demo-editor"

N=[0m
G=[01;32m
Y=[01;33m
B=[01;34m


comandos:
	@echo ""
	@echo "${B}Comandos disponibles para ${Y}${NOMBRE}${N} (versión: ${VERSION})"
	@echo ""
	@echo "  ${Y}Para desarrolladores${N}"
	@echo ""
	@echo "    ${G}iniciar${N}         Instala dependencias."
	@echo "    ${G}electron${N}        Compila y ejecuta electron (modo live)."
	@echo "    ${G}pilas${N}           Genera la biblioteca pilasengine.js."
	@echo "    ${G}pilas_live${N}      Genera la biblioteca pilasengine.js (modo live)."
	@echo ""
	@echo "  ${Y}Para distribuir${N}"
	@echo ""
	@echo "    ${G}version${N}         Genera una nueva versión."
	@echo "    ${G}subir_version${N}   Sube version generada al servidor."
	@echo ""

iniciar:
	npm install
	bower install
	cd pilasengine
	npm install
	make _instalar_phaser

_instalar_phaser:
	@echo "Descargando phaser.js ..."
	@wget -q https://raw.githubusercontent.com/photonstorm/phaser/v2.4.5/build/phaser.js
	@echo "Descargando definiciones de typescript ..."
	@wget -q https://raw.githubusercontent.com/photonstorm/phaser/master/typescript/phaser.d.ts
	@wget -q https://raw.githubusercontent.com/photonstorm/phaser/master/typescript/pixi.d.ts
	@wget -q https://raw.githubusercontent.com/photonstorm/phaser/master/typescript/p2.d.ts
	mv phaser.d.ts pilasengine/libs/
	mv pixi.d.ts pilasengine/libs/
	mv p2.d.ts pilasengine/libs/
	mv phaser.js vendor/

version:
	# patch || minor
	@bumpversion patch --current-version ${VERSION} Makefile --list
	#make build
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
	@echo "Instalando dependencias..."
	cd pilasengine; npm install


pilas: pilasengine/node_modules
	grunt --gruntfile pilasengine/Gruntfile.js only-build --base pilasengine

pilas_live:
	grunt --gruntfile pilasengine/Gruntfile.js defaultFast --base pilasengine

.PHONY: tmp
