# Etiquetas

Las etiquetas nos permiten señalar actores, ponerles una marca de
clasificación y distinguirlos de manera muy simple.

Cada etiqueta es solamente una palabra, por ejemplo "enemigo",
"protagonista", "munición" etc... y podemos vincularla
con cualquier actor o grupo, para señalar el rol de ese actor
o grupo.

Las etiquetas se utilizan principalmente para simplificar
la creación de colisiones, que vimos en el
capítulo anterior.

## Conociendo las Etiquetas

Cada actor que existe en pilas tiene un atributo ``etiquetas``,
que inicialmente tiene el nombre de la clase que originó
al actor, por ejemplo:

    >>> mono = pilas.actores.Mono()
    >>> mono.etiquetas
    ['mono']

    >>> aceituna = pilas.actores.Aceituna()
    >>> aceituna.etiquetas
    ['aceituna']

y estas etiquetas, a su vez, se pueden añadir usando el método ``agregar``:

    >>> mono.etiquetas.agregar('protagonista')
    ['mono', 'protagonista']

o incluso consultar si un actor tiene o no una determinada etiqueta:

    >>> mono.tiene_etiqueta("enemigo")
    False
    >>> mono.tiene_etiqueta("mono")
    True

## Usando grupos

Los grupos también nos brindan la posibilidad de consultar o definir las
etiquetas de varios actores al mismo tiempo:

```
naves = pilas.actores.Nave() * 10
naves.etiquetas.agregar('enemigo')

items = pilas.actores.Banana() * 5
items.etiquetas.agregar('comestible')

otro_grupo = pilas.actores.Manzana() * 2
otro_grupo.etiquetas.agregar('comestible')
```

## Añadiendo colisiones mediante etiquetas

Ahora que podemos añadir etiquetas a los actores, podemos describir las
colisiones de forma mas sencilla.

Por ejemplo, si creamos un escenario con monedas y un mono que se pueda
mover con el teclado así:


```
mono = pilas.actores.Mono()
monedas = pilas.actores.Moneda() * 20

mono.aprender('arrastrable')
```

podemos definir una acción de colisión simplemente indicando la función
de respuesta y las etiquetas que intervienen:

```
def capturar(mono, cosa):
    cosa.eliminar()
    mono.sonreir()

pilas.colisiones.agregar('mono', 'moneda', capturar)
```

Ahora, incluso aunque se elimine las monedas de la pantalla, si creamos
nuevas van a seguir siendo "comestibles" por el mono:

```
mas_monedas = pilas.actores.Moneda() * 10
```

Incluso cualquier otra cosa que tenga estas etiquetas va a ser
capturado por el mono:

```
cajas = pilas.actores.Caja() * 10
cajas.etiquetas.agregar('moneda')
```

Claro, lo ideal en este caso es definir las colisiones usando etiquetas
genéricas como: 'comestible', 'enemigo', 'vida' etc...

## Las etiquetas también sirven con figuras

Ten en cuenta que las figuras físicas también pueden contener etiquetas de la misma forma de los actores.

Esto es super útil cuando queremos crear colisiones mas genéricas o invisibles.

Por ejemplo, podríamos tener una circunferencia que al momento de tocar
cualquier rectángulo desaparezca:


```
circulo = pilas.fisica.Circulo()
circulo.etiquetas.agregar("colisionable")

def destruir(circulo_que_colisiona, un_rectangulo):
    circulo_que_colisiona.eliminar()

pilas.colisiones.agregar("colisionable", "rectangulo", destruir)
```

Eso sí, tenemos que tener en cuenta que la función "destruir" va a recibir las dos figuras en contacto y no dos actores como vimos en los otros
ejemplos de colisión entre actores.
