import { Component } from '@angular/core';

@Component({
  selector: 'ngx-security-cameras',
  styleUrls: ['./security-cameras.component.scss'],
  templateUrl: './security-cameras.component.html',
})
export class SecurityCamerasComponent {

  cameras: any[] = [{
    title: 'Cámara #1',
    source: 'assets/images/cochera1.jpg',
  }, {
    title: 'Cámara #2',
    source: 'assets/images/cochera2.jpg',
  }, {
    title: 'Cámara #3',
    source: 'assets/images/cochera3.jpg',
  }, {
    title: 'Cámara #4',
    source: 'assets/images/cochera4.jpg',
  }];

  selectedCamera: any = this.cameras[0];

  userMenu = [{
    title: 'Profile',
  }, {
    title: 'Log out',
  }];

  isSingleView = false;

  selectCamera(camera: any) {
    this.selectedCamera = camera;
    this.isSingleView = true;
  }
}
