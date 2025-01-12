import Sequelize from "sequelize";
import databaseconfig from "./config/config.js";

import Coordinate from './models/coordinate.js';

const models = [Coordinate];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(databaseconfig.development);
        models.forEach((model) => model.initModel(this.connection)); 
    }
}

export default new Database();
