class GalleryController {
  constructor($firebaseAuth, GalleryService) {
    this._GalleryService = GalleryService;
    this.auth = this._GalleryService.auth;

    this._GalleryService
      .isLoggedIn()
      .then((response) =>{
        this.authData = response;
        this._GalleryService.loginUser(this.authData);
        this.list = this._GalleryService.all();
        this.newImage = this._GalleryService.new();
        console.log(this.list);
      })
      .catch(() => {
        // console.log(error);
        this.auth.$authWithOAuthRedirect("github");
      });

    // isLoggedIn
      // then
      //   service.loginUser(response);

      // catch
        // this.auth.$authWithOAuthRedirect("github");


  }

  /* STEP 1 - This should call the add method on your
    GalleryService and pass in the newImage you're
    trying to create */

  addImage() {
    this.newImage = {
      name : this.name,
      image: this.image,
      fullSize: false
    }
    this._GalleryService.add(this.newImage);
    // console.log(this.list);
    this.name="";
    this.image="";
    // this.item.fullSize = false;
  }

  toggleSize(item){
    item.fullSize = !item.fullSize;
    console.log(item);

  }

}

export default GalleryController;
