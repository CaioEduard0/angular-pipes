import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-pipe-examples',
  templateUrl: './pipe-examples.component.html',
  styleUrls: ['./pipe-examples.component.css']
})
export class PipeExamplesComponent implements OnInit {

  book: any = {
    title: 'Learning JavaScript Data Structures and Algorithms.',
    rating: 4.54321,
    pages: 314,
    price: 44.99,
    releaseDate: new Date(2016, 5, 23),
    url: 'http://google.com'
  };

  courses: string[] = ['Java', 'Angular', 'Spring'];
  filter: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  addCourse(value: string) {
    this.courses.push(value);
    console.log(this.courses);
  }

  getCourses() {
    if (this.courses.length === 0 || this.filter === undefined ||
      this.filter.trim() === '') {
        return this.courses;
      }

    return this.courses.filter(v => {
      if (v.toLowerCase().indexOf(this.filter.toLowerCase()) >= 0) {
        return true;
      }
      return false;
    });
  }

  asyncValue = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Async value.')
    }, 2000);
  });

  asyncValue2 =  interval(2000).pipe(map(value => 'Async value 2.'));
}
