var bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes) {
  var TCM = sequelize.define("TCM", {
        name: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        troop: {
          type: DataTypes.INTEGER,
          allowNull: false,
          unique: true,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        smores: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        thin_mint:  {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        shortbread:  {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        peanut_butter_sandwich:  {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        lemonades:  {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        thanks_a_lot:  {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        samoas:  {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        caramel_chocolate_chip:  {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        peanut_butter_patties:  {
            type: DataTypes.INTEGER,
            allowNull: true,
        }
      });

      TCM.associate = function(models) {
        // We're saying that a TCM should belong to an SUM
        // A TCM can't be created without a SUM due to the foreign key constraint
        TCM.belongsTo(models.SUM, {
          foreignKey: {
            allowNull: false
          }
        });
        // TCM.hasMany(models.Trade, {
        //   as: 'TCMs'
        // })
      };



      TCM.prototype.validPassword = function(password) {
        // console.log("Password from the DB:" , this.password)
        // console.log("Password from the Client :" , password)
        return (this.password === password)
      }



  //    TCM.prototype.validPassword = function (password) {
  //   return bcrypt.compareSync(password, this.password);
  // };
  // // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // // In this case, before a User is created, we will automatically hash their password
  // TCM.hook("beforeCreate", function (user) {
  //   user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  // });

    
    
      return TCM;
    };