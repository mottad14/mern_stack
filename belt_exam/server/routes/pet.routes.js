const PetController = require("../controllers/pet.controller");

module.exports = app => {
  app.get('/api', PetController.index);
  app.get("/api/pets/", PetController.findAllPets);
  app.get("/api/pets/:_id", PetController.findOneSinglePet);
  // app.get('/api/random', PetController.findRandomPet);
  app.patch("/api/pets/update/:_id", PetController.updateOnePet);
  app.post("/api/pets/new", PetController.createNewPet);
  app.delete("/api/pets/adopt/:_id", PetController.deleteAnExistingPet);
};
