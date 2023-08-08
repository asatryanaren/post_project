export const timeConverter = () => {
  let a = new Date();
  let hour = a.getHours();
  let min = a.getMinutes();
  let time = ` ${hour} : ${min}  `;
  return time;
};
