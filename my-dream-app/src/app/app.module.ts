import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWordComponent } from './hello-word/hello-word.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { AboutComponent } from './about/about.component';

const routes: Route[] =[
  {path: '', component: AppComponent},
  {path: 'about', component:AboutComponent},
  {path: 'hello', component: HelloWordComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HelloWordComponent,
    UserComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
