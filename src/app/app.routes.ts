import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
  {
    path: 'remote-app',
    loadComponent: () =>
      loadRemoteModule('remote-native-federation', './Component').then(
        (m) => m.AppComponent
      ),
  },
];
