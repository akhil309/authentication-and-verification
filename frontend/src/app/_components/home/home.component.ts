import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from './../../_models/user.model';
import { UserService } from './../../_services/user.service';
import { AuthenticationService } from 'src/app/_services/authentication.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loading = false;
  users: User[];

  constructor(private userService: UserService, public authService: AuthenticationService) {
    console.log(authService.userValue)
   }

  ngOnInit(): void {
    // this.loading = true;
    // this.userService.getAll().pipe(first()).subscribe(users => {
    //     this.loading = false;
    //     this.users = users;
    // });
  }

}
