const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Library API',
            version: '1.0.0'
        }
    },
    apis: ['app.js'],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 *  @swagger
 * /books:
 *      get:
 *          description: Get all books
 *          responses:
 *              200:
 *                  description: Success
 * 
 */
app.get('/books', (req, res, next) => {
    res.send([
        {
            id: 1,
            title: 'Harry Potter'
        }
    ])
})

/**
 *  @openapi
 * /books:
 *      post:
 *          description: Create a New Book
 *          parameters:
 *              - name: title
 *                description: title of the Book
 *                in: formData
 *                required: true
 *                type: string
 *          responses:
 *              201:
 *                  description: Created
 * 
 */
app.post('/books', (req, res, next) => {
    res.status(201).send();
})

app.listen(5000);