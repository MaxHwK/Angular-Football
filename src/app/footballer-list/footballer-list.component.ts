import { Component, OnInit } from '@angular/core';
import { FootballersService } from '../services/footballers/footballers.service';

@Component({
  selector: 'app-footballer-list',
  templateUrl: './footballer-list.component.html',
  styleUrls: ['./footballer-list.component.css']
})

export class FootballerListComponent implements OnInit {

  footballers!: any;

  constructor(
    private Footballers: FootballersService
  ) { }

  ngOnInit(): void {
    this.Footballers.getAllFootballers().subscribe((data: any) => {
      this.footballers = data;
    });
  }

}
