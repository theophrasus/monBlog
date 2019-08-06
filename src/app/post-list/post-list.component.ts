import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() PostTitle : string;
  @Input() PostContent: string;
  @Input() PostLoveIts: number;
  @Input() PostCreationDate: Date;
  loveIt : number = 0;
  DontLoveIt : number = 0;
  constructor() { }

  ngOnInit() {
  }


  getColor()
    {
      if(this.loveIt > this.DontLoveIt)
      {
        return 'green';
      }else if(this.loveIt < this.DontLoveIt)
      {
        return 'red';
      }
    }

    onLoveIt()
    {
      this.loveIt = this.loveIt+1;
      return this.loveIt;
    }
    onDontLoveIt()
    {
      this.DontLoveIt = this.DontLoveIt+1;
      return this.DontLoveIt;
    }


}
