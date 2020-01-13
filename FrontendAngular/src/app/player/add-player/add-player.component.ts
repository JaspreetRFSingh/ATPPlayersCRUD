import { Component, OnInit } from '@angular/core';
import Player from '../../player';
import {DataService} from '../../data.service';
import { Data, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
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
      form.reset();
    });
  }



}
