
class GalleryService {
  constructor($firebaseArray, $firebaseAuth, $timeout) {
    this._$firebaseArray = $firebaseArray;

    /* STEP 1 - CHANGE THE LINE BELOW! Add your Firebase URL */
    this.ref = new Firebase("https://nms-gallery.firebaseio.com/");
    this.auth = $firebaseAuth(this.ref);
    // this.logout();
    // this.verifyLogin();
  // }
  // logout(){
  //   this.ref.unauth();
  }
  isLoggedIn() {
    return this.auth.$requireAuth();
  }

  loginUser(authData) {
    this.user = authData;
    this.gallery = this._$firebaseArray(this.ref.child('users').child(authData.uid));
  }

  currentUser() {
    return this.user;
  }

  /* STEP 2 - This function should return a new object with
    the default information for your gallery item. It should
    have a name property and an image property, both set to
    empty strings.
  */
  new() {
    return {
      name: "",
      image: ""
    }
  }

  all() {
    return this.gallery;
  }

  /* STEP 3 - This function should add the given image object
    to your Firebase. Remember, this.gallery is your Firebase
    Array */
  add(item) {
    this.gallery.$add(item);
  }

}

export default GalleryService;
