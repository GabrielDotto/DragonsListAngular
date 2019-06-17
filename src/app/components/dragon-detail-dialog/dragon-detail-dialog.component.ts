import { Component, Inject, ViewChild, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatInput, MatSnackBar } from '@angular/material';
import { DragonModel } from 'src/app/models/dragon.model';
import { DragonServiceService } from 'src/app/services/dragon-service.service';
import { Helper } from 'src/app/lib/helper';

@Component({
  selector: 'app-dragon-detail-dialog',
  templateUrl: './dragon-detail-dialog.component.html',
  styleUrls: ['./dragon-detail-dialog.component.scss']
})
export class DragonDetailDialogComponent {

  @ViewChild('name') dragonName: MatInput;
  @ViewChild('tipo') dragonTipo: MatInput;

  public dragon: DragonModel;

  constructor(
    private snackBar: MatSnackBar,
    private dragonService: DragonServiceService,
    public dialogRef: MatDialogRef<DragonDetailDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: DragonModel,
  ) { 
    this.dragon = Object.assign({}, data);
  }

  salvar() {
    this.dragon.name = this.dragonName.value;
    this.dragon.type = this.dragonTipo.value;
    if(!Helper.estaEmBranco(this.dragon.id)) {
      this.dragonService.editDragon(this.dragon).subscribe(x => {
        this.closeDialog();
      }, err => {
        this.showSnackbar(`Erro ao editar dragão`);
      });
    }else{
      this.dragon.createdAt = new Date();
      this.dragonService.createDragon(this.dragon).subscribe(x => {
        this.closeDialog();
      }, err => {
        this.showSnackbar(`Erro ao criar dragão`);
      });
    }
  }

  showSnackbar(mensagem: string) {
    this.snackBar.open(mensagem);
  }

  closeDialog(){
    this.dialogRef.close(true);
  }


}
