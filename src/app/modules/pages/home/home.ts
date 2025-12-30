import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Stars } from '../../components/stars/stars';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, Stars],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  modalVisible = false;
  modalImg = '';
  modalText = '';
  modalLink ='';

    currentYear = new Date().getFullYear();

openModal(img: string, text: string, link: string) {
  this.modalImg = img;
  this.modalText = text;
  this.modalLink = link;
  this.modalVisible = true;
}

  closeModal() {
    this.modalVisible = false;
  }
}
