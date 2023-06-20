import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PricipalComponent } from './components/pricipal/pricipal.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MuroComponent } from './components/muro/muro.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { RpasswordComponent } from './components/rpassword/rpassword.component';


const routes: Routes = [
  {path: '', redirectTo: 'pricipal', pathMatch: 'full'},
  {path: 'pricipal', component: PricipalComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'muro', component: MuroComponent},
  {path: 'chatbot', component: ChatbotComponent},
  {path: 'rpassword', component: RpasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
