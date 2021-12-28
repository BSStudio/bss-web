import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  contactUsText = 'Elérhetőségeink';
  advocatesText = 'Támogatóink';
  facebook = {
    url: 'https://www.facebook.com/bsstudio',
    title: 'A Budavári Schönherz Stúdió Facebook oldala',
  };
  instagram = {
    url: 'https://www.instagram.com/budavari_schonherz_studio/',
    title: 'A Budavári Schönherz Stúdió Instagram oldala',
  };
  showEmailTitle = 'Kattints, hogy az emailcím megjelenjen';
  emailAddress = 'bssinfo@sch.bme.hu';
  isEmailShown = false;
  advocates: { name: string; url: string }[] = [
    { name: 'Schönherz Kollégium', url: 'https://sch.bme.hu/' },
    { name: 'Simonyi Károly Szakkollégium', url: 'https://simonyi.bme.hu/' },
    { name: 'Budapesti Műszaki Egyetem', url: 'https://www.bme.hu/' },
    { name: 'BME Villamosmérnöki kar', url: 'https://www.vik.bme.hu/' },
    { name: 'Antenna Hungária', url: 'https://www.ahrt.hu/' },
    { name: 'Arizona MPS', url: 'https://www.arizonamps.hu/hu/' },
    { name: 'Rexfilm', url: 'https://www.rexfilm.hu/' },
  ];

  showEmail() {
    this.isEmailShown = true;
  }
}
