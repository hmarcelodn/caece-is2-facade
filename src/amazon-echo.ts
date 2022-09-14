import { DispositivoConmutable } from './interfaces/dispositivo-conmutable';
import { DispositivoGrabable } from './interfaces/dispositivo-grabable';
import { PuertaAsegurable } from './interfaces/puerta-asegurable';
import { LOGGER } from './utils/logger';

/**
 * Amazon Echo es el dispositivo y clase fachada de todos los demas dispositivos.
 * Los dispositivos de los que hace composicion son publicos porque el patron fachada no encapsula.
 * Para mejorar la fachada recibimos interfaces.
 */
export class AmazonEcho {
    constructor(
        public readonly puerta: PuertaAsegurable,
        public readonly luz: DispositivoConmutable,
        public readonly television: DispositivoConmutable,
        public readonly camaraSeguridad: DispositivoGrabable,
    ) {
        LOGGER.info('Amazon Echo');
    }

    public iniciarModoSalidaCasa = (): void => {
        LOGGER.info('Iniciando Modo: Salida de Casa');
        this.puerta.cerrar();
        this.puerta.asegurar();
        this.luz.apagar();
        this.television.apagar();
        this.camaraSeguridad.encender();
        this.camaraSeguridad.grabar();
    }

    public iniciarModoLlegadaCasa = (): void => {
        LOGGER.info('Iniciando Modo: Llegada de Casa');
        this.camaraSeguridad.apagar();
        this.puerta.abrir();
        this.luz.encender();
        this.television.encender();
    }
}
