import { AmazonEcho } from './amazon-echo';
import { CamaraSeguridad } from './camara-seguridad';
import { Luz } from './luz';
import { PuertaPrincipal } from './puerta';
import { Television } from './television';

const amazonEchoFacade = new AmazonEcho(
    new PuertaPrincipal(), 
    new Luz(), 
    new Television(), 
    new CamaraSeguridad()
);
amazonEchoFacade.apagarSalidaCasa();
amazonEchoFacade.apagarLlegadaCasa();
