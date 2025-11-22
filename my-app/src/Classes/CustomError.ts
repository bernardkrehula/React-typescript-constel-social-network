
export class CustomError extends Error{
    constructor(){
        super();
        this.message = 'isError';
    }
}