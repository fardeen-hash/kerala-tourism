import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { DistrictComponent } from './pages/district/district.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet,RouterLink, NavbarComponent,DistrictComponent]
})
export class AppComponent {
  title = 'tourism';
}
