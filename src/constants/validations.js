const REQUIRED_INPUT = {
    value: true,
    message: "This field is required",
}

const MAX_LENGTH25_INPUT = {
    value: 25,
    message: "This field has a maximum of 25 characters",
}

const MAX_LENGTH150_INPUT = {
    value: 150,
    message: "This field has a maximum of 150 characters",
}

const MIN_LENGTH_INPUT_PASSWORD = {
    value: 6,
    message: "The field has a minimum of 6 characters"
}

const CHARACTERS_INPUT = {
    value: /^[A-Za-z]+$/i,
    message: "Special characters not allowed"
}

const EMAIL_VALIDATION = {
    value: /@\w+([.-]?\w+)*(\.\w{2,10})+$/,
    message: "Add a valid email address"
}


export {
    REQUIRED_INPUT,
    MAX_LENGTH25_INPUT,
    MAX_LENGTH150_INPUT,
    CHARACTERS_INPUT,
    EMAIL_VALIDATION,
    MIN_LENGTH_INPUT_PASSWORD
}