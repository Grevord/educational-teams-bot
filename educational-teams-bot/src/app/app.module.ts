import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MsalModule } from '@azure/msal-angular';
import { InteractionType, PublicClientApplication } from '@azure/msal-browser';
import { environment } from 'src/environments/environment';
import { FeaturesModule } from './features/features.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { StoreModule } from '@ngrx/store';
import { questionsReducer } from './features/questions/state/questions.reducer';

const imports = [
  BrowserModule,
  AppRoutingModule,
  SharedModule,
  CoreModule,
  NgbModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MsalModule.forRoot(
    new PublicClientApplication({
      auth: {
        clientId: environment.clientId,
        authority: `https://login.microsoftonline.com/${environment.tenantId}`,
        redirectUri: environment.redirectUri,
      },
      cache: {
        cacheLocation: 'localStorage',
      },
    }),
    {
      interactionType: InteractionType.Redirect, // MSAL Guard Configuration
      authRequest: {
        scopes: ['User.Read.All'],
      },
    },
    {
      interactionType: InteractionType.Redirect, // MSAL Interceptor Configuration
      protectedResourceMap: new Map([
        [
          `${environment.apiEndpoint}/api/`,
          [`api://${environment.clientId}/access_as_user`],
        ],
        ['https://graph.microsoft.com', ['User.Read.All']],
      ]),
    }
  ),
  FeaturesModule,
  StoreModule.forRoot({ questions: questionsReducer }),
];

@NgModule({
  declarations: [AppComponent],
  imports: [...imports, BrowserAnimationsModule, MatDialogModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
