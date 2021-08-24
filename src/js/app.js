const input = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

export default function orderByProps(obj, keys = ['name', 'level']) {
  const newArray = [];
  const arrayRest = [];

  for (const prop in obj) {
    if (!keys.includes(prop)) {
      arrayRest.push(prop);
    }
  }
  arrayRest.sort();
  arrayRest.forEach((item) => {
    keys.push(item);
  });

  for (const item in keys) {
    if (item) {
      const key = keys[item];
      const value = obj[key];
      newArray.push({ key, value });
    }
  }

  return newArray;
}

orderByProps(input);
