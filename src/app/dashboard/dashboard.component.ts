import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { SlocToSlocComponent } from '../sloc-to-sloc/sloc-to-sloc.component';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatTabsModule,SlocToSlocComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
