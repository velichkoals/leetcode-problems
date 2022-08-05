function backspaceCompare(s: string, t: string): boolean {
    let sNew = removeBackspaces(s);
    let tNew = removeBackspaces(t);
    
    if(sNew === tNew) {
        return true;
    } else {
        return false;
    }
};

function removeBackspaces(str: string): string {
    const arr = [];
    
    for(let i = 0; i < str.length; i++) {
        if (str[i] !== '#') {
            arr.push(str[i]);
        }
        if (str[i] === '#') {
            arr.pop();
        }
    }
    
    return arr.join('');
}
