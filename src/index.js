module.exports = function check(str, bracketsConfig) {
  let arr = str.split('');
  
  //создадим объект для будущих пар ключ(закрывающая скобка): значение (открывающая)
  let bracketsPair = {};
  bracketsConfig.forEach((item) => {
      bracketsPair[item[1]] = item[0]; //создадим пару значений объекта
  });
  
  //сосдадим стек
  let stack = [];

  //будем помещать открывающие скобки внутрь, и проверять закрывающие на пару
  for (let i = 0; i < arr.length; i++) {
      let topElement = stack[stack.length - 1];
      let current = arr[i];
      
      if (stack.length && topElement === bracketsPair[current]) {
          stack.pop();
        } else {
          stack.push(current);
      }
  }
  return stack.length === 0;
}
