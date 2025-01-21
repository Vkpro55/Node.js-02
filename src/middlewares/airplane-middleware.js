const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/errors/app-errors");
const { RawString } = require("../utils/rawstring");

const validateCreateRequest = (req, res, next) => {
    if (!req.body.modelNumber) {

        // ErrorResponse.message = "Something went wrong while creating an airplane.";
        // ErrorResponse.error = { explanation: "Model number not foun in the incoming request. It should be in this form (modelNumber) only." };
        // ErrorResponse.error = new AppError(["Model number not found in the incoming request.It should be in this form (modelNumber) only"], StatusCodes.BAD_REQUEST);

        ErrorResponse.message = RawString.messages.AIRPLANE_CREATE_ERROR;
        ErrorResponse.error = new AppError([RawString.messages.MODEL_NUMBER_NOT_FOUND], StatusCodes.BAD_REQUEST);

        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
    }

    next();
}

module.exports = {
    validateCreateRequest
}