
const types = {
  db: null,
  CatRepository: null,
  cats: null,
  CatCtrl: null,
  CatService: null
};

Object.keys(types).forEach(t => {
  types[t] = t;
});

export default types;
