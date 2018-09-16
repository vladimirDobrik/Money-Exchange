// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let result = {};
    
    if(currency <= 0){
        return result;
    }
    
    if(currency > 10000){
        result.error = "You are rich, my friend! We don't have so much coins for exchange";
        return result;
    }
    
    if(currency >= 50){
        result['H'] = Math.floor(currency / 50);
    }
    
    if(currency % 50 >= 25){
        result['Q'] = Math.floor(currency % 50 / 25);
    }
    
    if(currency % 50 % 25 >= 10 ){
         result['D'] = Math.floor(currency % 50 % 25 / 10);
    }
    
    if(currency % 50 % 25 % 10 >= 5){
        result['N'] = Math.floor(currency % 50 % 25 % 10 / 5);
    }
    
    if(currency % 50 % 25 % 10 % 5 > 0){
        result['P'] = Math.floor(currency % 50 % 25 % 10 % 5);
    }
    
    return result;
}
