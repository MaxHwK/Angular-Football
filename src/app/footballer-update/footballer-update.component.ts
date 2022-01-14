import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { FootballersService } from '../services/footballers/footballers.service';

@Component({
  selector: 'app-footballer-update',
  templateUrl: './footballer-update.component.html',
  styleUrls: ['./footballer-update.component.css']
})

export class FootballerUpdateComponent implements OnInit {

  footballer: any = null;
  change: boolean = false;
  noverif: boolean = false;

  constructor(
    private Footballers: FootballersService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.Footballers.get(id).subscribe((value: any) => {
      console.log(value)
      this.footballer = value;
    });
  }

  updateFootballer() {
    if (this.footballer.photo !== "" && this.footballer.firstname !== "" && this.footballer.lastname !== "" && 
    this.footballer.post !== "" && this.footballer.nationality !== "" && this.footballer.club !== "" &&
    this.footballer.goals !== null && this.footballer.trophies !== null) {
      this.Footballers.update(this.footballer).subscribe(() => {
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

//this.router.navigate(['/footballers']);
