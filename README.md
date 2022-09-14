# CAECE - Patrón Fachada

El repositorio contiene una ejemplificación del patrón fachada utilizando TypeScript como medio para demostrar el patrón y utilizando clases. Para el ejemplo utilizamos AmazonEcho (dispositivo de Amazon utilizado para domótica y comandos por voz) como clase fachada para interactuar con el resto de los dispositivos de la casa (luces, televisión, puertas inteligentes y cámara de seguridad). El dispositivo puede poner la casa en modo salida o modo llegada.
El modo llegada prende las luces, televisión, apaga la cámara, quita el seguro de la puerta y finalmente la abre.
El modo salida asegura la casa y apaga los dispositivos que no se utilizan. Adicionalmente pone a grabar la cámara de seguridad.

![Screenshot](https://github.com/hmarcelodn/caece-is2-facade/blob/main/Facade.png)
