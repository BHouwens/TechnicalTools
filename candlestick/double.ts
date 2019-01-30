export default class DoubleIndicator {

    public data: Object[];

    constructor(data: Object[]) {
        this.data = data;
    }

    /**
     * The bullish engulfing pattern is a two candlestick pattern that 
     * signals a strong up move may be coming.
     * 
     * It happens when a bearish candle is immediately followed by a larger bullish candle. 
     * This second candle “engulfs” the bearish candle. This means buyers are flexing their 
     * muscles and that there could be a strong up move after a recent downtrend or a period of 
     * consolidation.
     */

    engulfingBullish(): number {
        return 0;
    }


    /**
     * The bearish engulfing pattern is the opposite of the bullish pattern.
     * 
     * This type of candlestick pattern occurs when the bullish candle is immediately followed by 
     * a bearish candle that completely “engulfs” it. This means that sellers overpowered the buyers 
     * and that a strong move down could happen.
     */

    engulfingBearish(): number {
        return 0;
    }


    /**
     * The tweezers are dual candlestick reversal patterns. This type of candlestick pattern is usually 
     * spotted after an extended uptrend or downtrend, indicating that a reversal will soon occur.
     * 
     * The first candlestick is the same as the overall trend. If price is moving up, then the first candle 
     * should be bullish. The second candlestick is opposite the overall trend. If price is moving up, then 
     * the second candle should be bearish.
     * 
     * The shadows of the candlesticks should be of roughly equal length.
     * 
     * Tweezer bottoms indicate a bullish reversal.
     */

    tweezerBottoms(): number {
        return 0;
    }


    /**
     * The tweezers are dual candlestick reversal patterns. This type of candlestick pattern is usually 
     * spotted after an extended uptrend or downtrend, indicating that a reversal will soon occur.
     * 
     * The first candlestick is the same as the overall trend. If price is moving up, then the first candle 
     * should be bullish. The second candlestick is opposite the overall trend. If price is moving up, then 
     * the second candle should be bearish.
     * 
     * The shadows of the candlesticks should be of roughly equal length.
     * 
     * Tweezer bottoms indicate a bearish reversal.
     */

    tweezerTops(): number {
        return 0;
    }

    
}