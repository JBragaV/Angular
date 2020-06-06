import { Injectable } from '@angular/core';
import { AlertType, MyAlert } from './alert';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AlertService {

    alertSubject = new Subject<MyAlert>();
    keepThePage: boolean;

    success(mensage: string, keepThePage=true){
        this.alert(mensage, AlertType.SUCCESS);
    }

    danger(mensage: string, keepThePage=true){
        this.alert(mensage, AlertType.DANGER);
    }

    warning(mensage: string, keepThePage=true){
        this.alert(mensage, AlertType.WARNING);
    }

    info(mensage: string, keepThePage=true){
        this.alert(mensage, AlertType.INFO);
    }
    
    private alert(mensage: string, alertType: AlertType){
        this.alertSubject.next(new MyAlert(mensage, alertType))
    }

    getAlert(){
        return this.alertSubject.asObservable();
    }

}