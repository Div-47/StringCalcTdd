function add(numbers) {
  if (!numbers) return 0;
  const tokens = numbers.split("");
  let result = 0;
  for (let token of tokens) {
    if (token === '') continue;
    const num = parseInt(token);
    if (num >0) result += num;
  }
  return result;
}

module.exports = { add };
