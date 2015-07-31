"use strict";

(function(){
console.log('Все хорошо!')
});


var myModule = (function(){

	var init = function(){
		_setupListeners();
	};

	var _setupListeners = function(){
		$('#add-new-item').on('click', _showModal) //открываем модальное окно (popup)
	};

	var _showModal = function(e){
		e.preventDefault();
		$('#new-project-popup').bPopup({
			modalColor: 'skyblue',
			speed: 650,
			transition: 'slideIn',
			transitionClose: 'slideBack',
			speed: 800
		});
	};

return {
	init: init
}

})();

myModule.init();