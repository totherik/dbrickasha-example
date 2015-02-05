import Dbrickashaw from 'dbrickashaw';
import Pretend from './pretend-dependency/index.js';

const log = Dbrickashaw.createLogger();


// Contrived
export default {

    // Export our relay and combine it with the Pretend module's output.
    logger: Dbrickashaw.getRelay().observe(Pretend),

    getFibonacci (idx) {
        let result = Pretend.fibonacci(idx);
        log.debug('getFibonacci', { idx, result });
        return result;
    },

    getFactorial(n) {
        let result = Pretend.factorial(n);
        log.debug('getFactorial', { n, result });
        return result;
    }

}
