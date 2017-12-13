var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var sp = require('../views/singleplayer.hbs');

/* Create new schema for name */

var nameSchema = new mongoose.Schema({

    name: {
        type: String, required: [true, 'Enter Initials'],

        //Name must be three characters
        validate: {
            validator: function (n) {
                return n.length !== 3;
            },
            message: 'Must be three letter name'
        }
    },
    num: {
        type: Number,
        value: sp.score,
        required: true
    }
});

var Score = mongoose.model('Score', nameSchema);
nameSchema.plugin(uniqueValidator);

module.exports = Score;