import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MappedToolsComponent } from './mapped-tools/mapped-tools.component';
import { ToolsAboutComponent } from './tools-about/tools-about.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'tools',
    pathMatch:'full'
  },
  {
    path: 'tools',
    component: MappedToolsComponent
  },
  {
    path: 'about',
    component: ToolsAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
