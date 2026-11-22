function deepFreeze(obj) {
    // Check if the value is an object or function
    if (
        obj === null ||
        (typeof obj !== "object" && typeof obj !== "function")
    ) {
        return obj;
    }

    // Stop if the object is already frozen
    if (Object.isFrozen(obj)) {
        return obj;
    }

    // Freeze all nested object properties
    for (const key of Reflect.ownKeys(obj)) {
        const descriptor = Object.getOwnPropertyDescriptor(obj, key);

        // Only recurse into data properties
        if (descriptor && "value" in descriptor) {
            deepFreeze(descriptor.value);
        }
    }

    // Freeze the current object
    return Object.freeze(obj);
}

// Test case
const config = deepFreeze({
    api: {
        baseUrl: 'https://x.com',
        retries: 3
    },
    debug: false
});

// Try changing the properties
config.api.baseUrl = 'https://changed.com';
config.debug = true;

// Check the results
console.log(config.api.baseUrl); 
// 'https://x.com'

console.log(config.debug);
// false

console.log(Object.isFrozen(config.api));
// true
