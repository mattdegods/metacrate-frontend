export const getUnixTs = () => {
  return new Date().getTime() / 1000;
};

export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
