import { PhotoProperties } from './../interfaces/photo-properties';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RotateDirective } from '../directives/rotate.directive';
@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, RotateDirective],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  public initialPath = '/assets/gallery/';
  public gallery: PhotoProperties[] = [];
  public selectedImage = 2;
  public playing = false;
  public imageWidth = 600;
  public interval: any = null;
  public pipeStart = 0;
  public pipeEnd = 3;
  public visibleListElements = 3;

  @ViewChild('selected', { static: true }) selected!: ElementRef;

  public generateGallery = () => {
    for (let index = 1; index <= 8; index++) {
      this.gallery.push({
        id: index,
        photo_id: "'" + index + "'",
        photo_path: this.initialPath + 'image_' + index + '.jpg',
        photo_title: 'image_' + index,
      });
    }
  };

  constructor() {
    this.generateGallery();
  }

  public changeImage = (id: number) => {
    this.selectedImage = id;
    this.resetImageWidth();
  };

  public nextImage = () => {
    this.selectedImage = this.selectedImage + 1;
    if (this.selectedImage > this.pipeEnd) {
      this.nextPage();
    }
    this.resetImageWidth();
  };
  public previousImage = () => {
    this.selectedImage = this.selectedImage - 1;
    if (this.selectedImage <= this.pipeStart) {
      this.previousPage();
    }
    this.resetImageWidth();
  };
  public increaseImage = () => {
    this.selected.nativeElement.style.width = `${this.imageWidth + 20}px`;
    this.imageWidth = this.imageWidth + 20;
  };
  public decreaseImage = () => {
    this.selected.nativeElement.style.width = `${this.imageWidth - 20}px`;
    this.imageWidth = this.imageWidth - 20;
  };

  public play = () => {
    this.playing = true;
    this.interval = setInterval(() => {
      this.selectedImage = this.selectedImage + 1;
      if (this.selectedImage == this.gallery.length + 1) {
        this.selectedImage = 1;
        this.resetPage();
      }
      if (this.selectedImage >= this.pipeEnd + 1) {
        this.nextPage();
      }
    }, 2000);
  };

  public stop = () => {
    this.playing = false;
    clearInterval(this.interval);
  };

  public resetImageWidth = () => {
    this.selected.nativeElement.style.width = '600px';
    this.imageWidth = 600;
  };

  public resetPage = () => {
    this.pipeStart = 0;
    this.pipeEnd = this.visibleListElements;
  };

  public previousPage = () => {
    this.pipeStart -= this.visibleListElements;
    this.pipeEnd -= this.visibleListElements;
  };

  public nextPage = () => {
    this.pipeStart += this.visibleListElements;
    this.pipeEnd += this.visibleListElements;
  };
}
