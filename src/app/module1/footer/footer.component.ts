import { Component } from '@angular/core';
import { faFacebook, faInstagram, faTwitter, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  fafacebook = faFacebook
  fainstagram = faInstagram
  fatwitter = faTwitter
  fagoogleplay = faGooglePlay
  facopyright = faCopyright

}
