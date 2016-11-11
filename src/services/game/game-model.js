'use strict';

// game-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = new Schema({
  name:{type: String, required: true},
  klicked: {type: Boolean, rerquired: true, default: false}
});

const playerSchema = new Schema({
  name: { type: String, required:true }
})

const gameSchema = new Schema({
  cards: [cardSchema],
  players: [playerSchema],
  turn: {type: Boolean, required: true },
  winner: { type: Boolean, required: false },
  draw: { type: Boolean, required: false }
});

const gameModel = mongoose.model('game', gameSchema);

module.exports = gameModel;
