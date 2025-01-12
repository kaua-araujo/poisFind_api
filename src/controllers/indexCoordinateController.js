import indexCoordinatesService from "../services/indexCoordinatesService.js";

const indexCoordinate = async (req, res) => {

  try {

    const coordinates = await indexCoordinatesService(); 
    res.json(coordinates);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  
};

export default indexCoordinate; 
