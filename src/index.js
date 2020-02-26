import * as GMap from './GMap'

/**
 * Init Map on 'js-map'
 * Add API Key
 */
if (document.querySelector('.js-map')) {
  GMap.GMap('.js-map', 'YOUR_GOOGLE_MAPS_API_KEY_HERE')
}
