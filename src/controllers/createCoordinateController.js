import createCoordinateService from '../services/createCoordinateService.js';

const createCoordinate = async (req, res) => {
  try {
   
    const { x, y, title } = req;
   
    if (x < 0 || y < 0) {
      return res.status(400).json({ error: 'Os campos x, y não podem ser negativos!' });
    }

    if (!title || title.trim() === "") {
      return res.status(400).json({ error: 'O titulo é obrigatório.' });
    }

    if (x === undefined || y === undefined) {
      return res.status(400).json({ error: 'Os campos x e y são obrigatórios.' });
    }

    const coordinate = await createCoordinateService(req); 
    res.status(201).json({
      message: 'Coordenada criada com sucesso!',
      coordinate
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default createCoordinate; 
