// ==UserScript==
// @name         MLP Pixel Minimap (S)
// @namespace    http://tampermonkey.net/
// @version      1.6
// @description  MLP Pixel Minimap
// @author       Endless Night & Stas Netreba (and ConsoleBey)
// @include      *://pixelzone.io/*
// @include      *://pixelplanet.fun/*
// @include      *://fuckyouarkeros.fun/*
// @include      *://vk.com/*
// @include      *://pixel2019.vkforms.ru/*
// @include      *://pixel2020.vkforms.ru/*
// @include      *://pixel.w84.vkforms.ru/*
// @include      *://ourworldofpixels.com/*
// @include      *://pixelplace.io/*
// @include      *://pxls.space/*
// @include      *://goodsanta.club/*
// @include      https://prod-app*
// @include      https://pixelwar-mts.ru/*
// @homepage     https://MollyBlanket.github.io
// @updateURL    https://mollyblanket.github.io/minimap.remote.message/mlpp/index.user.js
// @downloadURL  https://mollyblanket.github.io/minimap.remote.message/mlpp/index.user.js
// ==/UserScript==
//

{
	if(location.href.startsWith('https://prod-app')){
		let e = document.createElement('script');
		e.src = 'https://endlessnightnlr.github.io/MLPP/pb/code.js';
		document.body.appendChild(e);
		return;
	};

	const pathToScript = {
		'pixelzone.io' : 'https://mollyblanket.github.io/minimap.remote.message/mlpp/map.js',
		'pixelplanet.fun' : 'https://endlessnightnlr.github.io/MLPP/PixelPlanet/code.js',
		'fuckyouarkeros.fun' : 'https://endlessnightnlr.github.io/MLPP/PixelPlanet/code.js',
		'pixel2019.vkforms.ru' : 'https://endlessnightnlr.github.io/MLPP/pb/code.js',
		'pixel2020.vkforms.ru' : 'https://endlessnightnlr.github.io/MLPP/pb/code.js',
		'pixel.w84.vkforms.ru' : 'https://endlessnightnlr.github.io/MLPP/pb/code.js',
		'ourworldofpixels.com' : 'https://endlessnightnlr.github.io/MLPP/OWOP/code.js',
		'pixelplace.io' : 'https://endlessnightnlr.github.io/MLPP/PixelPlace/code.js',
		'pxls.space' : 'https://endlessnightnlr.github.io/MLPP/PxlsSpace/code.js',
		'goodsanta.club' : 'https://endlessnightnlr.github.io/MLPP/MiniPixel/code.js',
		'pixelwar-mts.ru': 'https://raw.githubusercontent.com/EndlessNightNLR/endlessnightnlr.github.io/master/MLPP/MTS%202021/code.js'
	}[window.location.host];

	if(pathToScript !== void 0){
		setTimeout(function() {
			let e = document.createElement(`script`);
            		e.src = pathToScript;
            		document.body.appendChild(e);
		}, 5*1e3);
	}
};
