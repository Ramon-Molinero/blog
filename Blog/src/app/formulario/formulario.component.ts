import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  MinLengthValidator,
} from '@angular/forms';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  formulario: FormGroup;

  // <!--  titulo,x
  //   texto,x
  //   autor,x
  //   imagen,x
  //   fecha,X
  //   categoria,X -->

  constructor(private postService: PostService, private router: Router) {
    this.formulario = new FormGroup({
      titulo: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      imagen: new FormControl(
        '',
        Validators.pattern(/https?\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,}/)
      ),
      texto: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.maxLength(500),
          Validators.minLength(20),
        ])
      ),
      categoria: new FormControl('', Validators.required),
      autor: new FormControl(''),
      fecha: new FormControl(''),
    });
  }

  ngOnInit(): void {
    // console.log(this.formulario.controls);
  }

  onSubmit() {
    this.postService.agregarPost(this.formulario.value);
    this.router.navigate(['/blog']);

    // console.log(this.formulario.value);
  }
}
