# Google Maps, ES6 Like

Example for working with Google Maps API, all es6 like.

Contains a loader class to inject the Google Maps script, with a promise that upon resolution provides a callback for a map rendering function.

Also includes a separate custom marker template file and stylers object.

The js structure is as follows:

```
-js
 |- GMap
    |- GoogleMapsApi.js - google maps api class
    |- marker.tmpl.js - custom marker template
    |- stylers.js - JSON styles and custom icon
    |- index.js - functions to render map, marker and infowindow
 |- index.js - import and init example
```

## Install and Build

To build this project first install

```
npm install
```

Then build it like

```
gulp
```

Or, just add `src/GMap` to your existing es6 project.


## Usage

Import map components then pass your Google Map selector and Google Maps api key to `Gmap($mapEl, $apiKey)`
An example init is at `src/index.js`:


```
import * as Gmap from './GMap'

Gmap.GMap('.js-map', 'YOUR_GOOGLE_MAPS_API_KEY_HERE')
```

## Markup

The map div uses uses data attributes to pass values to the map instance.
The required are `data-lat` and `data-lng`. For example:

```
<section class="map">
  <div class="map__wrap">
    <div
      class="map__map js-map"
      data-lat="40.436821"
      data-lng="-79.908803"
      data-address="2005 Beechwood Blvd, Pittsburgh, PA 15217"
      data-title="Marker Title"
      data-zoom="14">
    </div>
  </div>
</section>
```

## Styles
Your map won't render unless it has a height defined. Without example above, that could look Like:

```
.map__wrap{
  position: relative;
  width: 100%;
}

.map__map {
  width: 100%;
  height: 100%;
  min-height: 50em;
}
```

Odds are you already know that.

## Info Window Template
Edit the info window popup template at `src/Gmap/marker.tmpl.js`


## Google Maps Styles
Edit Google Map's styles JSON at `src/GMap/stylers.js`


Have fun.
