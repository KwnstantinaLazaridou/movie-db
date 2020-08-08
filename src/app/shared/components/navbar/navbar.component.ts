import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  searchTerm = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSearch() {
    if (!this.searchTerm) {
      return;
    }
    this.router.navigate(['/search/' + this.searchTerm]);

  }
}
