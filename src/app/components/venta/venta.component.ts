import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-venta',

  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.scss']
})
export class VentaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  images = [
{'imagenes':"../../assets/images/hexacoptero1.jpg",
'titulo':"Yuneec Typoon H3", 'precio':"2.394,00€"},
{'imagenes':"../../../assets/images/walkera.jpg", 'titulo':"Walkera TALI H500", 'precio':"516,49€"},
]

images2 = [
  {'imagenes':"../../assets/images/81U7zKn3htL._AC_SL1500_.jpg",
  'titulo':"Yuneec Typoon H3", 'precio':"2.394,00€"},
  {'imagenes':"../../../assets/images/cuatricoptero2.jpg", 'titulo':"Walkera TALI H500", 'precio':"516,49€"},
  ]

  images3 = [
    {'imagenes':"../../assets/images/minidrone1.jpg",
    'titulo':"Yuneec Typoon H3", 'precio':"2.394,00€"},
    {'imagenes':"../../../assets/images/minidrone2.jpg", 'titulo':"Walkera TALI H500", 'precio':"516,49€"},
    ]


  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }

}
