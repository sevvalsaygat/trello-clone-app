function isValidEmail(str: string) {
  const regex = new RegExp(
    /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g
  );
  return regex.test(str);
}

export default { isValidEmail };
