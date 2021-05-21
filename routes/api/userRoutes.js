const router= require('express').Router();
const userController= require("../../controllers/userControllers");

//Matching with the "api/users"
router
    .route("/")
    .get(userController.findAll)
    .post(userController.create);

//Matches with "api/users/:id"
router
    .route("/:id")
    .get(userController.findById)
    .put(userController.update)
    .delete(userController.remove);

    router
    .route("/auth")
    .post(userController.findAll)
    
module.exports = router;