function finalValueAfterOperations(operations: string[]): number {
    let x = 0;

    for( let i = 0; i < operations.length; i++) {
	    if (operations[i] === '++X' || operations[i] === 'X++') {
	        x += 1;
        }
        if (operations[i] === '--X' || operations[i] === 'X--') {
	        x -= 1;
        }
    }

    return x;

};