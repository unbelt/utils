import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule, MatToolbarModule, MatTooltipModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
    declarations: [AppComponent, HomeComponent, AboutComponent],
    imports: [
        // Angular
        BrowserModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        MatCardModule,
        MatToolbarModule,
        MatTooltipModule,

        // Internal
        AppRoutingModule,
        SharedModule,

        StoreModule.forRoot({}),
        StoreDevtoolsModule.instrument(),
        EffectsModule.forRoot([]),
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
