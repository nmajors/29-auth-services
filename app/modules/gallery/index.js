import angular from 'angular';

import config from './config';

import galleryController from './controller';
import galleryService from './service';

let gallery = angular.module('tiy.gallery', []);

gallery.config(config);
gallery.controller('GalleryController', galleryController);
gallery.service('GalleryService', galleryService);

export default gallery;
