import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-crud-firebase';

  isShow = false;

  newEmployee(): void {
    this.isShow = !this.isShow;
  }

}
