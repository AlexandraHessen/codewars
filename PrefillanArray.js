function prefill(n, v) {
    if(parseInt(n) != Math.abs(n)) {
      throw new TypeError(`${n} is invalid`)
    }
  
    return (n == 0) ? [] : new Array(n).fill(v)
  }