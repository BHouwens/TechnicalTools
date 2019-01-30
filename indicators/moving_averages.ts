/**
 * Gets the simple moving average for a set of data in `n` intervals
 * 
 * @param {Array} data 
 * @param {number} n 
 */

export function simpleMA(data: number[], n: number): number[] {
    let MAs = [];

    while (data.length > 0) {
        let slice = data.splice(0, n);
        MAs.push(mean(slice));
    }

    return MAs;
}


/**
 * Generates the EMA for a given interval `n`, similar to SMA
 * 
 * @param {Array} data
 * @param {number} n
 */

export function exponentialMA(data: number[], n: number): number[] {
    let smaSet = data.splice(0, n);
    let ema = simpleMA(smaSet, n);

    for (let price of data) {
        let nextEMA = getEMAValue(ema[ema.length - 1], price, n);
        ema.push(nextEMA);
    }

    return ema;
}






/*---- UTILITY FUNCTIONS ----*/


/**
 * Gets the mean for a range of numbers
 * 
 * @param {Array} range 
 */

function mean(range: number[]): number {
    let sum = range.reduce((a, b) => a + b, 0);
    return sum / range.length;
}


/**
 * Gets the EMA value based on the previous EMA.
 * The first instance of use will need to be the SMA.
 * 
 * @param {number} yesterday    - Previous EMA value
 * @param {number} today        - Close price for the interval
 * @param {number} n            - How far back to pull EMA from (interval)
 */

function getEMAValue(yesterday: number, today: number, n: number): number {
    let multiplier = 2 / (n + 1);
    return (today * multiplier) + (yesterday * (1 - multiplier));
}