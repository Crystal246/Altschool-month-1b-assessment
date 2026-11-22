function validateSchema(obj, schema) {
    const errors = [];

    // Check every property defined in the schema
    for (const key of Object.keys(schema)) {

        // Check if the property exists
        if (!Object.prototype.hasOwnProperty.call(obj, key)) {
            errors.push(${key}: missing property);
            continue;
        }

        // Get expected and actual data types
        const expectedType = schema[key];
        const actualType = typeof obj[key];

        // Check whether the data types match
        if (actualType !== expectedType) {
            errors.push(
                ${key}: expected ${expectedType}, got ${actualType}
            );
        }
    }

    return errors;
}

// Define the schema
const schema = {
    name: 'string',
    age: 'number',
    isAdmin: 'boolean'
};

// Test 1: Valid object
console.log(
    validateSchema(
        { name: 'Ada', age: 21, isAdmin: false },
        schema
    )
);
// []

// Test 2: Invalid object
console.log(
    validateSchema(
        { name: 'Ada', age: '21' },
        schema
    )
);
// [
//   'age: expected number, got string',
//   'isAdmin: missing property'
// ]
