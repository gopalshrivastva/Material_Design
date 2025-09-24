import {ChangeDetectionStrategy, Component} from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
   imports: [
    MatMenuModule, // The menu module for the <mat-menu> component
    MatButtonModule, // The button module for the mat-button directive
    MatIconModule, // The icon module for the mat-icon component
    MatToolbarModule, // If you're using a toolbar, import this as well
    MatCardModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {

}
