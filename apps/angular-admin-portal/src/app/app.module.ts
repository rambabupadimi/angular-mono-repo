import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import {  AppRoutingModule } from './app.routes';
import { AuthModule } from '@angular-monorepo-demo/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ToastrModule } from 'ngx-toastr';
import { ENVIRONMENT } from '@angular-monorepo-demo/environment';
import { AppInterceptor } from './helpers/app.interceptor';
import { NotFoundComponent } from './not-found/not-found.component';
import { clearState } from './users/+state/users.reducer';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    AuthModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
   // ToastrModule.forRoot(),
    StoreModule.forRoot([],{ metaReducers: [clearState] }),
    EffectsModule.forRoot([]),
    ToastrModule.forRoot({
      preventDuplicates: true
    }),
    StoreDevtoolsModule.instrument({
      // maxAge: 25, // Retains last 25 states that means 25 actions
      logOnly: environment.production, // Restrict extension to log-only mode
    }),


  ],
  providers: [
    {
      provide: ENVIRONMENT,
      useValue: environment,
    },

    { provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true },

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
