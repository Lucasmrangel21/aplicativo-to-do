import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//Componentes
import { HeaderComponent } from './componenents/header/header.component';
import { TodoButtonDeleteAllComponent } from './componenents/todo-button-delete-all/todo-button-delete-all.component';
import { TodoInputAddItensComponent } from './componenents/todo-input-add-itens/todo-input-add-itens.component';
import { TodoListComponent } from './componenents/todo-list/todo-list.component';

//Page
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    HeaderComponent,
    TodoButtonDeleteAllComponent,
    TodoInputAddItensComponent,
    TodoListComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HomeModule { }
