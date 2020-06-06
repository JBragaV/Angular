export class MyAlert{

    constructor(public readonly mensagem: string, public readonly alertType: AlertType){}

}

export enum AlertType {
    SUCCESS, DANGER, WARNING, INFO
}