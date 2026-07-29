# Unidad 1: Aleatoriedad

## Links:
- **Aplicación 1.0:** https://editor.p5js.org/lolarenzo2000/full/PMjTIdRL4 
- **Aplicación 2.0:** https://editor.p5js.org/lolarenzo2000/sketches/YEqxFS_KO

## Momentos 2.0:
- **Posibilidad:** El pasto crece con diferentes colores de verde y de formas aleatorias.
- **Tendencia:** El Pasto empieza a ponerse amarillo y a morirse, el color del pasto indica cuanta vida le queda
- **Normalidad:** El pasto nunca se pasa de cierto punto, y siempre es de un color verde al empezar.
- **Excepción:** Pájaros puedes pasar y plantar mas pasto;
- **Influencia:** el usuario tira semillas de pasto, modificando puntos donde hay mas pasto.

## Entrega:
- **Festival:** Fotosíntesis
- **Aplicación:** Una pantalla vertical con una planta que crece de forma aleatoria (el tallo se mueve de lado a lado usando ruido Perlin), que cada tanto pone una hoja con un intervalo (usando distribución gaussiana) y usando un algoritmo de distribución uniforme para elegir la hoja que se coloca.
- **Aplicación 2.0:** Una simulación de **Micro** exosistema de pasto.
- **Interactividad:** cuando se hunde la pantalla la planta crece mas rápido

## Autoevaluación

### Encargo Completo [C]
### Simulación con intención [C]: se utiliza distribución normal, gaussiana y ruido Perlin
### Interacción significativa [C]: Se puede tirar semillas para controlar donde crece el pasto
### Prototipo funcional [C]: El prototipo funciona correctamente
### Proceso documentado [c]: Esta documentado con fotos el primer prototipo, pero no el segundo.

## iteraciones 1.0:
1. ![Iteracion 1](image.png) Ya crece pero quiero que se vea mas gruesa en la base y mas delgada en la punta.
2. ![Iteracion 2](image-1.png) Con ayuda de Claude, ahora el tallo es mas grueso en la base, antes funcionaba con la función ``beginshape()`` de P5js, ahora usa la función ``line()``
3. ![iteracion 3](image-2.png) Color gradual para que parezca una planta infinita
4. ![iteracion 4](image-3.png) Ya hay hojas pero no siguen el tallo
5. ![iteracion 5](image-4.png) las hojas siguen el tallo y están rotadas para que se vean mejor, también cambian de color mientras bajan

