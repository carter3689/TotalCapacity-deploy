import { Component, OnInit, Input } from '@angular/core';
import { NguCarousel } from '@ngu/carousel';

@Component({
  selector: 'app-testimonials-carousel',
  templateUrl: './testimonials-carousel.component.html',
  styleUrls: ['./testimonials-carousel.component.scss']
})
export class TestimonialsCarouselComponent implements OnInit {
  @Input('backgroundGray') public backgroundGray;
  public carouselOptions: NguCarousel;
  public testimonials = [{
    logo: 'assets/images/mock-logo-4.png',
    photo: 'http://via.placeholder.com/48x48',
    text: `“The Peach Cobbler was AMAZING!”`,
    title: 'Tanya Turner Nelson',
    subtitle: ''
  }, {
    logo: 'assets/images/mock-logo-2.png',
    photo: 'http://via.placeholder.com/48x48',
    text: `"Thank you for your great service and even better food. My family enjoyed our fried catfish and perch dinners. That cheescake was awesome. We will be back!"`,
    title: 'Lequita Neely',
    subtitle: ''
  }, {
    logo: 'assets/images/mock-logo-3.png',
    photo: 'http://via.placeholder.com/48x48',
    text: `"Professional catering of food that's deliciously prepared and beautifully presented!"`,
    title: 'Elizabeth Rhinehart Baker',
    subtitle: ''
  }]
  constructor() { }

  ngOnInit() {
    this.carouselOptions = {
      grid: { xs: 1, sm: 2, md: 3, lg: 3, all: 0 },
      slide: 2,
      speed: 400,
      interval: 4000,
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      loop: true
    }
  }

}
