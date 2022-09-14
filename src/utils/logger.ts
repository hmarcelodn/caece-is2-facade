import pino from 'pino';

export const LOGGER = pino({
    transport: {
        target: 'pino-pretty'
    },
});
