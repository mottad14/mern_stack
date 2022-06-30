// Write an efficient function that takes stock_prices and returns
// the best profit I could have made from one purchase and one sale of
// one share of Apple stock yesterday.

// The indices are the time (in minutes) past trade opening time, which was 9:30am local time.
// The values are the price (in US dollars) of one share of Apple stock at that time.

// $500 at 10:30am, that means stock_prices[60] = 500.

// stock_prices = [10, 7, 5, 8, 11, 9]

// No change in prices
// stock_prices = [0, 0, 0, 0, 0, 0] 

// Prices deplete (No profit to be made, only loss)
// stock_prices = [20, 15, 10, 5, 2]

// Ideal: Minimum price followed by, multiple increases afterward
// stock_prices = [20, 15, 20, 25, 30, 35]


function get_max_profit(stock_prices){

    // we could cycle through the index - or use a built-in - to find the minium
    // As we mark the lowest price in the day, we then need to mark the max price that comes with any index point afterward
    // if there is no rising price afterward, instead, mark a price that indicates an increase in profit if any increase 
    
    let min = stock_prices[0];
    let followMax = undefined;
    for (let index = 0; index < stock_prices.length; index++) {
        if( stock_prices[index] < min ){
            for (let innerIndex = index +1; innerIndex < stock_prices.length; innerIndex+1){
                
            }
            //if we find a minimum, we can try finding a max
        }
    }
}

// # Returns 6 (buying for $5 and selling for $11)

//Case possiblities: 
// The max profit could be a loss - as in, the value of the stock could decrease from beginning to end of the day
// in which case, there would be no way to make any gain/profit

// value of stocks stays entirely the same the entire time -- no reported profits or losses


