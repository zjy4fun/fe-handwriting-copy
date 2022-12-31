/**
 * 手写Promise
 *
 */
class MyPromise {
    constructor(fn) {
        //表示状态
        this.state = "pending"
        //表示then注册的成功函数
        this.successFun = []
        //表示then注册的失败函数
        this.failFun = []

        let resolve = (val) => {
            if (this.state !== "pending") return
            //成功触发时机，改变状态，同时执行在 then 注册的回调事件
            this.state = "success"
            //为了保证 then 事件先注册  promise规范，这里模拟异步
            setTimeout(() => {
                //执行当前事件里面所有的注册函数
                this.successFun.forEach((item) => item.call(this, val));
            })
        }

        let reject = (err) => {
            if (this.state !== "pending") return
            //失败触发时机，改变状态，同时执行在then注册的回调函数
            this.state = "fail"
            //为了保证 then 事件先注册
            setTimeout(() => {
                this.failFun.forEach((item) => item.call(this, err))
            })
        }

        //调用函数
        try {
            fn(resolve, reject)
        } catch (error) {
            reject(error)
        }
    }

    //实例方法 then
    then(resolveCallback, rejectCallback) {
        resolveCallback =
            typeof resolveCallback !== 'function' ? (v) => v : resolveCallback;
        rejectCallback =
            typeof rejectCallback !== 'function'
                ? (err) => {
                    throw err;
                } :
                rejectCallback;
        //为了保持链式调用，继续返回 promise
        return new MyPromise((resolve, reject) => {
            //将回调注册到successFun事件集合里面去
            this.successFun.push((val) => {
                try {
                    //执行回调函数
                    let x = resolveCallback(val)
                    //如果回调函数结果是普通值，那么就resolve出去给下一个then链式调用；
                    //如果是一个promise对象，那么调用x的then方法，将resolve和reject传进去，等到x内部异步执行完毕的时候，就会自动执行传入的resolve
                    //这样就控制了链式调用的顺序
                    x instanceof MyPromise ? x.then(resolve, reject) : resolve(x)
                } catch (error) {
                    reject(error)
                }
            })

            this.failFun.push((val) => {
                try {
                    let x = rejectCallback(val)
                    x instanceof MyPromise(val) ? x.then(resolve, reject) : reject(x)
                } catch (error) {
                    reject(error)
                }
            })
        })
    }

    //静态方法
    static all(promiseArr) {
        let result = []
        //声明一个计数器，每一个promise返回就+1
        let count = 0
        return new MyPromise((resolve, reject) => {
            for (let i = 0; i < promiseArr.length; i++) {
                Promise.resolve(promiseArr[i]).then(
                    (res) => {
                        result[i] = res
                        count++
                        if (count === promiseArr.length) {
                            resolve(result)
                        }
                    },
                    (err) => {
                        reject(err)
                    }
                )
            }
        })
    }

    static race(promiseArr) {
        return new MyPromise((resolve, reject) => {
            for (let i = 0; i < promiseArr.length; i++) {
                Promise.resolve(promiseArr[i]).then(
                    (res) => {
                        //promise数组只要有任何一个promise状态变更，就可以返回
                        resolve(res)
                    },
                    (err) => {
                        reject(err)
                    }
                )
            }
        })
    }
}


//test
let promise1 = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve(123)
    }, 2000)
})
let promise2 = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve(1234)
    }, 1000)
})

// MyPromise.all([promise1, promise2]).then(res => {
//     console.log(res)
// })

// MyPromise.race([promise1, promise2]).then(res => {
//     console.log(res)
// })
promise1.then(res => {
        console.log(res) //过两秒输出123
        return new MyPromise((resolve, reject) => {
            setTimeout(() => {
                resolve("success")
            }, 1000)
        })
    },
    err => {
        console.log(err)
    }).then(res => {
    console.log(res)//再过一秒输出success
}, err => {
    console.log(err)
})