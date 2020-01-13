import { Component, OnInit } from '@angular/core';
import Player from '../../player';
import {DataService} from '../../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {

  selectedPlayer: Player;

  toggleForm = false;
  sName: string;
  sNationality: string;
  sRank: number;
  sGs: number;


  constructor(private route: ActivatedRoute, private dataService: DataService, public router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const selectedId = params.get('_id');
      console.log(selectedId);
      this.dataService.getPlayerById(selectedId).subscribe(data => {
        console.log(data['grandSlamTitles']);
        this.selectedPlayer = new Player();
        this.selectedPlayer._id = selectedId;
        this.selectedPlayer.grandSlamTitles = data['grandSlamTitles'];
        this.selectedPlayer.name = data['name'];
        this.selectedPlayer.rank = data['rank'];
        this.selectedPlayer.nationality = data['nationality'];

      });
    });
    console.log(this.selectedPlayer);
    this.toggleForm = !this.toggleForm;
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
    });
    form.reset();
    this.router.navigateByUrl('');
  }

}
