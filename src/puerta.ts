import { PuertaAsegurable } from './interfaces/puerta-asegurable';
import { LOGGER } from './utils/logger';

export class PuertaPrincipal implements PuertaAsegurable {
    public abrir = () =>  {
        LOGGER.info('Puerta: Abierta');
    }

    public cerrar = () =>  {
        LOGGER.info('Puerta: Cerrada');
    }

    public asegurar = () =>  {
        LOGGER.info('Puerta: Seguro Activo');
    }

    public quitarSeguro = () =>  {
        LOGGER.info('Puerta: Seguro Inactivo');
    }
}