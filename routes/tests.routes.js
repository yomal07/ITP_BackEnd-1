module.exports = app => {
    const tests = require("../controllers/tests.controller");

    let router = require("express").Router();


    // Retrieve all subbmitted tests
    router.get("/subbmitted", tests.findAllSubbmitted);

    // Retrieve all compleetd tests
    router.get("/completed", tests.findAllCompleted);

    // Retrieve all started tests
    router.get("/started", tests.findAllStarted);

    // Create a new tests
    router.post("/", tests.create);

    //geta all test details
    router.get("/", tests.getAll);

    //retrive a single test when specimen id and contact number correct
    router.get("/client", tests.client);

    //// Update a test with id
    router.put("/:id", tests.update);

    app.use('/api/tests', router);

};