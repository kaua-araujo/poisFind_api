import Coordinate from '../database/models/coordinate.js'; 

export const index =  () => {

  try {

    const coordinates =  Coordinate.findAll();
    return coordinates;

  } catch (error) {
    throw new Error('Erro ao listar coordenadas');
  }
  
};

export default index;

