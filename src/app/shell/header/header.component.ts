import { Component } from '@angular/core';
import { NavigationItem } from 'carbon-components-angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  title = 'web';
  hasHamburger = false;
  navigationItems: NavigationItem[] = [
    { content: 'Videók', type: 'item', href: 'video', route: ['video'] },
    { content: 'Események', type: 'item', href: 'events', route: ['events'] },
    { content: 'Adások', type: 'item', href: 'live', route: ['live'] },
    { content: 'Tanfolyam', type: 'item', href: 'courses', route: ['courses'] },
    {
      title: 'Rólunk',
      type: 'menu',
      trigger: 'mouseover',
      route: ['about-us'],
      menuItems: [
        { content: 'Bemutatkozás', href: 'about-us', route: ['about-us'] },
        {
          content: 'Tagok',
          href: 'about-us/members',
          route: ['about-us', 'members'],
        },
        {
          content: 'Kapcsolat',
          href: 'about-us/contact',
          route: ['about-us', 'contact'],
        },
      ],
    },
  ];

  public toggleHamburger() {
    this.hasHamburger = !this.hasHamburger;
  }
}
