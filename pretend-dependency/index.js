import Dbrickashaw from 'dbrickashaw';
import { fibonacci, factorial } from './lib/common';

const log = Dbrickashaw.createLogger();
log.debug('', 'initializing');

// Contrived example
export default {
    logger: Dbrickashaw.getRelay(),
    fibonacci,
    factorial
}