class GalleryController {
  constructor($firebaseAuth, GalleryService) {
    this._GalleryService = GalleryService;

    this.list = this._GalleryService.all();
    this.newImage = this._GalleryService.new();
  }

  /* STEP 1 - This should call the add method on your
    GalleryService and pass in the newImage you're
    trying to create */

  addImage() {
    this.newImage = {
      name : this.name,
      image: this.image
    }
    this._GalleryService.add(this.newImage);
    // console.log(this.list);
    this.name="";
    this.image="";
    this.item.fullSize = false;
  }

  toggleSize(item){
    item.fullSize = !item.fullSize;
    console.log(item);

  }

}

export default GalleryController;
