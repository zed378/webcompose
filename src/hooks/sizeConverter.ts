export const converter = (val) => {
  if (val < 1024) {
    return val + "byte";
  } else if (val >= 1024 && val < 1024 ** 2) {
    return (val / 1024).toFixed(2) + "KB";
  } else if (val >= 1024 ** 2 && val < 1024 ** 3) {
    return (val / 1024 ** 2).toFixed(2) + "MB";
  }
};
