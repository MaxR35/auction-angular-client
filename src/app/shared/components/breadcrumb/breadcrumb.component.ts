import {Component, Input} from '@angular/core';
import {RouterLink} from '@angular/router';

interface BreadcrumbItem {
  label: string;
  route?: any[];
}

@Component({
  selector: 'app-breadcrumb',
  imports: [
    RouterLink
  ],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.css'
})
export class BreadcrumbComponent {
  @Input() items: BreadcrumbItem[] = [];
}
