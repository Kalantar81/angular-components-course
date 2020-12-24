import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  public posts: Post[] = [
    {title: 'Angular components', text: ' Still learning', id: 1},
    {title: 'Angular advenced', text: 'Directives and pipes', id: 2}
  ];

  ngOnInit(): void {
    setTimeout(() => {
      this.posts[0].title = 'Changed!';
    }, 5000);
  }

  updatePosts(post: Post) {
    // will make push(), but put it on index [0]
    this.posts.unshift(post);
  }

  removePost(id: number): void {
    this.posts = this.posts.filter((post: Post) => post.id !== id);
  }

}

export interface Post {
  title: string;
  text: string;
  id?: number;
}