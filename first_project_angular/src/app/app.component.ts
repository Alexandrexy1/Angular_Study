import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitleComponent } from "./title/title.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TitleComponent, CommonModule],
  template: `

  <app-title *ngIf="destroy"/>

  <button (click)="destroyComponent()">Destroy</button>
  <router-outlet />
  `,
})
export class AppComponent {
  title = 'first_project_angular';
  destroy = true;

  destroyComponent(): void {
    setInterval(() => this.destroy = !this.destroy, 5000);
  }
}
