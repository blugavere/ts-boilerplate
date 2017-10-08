
const types = {
  db: null,
  CatRepository: null,
  CatFactory: null,
  cats: null,
  CatCtrl: null,
  CatService: null,
  Cat: null
};

for (const i in types) {
  if (types[i] === null) {
    types[i] = i;
  }
}

export default types;
