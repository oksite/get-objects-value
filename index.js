function getValue (obj, path, defaultValue){
  const result = path
  .split('.')
  .reduce((lastObj, key) => (lastObj ? lastObj[key] : undefined), obj);

  if (
    defaultValue !== undefined &&
    Object.prototype.toString.call(result) !==
      Object.prototype.toString.call(defaultValue)
  ) {
    return defaultValue;
  }
  
  return result === undefined ? defaultValue : result;

}

module.exports =  getValue()