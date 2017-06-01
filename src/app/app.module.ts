import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

// ngrx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducer } from './ngrx/reducers/index';
import { TodoEffects } from './ngrx/effects/todo';

import { TodoModule } from './pages/todo/todo.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'todo' }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {useHash: false}),
    FormsModule,
    HttpModule,
    StoreModule.provideStore(reducer),
    EffectsModule.run(TodoEffects),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    TodoModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
