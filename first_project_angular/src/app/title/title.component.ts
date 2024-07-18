import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss'
})
export class TitleComponent implements OnDestroy {
  public title = "Hello!!!!";


  ngOnDestroy(): void {
      console.log("successfully destroyed.");
  }

}
