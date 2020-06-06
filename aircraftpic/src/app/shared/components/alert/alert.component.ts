import { Component } from '@angular/core';
import { AlertService } from './alert.service';
import { MyAlert, AlertType } from './alert';

@Component({
    selector: 'apj-alert',
    templateUrl: './alert.component.html'
})
export class MyAlertComponent {

    timer = 3000;
    alerts: MyAlert[] = [];

    constructor(private alertService: AlertService){
        this.alertService.getAlert()
            .subscribe(alert => {
                if(!alert) return this.alerts = [];
                this.alerts.push(alert);
                setTimeout(()=>this.removeAlert(alert), this.timer)
            });
    }


    removeAlert(alertToRemove: MyAlert){
        this.alerts = this.alerts.filter(alert => alert != alertToRemove);
    }

    getAlertClass(alert: MyAlert){
        if(!alert) return "";

        switch(alert.alertType){
            case AlertType.DANGER:
                return 'alert alert-danger'
            case AlertType.INFO:
                return 'alert alert-info'
            case AlertType.SUCCESS:
                return 'alert alert-success'
            case AlertType.WARNING:
                return 'alert alert-warning'
        }
    }
}