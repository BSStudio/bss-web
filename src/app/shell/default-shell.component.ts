import {Component} from "@angular/core";
import {NavigationItem} from "carbon-components-angular";

@Component({
  selector: 'default-shell',
  templateUrl: './default-shell.component.html',
  styleUrls: ['./default-shell.component.scss'],
})
export class DefaultShellComponent {
  title = 'web';
  navigationItems: NavigationItem[] = [
    {title: 'Video', type: 'item'}
  ];
}
