import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './models/user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [UserService]

})
export class AppComponent implements OnInit{
  
  public title = 'Musify';
  public user: User;
  public identity;
  public token;

  constructor(
  	private _userService:UserService
  	){
  	this.user = new User('', '', '', '', '', 'ROL_USER', '');
  }
  ngOnInit(){
  	//var texto = this._userService.signup(this.user);
  	//console.log(texto);
  }

  public onSubmit(){
  	console.log(this.user);

  	this._userService.signup(this.user).subscribe(
  		response => {
  			console.log(response);
  		},
  		error => {
  			var errorMessage = <any>error;

  			if(errorMessage != null){
  				console.log(error);
  			}
  		}
  	);
  }
}
