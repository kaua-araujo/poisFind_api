import { Model, DataTypes } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';

class Coordinate extends Model {
  static associate(models) {
    
  }

  static initModel(sequelize) {
    Coordinate.init(
      {
        id: {
          type: DataTypes.UUID, 
          defaultValue: uuidv4,  
          primaryKey: true,      
        },
        title: DataTypes.STRING,
        x: DataTypes.INTEGER,
        y: DataTypes.INTEGER,
      },
      {
        sequelize,
        modelName: 'Coordinate',
      }
    );
  }
}

export default Coordinate; 
