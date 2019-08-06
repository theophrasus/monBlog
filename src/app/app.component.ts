import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  

  posts = [
    {
      title: 'Mon premier post sur le blog',
      content: 'Ceci est le premier post sur mon Blog créé avec Angular',
      loveIts: null,
      created_at: new Date()
    },
    {
      title: 'Mon 2ème post sur le blog',
      content: 'Ceci est le 3e post sur mon Blog créé avec Angular',
      loveIts: null,
      created_at: new Date()
    },
    {
      title: 'Mon 3e post sur le blog',
      content: 'Ceci est le 3e post sur mon Blog créé avec Angular',
      loveIts: null,
      created_at: new Date()
    }
  ];

  constructor(){
    
  }
  
}
