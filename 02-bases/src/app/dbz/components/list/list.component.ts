import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[]=[
    {
      name: 'Trunk',
      power: 10
    }
  ]

  @Output()
  //public onDeleteId: EventEmitter<number>= new EventEmitter();
  public onDeleteId: EventEmitter<string>= new EventEmitter();

   /*onDeleteCharacter(index:number): void{
     // TODO: emitir el ID del personaje
    this.onDeleteId.emit(index);
   }*/
   onDeleteCharacter(index: Character): void{
    // TODO: emitir el ID del personaje
   this.onDeleteId.emit(index.id);
  }

}
