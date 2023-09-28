import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProjectsComponent } from './projects/projects.component';
import { DeploymentsComponent } from './deployments/deployments.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: 'projects',
    component: ProjectsComponent,
  },

  {
    path: 'deployments',
    component: DeploymentsComponent,
  },

  // default route
  // In english terms, whenever the path is empty(i.e nothing after /), we redirect to /login
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
