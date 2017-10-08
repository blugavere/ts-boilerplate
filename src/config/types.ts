
const types = {
  db: null,
  CatRepository: null,
  cats: null,
  CatCtrl: null,
  CatService: null
};

for (const i in types) {
  if (types[i] === null) {
      types[i] = i;
  }
}

export default types;
