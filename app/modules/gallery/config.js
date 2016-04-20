function config($stateProvider) {
  $stateProvider
  .state('gallery',{
    url:'/',
    controller: 'GalleryController as galleryCtrl',
    template: require('./view.html')
  });
}

export default config;
