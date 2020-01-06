import { Component, OnInit } from '@angular/core';
import {NgForm, FormsModule} from '@angular/forms';

import { PlayerService } from '../shared/player.service';
import { Player } from '../shared/player.model';

declare var M: any;

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
  providers: [PlayerService]
})
export class PlayerComponent implements OnInit {

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.playerService.selectedPlayer = {
      _id: "",
      name: "",
      rank : null,
      nationality: "",
      grandSlamTitles: null
    }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.playerService.postPlayer(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshPlayerList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
    else {
      this.playerService.putPlayer(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshPlayerList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }

  refreshPlayerList() {
    this.playerService.getPlayerList().subscribe((res) => {
      this.playerService.players = res as Player[];
    });
  }

  onEdit(player: Player) {
    this.playerService.selectedPlayer = player;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.playerService.deletePlayer(_id).subscribe((res) => {
        this.refreshPlayerList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }

}
