import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator'; // If you want to add pagination
import { MatSortModule } from '@angular/material/sort'; // If you want to add sorting functionality

export interface MaterialData {
  selectionBox: string;
  materialCode: string;
  materialText: string;
  availableStock: number;
  transferQty: number;
  postingDate: string;
}
@Component({
  selector: 'app-sloc-to-sloc',
  standalone: true,
  imports: [ MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatNativeDateModule,
    MatGridListModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatSortModule
    ],
  templateUrl: './sloc-to-sloc.component.html',
  styleUrl: './sloc-to-sloc.component.scss'
})
export class SlocToSlocComponent {
  formData = {
    plant: '',
    material: '',
    materialType: '',
    batch: ''
  };

  dataSource = new MatTableDataSource<MaterialData>([]);
  displayedColumns: string[] = ['selectionBox', 'materialCode', 'materialText', 'availableStock', 'transferQty', 'postingDate'];

  materialData: MaterialData[] = [
    { selectionBox: 'ABC1', materialCode: 'XYZ1', materialText: 'Material 1', availableStock: 23, transferQty: 10, postingDate: '02.09.2024' },
    { selectionBox: 'ABC2', materialCode: 'XYZ2', materialText: 'Material 2', availableStock: 24, transferQty: 11, postingDate: '02.09.2025' },
    { selectionBox: 'ABC3', materialCode: 'XYZ3', materialText: 'Material 3', availableStock: 25, transferQty: 12, postingDate: '02.09.2026' },
  ];

  
  getData() {
    this.dataSource.data = this.materialData;
  }
}
