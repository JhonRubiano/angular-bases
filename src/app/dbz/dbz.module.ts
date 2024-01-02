import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AddCharacterComponent } from './components/addCharacter/addCharacter.component';
import { ListComponent } from './components/list/list.component';
import { MainPageComponent } from './pages/main-page.component';



@NgModule({
  declarations: [
    AddCharacterComponent,
    ListComponent,
    MainPageComponent,
  ],
  exports:[
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
