function maximumWealth(accounts: number[][]): number {
    let wealth = 0;
    accounts.map((elem) => {
        const accWealth = elem.reduce((prev, current) => {
            return current += prev;
        }, 0)
        if (accWealth > wealth) {
            wealth = accWealth;
        }
    })
    return wealth;
};