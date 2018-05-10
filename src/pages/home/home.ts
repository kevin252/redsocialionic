import { Picture } from './../../interfaces/picture.service';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	filter = 'T';
	pictures: Picture[] = [];
	base64Image = 'assets/imgs/avatar-ts-woody.png';
	constructor(public navCtrl: NavController, public cameraPlugin: Camera) {}

	takePicture() {
		const options: CameraOptions = {
			quality: 100,
			destinationType: this.cameraPlugin.DestinationType.DATA_URL,
			encodingType: this.cameraPlugin.EncodingType.JPEG,
			mediaType: this.cameraPlugin.MediaType.PICTURE,
			saveToPhotoAlbum: true
		};
		this.cameraPlugin.getPicture(options).then(
			(imageData) => {
				// imageData is either a base64 encoded string or a file URI
				// If it's base64:
				this.base64Image = 'data:image/jpeg;base64,' + imageData;
				this.pictures.push({ url: this.base64Image });
				console.log(this.pictures);
			},
			(err) => {
				// Handle error
			}
		);
	}
}
