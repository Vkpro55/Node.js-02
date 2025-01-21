
let messages = {
    /*== General messages ==*/
    ERROR_SOMETHING_WENT_WRONG: "Something went wrong. Please try again later.",

    /*== Airplane-related messages ==*/
    AIRPLANE_CREATE_SUCCESS: "Airplane created successfully",
    AIRPLANE_CREATE_ERROR: "Something went wrong while creating an airplane.",

    /*== Validation messages ==*/
    MODEL_NUMBER_NOT_FOUND: "Model number not found in the incoming request. It should be in this form (modelNumber) only.",

    /*== CRUD repo messages ==*/
    CRUD_CREATE_ERROR: "Something went wrong in CRUD repo: create function",
    CRUD_DESTROY_ERROR: "Something went wrong in CRUD repo: destroy function",
    CRUD_GET_ERROR: "Something went wrong in CRUD repo: get function",
    CRUD_GET_ALL_ERROR: "Something went wrong in CRUD repo: getAll function",
    CRUD_UPDATE_ERROR: "Something went wrong in CRUD repo: update function",

    /*== Validation and Error Handling ==*/
    SEQUELIZE_VALIDATION_ERROR: "Sequelize validation error",
    INTERNAL_SERVER_ERROR: "Cannot create a new Airplane object",
};


module.exports = messages;
