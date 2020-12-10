// scheme-model
const db = require("../../data/db-config");
module.exports = {
  find() {
    return db("schemes");
  },
  findById(id) {
    return db("schemes").where("id", id);
  },
  add(scheme) {
    return db("schemes")
      .insert(scheme)
      .then(([id]) => {
        return db("schemes").where("id", id).first();
      });
  },
  remove(id) {
    return db("schemes").where("id", id).del();
  },
  update(changes, id) {
    return db("schemes").where("id", id).update(changes);
  },
};
