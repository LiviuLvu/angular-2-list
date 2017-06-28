import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { HighlightDirective } from './highlight.directive';
import { SizerComponent } from './sizer/sizer.component';
import { CollapseOnClick } from './collapse-on-click.directive';
import { ShowOneTrigger } from './show-one-trigger';
import { ShowOneContainer } from './show-one-container';
import { ShowOne } from './show-one';

@NgModule({
  declarations: [
    AppComponent,
    ColorPickerComponent,
    HighlightDirective,
    CollapseOnClick,
    ShowOneTrigger,
    ShowOneContainer,
    ShowOne,
    SizerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
