import {Component} from '@angular/core';

styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]

export class Hero {
  id: number;
  name: string;
}



const HEROES: Hero[] = [
  {id: 1, name: 'Eddie'},
  {id: 2, name: 'Pavel'},
  {id: 3, name: 'Ivan'},
  {id: 4, name: 'Serhiy'},
  {id: 5, name: 'Denis'},
  {id: 6, name: 'Andrew'},
  {id: 7, name: 'Dan'},
  {id: 8, name: 'Alex'},
  {id: 9, name: 'Max'},
  {id: 10, name: 'Denis'},
];


function onSelect(hero: Hero): void {
  this.selectedHero = hero;
}

@Component({
  selector: 'my-app',
  template:
    '<h2>Lolki</h2>' +
    '<ul class="heroes">' +
    '<li *ngFor="let hero of heroes" (click)="onSelect(hero)">' +
    '<span class="badge">{{hero.id}}</span> {{hero.name}}' +
    '</li>' +
    '</ul>' +
  '<div *ngIf="selectedHero">' +
  '    <h2>{{selectedHero.name}} details!</h2>' +
  '<div><label>id: </label>{{selectedHero.id}}</div>' +
  '<div> ' +
  ' <label>name: </label>' +
  '<input [(ngModel)]="selectedHero.name" placeholder="name"/> ' +
  ' </div> ' +
  ' </div>'



})



export class AppComponent {
  title = 'tour of heroes';
  heroes = HEROES;
  selectedHero: Hero;
}

