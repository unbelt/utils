import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule, MatListModule, MatSidenavModule } from '@angular/material';
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
        FlexLayoutModule,
        MatSidenavModule,
        MatCardModule,
        MatListModule,

        // Internal
        TodoRoutingModule,

        StoreModule.forFeature(todoModuleName, todoReducerMap),
        EffectsModule.forFeature([TodoListEffects, TodoTrashEffects]),
    ],
})
export class TodoModule {}
