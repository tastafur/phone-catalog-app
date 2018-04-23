export function normalize(data, name, typeId = 'id') {
  let items = {};
  let itemsById = data.map((d) => {
    items[d[typeId]] = d;
    return d[typeId];
  });

  return {
    [`${name}s`]: items,
    [`${name}sByName`]: itemsById
  };
}
