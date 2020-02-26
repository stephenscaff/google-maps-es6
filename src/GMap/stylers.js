export const stylers = {

  /**
   * Map Styler JSON
   */
  styles: [
     {
       "featureType": "administrative",
       "elementType": "labels.text.fill",
       "stylers": [ {
         "color": "#444444"
       } ]
     }, {
       "featureType": "landscape",
       "elementType": "all",
       "stylers": [ {
         "color": "#f2f2f2"
       } ]
     }, {
       "featureType": "landscape.natural.landcover",
       "elementType": "labels.icon",
       "stylers": [ {
         "visibility": "simplified"
       } ]
     }, {
       "featureType": "poi",
       "elementType": "all",
       "stylers": [ {
         "visibility": "off"
       } ]
     }, {
       "featureType": "road",
       "elementType": "all",
       "stylers": [ {
         "saturation": -100
       }, {
         "lightness": 45
       } ]
     }, {
       "featureType": "road.highway",
       "elementType": "all",
       "stylers": [ {
         "visibility": "simplified"
       } ]
     }, {
       "featureType": "road.highway",
       "elementType": "geometry.fill",
       "stylers": [ {
         "color": "#ffffff"
       } ]
     }, {
       "featureType": "road.arterial",
       "elementType": "labels.icon",
       "stylers": [ {
         "visibility": "off"
       } ]
     }, {
       "featureType": "transit",
       "elementType": "all",
       "stylers": [ {
         "visibility": "off"
       } ]
     }, {
       "featureType": "water",
       "elementType": "all",
       "stylers": [ {
         "color": "#dde6e8"
       }, {
         "visibility": "on"
       } ]
     }
   ],

   /**
    * Map Icon/Pin SVG
    * SVG is base64 encoded.
    */
   icons: {
     red: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzVweCIgaGVpZ2h0PSI0M3B4IiB2aWV3Qm94PSIwIDAgMzUgNDMiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUxLjMgKDU3NTQ0KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5QaW4gLSBPUiBDb3B5IDM8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBkPSJNNjgyLDM3MSBMNjgyLDM4MCBMNjczLDM3MSBMNjU5LDM3MSBMNjU5LDM0OCBMNjgyLDM0OCBMNjgyLDM3MSBaIiBpZD0icGF0aC0xIj48L3BhdGg+CiAgICAgICAgPGZpbHRlciB4PSItNDMuNSUiIHk9Ii0yNS4wJSIgd2lkdGg9IjE4Ny4wJSIgaGVpZ2h0PSIxNjIuNSUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgaWQ9ImZpbHRlci0yIj4KICAgICAgICAgICAgPGZlT2Zmc2V0IGR4PSIwIiBkeT0iMiIgaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9InNoYWRvd09mZnNldE91dGVyMSI+PC9mZU9mZnNldD4KICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMyIgaW49InNoYWRvd09mZnNldE91dGVyMSIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIj48L2ZlR2F1c3NpYW5CbHVyPgogICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMC4yMTE3NjQ3MDYgICAwIDAgMCAwIDAuMjA3ODQzMTM3ICAgMCAwIDAgMCAwLjIxNTY4NjI3NSAgMCAwIDAgMC4yNCAwIiB0eXBlPSJtYXRyaXgiIGluPSJzaGFkb3dCbHVyT3V0ZXIxIj48L2ZlQ29sb3JNYXRyaXg+CiAgICAgICAgPC9maWx0ZXI+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0i8J+OqC1EZXNpZ24iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJQcm9mZXNzaW9uYWwtRGV0YWlsLS0tQ3JpZGVyYS0iIHRyYW5zZm9ybT0idHJhbnNsYXRlKC04OTAuMDAwMDAwLCAtNDE5MS4wMDAwMDApIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8ZyBpZD0iUHJvcGVydGllcy1NYXAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwLjAwMDAwMCwgMzUzMy4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJMb2NhdGlvbnMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE4Ny4wMDAwMDAsIDMxNC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iUGlucyI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJQaW4tLS1PUi1Db3B5LTMiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSBmaWxsPSJibGFjayIgZmlsbC1vcGFjaXR5PSIxIiBmaWx0ZXI9InVybCgjZmlsdGVyLTIpIiB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgZmlsbD0iI0UwNDQwMyIgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=='
  }
};
