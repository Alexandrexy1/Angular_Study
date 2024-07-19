import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [ CommonModule, FormsModule ],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss'
})
export class TitleComponent implements OnDestroy {
  public title = "Hello!!!!";

  public items: number[] = [1, 2, 3, 4, 5, 6];

  public newNumber = 0;

  public name = "nascimento";

  ngOnDestroy(): void {
      console.log("successfully destroyed.");
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    this.items.push(this.newNumber);
  }

  onClickSwitch(): void {
    if(this.name == "alex") this.name = "nascimento";
    else this.name = "alex";
  }

}
