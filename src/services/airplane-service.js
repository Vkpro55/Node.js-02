const { StatusCodes } = require("http-status-codes");
const { RawString } = require("../utils/rawstring");


const { AirplaneRepository } = require("../repositories");
const AppError = require("../utils/errors/app-errors");

/*== Create new object ==*/
const airplaneRepository = new AirplaneRepository();

const createAirplane = async (data) => {
    try {
        const airplane = await airplaneRepository.create(data);
        return airplane;
    }
    catch (error) {
        if (error.name === "SequelizeValidationError") {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }


        /*== TypeError ==*/
        // throw new AppError("Cannot create a new Airplane object", StatusCodes.INTERNAL_SERVER_ERROR);
        throw new AppError(RawString.messages.INTERNAL_SERVER_ERROR, StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createAirplane
};