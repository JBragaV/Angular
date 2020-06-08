import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PhotoService } from '../photo/photo.service';
import { AlertService } from 'src/app/shared/components/alert/alert.service';
import { UserService } from 'src/app/core/user/user.service';
import { HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'apj-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css']
})
export class PhotoFormComponent implements OnInit {

  file: File
  formAdd: FormGroup;
  preview: string;
  done = 0;

  constructor(
    private formBuilder: FormBuilder, 
    private router: Router,
    private photoService: PhotoService,
    private alertService: AlertService,
    private userService: UserService) { }

  ngOnInit() {
    this.formAdd = this.formBuilder.group({
        file:['', Validators.required],
        description: ['', Validators.maxLength(300)],
        allowComments: [true]
    })
  }

  upload(){
    const descricao = this.formAdd.get('description').value;
    const permitirComentario = this.formAdd.get('allowComments').value;
    this.photoService
      .upload(descricao, permitirComentario, this.file)
      .pipe(finalize(()=> 
        this.router.navigate(['/lista', this.userService.getuserName()]))
      )
      .subscribe((event: HttpEvent<any>) => {
        if(event.type == HttpEventType.UploadProgress){
          this.done = Math.round(100 * event.loaded / event.total)
        }else if(event instanceof HttpResponse){
          this.alertService.success("Foto adicionada com sucesso!!!");
        }
      }, error => {
        console.log(error);
        this.alertService.danger("Erro ao enviar a foto!!!");
      });
  }

  image(file: File){
    this.file = file;
    const reader = new FileReader();
    reader.onload = (event:any) => this.preview = event.target.result;
    reader.readAsDataURL(file);
  }

}
