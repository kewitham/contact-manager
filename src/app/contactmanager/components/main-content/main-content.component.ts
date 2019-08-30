import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  user: User;
  constructor(private route: ActivatedRoute, private service: UserService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];


      this.service.users.subscribe(users => {
        if (users.length == 0) return;

        this.user = this.service.userById(id);
      });
      

    })
  }

}
