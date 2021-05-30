import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoadoresComponent } from './components/doadores/doadores.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { GeradorRotasComponent } from './components/gerador-rotas/gerador-rotas.component';
import { HeaderComponent } from './components/header/header.component';
import { CadastroDoadorComponent } from './components/cadastro-doador/cadastro-doador.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { DoacoesComponent } from './components/doacoes/doacoes.component';
import { CadastroDoacaoComponent } from './components/cadastro-doacao/cadastro-doacao.component';

@NgModule({
    declarations: [AppComponent, DoadoresComponent, GeradorRotasComponent, HeaderComponent, CadastroDoadorComponent, DoacoesComponent, CadastroDoacaoComponent],
    imports: [
        BrowserModule, 
        HttpClientModule,
        AppRoutingModule, 
        BrowserAnimationsModule, 
        MatTableModule, 
        MatInputModule, 
        MatPaginatorModule,
        MatFormFieldModule,
        MatSelectModule,
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatButtonModule,
        MatIconModule,
        MatAutocompleteModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
