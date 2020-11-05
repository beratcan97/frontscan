import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FileSelectorComponent } from './components/file-selector/file-selector.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CodeLineTesterComponent } from './components/code-line-tester/code-line-tester.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FileSelectorComponent,
    CodeLineTesterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
