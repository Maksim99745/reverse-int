module.exports = function reverse (n) {
    let i = 0;
    let str = String(n);
    let result = '';

    while (i < str.length) {
        if (n < 0) {
        result = `${str[i]}${result}`;
        } else if (n > 0)  {
        result = `${str[i]}${result}`;
        } else {
          return 0;
        }
        i += 1;
    }
  let number = parseInt(result);
  
  let ads = Math.abs(number);
  return ads;
};