import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule, MatListModule, MatSidenavModule } from '@angular/material';
import { EffectsModule } from '@ngrx/effects';
import { TodoListComponent } from './list/todo-list.component';
import { TodoNavComponent } from './nav/todo-nav.component';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoTrashComponent } from './trash/todo-trash.components';

@NgModule({
    declarations: [TodoListComponent, TodoTrashComponent, TodoNavComponent],
    imports: [
        CommonModule,
        TodoRoutingModule,
        MatSidenavModule,
        MatCardModule,
        MatListModule,
        FlexLayoutModule,

        // StoreModule.forFeature(moduleReducerName, reducers),
        EffectsModule.forFeature([]),
    ],
})
export class TodoModule {}
