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


class ImgFigure extends React.Component {
	render() {
		return (
			<figure className="img-figure">
				<img src={this.props.data.imageUrl} alt={this.props.data.title} />
				<figcaption>
					<h2 className="img-title">{this.props.data.title}</h2>
				</figcaption>
			</figure>
		);
	}
}

class AppComponent extends React.Component {
	componentDidMount() {
		const Constant = {
			centerPos: {
				left: 0,
				right: 0
			},
			hPosRange: { //水平方向取值范围
				leftSecX: [0, 0],
				rightSecX: [0, 0],
				y: [0, 0]
			},
			vPosRange: { //垂直方向取值范围
				x: [0, 0],
				topY: [0, 0]
			}
		}
		// 重新布局所有图片
		// 居中图片
		// function rearrange(centerIndex) {

		// }
		// console.log(1)
		// // 拿到舞台大小
		// let stageDom = React.findDOMNode(this.refs.stage),
		// 	stageWidth = stageDom.scrollWidth,
		// 	stageHeight = stageDom.scrollHeight,
		// 	halfStageW = Math.ceil(stageWidth / 2),
		// 	halfStageH = Math.ceil(stageHeight / 2);
		// // 拿到imgFigure大小

		// var imgFigureDom = React.findDOMNode(this.refs.imgFigure0),
		// 	imgWidth = imgDom.scrollWidth,
		// 	imgHeight = imgDom.scrollHeight,
		// 	halfImgW = Math.ceil(imgWidth / 2),
		// 	halfImgH = Math.ceil(imgHeight / 2);
		// // 计算中心图片位置点
		// Constant.centerPos = {
		// 	left: halfStageW - halfImgW,
		// 	top: halfStageH - halfImgH
		// }
		// Constant.hPosRange.leftSecX[0] = -halfImgW;
		// Constant.hPosRange.leftSecX[1] = halfStageW - halfImgW * 3;
		// Constant.hPosRange.rightSecX[0] = halfStageW  = halfImgW;
		// Constant.hPosRange.rightSecX[1] = halfStageW  - halfImgW;
		// Constant.hPosRange.y[0] = -halfImgH;
		// Constant.hPosRange.y[1] = stageHeight - halfImgH;

		// Constant.vPosRange.topY[0] = -halfImgH;
		// Constant.vPosRange.topY[1] = halfStageH - halfImgH * 3;
		// Constant.vPosRange.x[0] =  halfStageW - halfImgW;
		// Constant.vPosRange.x[1] =  halfStageW;


		// rearrange(0);




	}
  render() {
  	let controllUnits = [],
  		imageFigures = [];

  	imageDatas.forEach((value, index) => {
  		imageFigures.push(<ImgFigure data={value} ref={'imgFigure' + index}/>)
  	})	
    return (
      	<section className="stage" ref="stage">
      		<section className="img-sec">
      			{imageFigures}
      		</section>
      		<nav className="controller-nav">
      			{controllUnits}
      		</nav>
      	</section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
