const productos = require('../models').productos

//Create product
//[object,boolean] = productos.findOrCreate(where: {element} ,defaults: {input})
//object = objeto creado/ objeto encontrado
//boolean = true (objeto creado) / false (objeto ya existente encontrado)
//{element} = objeto para buscar coincidencias
//{input} = objeto introducido en los campos al crear nuevo objeto

const add_product = async(req,res) => {
    const {nombre,descripcion,precio,url1,url2,url3} = req.body
    return await productos.findOrCreate({
        where:{nombre:nombre} , 
        defaults:{nombre,descripcion,precio,url1,url2,url3}
    }).then(productos => res.status(200).send(productos)).catch(error => res.send(500))
    
   


    

}

//Fetch all
const fetch_all = async (req,res) => {
    return await productos.findAll()
    .then(productos => res.status(200).send(productos))
    .catch(error => res.status(404).send(error))
}    

//Fetch one
const fetch_one = async (req,res) => {
    const { nombre } = req.params
    const parsed_nombre = nombre.replace(/_/g,' ')
    return await productos.findOne({where: {nombre:parsed_nombre}})
    .then(productos => res.status(200).send(productos))
    .catch(error => res.status(404).send(error))
   
}

//Delete product
const delete_product = async (req,res) => {
    const {nombre} = req.params
    const parsed_nombre = nombre.replace(/_/g,' ')
    
    return await productos.destroy({where: {nombre:parsed_nombre}})
    .then(productos => res.status(200).send('borrado: '+parsed_nombre))
    .catch(error => res.status(500).send(error))
}

//Update product
//nombre: Nombre del producto a actualizar
//field: nombre de la columna a actualizar
//new_field_input: nuevo input en field
//Actualiza: descripcion/precio/url1/url2/url3
const update_product = async (req,res) => {
    const {nombre, field, new_field_input } = req.body
    const parsed_nombre = nombre.replace(/_/g,' ')
    console.log(parsed_nombre)
    switch(field){
        case 'descripcion':
            await productos.update(//upsert single row 
                {
                    descripcion:new_field_input
                },
                {
                    where: {nombre:parsed_nombre}
                }
            ).then(productos => res.status(200).send(productos)).catch(error => res.status(500).send(error))
        break;
        case 'precio':
            await productos.update(
                { 
                    precio:new_field_input
                },
                {
                    where: {nombre:parsed_nombre}
                }
            ).then(productos => res.status(200).send(productos)).catch(error => res.status(500).send(error))
        break;
        case 'url1':
            await productos.update(
                { 
                    url1:new_field_input
                },
                {
                    where: {nombre:parsed_nombre}
                }
            ).then(productos => res.status(200).send(productos)).catch(error => res.status(500).send(error))
        break;
        case 'url2':
            await productos.update(
                { 
                    url2:new_field_input
                },
                {
                    where: {nombre:parsed_nombre}
                }
            ).then(productos => res.status(200).send(productos)).catch(error => res.status(500).send(error))
        break;
        case 'url3':
            await productos.update(
                { 
                    url3:new_field_input
                },
                {
                    where: {nombre:parsed_nombre}
                }
            ).then(productos => res.status(200).send(productos)).catch(error => res.status(500).send(error))
        break;
    }
    
}

module.exports = {add_product,fetch_all,fetch_one,delete_product,update_product}