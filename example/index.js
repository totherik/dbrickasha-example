import example from '../index';

// This will get all events from this example and the `pretend-dependency` module.
example.logger.on('log', function ({ source, tags, data }) {
    console.log(source, tags.join(','), data);
});

example.getFactorial(10);
example.getFibonacci(10);