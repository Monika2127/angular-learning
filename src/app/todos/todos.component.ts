import { Component } from '@angular/core';
import { bounceOutLeftAnimation, fade, fadeInAnimation, fadeLeft } from '../common/animations';
import { trigger, transition, style, animate, useAnimation, query, animateChild, group, stagger } from '@angular/animations';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  animations: [
    // fade,
    // fadeLeft

    //  Animating parent element won't animate child item on the first load
    //  to run child animations parallely with parent, we can use group
    trigger('toAllAnimation', [
      transition(':enter', [
        group([
          query('h1', [
            style({ transform: 'translateY(-20px)' }),
            animate(1000)
          ]),
          // to run the child as well, we are telling angular to not to block child animations
          query('@toDoAnimation', 
            // animateChild()

            // to have curtain like effect, we can use stagger, only define inside query function
            stagger(400, animateChild())
          )
        ])
      ])
    ]),

    trigger('toDoAnimation', [
      transition(':enter', [
        useAnimation(fadeInAnimation, {
          params: {
            duration: '3s',
            easing: 'ease-in'
          }
        })
      ]),

      transition(':leave', [
        style({
          color: 'red'
        }),
        useAnimation(bounceOutLeftAnimation)
      ])
    ])
  ]
})
export class TodosComponent {
  items: any[] = [
    'Wash the dishes',
    'Call the accountant',
    'Apply for a car insurance'
  ];

  addItem(input: HTMLInputElement) {
    this.items.splice(0, 0, input.value);
    input.value = '';
  }

  removeItem(item: any) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }

  started($event: any) {
    console.log("start", $event)
  }

  ended($event: any) {
    console.log("end", $event)
  }
}
