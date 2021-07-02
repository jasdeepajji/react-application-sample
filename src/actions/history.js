import { INPUT_HISTORY } from "./action_constant";
/********** Add input in history **********/
export const addHistory = number => ({
  data: { number, date: new Date().toISOString() },
  type: INPUT_HISTORY
});

export const printNumber = (i) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(i);
    }, Math.ceil(Math.random() * 1000));
  })
};

