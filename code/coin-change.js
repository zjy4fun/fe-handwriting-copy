/**
 * 硬币找零
 */
const coinChange = function(coins, amount) {
    //用于保存每个目标总额对应的最小硬币个数
    const f = []
    //提前定义已知情况
    f[0] = 0
    for(let i = 1; i <= amount; i++) {
        f[i] = Infinity
        for(let j = 0; j < coins.length; j++){
            if(i - coins[j] >= 0) {
                f[i] = Math.min(f[i], f[i - coins[j]] + 1)
            }
        }
    }
    //若目标总额对应的解为无穷大，则意味着没有一个符合条件的硬币总数来更新它，本题无解，返回 -1
    if(f[amount] === Infinity){
        return -1
    }
    return f[amount]
}

console.log(coinChange([1,2,5], 11))