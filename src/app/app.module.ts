import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { MatiereComponent } from './matiere/matiere.component';
import { NoteComponent } from './note/note.component';
import { MoyenneComponent } from './moyenne/moyenne.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ResultatComponent } from './resultat/resultat.component';

export const ROUTES: Routes=[
  {path: 'Etudiant', component: EtudiantComponent},
  {path: 'Matiere', component: MatiereComponent},
  {path: 'Note', component: NoteComponent},
  {path: 'Moyenne', component: MoyenneComponent},
  {path: 'Resultat', component: ResultatComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    EtudiantComponent,
    MatiereComponent,
    NoteComponent,
    MoyenneComponent,
    HeaderComponent,
    ResultatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
