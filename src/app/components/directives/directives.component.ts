import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent implements OnInit {
  students = [
    {
      name: 'Mickey',
      email: 'Mickey@gmail.com',
      major: 'Cs',
      year: 'Second',
    },
    {
      name: 'Minney',
      email: 'Minney@gmail.com',
      major: 'Cs',
      year: 'THird',
    },
    {
      name: 'duh',
      email: 'duh@gmail.com',
      major: 'SWE',
      year: 'third',
    },
    {
      name: 'huh',
      email: 'huh@gmail.com',
      major: 'SWE',
      year: 'second',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
