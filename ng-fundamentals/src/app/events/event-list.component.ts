import { Component } from '@angular/core';

@Component({
  selector: 'event-list',
  template: `<div>
    <h1>Upcoming Angular Events</h1>
    <hr />
    <event-thumbnail [event]="event1"></event-thumbnail>
  </div> `,
})
export class EventListComponent {
  event1 = {
    id: 1,
    name: 'Angular Connect',
    date: '09/25/2022',
    time: '10:00 am',
    price: 599.99,
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England',
    },
  };
}
