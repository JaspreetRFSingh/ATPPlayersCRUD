import { Component, OnInit } from '@angular/core';

import Player from '../player';
import {DataService} from '../data.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
  providers: [ DataService ]
})
export class PlayerComponent implements OnInit {
  playersList: Player[] = [];
  selectedPlayer: Player;
  toggleForm = false;


  constructor(private dataService: DataService) { }


  getPlayers() {
    // returns an observable
    this.dataService.getPlayersData()
    .subscribe(players => {
      this.playersList = players;
    });
  }

  addPlayer(form) {
    const newPlayer: Player = {
      name : form.value.playerName,
      nationality : form.value.playerNationality,
      rank : form.value.playerRank,
      grandSlamTitles : form.value.playerGrandSlams
    };
    this.dataService.addPlayerDetails(newPlayer)
    .subscribe(player => {
      console.log(player);
      this.getPlayers();
    });
  }

  editPlayer(form) {
    const newPlayer: Player = {
      _id: this.selectedPlayer._id,
      name : form.value.playerName,
      nationality : form.value.playerNationality,
      rank : form.value.playerRank,
      grandSlamTitles : form.value.playerGrandSlams
    };
    this.dataService.editPlayer(newPlayer)
    .subscribe(data => {
      console.log('Value updated!' + data.grandSlamTitles);
      this.toggleForm = !this.toggleForm;
      this.getPlayers();
    });
  }

  deletePlayer(id) {
    this.dataService.deletePlayer(id)
    .subscribe(data => {
      if (data.n === 1) {
        for (let i = 0; i < this.playersList.length; i++){
          if (id === this.playersList[i]._id){
            this.playersList.splice(i,1);
          }
        }
      }
      this.getPlayers();
    });
  }

  showEditForm(player) {
    this.selectedPlayer = player;
    this.toggleForm = !this.toggleForm;
  }

  ngOnInit() {
    this.getPlayers();
  }

}
