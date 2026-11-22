function diffObjects(oldObj, newObj) {
    const added = {};
    const removed = {};
    const changed = {};

    // Check for added and changed properties
    for (const key of Object.keys(newObj)) {
        if (!Object.prototype.hasOwnProperty.call(oldObj, key)) {
            added[key] = newObj[key];
        } else if (!Object.is(oldObj[key], newObj[key])) {
            changed[key] = {
                from: oldObj[key],
                to: newObj[key]
            };
        }
    }

    // Check for removed properties
    for (const key of Object.keys(oldObj)) {
        if (!Object.prototype.hasOwnProperty.call(newObj, key)) {
            removed[key] = oldObj[key];
        }
    }

    return {
        added,
        removed,
        changed
    };
}

// Test case
console.log(
    diffObjects(
        {
            name: 'Setemi',
            role: 'Engineer',
            country: 'Jamaica'
        },
        {
            name: 'Setemi',
            role: 'Senior Engineer',
            city: 'Kingston'
        }
    )
);
