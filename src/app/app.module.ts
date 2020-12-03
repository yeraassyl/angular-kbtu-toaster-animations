import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToastsComponent } from './toasts/toasts.component';
import { ToastsFormComponent } from './toasts-form/toasts-form.component';
import {FormsModule} from '@angular/forms';
import {CustomMaterialModule} from './custom-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ModelsService} from './shared/models.service';

@NgModule({
  declarations: [
    AppComponent,
    ToastsComponent,
    ToastsFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [ModelsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
