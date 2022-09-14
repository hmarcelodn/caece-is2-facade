import { DispositivoConmutable } from './dispositivo-conmutable';

export interface DispositivoGrabable extends DispositivoConmutable {
    grabar(): void;
}
