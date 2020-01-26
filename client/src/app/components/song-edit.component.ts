import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


import { GLOBAL } from '../services/global';
import { UserService } from '../services/user.service';
import { SongService } from '../services/song.service';
import { Song } from '../models/song';


@Component({
	selector: 'song-edit',
	templateUrl: '../views/song-add.html',
	providers: [UserService, SongService],
})

export class SongEditComponent implements OnInit{
	public titulo: string;
    public identity;
    public song:Song;    
	public token;
	public url: string;
    public alertMessage;
    public is_edit;
	constructor(
			private _route: ActivatedRoute,
			private _router: Router,
            private _userService: UserService,
            private _songService: SongService
		){
			this.titulo = 'Editar canción';
			this.identity = this._userService.getIdentity();
			this.token = this._userService.getToken();
			this.url = GLOBAL.url;
            this.song = new Song(1, '','', '', '');
            this.is_edit = true;
	}

	ngOnInit(){
        console.log('song-edit.component.ts cargado');
        //sacar la cancion a editar.
		
		}
		
	onSubmit(){
        
        
		this._route.params.forEach((params: Params)=>{
			let album_id = params['album'];
            this.song.album = album_id;
			this._songService.addSong(this.token, this.song).subscribe(
				response => {
					if(!response.song){
						this.alertMessage = 'Error en el servidor.';
					}else{
						this.song = response.song;
						this.alertMessage = 'La cancion se ha creado correctamente.';
						//this._router.navigate(['/editar-album', response.song._id]);
					}
				},
				error => {
                    var errorMessage = <any>error;

                    if(errorMessage != null){
                        var body = JSON.parse(error._body);

                        this.alertMessage = body.message;
                        console.log(error);
                    }
                }
			);

        });
        
	}
}