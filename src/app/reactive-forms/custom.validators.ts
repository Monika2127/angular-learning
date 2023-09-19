import { AbstractControl, ValidationErrors } from "@angular/forms";

export class CustomValidator {

    //  made it static so that we can directly call the function with the class name
    //  don't need to create the object of this class
    static cannotHaveSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') > 0) {
            return { hasSpace: true };
        }

        return null;
    }

    //  SAY, if we want the server to make validation as username is taken or not

    //  Here in this function, if we make async operation, it will take some time then only check for validation but 
    //  it waits for nothing so it will always give null value, means, validation is correct in every case,
    //  so to tackle this problem, we need to go with different approach

    static uniqueName(control: AbstractControl): ValidationErrors | null {
        setTimeout(() => {
            if (control.value === 'mona') {
                return { hasSameName: true };
            }

            return null;
        }, 2000)

        return null;
    }

    //  To tacle above problem, we use asyncValidator Function and return a promise or observable

    static hasUniqueName(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'monika') 
                    resolve({ hasSameName: true });
                else 
                    resolve(null);
            }, 1000)
        })
    }
}


//  AbstractControl is the parent of FormGroup and FormControl class 