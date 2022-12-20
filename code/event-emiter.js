class EventEmitter {
    constructor() {
        this.events = {}
    }
    //实现订阅
    on(type, callback) {
        if(!this.events[type]) {
            this.events[type] = [callback]
        }else{
            this.events[type].push(callback)
        }
    }
    //删除订阅
    off(type, callback) {
        if(!this.events[type]) return
        this.events[type] = this.events[type].filter((item) => {
            return item !== callback
        })
    }
    //只执行一次订阅事件
    once(type, callback) {
        function fn() {
            callback()
            this.off(type, fn)
        }
        this.on(type, fn)
    }
    //触发事件
    emit(type, ...rest) {
        this.events[type] && this.events[type].forEach((fn) => fn.apply(this, rest))
    }
}

const event1 = new EventEmitter()
const handle = (...rest) => {
    console.log(rest)
}
event1.on("click", handle)     //实现订阅，把click事件添加进events  
event1.emit("click", 1,2,3,4)  //触发事件
event1.off("click", handle)    //删除订阅
event1.once("dbClick", () => { //只执行一次订阅事件
    console.log(123456)
})
event1.emit("dbClick")         //触发两次dbClick事件
event1.emit("dbClick")
