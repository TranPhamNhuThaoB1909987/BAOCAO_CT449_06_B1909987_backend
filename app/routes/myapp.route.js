const express = require('express');
const user = require('../controllers/user.controller');
const notes = require('../controllers/note.controller');

const router = express.Router();

router.route("/notes")
    .get(notes.findAll)
    .post(notes.create)
    .delete(notes.deleteAll);

router.route("/important")
    .get(notes.findImportant);

router.route("/notes/:id")
    .get(notes.findOne)
    .put(notes.update)
    .delete(notes.delete);

router.route("/")
    .post(user.create)
    .get(user.findUser)

router.route("/:email")
    .get(user.findUser)

module.exports = router;