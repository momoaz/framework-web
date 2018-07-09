import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { CardModule } from '../atom/card/card.module';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CardModule
  ],
  exports: [CardModule]
})
export class NijazModule { }
