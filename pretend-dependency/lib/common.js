import Dbrickashaw from 'dbrickashaw';


const logger = Dbrickashaw.createLogger();

export function fibonacci(idx = 10) {
    logger.debug('fibonacci', idx);
    if (idx == 0) return 0;
    if (idx == 1) return 1;
    return fibonacci(idx-2) + fibonacci(idx-1);
}

export function factorial(n) {
    logger.debug('factorial', n);
    if (n == 0) {
        return 1;
    } else {
        return n * factorial(n-1);
    }
}