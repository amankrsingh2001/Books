export class CustomError extends Error{
    public;

        status;
        success;
        constructor(message,status, success){
            super(message)
            this.status = status,
            this.success = success
        }
}