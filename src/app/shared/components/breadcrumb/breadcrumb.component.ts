import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../../services/breadcrumb/breadcrumb.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.css',
  standalone: false,
})
export class BreadcrumbComponent implements OnInit {
  
  breadcrumbs: Array<{ label: string, url: string, icon?: string }> = [];

  constructor(private breadcrumbService: BreadcrumbService) {}

  ngOnInit(): void {
    this.breadcrumbs = this.breadcrumbService.breadcrumbs;
  }
}
