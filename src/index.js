module.exports = function check(str, bracketsConfig) {
  // your solution

  
  while (str.includes('()') || str.includes('[]') || str.includes('||') || str.includes('{}') || str.includes('12') || str.includes('34') || str.includes('56') || str.includes('77') || str.includes('88')) {
    str = str.replace('()','')
  str = str.replace('[]','')
  str = str.replace('||','')
  str = str.replace('{}','')
  str = str.replace('12','')
  str = str.replace('34','')
  str = str.replace('56','')
  str = str.replace('77','')
  str = str.replace('88','')
}

  
  if (str === '') {
    return true
  } else return false;
}
