var mongoose = require('mongoose');
module.exports = function(app){
    var dao = {};
    var getModel = function(modelName,schemaJson){
        var schema = mongoose.Schema(schemaJson);
        return mongoose.model(modelName,schema);
    }
    var contatosModel = getModel('Contatos', {
        nome:{type: String, required: true},
        email:{type: String, required: true, index:{unique: true}}
    });
    var cursosModel = getModel('Cursos', {
        curso:{type: String, required: true},
        coordenador:{type: String, required: true, index:{unique: true}}
    });
    var models = {
        'Contatos':contatosModel,
        'Cursos':cursosModel
    }
    dao.getModel = function(modelName){
        if(!(modelName in models)){
            return models['Contatos'];
        }
        return models[modelName];
    }

    return dao;
}