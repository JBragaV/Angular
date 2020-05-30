import { AbstractControl } from '@angular/forms';

export function lowCaseValidator(control: AbstractControl){

    if(control.value.trim() && !/^[a-z0-9_\-]+$/.test(control.value)) {
        return {lowcase: true};
    }
    return null;
}