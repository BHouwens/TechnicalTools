export interface Swings {
    high: number;
    low: number;
}

export class FibonacciIndicators {

    public data: number[];
    retracements: number[];
    extensions: number[];


    /**
     * The idea is to go long (or buy) on a retracement at a Fibonacci support 
     * level when the market is trending up, and to go short (or sell) on a retracement 
     * at a Fibonacci resistance level when the market is trending down.
     * 
     * Fibonacci retracement levels are considered a predictive technical indicator since 
     * they attempt to identify where price may be in the future.
     * 
     * The theory is that after price begins a new trend direction, the price will retrace 
     * or return part way back to a previous price level before resuming in the direction of its trend.
     * 
     * They're not very useful in periods of consolidation (consider BBands) but are great for trends.
     * 
     * @param {Array} data 
     */

    constructor(data: number[]) {
        this.data = data;

        this.retracements = [
            0.236,
            0.382,
            0.5,
            0.618
        ];

        this.extensions = [
            0, 
            0.382, 
            0.618, 
            1.000, 
            1.382, 
            1.618
        ];
    }


    /**
     * Draws Fibonacci retracements based on the closing prices of a swing low 
     * and swing high.
     * 
     * @param {Swings} swings - Optionally specify high and low
     */

    getRetracements(swings: Swings | null): number[] {
        if (!swings) {
            swings = {
                high: Math.max(...this.data),
                low: Math.min(...this.data),
            };
        }

        let swingDifference = swings.high - swings.low;
        
        return this.retracements.map(retracement => {
            let nextRetracement = swingDifference * retracement;
            return swings.low + nextRetracement;
        });
    }

}