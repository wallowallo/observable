function makeSubject() {
  let value;
  let observers = new Array();
  /*
   *  recieves a function
   *  adds this function to an array of observers
   *  this function will be called everytime this value on the observable is changed
   */
  function subscribe(fn) {
    observers.push(fn);
  }

  /*
   *  recieves any value
   *  sets this value to the value of the observable
   *  and then notifies and calls all the observers with the new value
   */
  function setValue(val) {
    value = val;
    notify(value);
  }

  function notify(val) {
    observers.forEach(function(observer) {
      observer(val);
    });
  }
  return {
    subscribe: subscribe,
    setValue: setValue
  };
}
let observable = makeSubject();
function observer1(val) {
  console.log("asdf", val);
}
observable.subscribe(observer2);
observable.subscribe(observer1);
observable.setValue("hello");

function observer2(val) {
  console.log("fdsa", val);
}

setTimeout(function() {
  observable.setValue("hi");
}, 3000) 
