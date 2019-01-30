/**
 * Doji candles suggest indecision or a struggle for turf positioning between buyers and sellers.
 * Prices move above and below the open price during the session, but close at or very near the open price.
 * Neither buyers nor sellers were able to gain control and the result was essentially a draw.
 */

enum Doji {
    LongLegged,
    Dragonfly,
    GraveStone,
    FourPrice
};


export default class SingleIndicator {

    public data: Object[];

    constructor(data: Object[]) {
        this.data = data;
    }


    /**
     * Long upper shadow, long lower shadow and small real bodies are called spinning tops. The color of the 
     * real body is not very important. The pattern indicates the indecision between the buyers and sellers.
     * 
     * Neither buyers nor sellers could gain the upper hand, and the result was a standoff.
     * 
     * ### Notes
     * - If a spinning top forms during an uptrend, this usually means there aren’t many buyers left and a 
     * possible reversal in direction could occur.
     * - If a spinning top forms during a downtrend, this usually means there aren’t many sellers left and a 
     * possible reversal in direction could occur.
     */

    spinningTop(): number {
        return 0;
    }


    /**
     * Marubozu means there are no shadows from the bodies.
     * 
     * This is a very bullish candle as it shows that buyers were in control the entire session. 
     * It usually becomes the first part of a bullish continuation or a bullish reversal pattern.
     */

    marubozuBullish(): number {
        return 0;
    }


    /**
     * Marubozu means there are no shadows from the bodies.
     * 
     * This is a very bearish candle as it shows that sellers controlled the price action the entire session. 
     * It usually implies bearish continuation or bearish reversal.
     */

    marubozuBearish(): number {
        return 0;
    }


    /**
     * When a Doji forms on your chart, pay special attention to the preceding candlesticks. If a Doji forms after 
     * a series of candlesticks with long hollow bodies (like White Marubozus), the Doji signals that the buyers are 
     * becoming exhausted and weakening.
     * 
     * In order for price to continue rising, more buyers are needed but there aren’t anymore! Sellers are licking 
     * their chops and are looking to come in and drive the price back down.
     * 
     * # NOTE:
     * 
     * Doji stuff will be more complex than other indicators, this function is just a placeholder.
     */

    checkForDojiPattern(): Doji {
        return Doji.LongLegged;
    }


    /**
     * The hammer is a bullish reversal pattern that forms during a downtrend. 
     * It is named because the market is hammering out a bottom, so signal must follow a downtrend.
     * 
     * Has a small body and long tail, closing high.
     * 
     * ### Characteristics:
     * - The long shadow is about two or three times of the real body.
     * - Little or no upper shadow.
     * - The real body is at the lower end of the trading range.
     * - The color of the real body is not important.
     */

    hammer(): number {
        return 0;
    }


    /**
     * The hanging man is a bearish reversal pattern that can also mark a top or 
     * strong resistance level. Opposite of a hammer, and must follow an uptrend.
     * 
     * Has a small body and long tail, closing low
     * 
     * ### Characteristics:
     * - The long shadow is about two or three times of the real body.
     * - Little or no upper shadow.
     * - The real body is at the upper end of the trading range.
     * - The color of the body is not important, though a black body is more bearish than a white body.
     */

    hangingMan(): number {
        return 0;
    }


    /**
     * An inverted hammer is a bullish reversal candlestick. The inverted hammer occurs 
     * when price has been falling suggests the possibility of a reversal. Its long upper 
     * shadow shows that buyers tried to bid the price higher.
     * 
     * Has a small body with a long head, closing high
     */

    invertedHammer(): number {
        return 0;
    }


    /**
     * The shooting star is a bearish reversal pattern that looks identical to the inverted hammer 
     * but occurs when price has been rising.
     * 
     * This means that buyers attempted to push the price up, but sellers came in and overpowered them. 
     * This is a definite bearish sign since there are no more buyers left because they’ve all been murdered.
     */

    shootingStar(): number {
        return 0;
    }
}