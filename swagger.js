const swaggerJSDoc = require('swagger-jsdoc')

const swaggerDefinition = {
  openapi : '3.0.0',
  info : {
    title : 'MyAPI',
    version: '1.0.0',
    description:'Ejemplo de documentar son Swagger',
    license: {
      name: 'Licensed Under MIT',
      url: 'https://spdx.org/licenses/MIT.html',
    },
    contact: {
      name: 'Jairo Armando',
      url: 'https://aun no.com',
    },
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Development server',
    },
  ],
}

const options = {
  swaggerDefinition,
  apis:['./routes/*.js'],
}

const swaggerSpec = swaggerJSDoc(options)

module.exports = swaggerSpec