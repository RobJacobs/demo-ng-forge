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
  { path: 'formly-demo', loadChildren: () => import('./formly-demo/formly-demo.module').then((m) => m.FormlyDemoModule) },
  { path: 'table-demo', loadChildren: () => import('./table-demo/table-demo.module').then((m) => m.TableDemoModule) },
  { path: 'storage', loadChildren: () => import('./storage/storage.module').then((m) => m.StorageModule) },
  { path: 'imask', loadChildren: () => import('./imask/imask.module').then((m) => m.ImaskModule) },
  { path: 'charts', loadChildren: () => import('./charts/charts.module').then((m) => m.ChartsModule) },
  { path: 'text-edit', loadChildren: () => import('./text-editor/text-editor.module').then((m) => m.TextEditorModule) },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
