

export class AppError extends Error {
    constructor(message,erorrState){
        super(message)
        this.erorrState=erorrState
    }
}

