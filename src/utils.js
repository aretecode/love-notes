export function none(obj) {
  return (obj === null || obj === undefined || (isNaN(obj) && obj === false))
}

export function createSearch(collection, property) {
  return function(value) {
    return collection.find(c => c[property] === value)
  }
}

export function unless(exp, cb) {
  if(none(exp)) {
    cb()
  }
}

export function truncValues(obj, demark = '\n', length = 80) {
  let o = {}

  for(let [key, value] of Object.entries(obj)) {
    if(typeof value === 'string') {
        const splits = value.split(demark)
        if(splits.length > 1) {
          value = splits[0] + '...' + splits[splits.length - 1]
        }

      if(value.length > length - 3) {
        value = value.substr(0, length - 3) + '...'
      }
    }
    o[key] = value
  }
  return o
}
