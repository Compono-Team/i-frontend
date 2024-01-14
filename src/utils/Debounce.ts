interface Params {
  func:Function;
  delay:number;
}

const debounce = ({ func, delay }:Params) => {
  let timeoutId:NodeJS.Timeout;

  return (...args:any) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

export default debounce;
