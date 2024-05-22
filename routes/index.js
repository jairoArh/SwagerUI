const router = require('express').Router()

const courses = [{"id":"8108255","name":"Programación-I","credits":4},{"id":"8108256","name":"Programación-II","credits":4},{"id":"8108257","name":"Programación-III","credits":4},{"id":"8108277","name":"Electiva-II","credits":3},]

/**
 * @swagger
 * /:
 *   get:
 *     summary: Lista de Cursos
 *     description: Método que retorna una colección de cursos
 *     responses:
 *       '200':
 *         description: Respuesta satisfactoria.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 state:
 *                   type : boolean
 *                   description: Indica éxito en la consulta de los datos
 *                   example: false
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         description: Especifica el ID del curso
 *                         example: 8108277
 *                       name:
 *                         type: string
 *                         description: Hace referencia al nombre del curso
 *                         example: Electiva-II
 *                       credits:
 *                         type: integer
 *                         description: Especifica el número de créditos del curso
 *                         example: 3
 *         '501':
 *           description: Error
 *           content: 
 *             text/plain:
 *               schema:
 *                 type: string
 *                 example: Oh!! Algo ha pasado           
 */
router.get('/',(req,res)=> res.status(200).json({state:true,data:courses}))

/**
 * @swagger
 * /{id}:
 *   get:
 *     summary: Recuperar un curso por ID
 *     description: Realiza una búsqueda por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: 
 *           type: string
 *         required: true
 *         description: Id del curso para recuperar el objeto
 *     responses:
 *       '201':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 state:
 *                   type: boolean
 *                   description: Indica que el objeto se encuentra o no.
 *                 data:
 *                   type: object
 *                   properties:
 *                     id : 
 *                       type: string
 *                       description: ID del curso
 *                       example: 8108277
 *                     name:
 *                       type: string
 *                       description: Nombre del curso
 *                       example: Electiva-II
 *                     credits: 
 *                       type: integer
 *                       description: Créditos del curso
 *                       example: 3
 *       '401':
 *         description: NOT FOUND
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 state:
 *                   type: boolean
 *                   description: Indica que el objeto no existe
 *                   example: false
 *                 msg: 
 *                   type: string
 *                   description: Mensaje de Error   
 */
router.get('/:id',(req,res)=>{
  const {id} = req.params
  const course = courses.find( c => c.id === id )
  if( course != null ){
    return res.status(201).json({state:true,data:course})
  }else{
    return res.status(401).json({state:false,msg:"Id no Existe"})
  }
  
})

/**
 * @swagger
 * /:
 *   post:
 *     summary: Crea un Nuevo curso
 *     requestBody:
 *       description: Inserta un nuevo registro
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 description: Id del curso
 *                 example: 8108277
 *               name:
 *                 type: string
 *                 description: Nombre del curso
 *                 example: Electiva-II
 *               credits:
 *                 type: integer
 *                 description: Número de créditos del curso
 *                 example: 3
 *     responses:
 *       '201':
 *         description: SUCCESS
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id: 
 *                   type: string
 *                   description: ID del curso
 *                   example: 8108277
 *                 name:
 *                   type: string
 *                   description: Nombre del curso
 *                   example: Electiva-II
 *                 credits:
 *                   type: integer
 *                   description: Número de créditos del curso
 *                   example: 3
 */
router.post('/',(req,res)=>{
  const {id,name,credits} = req.body

  return res.status(201).json({"id":id,"name":name,"credits":credits})
})

module.exports = router