import { Component, OnInit, ViewChild } from '@angular/core';
import { DragonServiceService } from 'src/app/services/dragon-service.service';
import { DragonModel } from 'src/app/models/dragon.model';
import { MatTable, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dragonService: DragonServiceService) { }
  displayedColumns: string[] = ['id', 'name', 'createdAt', 'type'];
  dragonsDataSource: MatTableDataSource<DragonModel>

  ngOnInit() {
    this.dragonService.getDragons().subscribe( (dragons: DragonModel[]) => { 
      console.log("DRAGONS", dragons);
      this.dragonsDataSource = new MatTableDataSource(dragons);
    });
  }

}
