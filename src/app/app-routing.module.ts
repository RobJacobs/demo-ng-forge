import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule) },
  { path: 'profile', loadChildren: () => import('./profile/profile.module').then((m) => m.ProfileModule) },
  { path: 'people', loadChildren: () => import('./people/people.module').then((m) => m.PeopleModule) },
  { path: 'test', loadChildren: () => import('./test/test.module').then((m) => m.TestModule) },
  { path: 'pets', loadChildren: () => import('./pets/pets-wrapper.module').then((m) => m.PetsWrapperModule) },
  { path: 'search', loadChildren: () => import('./search/search.module').then((m) => m.SearchModule) },
  { path: 'query-builder', loadChildren: () => import('./query-builder/query-builder.module').then((m) => m.QueryBuilderModule) },
  { path: 'icons', loadChildren: () => import('./icons/icons.module').then(m => m.IconsModule) },
  { path: 'examples', loadChildren: () => import('./examples/examples.module').then((m) => m.ExamplesModule) },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
