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

.PHONY: tmp
