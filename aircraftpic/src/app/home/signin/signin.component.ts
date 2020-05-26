import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Router } from '@angular/router';
import { PlatformDectectionService } from 'src/app/core/plataform-detector/platform-dectection.service';


@Component({
    templateUrl: 'signin.component.html'
})
export class SignInComponent implements OnInit{
    
    userLogin: FormGroup;
    //consigo pegar uma referencia a um elemento do dom
    @ViewChild('usuarioInput') usuarioInput: ElementRef<HTMLInputElement>
    
    constructor(
        private formBilder: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private platformDetectorService: PlatformDectectionService
        ) {}
    
    ngOnInit(): void {
        this.userLogin = this.formBilder.group({
            usuario: ['', Validators.required],
            password: ['', Validators.required]
        })
    }

    login(){
        const usuario = this.userLogin.get('usuario').value;
        const password = this.userLogin.get('password').value;

        this.authService.autenticador(usuario, password)
            .subscribe(()=> this.router.navigate(['lista', usuario]),
             erro=>{
                 console.log(erro);
                 this.platformDetectorService.isBrowser() && 
                    this.usuarioInput.nativeElement.focus();
                 this.userLogin.reset();
             })
    }
}