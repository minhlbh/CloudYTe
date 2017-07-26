import { Component, OnInit } from '@angular/core';

//services
import {ForumBarService} from '../../services/forum-bar.service';

//model
import { baiViet } from "app/models/baiVietForum";

@Component({
  selector: 'app-forum-bar',
  templateUrl: './forum-bar.component.html',
  styleUrls: ['./forum-bar.component.css']
})
export class ForumBarComponent implements OnInit {
  forumBarContent: baiViet[];

  constructor(private forumService: ForumBarService) { }

  ngOnInit() {
    this.forumService.getForumBar().subscribe((data) => {
            this.forumBarContent = data;
            

            console.log(this.forumBarContent);
        })
  }

}
