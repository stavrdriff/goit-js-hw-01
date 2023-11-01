function getElementWidth(content, padding, border) {
  const separator = 'px'
  const contentValue = sliceArguments(content);
  const paddingValue = sliceArguments(padding);
  const borderValue = sliceArguments(border);

  function sliceArguments(arg) {
    return Number(arg.split([separator]).slice()[0]);
  }

  if (contentValue >= 0 && paddingValue >= 0 && borderValue >= 0) {
    return contentValue + paddingValue * 2 + borderValue * 2;
  } else {
    return 'incorrect data'
  }

}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200