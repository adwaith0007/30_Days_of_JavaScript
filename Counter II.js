var createCounter = function(init) {

    let count= init;

    function increment()
    {
        return (++count);
    }

    function decrement ()
    {
        return (--count);
    }
    
     function reset ()
    {
        count=init;
        return count;
    }

    return {
        increment: increment,
        decrement: decrement,
        reset: reset,

    };

};

const counter = createCounter(5);
console.log(counter.increment()); // Output: 5 (current value of count is 6)
console.log(counter.reset());     // Output: 5 (initial value of count is 5)
console.log(counter.decrement()); // Output: 5 (current value of count is 4)