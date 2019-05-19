/**
 * GoogleMapsApi
 * Class to load google maps api with api key
 * and global Callback to init map after resolution of promise.
 *
 * @exports {GoogleMapsApi}
 * @example MapApi = new GoogleMapsApi();
 *          MapApi.load().then(() => {});
 */
class GoogleMapsApi {

  /**
   * Constructor
   * @property {string} apiKey
   * @property {string} callbackName
   */
  constructor(gApiKey) {

    // api key for google maps
    this.apiKey = gApiKey;

    // Set global callback
    if (!window._GoogleMapsApi) {
      this.callbackName = '_GoogleMapsApi.mapLoaded';
      window._GoogleMapsApi = this;
      window._GoogleMapsApi.mapLoaded = this.mapLoaded.bind(this);
    }
  }

  /**
   * Load
   * Create script element with google maps
   * api url, containing api key and callback for
   * map init.
   * @return {promise}
   * @this {_GoogleMapsApi}
   */
  load() {
    if (!this.promise) {
      this.promise = new Promise(resolve => {
        this.resolve = resolve;

        if (typeof window.google === 'undefined') {
          const script = document.createElement('script');
          script.src = `//maps.googleapis.com/maps/api/js?key=${this.apiKey}&callback=${this.callbackName}`;
          script.async = true;
          document.body.append(script);

        } else {
          this.resolve();
        }
      });
    }

    return this.promise;
  }

  /**
   * mapLoaded
   * Global callback for loaded/resolved map instance.
   * @this {_GoogleMapsApi}
   *
   */
  mapLoaded() {

    if (this.resolve) {
      this.resolve();
    }
  }
}

export default GoogleMapsApi;
