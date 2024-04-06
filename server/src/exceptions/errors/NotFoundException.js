
class NotFoundException extends Error {
    constructor(message = 'Not Found') {
        super(message);
        this.name = this.constructor.name;
        this.statusCode = 404;
        Error.captureStackTrace(this, this.constructor);
    }
}

export default NotFoundException;
