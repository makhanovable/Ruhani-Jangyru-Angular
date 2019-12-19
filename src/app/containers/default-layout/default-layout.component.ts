import {Component, ViewChild} from '@angular/core';
import {navItems} from '../../_nav';
import {ModalDirective} from 'ngx-bootstrap';
import {TokenStorageService} from '../../auth/token-storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;

  constructor(private tokenStorage: TokenStorageService) {
  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  logout() {
    this.tokenStorage.signOut();
    window.location.reload();
  }
}
