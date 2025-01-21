const { error } = require("winston");
const { AirplaneService } = require("../services");
const { StatusCodes } = require("http-status-codes");
const { SuccessResponse, ErrorResponse } = require("../utils/common");
const { RawString } = require("../utils/rawstring");

/*==
POST: /airplanes
req-body: {modelNumber: "airnbus320", capacity: 200}
==*/
const createAirplane = async (req, res) => {
    try {

        const { modelNumber, capacity } = req.body;
        const data = {
            modelNumber: modelNumber,
            capacity: capacity
        }

        const airplane = await AirplaneService.createAirplane(data);

        // SuccessResponse.message = "Airplane created successfully";
        SuccessResponse.message = RawString.messages.AIRPLANE_CREATE_SUCCESS;
        SuccessResponse.data = airplane;

        return res.
            status(StatusCodes.CREATED)
            .json(SuccessResponse);

    } catch (error) {
        // ErrorResponse.message = "Something went wrong while creating an airplane.";
        ErrorResponse.message = RawString.message.AIRPLANE_CREATE_ERROR;
        ErrorResponse.error = error;

        return res
            .status(error.statusCode)
            .json(ErrorResponse);
    }
}

module.exports = {
    createAirplane
};