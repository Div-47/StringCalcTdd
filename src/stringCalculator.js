function add(numbers) {
  if (!numbers) return 0;

  let delimiters = [",", "\n"];
  if (numbers.startsWith("//")) {
    const delimiterHeaderMatch = numbers.match(/^\/\/(.*?)\n/);
    const delimiterPart = delimiterHeaderMatch[1];
    numbers = numbers.slice(delimiterHeaderMatch[0].length);

    const multipleDelimiters = delimiterPart.match(/\[.*?\]/g);
    if (multipleDelimiters) {
      delimiters = multipleDelimiters.map((d) => escapeRegExp(d.slice(1, -1)));
    } else {
      delimiters = [escapeRegExp(delimiterPart)];
    }
  }
  const delimiterRegex = new RegExp(delimiters.join("|"));
  const tokens = numbers.split(delimiterRegex);
  let result = 0;
  const negatives = [];
  for (const token of tokens) {
    if (token.trim() === "") continue;
    const num = parseInt(token, 10);
    if (isNaN(num)) continue;

    if (num < 0) negatives.push(num);
    if (num <= 1000) result += num;
  }
  if (negatives.length) {
    throw new Error(`negative numbers not allowed ${negatives.join(", ")}`);
  }
  return result;
}

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

module.exports = { add };
