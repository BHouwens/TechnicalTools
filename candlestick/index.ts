import SingleIndicator from './single';
import DoubleIndicator from './double';
import TripleIndicator from './triple';


export default class CandlestickAnalyzer {

    data: Object[];
    singleHandler: SingleIndicator;
    doubleHandler: DoubleIndicator;
    tripleHandler: TripleIndicator;

    /**
     * Candlestick handler (can also be used with regular OHLC data)
     * 
     * NOTE: All indicator confidences should be used in conjunction with 
     * support and resistance levels.
     * 
     * @param {Array} data 
     */

    constructor(data: Object[]) {
        this.data = data;

        this.singleHandler = new SingleIndicator(data);
        this.doubleHandler = new DoubleIndicator(data);
        this.tripleHandler = new TripleIndicator(data);
    }
}