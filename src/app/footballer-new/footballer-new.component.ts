import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FootballersService } from '../services/footballers/footballers.service';
import { Footballers } from '../models/footballers.model';

@Component({
  selector: 'app-footballer-new',
  templateUrl: './footballer-new.component.html',
  styleUrls: ['./footballer-new.component.css']
})

export class FootballerNewComponent implements OnInit {
  
  public footballer!: Footballers;
  change: boolean = false;
  noverif: boolean = false;

  constructor(
    private Footballers: FootballersService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.footballer = new Footballers()
  }

  newFootballer() {
    if (this.footballer.photo !== "" && this.footballer.firstname !== "" && this.footballer.lastname !== "" && 
    this.footballer.post !== "" && this.footballer.nationality !== "" && this.footballer.club !== "" &&
    this.footballer.goals !== null && this.footballer.trophies !== null) {
      this.Footballers.saveNewFootballers(this.footballer).subscribe(() => {
        this.footballer = new Footballers();
        this.change = true;
        setTimeout(() => {
          this.change = false;
          this.router.navigate(['/footballers']);
        }, 2000); 
      })
    }
    else {
      this.noverif = true;
        setTimeout(() => {
          this.noverif = false;
        }, 2000); 
    }
  }
}
