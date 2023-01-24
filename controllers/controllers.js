const bcrypt = require('bcrypt')
const usuarios = require('../models').usuarios


//////////////////////////////////////////////USUARIOS

//Crear usuario
const create_user = async (req,res)=>{
    const {name,lastname,email,bdate,key} = req.body
    
    //Encriptado de clave///////////////////////////////////////////////////
    const clave_hash = bcrypt.hashSync(key,8)
    
    ////////////////////////////////////////////////////////////////////////
    
    const obj = {name,lastname,email,bdate,key:clave_hash}
    console.log(obj)
    
    //Creacion exitosa
    return await usuarios.create({name,lastname,email,bdate,key:clave_hash})
    .then(usuarios => res.status(201).send(usuarios))
    .catch(error => res.status(500).send(error))
    
}

//Borrar un usuario
const delete_user =  async(req, res) => {
    const { id } = req.params
    const usuario = await usuarios.findOne({where: { id: id} })
    
    if(usuario == null){
        return res.status(404).send('no se encuentra')
    }
        
    

    return usuarios.destroy({
        where: { id: id}
    }).then(usuario=>res.status(200).send(usuario)).catch(error => res.status(500).send(error))
       
}

//Obtener todos los usuarios
const getall = async(req,res)=>{
    return await usuarios.findAll()
    .then(usuarios => res.status(200).send(usuarios))
    .catch(error => res.status(404).send(error))

}

//Obtener usuario
const get_user = async(req,res)=>{
    const {id} = req.params
    const usuario = await usuarios.findOne({where: {id:id}})
    if(usuario == null){
        res.sendStatus(404)
    }else{
        res.sendStatus(200)
    }
}


module.exports = {create_user,delete_user,get_user,getall}