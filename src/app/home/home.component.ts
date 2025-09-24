import { ChangeDetectionStrategy, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, NativeDateAdapter, DateAdapter } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

  // 👇 Old-school way: provide the DateAdapter directly
  providers: [
    { provide: DateAdapter, useClass: NativeDateAdapter }
  ]
})
export class HomeComponent {
  rooms = 1;
  adults = 2;
  children = 0;
  selectedSummary = '1 Room / 2 Guests';

  updateSummary() {
    const totalGuests = this.adults + this.children;
    this.selectedSummary = `${this.rooms} Room / ${totalGuests} Guests`;
  }
}

