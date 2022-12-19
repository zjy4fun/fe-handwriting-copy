const Subject = require('./Subject')
const Observer = require('./Observer')


const subject = new Subject()
const observerA = new Observer('observerA', subject)
const observerB = new Observer('observerB')
subject.addObserver(observerB)
subject.notifyObservers('Hello from subject')
subject.removeObserver(observerA)
subject.notifyObservers('Hello again')