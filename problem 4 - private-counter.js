function createCounter() {
    // Private variable: cannot be accessed directly outside
    let count = 0;

    return {
        increment() {
            count++;
        },

        decrement() {
            count--;
        },

        // Getter for accessing the private count
        get value() {
            return count;
        }
    };
}

// Test cases
const counter = createCounter();

counter.increment();
counter.increment();
counter.decrement();

console.log(counter.value); // 1

console.log(counter.count); // undefined
