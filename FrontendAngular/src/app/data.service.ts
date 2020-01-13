import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : Http) { }

  getPlayersData(){
    return this.http.get('http://localhost:3000/players')
    .map(res => res.json());
  }

  getPlayerById(id) {
    return this.http.get('http://localhost:3000/players/' + id)
    .map(res => res.json());
  }

  addPlayerDetails(newPlayer){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/players', newPlayer, {headers})
    .map(res => res.json());
  }

  deletePlayer(id) {
    return this.http.delete('http://localhost:3000/players/' + id)
    .map(res => res.json());
  }

  editPlayer(newPlayer) {
    console.log("rsfdsdsv-------"+newPlayer._id + " ----  "+ newPlayer.grandSlamTitles);
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.put('http://localhost:3000/players/' + newPlayer._id, newPlayer, { headers })
    .map(res => res.json());
  }

}
