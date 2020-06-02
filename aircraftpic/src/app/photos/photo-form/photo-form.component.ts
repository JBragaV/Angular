import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'apj-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css']
})
export class PhotoFormComponent implements OnInit {

  file: File
  formAdd: FormGroup;
  preview: string;

  constructor(
    private formBuilder: FormBuilder, 
    private router: Router,
    private photoService: PhotoService) { }

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
      .subscribe(()=> this.router.navigate(['']), error => alert(error));
  }

  image(file: File){
    this.file = file;
    const reader = new FileReader();
    reader.onload = (event:any) => this.preview = event.target.result;
    reader.readAsDataURL(file);
  }

}
