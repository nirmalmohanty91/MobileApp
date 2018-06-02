import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDatepickerModule} from '@angular/material/datepicker';


import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule} from '@angular/material';
import { MatButtonModule,MatNativeDateModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatCardModule,MatTabsModule} from '@angular/material';





import { AppComponent } from './app.component';
import { MyExpComponent } from './my-exp/my-exp.component';

@NgModule({
  declarations: [
    AppComponent,
    MyExpComponent
  ],
  imports: [
    BrowserModule,
    MatProgressBarModule,

    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule,
FormsModule,
ReactiveFormsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatTabsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
