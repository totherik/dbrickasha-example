import Dbrickashaw from 'dbrickashaw';
import { fibonacci, factorial } from './lib/common';


const logger = Dbrickashaw.createLogger();
logger.debug(null, 'initializing');

export default {

    publisher: Dbrickashaw.getPublisher(),

    fibonacci,

    factorial

}