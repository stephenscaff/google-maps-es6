# Google Maps, ES6 Like

Example for working with Google Maps API, all es6 like.

Contains a loader class to inject the Google Maps script, with a promise that upon resolution provides a callback for a map rendering function.

Also includes a separate custom marker template file and stylers object.

The js structure is as follows:

```
-js
 |- MAP
    |- GMapsApi.js - google maps api class
    |- marker.tmpl.js - custom marker template
    |- stylers.js - JSON styles and custom icon
    |- index.js - functions to render map, marker and infowindow
 |- app.js
```

## Useage


**JS**

Import map components and pass your map selector to `Map.LocationMap()`, like so:

```
// app.js

import * as Map from './components/Map'

Map.LocationMap('.js-map')

```

**Markup**

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

Have fun.
