import {DataTypes} from 'sequelize'
import db from '../config/db.js'

const Usuario = db.define('usuarios',{
    nombres:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    apellidos:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    cedula:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    nacimiento:{
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    correo:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    token: DataTypes.STRING,
    confirmado: DataTypes.BOOLEAN
}
,{
    timestamps: true, // para que se creen los campos de createdAt y updatedAt
})

export default Usuario; // exportamos el modelo para poder usarlo en otros archivos