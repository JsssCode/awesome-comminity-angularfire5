import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  title = 'awesome-comminity-angularfire5';
  public posts: Observable<any>;

  constructor(private aft: AngularFirestore) {
  }

  ngOnInit() {
    this.posts = this.aft.collection('posts').valueChanges();
  }

}
