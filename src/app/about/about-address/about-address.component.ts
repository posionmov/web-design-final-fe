import {Component} from "@angular/core";

@Component({
  selector: 'about-address',
  template: `
    <medium-element-block>
      <div class="address-wrapper">
        <div class="address-text">
          <h1>Our location:</h1>
          <h2>Serbia, Београд</h2>
          <h2>Данијелова 32</h2>
          <h3>160622</h3>
        </div>
        <div class="address-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22657.920917970834!2d20.502626498364258!3d44.77590991919631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a70675616a667%3A0x31457a4b1766e54a!2sUniverzitet%20Singidunum!5e0!3m2!1sru!2srs!4v1695736841795!5m2!1sru!2srs"
                  width="600"
                  height="450"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </medium-element-block>
  `,
  styleUrls: ['./about-address.component.css']
})
export class AboutAddressComponent {}
