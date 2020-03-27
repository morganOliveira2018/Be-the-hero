/* Imports */
const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const routes = express.Router();
/* Apenas para verificar se exite a secção(Perfil) da Ong'*/
const SessionController = require('./controllers/SessionController');

/* Chamar o get para verificar o cadastro dos casos */
routes.get('/incidents', IncidentController.index);
/* Cadastro dos casos por ong */
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);
routes.get('/profile', ProfileController.index);
/* Criação de seções de Ongs*/
routes.post('/sessions', SessionController.create);

// Listagem de ongs do banco de dados 
routes.get('/ongs', OngController.index); 
/* Cadastro das ongs */
routes.post('/ongs', OngController.create);
/* Exportar uma variável de dentro de um arquivo: routes*/
module.exports = routes;

    /*console.log(data);*/
    /* Route Params
    const params = request.params; */
    /* Query Params-> const params = request.query;
    console.log(params); */ 
    
