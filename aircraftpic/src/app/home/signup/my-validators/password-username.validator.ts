import { ValidatorFn, FormGroup } from '@angular/forms';

export const passwordUserNamevalidator: ValidatorFn = (formGroup: FormGroup)=>{

    const password = formGroup.get('password').value;
    const userName = formGroup.get('userName').value;

    if(userName.trim() && password.trim()){
        return password != userName ? null : {equals:true}
    }else{
        return null;
    }
}