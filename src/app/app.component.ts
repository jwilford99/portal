import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  public dark: boolean = false;
  public appPages = [
    { title: 'Optimize Overview', url: '/dashboard/overview', icon: 'eye' },
    { title: 'Optimize Display', url: '/dashboard/display', icon: 'id-card' },
    { title: 'Optimize Video', url: '/dashboard/video', icon: 'play' },
    { title: 'Over The Top', url: '/dashboard/ott', icon: 'tv' },
    { title: 'Optimize Audio', url: '/dashboard/audio', icon: 'volume-high' },
  ];

  constructor() {
    this.handleTheme();

  }

  onThemeChange(event: any) {
    document.documentElement.classList.toggle('dark', event.detail.checked);
    localStorage.setItem('dark', event.detail.checked);
  }

  handleTheme() {
    if (localStorage.getItem('dark') === 'true') {
      this.dark = true;
      document.documentElement.classList.add('dark')
    } else {
      this.dark = false;
      document.documentElement.classList.remove('dark')
    }
  }
}
