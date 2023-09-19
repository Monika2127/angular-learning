
//  To handle all the unexpected exceptions, we have class 'HandleError' which has function handleError which takes
//  error: any as a parameter and return void and by default, it simply consoles the error message

import { ErrorHandler } from "@angular/core";

export class GlobalError implements ErrorHandler {
    handleError(error: any) {
        alert('Some error occurred!!!');
        console.log(error)
    }
}