import { Component, OnInit } from '@angular/core';

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
} from 'swiper/core';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Virtual]);

@Component({
  selector: 'app-venta',

  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.scss']
})
export class VentaComponent {

  slides = Array.from({ length: 1000 }).map(
    (el, index) => `Slide ${index + 1}`
    );
//  onSwiper(swiper) {
//   console.log(swiper);
// }
// onSlideChange() {
//   console.log('slide change');
// }
}
