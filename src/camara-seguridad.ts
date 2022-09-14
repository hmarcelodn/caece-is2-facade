import { DispositivoConmutable } from './interfaces/dispositivo-conmutable';
import { LOGGER } from './utils/logger';

export class CamaraSeguridad implements DispositivoConmutable {
    public encender(): void {
        LOGGER.info('Camara de seguridad: Encendida');
    }

    public apagar = () =>  {
        LOGGER.info('Camara de seguridad: Apagada');
    }

    public grabar = () => {
        LOGGER.info('Camara de seguridad: Grabando Video');
    }
}
