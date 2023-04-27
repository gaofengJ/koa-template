// 首字母大写
export const firstLetterCap = (str: string) => {
  const [first, ...rest] = str;
  return first.toUpperCase() + rest.join('');
};
