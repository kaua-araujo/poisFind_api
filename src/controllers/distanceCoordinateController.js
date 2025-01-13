import { indexNextCoordinates } from '../services/distanceCoordinateService.js';

const distanceCoordinate = async (req, res) => {
  try {
    
    const { x, y, dMax } = req;

    if (x < 0 || y < 0 || dMax < 0) {
      return res.status(400).json({ error: 'Os campos x, y e distância máxima não podem ser negativos!' });
    }

    if (x === undefined || y === undefined || dMax === undefined) {
      return res.status(400).json({ error: 'Os campos x, y e dMax são obrigatórios.' });
    }

    const coordinates = await indexNextCoordinates(x, y, dMax); 

    res.status(201).json(coordinates);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default distanceCoordinate;
