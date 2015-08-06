<?php

	$name = $_POST['projectName'];
	$data = array();

	$data['mes'] = 'OK';

	if ($name === '') {
		$data[status] = 'error';
		$data[text] = 'Заполните поле имя!';
	}else{
		$data[status] = 'ok';
		$data[text] = 'Поле заполнено';
	};


	header('Content-Type: application/json');

	echo json_encode($data);
	exit;

?>