import Dbrickashaw from 'dbrickashaw';
import Pretend from './pretend-dependency/index.js';


const logger = Dbrickashaw.createLogger();

export default {

    // Export our relay and combine it with the Pretend module's output.
    publisher: Dbrickashaw.getPublisher().observe(Pretend),

    getFibonacci (idx) {
        let result = Pretend.fibonacci(idx);
        logger.debug('getFibonacci', { idx, result });
        return result;
    },

    getFactorial(n) {
        let result = Pretend.factorial(n);
        logger.debug('getFactorial', { n, result });
        return result;
    }

}
