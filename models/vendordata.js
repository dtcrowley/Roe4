'use strict';
module.exports = (sequelize, DataTypes) => {
  var vendorData = sequelize.define('vendorData', {
    // id: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, 
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    UID: DataTypes.STRING,
    Vendor: DataTypes.STRING,
    Bio: DataTypes.TEXT,
    Contact: DataTypes.STRING,
    Image: DataTypes.TEXT,
    Address: DataTypes.STRING,
    City: DataTypes.STRING,
    State: DataTypes.STRING,
    Zip: DataTypes.INTEGER,
    Phone: DataTypes.STRING,
    Email: DataTypes.STRING,
    Certified: DataTypes.STRING
  }, {
      timestamps: false
    });
  vendorData.associate = function (models) {
    // associations can be defined here
    vendorData.belongsToMany(models.cropData, { through: models.vendorCrops });
    vendorData.belongsToMany(models.Livestock, { through: models.VendorLivestock});
  };
  return vendorData;
};