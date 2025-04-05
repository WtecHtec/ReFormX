export const stringifyConfig = (obj: any) => {
    return JSON.stringify(obj, (key, value) => {
      if (typeof value === 'function') {
        return value.toString();
      }
      return value;
    }, 2);
  };