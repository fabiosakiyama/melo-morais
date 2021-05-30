import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-doacao',
  templateUrl: './cadastro-doacao.component.html',
  styleUrls: ['./cadastro-doacao.component.scss']
})
export class CadastroDoacaoComponent implements OnInit {

  doadorForm: FormGroup;

  constructor(public doadoresService: DoadoresService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.createFormGroup(new NovoDoador());
  }

  ngOnDestroy(): void {
  }

  submit() {
    const result: NovoDoador = Object.assign({}, this.doadorForm.value);
    this.doadoresService.salvaDoador(result)
    .subscribe(response => {
      this.dialog.open(DialogDataExampleDialog, {
        data: {
          title: 'Sucesso!',
          message: 'Cadastro realizado com sucesso'
        }
      });
      console.log(response);
    },
    (err) => {
      this.dialog.open(DialogDataExampleDialog, {
        data: {
          title: 'Houve um erro...',
          message: this.gerarMensagem(err)
        }
      });
    });
  }

  closeDialog(): void {
    this.dialog.closeAll();
  }

  gerarMensagem(err: any) {
    let messages = [];
    if(err.error.errors) {
      err.error.errors.forEach(element => {
        messages.push(element.field + ": " + element.defaultMessage);
      });
    } else {
      messages.push("Houve um erro no sistema, favor contatar o administrador.");
    }
    return messages[0];
  }

  createFormGroup(novoDoador: NovoDoador) {
    this.doadorForm = new FormGroup({
        nome: new FormControl(novoDoador.nome),
        contato: new FormControl(novoDoador.contato),
        quantidade: new FormControl(novoDoador.quantidade),
        semana: new FormControl(novoDoador.semana),
        endereco: new FormGroup({
          rua: new FormControl(novoDoador.endereco.rua),
          numero: new FormControl(novoDoador.endereco.numero),
          bairro: new FormControl(novoDoador.endereco.bairro)
        })
    });
  }

}
