import {NgModule} from "@angular/core";
import {
  RouterModule,
  Routes,
} from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/images",
    pathMatch: "full"
  },
  {
    path: "images",
    loadChildren: () => import("./images-list-page/images-list-page.module").then(m => m.ImagesListPageModule),
  },
  {
    path: "**",
    redirectTo: "/404"
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
