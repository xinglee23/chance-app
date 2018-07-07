var foo = {
  value: 1
};

function bar() {
  console.log(this.value);
}

bar.call(foo)

var foo = {
  value: 1,
  bar: function() {
    console.log(this.value);
  }
}

foo.bar()

foo.fn = bar
foo.fn
delete foo.fn

Function.prototype.call2 = function(context) {
  context.fn = this;
  context.fn();
  delete context.fn;
}

var foo = {
  value: 1
}

function bar() {
  console.log(this.value)
}

bar.call2(foo)


var foo = {
  value: 1
}
function bar(name, age) {
  console.log(name);
  console.log(age);
  console.log(this.value);
}

bar.call(foo, 'kevin', 18)
var args = []
for(var i = 1, len = argumrents.length; i < len; i++) {
  args.push('arguments[' + i + ']')
}

eval('context.fn(' + args + ')')

Function.prototype.call2 = function(context) {
  context.fn = this;
  var args = [];
  for(var i = 1, len = arguments.length; i < len; i++) {
    args.push('arguments[' + i + ']');
  }
  context.fn;
  eval('context.fn(' + args + ')');
  delete context.fn;
}


Function.prototype.call2 = function(context) {
  var context = context || window
  context.fn;

  var args = []
  for(var i = 1, len = arguments.length; i++) {
    args.push('arguments[' + i + ']')
  }
  
  var result = eval('context.fn(' + args + ')')
  delete context.fn;
  return result; 
}


Function.prototype.apply = function(context, arr) {
  var context = Object(context) || window;
  context.fn = this;

  var result;
  if(!arr) {
    result = context.fn();
  }
  else {
    var args = [];
    for(var i = 0, len = arr.length; i < len; i++) {
      args.push('arr[' + i + ']');
    }
    result = eval('context.fn(' + args + ')');
  }
  delete context.fn;
  return result;
}

Function.prototype.apply = function(context, arr) {
  var context = context || window

  var result;
  if(!arr) {
    context.fn;
  } else {
    var args = []
    for(var i = 0, len = arr.length; i < len; i++) {
      args.push('arguments[' + i + ']')
    }
    result = eval('context.fn(' + arr + ')')
  }

  delete context.fn;
  return result;
}

Function.prototype.bind2 = function(context) {
  var self = this;
  return function() {
    self.apply(context);
  }
}

var foo = {
  value: 1
}

function bar() {
  console.log(this.value)
}

var bindFoo = bar.bind(foo)
bindFoo()

Function.prototype.bind2 = function(context) {
  var self = this;
  return function() {
    return self.apply(context);
  }
}

var foo = {
  value: 1
}

function bar() {
  return this.value;
}

var bindFoo = bar.bind(foo);
console.log(bindFoo);

var foo = {
  value: 1
}

function bar(name, age) {
  console.log(this.value)
  console.log(name)
  console.log(age)
}

var bindFoo = bar.bind(foo, 'daisy')
bindFoo('18')

Function.prototype.bind2 = function(context) {
  var self = this;
  var args = Array.prorotype.slice.call(arguments, 1)
  return function() {
    var bindArgs = Array.prototype.slice.call(arguments)
    return self.apply(conext, args.concat(bindArgs))
  }
}

var value = 2;
var foo = {
  value: 1
}

function bar(name, age) {
  this.habit = 'shopping';
  console.log(this.value);
  console.log(name);
  console.log(age);
}

bar.prototype.friend = 'kevin';

var bindFoo = bar.bind(foo, 'daisy');

var obj = new bindFoo('18')
console.log(obj.habit);
console.log(obj.friend);

Function.prototype.bind2 = function(conext) {
  var self = this;
  var args = Array.prototype.slice.call(arguments, 1)

  var fBound = function() {
    var bindArgs = Array.prototype.slice.call(arguments);
    return self.apply(this instanceof fBound ? this : context, args.concat(bindArgs))
  }

  fBound.prototype = this.prorotype;
  return fBound;
}

function Parent() {
  this.name = name;
}

function Child() {
  this.age = 28;
}

Child.prototype = new Parent()

// ajax请求
var xhr = null;
xhr = new XMLHttpRequest();
xhr.open('get', url, true);
xhr.send(null);
xhr.onreadystatechange = function() {
  if(xhr.readystate === 4) {
    if(xhr.status === 200) {
      success(xh.responseText);
    } else {
      fail && fail(xhr.status);
    }
  }
}


function isArray(arg) {
  if(typeof arg === 'Object') {
    return Object.prototype.toString.call(arg) === '[Object Array]'
  } 
  return false;
}

function bubbleSort(arr) {
  for(var i = 0; i < arr.length - 1; i++) {
    for(var j = 0; j < arr.length - 1; j++) {
      if(arr[j + 1] < arr[j]) {
        var temp;
        temp = arr[j]
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr
}

Function.prototype.bind = function(ctx) {
  var fn = this
  return function() {
    fn.apply(ctx, arguments)
  }
}

const quickSort = (arr) => {
  if(arr.length <= 1) {
    return arr;
  }
  let pivotIndex = Math.floor(arr.length / 2);
  let pivot = arr.splice(pivotIndex, 1)[0];
  let left = [];
  let right = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
    return quickSort(left).concat([pivot], qucikSort(right))
  }
}

var request = null
request = new XMLHttpRequest()
// ie
// request = new ActiveXObject()
request.onreadystatechange(function() {
  if(request.readyState === 4) {
    if(request.readyStatus === 200) {
      function() {
        return success...
      }
    } else {
      function() {
        return fail...
      }
    }
  } else {
    // continue request...
  }
})

request.open('get', '...')
request.send()

'/proxy?url=http://www.sina.com.cn'
<script src="http://example.com/abc.js"></script>