import { DispositivoConmutable } from './interfaces/dispositivo-conmutable';
import { LOGGER } from './utils/logger';

export class Luz implements DispositivoConmutable {
    public encender(): void {
        LOGGER.info('Camara de seguridad: Encendida');
    }

    public apagar = () =>  {
        LOGGER.info('Luces: Apagadas');
    }
}
