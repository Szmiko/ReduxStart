import uuid from ('uuid');

const ADD_COMMENT = 'ADD_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const THUMB_UP = 'THUMB_UP';
const THUMB_DOWN = 'THUMB_DOWN';

function addComment(text) {
	return {
		type: ADD_COMMENT,
		text,
		id: uuid.v4()
	}
};

{
	type: ADD_COMMENT,
	text: '',
	id: ''
};

function editComment(text, id) {
	return {
		type: EDIT_COMMENT,
		text,
		id,
	}
};

{
	type: EDIT_COMMENT,
	id: '',
	text: ''
};

function removeComment(id) {
	return {
		type: REMOVE_COMMENT
		id,
	}
};

{
	type: REMOVE_COMMENT,
	id: ''
};

function thumbUp(id) {
	return {
		type: THUMB_UP,
		id,
		note,
	}
};

{
	type: THUMB_UP,
	id: '',
	note: note + 1
};

function thumbDown(id) {
	return {
		type: THUMB_DOWN,
		id,
		note
	}
};

{
	type: THUMB_DOWN,
	id: '',
	note: note - 1
};