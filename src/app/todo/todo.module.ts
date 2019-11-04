import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatTableModule,
} from '@angular/material';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TodoListEffects } from './_store/effects/todo-list.effects';
import { TodoTrashEffects } from './_store/effects/todo-trash.effects';
import { todoModuleName, todoReducerMap } from './_store/reducers';
import { TodoListComponent } from './list/todo-list.component';
import { TodoNavComponent } from './nav/todo-nav.component';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoTrashComponent } from './trash/todo-trash.components';

@NgModule({
    declarations: [TodoListComponent, TodoTrashComponent, TodoNavComponent],
    imports: [
        // Angular
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        MatSidenavModule,
        MatCardModule,
        MatListModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatCheckboxModule,

        // Internal
        TodoRoutingModule,

        StoreModule.forFeature(todoModuleName, todoReducerMap),
        EffectsModule.forFeature([TodoListEffects, TodoTrashEffects]),
    ],
})
export class TodoModule {}
