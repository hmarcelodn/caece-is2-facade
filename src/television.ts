import { DispositivoConmutable } from './interfaces/dispositivo-conmutable';
import { LOGGER } from './utils/logger';

export class Television implements DispositivoConmutable {
    public encender(): void {
        LOGGER.info('Camara de seguridad: Encendida');
    }

    public apagar = () =>  {
        LOGGER.info('Television: Apagada');
    }
}
