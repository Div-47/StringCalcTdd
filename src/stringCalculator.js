function add(numbers) {
  if (!numbers) return 0;

  let delimiter = /,|\n/;
  if (numbers.startsWith("//")) {
    const delimiterMatch = numbers.match(/^\/\/(.+)\n/);
    if (delimiterMatch) {
      const custom = delimiterMatch[1];
      delimiter = new RegExp(escapeRegExp(custom));
      numbers = numbers.substring(delimiterMatch[0].length);
    }
  }
  const tokens = numbers.split(delimiter);
  let result = 0;
  const negatives = [];

  for (let token of tokens) {
    if (token === "") continue;
    const num = parseInt(token);
     if (num < 0) negatives.push(num);
    if (!isNaN(num) && num <= 1000) {
      result += num;
    }
  }
   if (negatives.length) {
    throw new Error(`negative numbers not allowed ${negatives.join(", ")}`);
  }
  return result;
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

module.exports = { add };
