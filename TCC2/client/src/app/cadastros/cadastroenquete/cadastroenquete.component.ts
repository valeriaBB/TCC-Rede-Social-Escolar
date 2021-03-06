import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ServerService } from 'app/services/server/server.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastroenquete',
  templateUrl: './cadastroenquete.component.html',
  styleUrls: ['./cadastroenquete.component.css']
})

export class CadastroenqueteComponent implements OnInit {

  formCadastro: FormGroup;
  enquete = {};
  tipoAcao = "Cadastrar";
  aluno = false;
  professor = false;
  diretor = false;
  responsavel = false;


  constructor(private http: Http, private router: Router, private route: ActivatedRoute, private service: ServerService, fb: FormBuilder) {
    this.formCadastro = fb.group({
      nome: ['', [Validators.compose([Validators.required, Validators.maxLength(500), Validators.minLength(3)])]],
      pergunta: ['', [Validators.compose([Validators.required, Validators.maxLength(1000), Validators.minLength(3)])]],
      alternativa1: ['', [Validators.compose([Validators.required, Validators.maxLength(1000), Validators.minLength(3)])]],
      alternativa2: ['', [Validators.compose([Validators.required, Validators.maxLength(1000), Validators.minLength(3)])]],
      alternativa3: ['', [Validators.compose([Validators.required, Validators.maxLength(1000), Validators.minLength(3)])]],
      alternativa4: ['', [Validators.compose([Validators.required, Validators.maxLength(1000), Validators.minLength(3)])]],
      alternativa5: ['', [Validators.compose([Validators.required, Validators.maxLength(1000), Validators.minLength(3)])]]
    });
    var self = this;
    this.route = route;
    this.route.params.subscribe(params => {
      var id = params['id'];

      if (id != undefined) {
        this.tipoAcao = "Editar";
        this.buscaEnqueteEditavel(id)
          .subscribe(
          res => self.enquete = res.json(),
          erro => console.log(erro)
          );
      }
    });
    this.http = http;
  }

  ngOnInit() {
  }

  salvar(event) {
    if (this.aluno == true) 
      this.enquete["aluno"] = true;
    if (this.diretor == true)
      this.enquete["diretor"] = true;
    if (this.responsavel == true) 
      this.enquete["responsavel"] = true;
    if (this.professor == true)
      this.enquete["professor"] = true;

    this.service.salvar(this.enquete, 'enquete')
      .subscribe(() => {
        this.router.navigate(['/enquete']);
      }, erro => console.log(erro));
  };

  public buscaEnqueteEditavel(id: string) {
    return this.service.editar(id, 'enquete/');
  }

}
