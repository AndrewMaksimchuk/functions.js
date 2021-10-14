/*
Properties 'name' and 'data' - are private and not accessible directly from the object. 
Access occurs only through pre-announced methods in the constructor function 'obj'.
*/

function Builder() {
  let name = 'Andrew';
  const data = {};
  function obj() {
    this.getName = function() {
      return name;
    }
    this.setName = function(value) {
      return name = value;
    }
    this.setData = function(key, value) {
      data[key] = value;
      return data;
    }
  }
  return new obj();
}

const o = Builder();
console.log(o.data) // undefined
console.log(o.getName()) // Andrew
console.log(o.setData('age', 30)) // {age: 30}
