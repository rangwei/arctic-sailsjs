/**
 * Survey.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    type: {type: 'number'},
    q1: {type: 'number'},
    q2: {type: 'number'},
    q3: {type: 'number'},
    q4: {type: 'number'},
    q5: {type: 'number'}

  },

};

