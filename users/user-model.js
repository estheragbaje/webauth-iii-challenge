const db = require("../db-config.js");

module.exports = {
  add,
  find,
  findBy,
  findById,
  findAll
};

function find() {
  return db("users").where("id", "username", "password");
}

function findAll() {
  return db("users").select("id", "username", "department");
}

function findBy(filter) {
  return db("users").where(filter);
}

function add(user) {
  return db("users")
    .insert(user, "id")
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}

// async function add(user) {
//   const [id] = await db("users").insert(user);

//   return findById(id);
// }

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}
