import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {SearchSectionComponent} from "./search-section.component";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    SearchSectionComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    InputTextModule,
    ButtonModule,
  ],
  exports: [
    SearchSectionComponent
  ]
})
export class SearchSectionModule {
}
