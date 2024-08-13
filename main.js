const quadratic = (a, b, c) => {
    // complete the code here
    const quadratic = (a, b, c) => {
        const discriminant = b ** 2 - 4 * a * c;
        
        if (discriminant > 0) {
            const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
            return [root1, root2];
        } else if (discriminant === 0) {
            const root = -b / (2 * a);
            return [root];
        } else {
            // No real roots
            return [];
        }
    };
    
    // Example usage:
    const a = 1;
    const b = -3;
    const c = 2;
    console.log(quadratic(a, b, c)); // Output: [2, 1]
    
}

const formatSum = n => {
    // complete the code here
}



// DO NOT DELETE CODE BELOW
export {quadratic, formatSum}