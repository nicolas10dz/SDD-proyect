import { Component, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit {
  protected readonly title = signal('TodoLite');
  protected apiStatus = signal('cargando...');

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<{ status: string }>('http://localhost:3000/api/health').subscribe({
      next: (res) => this.apiStatus.set('API: ' + res.status),
      error: ()  => this.apiStatus.set('API: error'),
    });
  }
}
