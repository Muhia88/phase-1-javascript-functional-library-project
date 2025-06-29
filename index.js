// Iterate over a collection (array or object), invoking callback for each value, return original collection
function myEach(collection, callback) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      callback(collection[i]);
    }
  } else {
    for (let key in collection) {
      if (collection.hasOwnProperty(key)) {
        callback(collection[key]);
      }
    }
  }
  return collection;
}

// Produce a new array of results of invoking callback on each value in collection
function myMap(collection, callback) {
  const result = [];
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      result.push(callback(collection[i]));
    }
  } else {
    for (let key in collection) {
      if (collection.hasOwnProperty(key)) {
        result.push(callback(collection[key]));
      }
    }
  }
  return result;
}

// Reduce a collection to a single value, using callback(accumulator, value, collection)
function myReduce(collection, callback, initialValue) {
  let acc;
  let startIndex = 0;
  const values = Array.isArray(collection)
    ? collection.slice()
    : Object.keys(collection).map(key => collection[key]);
  if (initialValue !== undefined) {
    acc = initialValue;
  } else {
    acc = values[0];
    startIndex = 1;
  }
  for (let i = startIndex; i < values.length; i++) {
    acc = callback(acc, values[i], collection);
  }
  return acc;
}


// Return the first element matching predicate in array, or undefined
function myFind(collection, predicate) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) return collection[i];
    }
  } else {
    for (let key in collection) {
      if (collection.hasOwnProperty(key)) {
        if (predicate(collection[key])) return collection[key];
      }
    }
  }
  return undefined;
}

// Return array of values for which predicate returns true
function myFilter(collection, predicate) {
  const result = [];
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) result.push(collection[i]);
    }
  } else {
    for (let key in collection) {
      if (collection.hasOwnProperty(key)) {
        if (predicate(collection[key])) result.push(collection[key]);
      }
    }
  }
  return result;
}


// Return number of elements or own keys in object
function mySize(collection) {
  if (Array.isArray(collection)) {
    return collection.length;
  } else {
    return Object.keys(collection).length;
  }
}



// Return first element or first n elements of array
function myFirst(array, n) {
  if (n === undefined) {
    return array[0];
  } else {
    return array.slice(0, n);
  }
}


// Return last element or last n elements of array
function myLast(array, n) {
  if (n === undefined) {
    return array[array.length - 1];
  } else {
    return array.slice(-n);
  }
}


// Return array of own enumerable property names of object
function myKeys(object) {
  return Object.keys(object);
}

// Return array of own enumerable property values of object
function myValues(object) {
  return Object.values(object);
}


