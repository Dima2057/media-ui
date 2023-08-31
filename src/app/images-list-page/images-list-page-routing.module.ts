import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ImagesListPageComponent} from "./images-list-page.component";

const routes: Routes = [{ path: '', component: ImagesListPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImagesListPageRoutingModule { }
