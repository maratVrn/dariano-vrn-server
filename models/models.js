const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email:{type: DataTypes.STRING, unique: true},
    name:{type: DataTypes.STRING, allowNull: false, defaultValue: "no"},
    password:{type: DataTypes.STRING, allowNull: false},
    phone:{type: DataTypes.STRING, defaultValue: "no"},
    role:{type: DataTypes.STRING, defaultValue: "ADMIN"}
    }
)

const Client = sequelize.define('client',{
        contact:{type: DataTypes.STRING, defaultValue: ""},
        id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        name:{type: DataTypes.STRING, allowNull: false},
        comment:{type: DataTypes.STRING, defaultValue: ""},
        surname:{type: DataTypes.STRING, defaultValue: ""},
        secondName:{type: DataTypes.STRING, defaultValue: ""},
        passport:{type: DataTypes.STRING, defaultValue: ""},
        managerId:{type: DataTypes.INTEGER},
        designerId:{type: DataTypes.INTEGER},
        startDate:{type: DataTypes.DATE},
        passportGet:{type: DataTypes.STRING, defaultValue: ""},
        contract:{type: DataTypes.STRING, defaultValue: ""},
        address:{type: DataTypes.STRING, defaultValue: ""},
        oooName:{type: DataTypes.STRING, defaultValue: ""},
        oooDirFio:{type: DataTypes.STRING, defaultValue: ""},
        oooDirTitle:{type: DataTypes.STRING, defaultValue: ""},
        oooInn:{type: DataTypes.INTEGER},
        oooKpp:{type: DataTypes.INTEGER},
        oooBuh:{type: DataTypes.STRING, defaultValue: ""}
    }
)

const Order = sequelize.define('order', {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        date: {type: DataTypes.DATE},
        status: {type: DataTypes.STRING, defaultValue: "new"},
        sum: {type: DataTypes.FLOAT, defaultValue: 0},
        doorDiscount: {type: DataTypes.FLOAT, defaultValue: 0},
        doorSum: {type: DataTypes.FLOAT, defaultValue: 0},
        moldingDiscount: {type: DataTypes.FLOAT, defaultValue: 0},
        moldingSum: {type: DataTypes.FLOAT, defaultValue: 0},
        fittingDiscount: {type: DataTypes.FLOAT, defaultValue: 0},
        fittingSum: {type: DataTypes.FLOAT, defaultValue: 0},
        comment: {type: DataTypes.STRING, defaultValue: ""},
        doorData: {type: DataTypes.STRING, allowNull: false},
        moldingData: {type: DataTypes.STRING, allowNull: false},
        fittingData: {type: DataTypes.STRING, allowNull: false},

    }
);

const DoorsColors = sequelize.define('doorsColors',{
        id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        color:{type: DataTypes.STRING, defaultValue: ""}
    }
)

const Doors = sequelize.define('doors',{
        id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        collection:{type: DataTypes.STRING, defaultValue: ""},
        name:{type: DataTypes.STRING, defaultValue: ""},
        color:{type: DataTypes.STRING, defaultValue: ""},
        glass:{type: DataTypes.STRING, defaultValue: ""},
        price:{type: DataTypes.FLOAT},
        comment:{type: DataTypes.STRING, defaultValue: ""}
    }
)

const FittingColors = sequelize.define('fittingColors',{
        id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        color:{type: DataTypes.STRING, defaultValue: ""}
    }
)

const Fittings = sequelize.define('fittings',{
        id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        fitting:{type: DataTypes.STRING, defaultValue: ""}
    }
)

const FittingBrands = sequelize.define('fittingBrands',{
        id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        brand:{type: DataTypes.STRING, defaultValue: ""}
    }
)
const FittingsPos = sequelize.define('fittingsPos',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    fitting:{type: DataTypes.STRING, defaultValue: ""},
    brand:{type: DataTypes.STRING, defaultValue: ""},
    pos:{type: DataTypes.STRING, defaultValue: ""},
    price:{type: DataTypes.FLOAT},
    }
)



const ClassicModels = sequelize.define('classicModels',{
        id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        model:{type: DataTypes.STRING, defaultValue: ""}

    }
)

const Moldings = sequelize.define('moldings',{                   // Типы погонажа
        id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        model:{type: DataTypes.STRING, defaultValue: ""}
    }
)

const MoldingsPos = sequelize.define('moldingsPos',{              // Список погонажа
        id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        moldingType:{type: DataTypes.STRING, defaultValue: ""},
        price:{type: DataTypes.FLOAT, defaultValue: 0},
        color:{type: DataTypes.STRING, defaultValue: ""},
        comment:{type: DataTypes.STRING, defaultValue: ""},
    }
)



const NeoClassicModels = sequelize.define('neoClassicModels',{
        id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        model:{type: DataTypes.STRING, defaultValue: ""}
    }
)
const ModernModels = sequelize.define('modernModels',{
        id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        model:{type: DataTypes.STRING, defaultValue: ""}
    }
)



const OrderLine = sequelize.define('orderLine',{
        id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        count:{type: DataTypes.FLOAT, allowNull: false},
    }
)

const Product = sequelize.define('product',{
        id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        name:{type: DataTypes.STRING, unique: true, allowNull: false},
        price:{type: DataTypes.FLOAT, allowNull: false},
        img:{type: DataTypes.STRING}
    }
)

User.hasMany(Client)
Client.belongsTo(User)

Client.hasMany(Order)
Order.belongsTo(Client)

Order.hasMany(OrderLine)
OrderLine.belongsTo(Order)

OrderLine.hasOne(Product)
Product.belongsTo(OrderLine)

module.exports = {
    User,
    Client,
    Order,
    OrderLine,
    Product,
    DoorsColors,
    FittingColors,
    Doors,
    ClassicModels,
    NeoClassicModels,
    ModernModels,
    Moldings,
    MoldingsPos,
    Fittings,
    FittingBrands,
    FittingsPos
}