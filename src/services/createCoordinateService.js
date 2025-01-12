import Coordinate from '../database/models/coordinate.js'; 

export const createCoordinateService = async (data) => {
  try {
    
    const coordinate = await Coordinate.create(data);
    return coordinate;

  } catch (error) {
    throw new Error('Erro ao criar coordenada');
  }
};

export default createCoordinateService;
