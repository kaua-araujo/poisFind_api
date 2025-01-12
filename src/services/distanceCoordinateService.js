import coordinate from '../database/models/coordinate.js';

export const indexNextCoordinates = async (xRef, yRef, dMax) => {
  
  try {

    const cooordinate = await coordinate.findAll();

    const cooordinateWithinRange = cooordinate.filter(poi => {
      const distance = Math.sqrt(Math.pow(poi.x - xRef, 2) + Math.pow(poi.y - yRef, 2));
      return distance <= dMax;
    });
    
    return cooordinateWithinRange;
    
  } catch (error) {
    throw new Error('Erro ao listar POIs por proximidade');
  }
  
};

export default indexNextCoordinates;
