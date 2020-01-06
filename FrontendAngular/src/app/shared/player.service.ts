import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Player } from './player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  selectedPlayer: Player;
  players: Player[];
  readonly baseURL = 'http://localhost:3000/players';

  constructor(private http: HttpClient) { }

  postPlayer(player: Player) {
    return this.http.post(this.baseURL, player);
  }

  getPlayerList() {
    return this.http.get(this.baseURL);
  }

  putPlayer(player: Player) {
    return this.http.put(this.baseURL + `/${player._id}`, player);
  }

  deletePlayer(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
