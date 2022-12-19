class PubSub {
    constructor() {
        this.messages = {}
        this.listeners = {}
    }
    publish(type, content) {
        const existContent = this.messages[type]
        if (!existContent) {
            this.messages[type] = []
        }
        this.messages[type].push(content)
    }
    subscribe(type, cb) {
        const existListener = this.listeners[type]
        if (!existListener) {
            this.listeners[type] = []
        }
        this.listeners[type].push(cb)
    }
    notify(type) {
        const messages = this.messages[type]
        const subscribers = this.listeners[type] || []
        //唤醒每一个订阅者
        subscribers.forEach((cb, index) =>
            cb(messages[index])
        );
    }
}

class Publisher {
    constructor(name, content) {
        this.name = name
        this.content = content
    }
    publish(type, content) {
        this.content.publish(type, content)
    }
}

class Subscriber {
    constructor(name, content) {
        this.name = name
        this.content = content
    }
    subscribe(type, cb) {
        this.content.subscribe(type, cb)
    }
}

const TYPE_A = 'music'
const TYPE_B = 'movie'
const TYPE_C = 'novel'

const pubsub = new PubSub()

//创建三个发布者，发布一些消息
const publisherA = new Publisher('publisherA', pubsub)
publisherA.publish(TYPE_A, 'we are young')
publisherA.publish(TYPE_B, 'the silicon valley')
const publisherB = new Publisher('publisherB', pubsub)
publisherB.publish(TYPE_A, 'stronger')
const publisherC = new Publisher('publisherC', pubsub)
publisherC.publish(TYPE_C, 'a brief history of time')

const subscribeA = new Subscriber('subscriberA', pubsub)
subscribeA.subscribe(TYPE_A, res => {
    console.log('subscribeA received', res)
})
const subscribeB = new Subscriber('subscribeB', pubsub)
subscribeB.subscribe(TYPE_B, res => {
    console.log('subscribeB received', res)
})
const subscribeC = new Subscriber('subscribeC', pubsub)
subscribeC.subscribe(TYPE_C, res => {
    console.log('subscribeC received', res)
})

pubsub.notify(TYPE_A)
pubsub.notify(TYPE_B)
pubsub.notify(TYPE_C)
/*
subscribeA received we are young
subscribeB received the silicon valley
subscribeC received a brief history of time
*/