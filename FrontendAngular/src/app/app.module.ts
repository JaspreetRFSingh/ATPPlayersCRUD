import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { RouterModule } from '@angular/router';
import { AddPlayerComponent } from './player/add-player/add-player.component';
import { EditPlayerComponent } from './player/edit-player/edit-player.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    EditPlayerComponent,
    AddPlayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: PlayerComponent},
      {path: 'addPlayer', component: AddPlayerComponent},
      {path: 'editPlayer/:_id', component: EditPlayerComponent}
    ]),
    HttpClientModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
