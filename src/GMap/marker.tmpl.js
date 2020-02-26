
/**
 * Marker Template
 * @param {obj} data - property data/json
 */
function markerTmpl(data) {

  const url = encodeURIComponent(data.address)

  return `<article class="marker-box">
    <div class="marker-box__wrap">
      <div class="marker-box__grid">
        <div class="marker-box__main">
          <span class="marker-box__title">${data.title}</span>
          <address class="marker-box__address">
            <span class="marker-box__address">${data.address}</span>
          </address>
          <a class="marker-box__btn btn-line" href="https://www.google.com/maps/place/${url}/">Get Directions</a>
        </div>
      </div>
    </div>
  </article>`;
}

export default markerTmpl;
