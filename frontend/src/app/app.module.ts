import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TasklistComponent } from './components/tasklist/tasklist.component';
import { FormComponent } from './components/tasklist/form/form.component';
import { ListComponent } from './components/tasklist/list/list.component';
import { ItemComponent } from './components/tasklist/list/item/item.component';
import { DetailComponent } from './components/tasklist/detail/detail.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TasklistComponent,
    FormComponent,
    ListComponent,
    ItemComponent,
    DetailComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
