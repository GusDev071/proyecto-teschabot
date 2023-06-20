import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PricipalComponent } from './components/pricipal/pricipal.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './components/register/register.component';
import {MatStepperModule} from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatCommonModule} from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { NgImageSliderModule } from 'ng-image-slider';
import { MuroComponent } from './components/muro/muro.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { RpasswordComponent } from './components/rpassword/rpassword.component';








@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PricipalComponent,
    HeaderComponent,
    RegisterComponent,
    MuroComponent,
    ChatbotComponent,
    RpasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatCommonModule,
    MatIconModule,
    NgImageSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
