function getElementWidth(content = '', padding = '', border = '') {
  const separator = 'px'
  const contentValue = sliceArguments(String(content));
  const paddingValue = sliceArguments(String(padding));
  const borderValue = sliceArguments(String(border));

  function sliceArguments(arg) {
    return Number(arg.split([separator]).slice()[0]);
  }

  return contentValue + paddingValue * 2 + borderValue * 2;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200