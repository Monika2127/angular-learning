
export class AppError {
    constructor(public option?: any) {}
}

export class NoFoundError extends AppError {
    
}

export class BadError extends AppError {
    
}