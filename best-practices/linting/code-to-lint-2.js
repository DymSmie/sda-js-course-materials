
/**
 * @desc creates single img html element
 * @param {String} url
 * @param {String} title
 * @param {Number} imageSize
 * @returns {Element}
 */
function createImage(url, title, imageSize) {
  var element = document.createElement('img');
  element.src = url;
  element.alt = title;
  element.width = imageSize;
  element.height = imageSize;
  return element;
}
/**
 * @desc creates flickr image URL
 * @param {Number} farmId
 * @param {String} serverId
 * @param {String} photoId
 * @param {String} photoSecret
 * @returns {string}
 */
function createImageUrl(farmId, serverId, photoId, photoSecret) {
  return 'https://farm' + farmId + '.staticflickr.com/' + serverId + '/' + photoId + '_' + photoSecret + '_q.jpg';
}
/**
 * PL
 * przykłądowy fragment odpowiedzi z flickr API
 * dla innych danych wejdź na: https://www.flickr.com/services/api/explore/flickr.photos.search
 *
 * EN
 * example part of flickr API response
 * for different data go here: https://www.flickr.com/services/api/explore/flickr.photos.search
 */
var photosDataCollection = [
  { "id": "28713786970", "owner": "134963580@N02", "secret": "8f4a8dc73b", "server": "8857", "farm": 9, "title": "primotar cat", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
  { "id": "28999774925", "owner": "63919495@N06", "secret": "4a3a4a8e3c", "server": "8747", "farm": 9, "title": "Ixnay Monday", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
  { "id": "28713678350", "owner": "52287426@N02", "secret": "bfeee4e819", "server": "8614", "farm": 9, "title": "190716DSC_0004", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
  { "id": "28382493383", "owner": "52287426@N02", "secret": "e7d96f764c", "server": "8772", "farm": 9, "title": "190716DSC_0005", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
  { "id": "28923480681", "owner": "52287426@N02", "secret": "7c64361a18", "server": "8575", "farm": 9, "title": "190716DSC_0009", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
  { "id": "28923477181", "owner": "52287426@N02", "secret": "7229c6d07f", "server": "8745", "farm": 9, "title": "190716DSC_0014", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
  { "id": "28894554882", "owner": "52287426@N02", "secret": "0474b12772", "server": "8873", "farm": 9, "title": "190716DSC_0019", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
  { "id": "28923474011", "owner": "52287426@N02", "secret": "fee2710d8e", "server": "8820", "farm": 9, "title": "190716DSC_0021", "ispublic": 1, "isfriend": 0, "isfamily": 0 }
];
var list = document.getElementById('galleryWrapper');
var fragment = document.createDocumentFragment();
photosDataCollection.forEach(function (photoData) {
  var imgUrl = createImageUrl(photoData.farm, photoData.server, photoData.id, photoData.secret);
  var imgSize = 150;
  fragment.appendChild(
    createImage(imgUrl, photoData.title, imgSize)
  );
});
list.appendChild(fragment);