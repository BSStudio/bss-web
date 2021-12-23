import {NgModule} from "@angular/core";
import {DefaultShellComponent} from "./default-shell.component";
import {RouterModule} from "@angular/router";
import {UIShellModule} from "carbon-components-angular";
import {FooterComponent} from "./footer.component";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [CommonModule, RouterModule, UIShellModule],
  declarations: [DefaultShellComponent, FooterComponent]
})
export class DefaultShellModule {}
