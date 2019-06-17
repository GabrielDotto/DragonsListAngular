import { Component, OnInit, ViewChild } from '@angular/core';
import { DragonServiceService } from 'src/app/services/dragon-service.service';
import { DragonModel } from 'src/app/models/dragon.model';
import { MatTable, MatTableDataSource, MatDialog, MatSnackBar } from '@angular/material';
import { DragonDetailDialogComponent } from '../dragon-detail-dialog/dragon-detail-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dragonService: DragonServiceService, public dialog: MatDialog, private snackBar: MatSnackBar) { }
  displayedColumns: string[] = ['id', 'name', 'createdAt', 'type', 'options'];
  dragonsDataSource: MatTableDataSource<DragonModel>

  ngOnInit() {
    this.loadDragons();
  }

  loadDragons() {
    this.dragonService.getDragons().subscribe( (dragons: DragonModel[]) => { 
      console.log("DRAGONS", dragons);
      this.dragonsDataSource = new MatTableDataSource(dragons);
    }, err => {
      this.snackBar.open("Parece que os dragrões não foram encontrados... :(")
    });
  }

  deletarDragon(selectedDragon: DragonModel) {
    this.dragonService.deleteDragon(selectedDragon.id.toString()).subscribe(x => {
      this.loadDragons()
    }, err => {
      this.snackBar.open(`Erro ao tentar deletar o dragon ${selectedDragon.name}`);
    })
  }

  openDragonDialog(data?: DragonModel) {
    const dialog = this.dialog.open(DragonDetailDialogComponent, {
      width: '50%',
      data: data
    }).afterClosed().subscribe( confirmou => { 
      if (confirmou) {
        this.loadDragons();
      }
    });
  }

}
