/**
 * LRU算法
 * 一个 Map 对象在迭代时会根据对象中元素的插入顺序来进行
 * 新添加的元素会被插入到 map 的末尾，整个栈倒叙查看
 */
class LRUCache {
    constructor(capacity) {
        this.secretKey = new Map()
        this.capacity = capacity
    }
    get(key){
        if(this.secretKey.has(key)) {
            let tempValue = this.secretKey.get(key)
            this.secretKey.delete(key)
            this.secretKey.set(key, tempValue)
            return tempValue
        }else{
            return -1
        }
    }
    put(key, value) {
        //key已存在，仅修改值
        if(this.secretKey.has(key)){
            this.secretKey.delete(key)
            this.secretKey.set(key, value)
        }
        //key不存在，cache未满
        else if(this.secretKey.size < this.capacity){
            this.secretKey.set(key, value)
        }
        //添加新的key，删除旧key
        else{
            this.secretKey.set(key, value)
            //删除的第一个元素，即为最长未使用的
            this.secretKey.delete(this.secretKey.keys().next().value)
        }
    }
}

let cache = new LRUCache(2)
cache.put(1,1)
cache.put(2,2)
console.log("cache.get(1)", cache.get(1))
cache.put(3,3)
console.log("cache.get(2)", cache.get(2))//-1
cache.put(4,4)
console.log("cache.get(1)", cache.get(1))//-1
console.log("cache.get(3)", cache.get(3))//3
console.log("cache.get(4)", cache.get(4))//4
