const express = require('express');
/* Importando rotas */
const routes = require('./routes');
const cors = require('cors');
const app = express();

app.use(cors()); /* Aqui todas aplicações front-end podem acessar por enquanto o back */
/*Utilizando json para o corpo das requisição*/
app.use(express.json());
app.use(routes);
app.listen(3333);
/** 
 * Rota / recurso
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar uma informação do back-end
  * POST: Criar uma informação do back-end
  * PUT: Alterar uma informação do back-end
  * DELETE: Delatar uma informação do back-end
  */

  /**
   * Tipos de parâmetros:
   * 
   * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, páginação, usa: Get).
   * Route Params: Parâmetros utilizados para identificar recursos (Usa:GET).
   * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos (Usa: Post). 
   */
// app.get('/users', (request, response) => {
//     return response.send('Hello Word');
// });

/**O request guarda todos os dados do Query Params e mostra ao usuário;
* Exemplo: http://localhost:3333/users?name=Morgana&idade=21
*/ 

/**Banco de dados:
*   Mais utilizado - SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
*   NoSQL: MongoDb, CouchDB, entre outros.
*/

