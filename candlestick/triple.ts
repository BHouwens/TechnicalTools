export default class TripleIndicator {

    public data: Object[];

    constructor(data: Object[]) {
        this.data = data;
    }

    /**
     * The morning star and the evening star are triple candlestick patterns 
     * that you can usually find at the end of a trend.
     * 
     * They are reversal patterns that can be recognized through three characteristics.
     * 
     * ### Characteristics for Evening Star
     * - The first candlestick is a bullish candle, which is part of a recent uptrend.
     * - The second candle has a small body, indicating that there could be some indecision in the market. This candle can be either bullish or bearish.
     * - The third candlestick acts as a confirmation that a reversal is in place, as the candle closes beyond the midpoint of the first candle.
     */

    eveningStar(): number {
        return 0;
    }


    /**
     * The morning star and the evening star are triple candlestick patterns 
     * that you can usually find at the end of a trend.
     * 
     * They are reversal patterns that can be recognized through three characteristics.
     * 
     * ### Characteristics for Morning Star
     * - The first candlestick is a bearish candle, which is part of a recent downtrend.
     * - The second candle has a small body, indicating that there could be some indecision in the market. This candle can be either bullish or bearish.
     * - The third candlestick acts as a confirmation that a reversal is in place, as the candle closes beyond the midpoint of the first candle.
     */

    morningStar(): number {
        return 0;
    }


    /**
     * The three white soldiers pattern is formed when three long bullish candles follow a DOWNTREND, 
     * signaling a reversal has occurred. VERY POTENT BULLISH SIGNAL, especially when it occurs after an extended 
     * downtrend and a short period of consolidation.
     * 
     * The first of the three soldiers is called the `reversal` candle. It either ends the downtrend or implies that 
     * the period of consolidation that followed the downtrend is over.
     * 
     * For the pattern to be considered valid, the second candlestick should be bigger than the previous candle’s body.
     * Also, the second candlestick should close near its high, leaving a small or non-existent upper wick.
     * 
     * For the three white soldiers pattern to be completed, the last candlestick should be at least the same size as 
     * the second candle and have a small or no shadow.
     */

    threeWhiteSoldiers(): number {
        return 0;
    }


    /**
     * The three black crows candlestick pattern is just the opposite of the three white soldiers. 
     * It is formed when three bearish candles follow a strong UPTREND, indicating that a reversal is in the works.
     * The second candle’s body should be bigger than the first candle and should close at or very near its low.
     * 
     * Finally, the third candle should be the same size or larger than the second candle’s body with a very short 
     * or no lower shadow.
     */

    threeBlackCrows(): number {
        return 0;
    }


    /**
     * The three inside up candlestick formation is a trend-reversal pattern that is found at the bottom of 
     * a DOWNTREND. This triple candlestick pattern indicates that the downtrend is possibly over and that a new 
     * uptrend has started.
     * 
     * ### Characteristics
     * - The first candle should be found at the bottom of a downtrend and is characterized by a long bearish candlestick.
     * - The second candle should at least make it up all the way up to the midpoint of the first candle.
     * - The third candlestick needs to close above the first candle’s high to confirm that buyers have overpowered the strength of the downtrend.
     */

    threeInsideUp(): number {
        return 0;
    }


    /**
     * The three inside down candlestick formation is found at the top of an UPTREND. It means that the uptrend 
     * is possibly over and that a new downtrend has started.
     * 
     * ### Characteristics
     * - The first candle should be found at the top of an uptrend and is characterized by a long bullish candlestick.
     * - The second candle should make it up all the way down the midpoint of the first candle.
     * - The third candlestick needs to close below the first candle’s low to confirm that sellers have overpowered the strength of the uptrend.
     */

    threeInsideDown(): number {
        return 0;
    }
}