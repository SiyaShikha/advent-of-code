const compose = (fun1, fun2) => (...args) => fun1(fun2(...args));

const textToArray = (text) => {
  return eval(`[${text}]`);
};

const readFile = compose(textToArray, Deno.readTextFileSync);

