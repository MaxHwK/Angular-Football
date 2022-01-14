import { Component, OnInit, Input } from '@angular/core';
import { FootballersService } from '../services/footballers/footballers.service';

@Component({
  selector: 'app-footballer',
  templateUrl: './footballer.component.html',
  styleUrls: ['./footballer.component.css']
})

export class FootballerComponent implements OnInit {

  @Input()id?: string;
  @Input()firstname?: string;
  @Input()lastname?: string;
  @Input()photo?: string;
  @Input()post?: string;
  @Input()nationality?: string;
  @Input()club?: string;
  @Input()goals?: number;
  @Input()trophies?: number;
  @Input()onBench?: boolean;

  change: boolean = false;

  constructor(
    private Footballers: FootballersService
  ) {}

  ngOnInit(): void {
  }

  getOnBench() {
    return this.onBench;
  }

  changeColor() {
    return this.onBench ? 'black' : 'orange';
  }

  deleteFootballer():void {
    if(confirm("Etes-vous sûr de vouloir supprimer ce joueur ?")) {
      this.change = true;
        setTimeout(() => {
          this.change = false;
          this.Footballers.delete(this.id);
        }, 2000); 
    }
  }

}
