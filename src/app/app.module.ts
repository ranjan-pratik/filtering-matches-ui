import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { PanelModule } from 'primeng/panel';
import { SliderModule } from 'primeng/slider';

import { AppComponent } from './app.component';

import { FilterComponent } from './filter.component';
import { FilterInputComponent } from './filter.component';

@NgModule({
    declarations: [
        AppComponent,
        FilterComponent,
        FilterInputComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        TableModule,
        HttpClientModule,
        InputTextModule,
        DialogModule,
        ButtonModule,
        PanelModule,
        SliderModule
    ],
    providers: [],
    bootstrap: [AppComponent, FilterComponent, FilterInputComponent]
})
export class AppModule { }

