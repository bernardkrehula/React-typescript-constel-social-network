
export class CustomError extends Error{
    message: string;
    name: string;
    stack?: string;
    code?: string;
    status?: number;
    config?: any;

    constructor(
        message: string,
        name: string,
        stack?: string,
        code?: string,
        status?: number,
        config?: any
    ) {
        super();
        this.message = message;
        this.name = name;
        this.stack = stack;
        this.code = code;
        this.status = status;
        this.config = config;
    }
}
