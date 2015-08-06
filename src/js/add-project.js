"use strict";

var myModule = (function(){

	// инициализирует модулб
	var init = function(){
		_setupListeners();
	};

	// следит за событиями
	var _setupListeners = function(){
		$('#add-new-item').on('click', _showModal) //открываем модальное окно (popup)
		$('#add-new-project').on('submit', _addProject) //добавляем новый проект
	};

	// показывает/скрывает модальнок окно
	var _showModal = function(e){
		e.preventDefault();

		var popup = $('#new-project-popup'),
			form = popup.find('.form');

		popup.bPopup({
			modalColor: 'skyblue',
			speed: 650,
			transition: 'slideIn',
			transitionClose: 'slideBack',
			speed: 800,
			onClose: function(){
				form.find('.server-mes, .input, .textarea').val('');
				form.find('.server-mes').hide();
				}
		});
	};

	// добавляет проект
	var _addProject = function(e){
		e.preventDefault();
		var form = $(this),
			url = 'add_project.php',
			defObj = _ajaxForm(form, url);

			if(defObj){
				defObj.done(function(ans){
				var successBox = form.find('.success-mes'),
					errorBox = form.find('.error-mes');

				if(ans.status === 'OK'){
					errorBox.hide();
					successBox.text(ans.text).show();
				}else{
					successBox.hide();
					errorBox.text(ans.text).show;
				}
			})
		};
	};

	// универсальная функция
	// для ее работы используются:
	// @form - форма
	// @url - адрес php-файла, к которому мы обращаемся
	// универсальная функция
	// 1. проверяет поля формы на заполненность
	// 2. собирает данные из формы
	// 3. делает запрос на сервер и получает ответ с сервера

	var _ajaxForm = function(form, url){
			if(!validation.validateForm(form)) return false

			var data = $('.form').serialize();

			var result = $.ajax({
				url: url,
				type: 'POST',
				dataType: 'json',
				data: data
				}).fail(function(ans){
					console.log("проблемы с PHP");
					form.find('.error-mes').text('На сервере произошла ошибка').show();
				});
		return result;
	};

// возвращаем объект
return {
	init: init
}

})();

myModule.init();