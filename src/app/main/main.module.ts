import { AutofocusnextinputDirective } from './Directive-Pipe/autofocusnextinput.directive';
import { AutofucusonerrorDirective } from './Directive-Pipe/autofucusonerror.directive';
import { MyService } from './my.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlayersComponent } from './players/players.component';
import { AgePipe } from './Directive-Pipe/age.pipe';
import { FilterPlayersPipe } from './Directive-Pipe/filter-players.pipe';
import { LoaderComponent } from './loader/loader.component';
const route: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'loader', component: LoaderComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AutofucusonerrorDirective,
    AutofocusnextinputDirective,
    PlayersComponent,
    AgePipe,
    FilterPlayersPipe,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(route),
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    AutofucusonerrorDirective,
    AutofocusnextinputDirective,
    PlayersComponent,
    RouterModule
  ],
  providers: [MyService]
})
export class MainModule { }
