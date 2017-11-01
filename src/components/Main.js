require('normalize.css/normalize.css');
require('styles/App.css');
require('styles/main.css')
import React from 'react';
// 获取图片路径
let imageData = require('../data/imageData.json')
let imageDatas = (function genImageURL(imageDataArr){
	for(let i = 0;i<imageDataArr.length;i++) {
		var signleImageData = imageDataArr[i];
		signleImageData.imageUrl = require('../images/' + signleImageData.fileName);
		imageDataArr[i] = signleImageData;
	}
	return imageDataArr;
})(imageData);

class AppComponent extends React.Component {
  render() {
    return (
      	<section className="stage">
      		<section className="img-sec"></section>
      		<nav className="controller-nav"></nav>
      	</section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
