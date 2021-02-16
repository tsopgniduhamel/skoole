import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CoursComponent } from './cours/cours.component';
import { ExamensComponent } from './examens/examens.component';
import { ExercicesComponent } from './exercices/exercices.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AideComponent } from './aide/aide.component';
import { HomeComponent } from './home/home.component';
import { ClasseComponent } from './classe/classe.component';
import { CoursDetailsComponent } from './cours-details/cours-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cours', component: CoursComponent },
  { path: 'exercices', component: ExercicesComponent },
  { path: 'examens', component: ExamensComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'aide', component: AideComponent },
  { path: 'classe/:id', component: ClasseComponent },
  { path: 'classe/2/cours-detail', component: CoursDetailsComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [PageNotFoundComponent];
