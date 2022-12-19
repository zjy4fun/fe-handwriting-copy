const Subject = require('./Subject')
const Observer = require('./Observer')


const subject = new Subject() //被观察者
const observerA = new Observer('observerA', subject)//观察者A，申请加入被观察者
const observerB = new Observer('observerB')//观察者B
subject.addObserver(observerB)//被观察者主动加入观察者B
subject.notifyObservers('Hello from subject')

subject.removeObserver(observerA)
subject.notifyObservers('Hello again')
/**
    observerA got message Hello from subject
    observerB got message Hello from subject
    observerB got message Hello again
 */