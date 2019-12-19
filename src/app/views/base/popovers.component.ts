import {Component, SecurityContext} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  templateUrl: 'popovers.component.html'
})
export class PopoversComponent {


  totalItems = 64;
  currentPage   = 4;

  title = 'Welcome word';
  content = 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.';
  html = `<span class="btn btn-warning">Never trust not sanitized <code>HTML</code>!!!</span>`;

  constructor(sanitizer: DomSanitizer) {
    this.html = sanitizer.sanitize(SecurityContext.HTML, this.html);
  }

  pageChanged(event: any): void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
  }
}
