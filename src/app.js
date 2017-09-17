"use strict"
import {createStore} from 'redux';
import reducers from './reducers/index'

const store = createStore(reducers);

store.subscribe(function () {
	console.log('current state is: ', store.getState());
	//console.log('current price is: ', store.getState()[1].price);
})

store.dispatch({
	type: "POST_BOOK", 
	payload: [{
			id: 1,
			title: 'this is the book title',
			description: 'this is the book description',
			price: 33.33
		},
		{
			id: 2,
			title: 'this is the second book title',
			description: 'this is the second book description',
			price: 20
		}
	]
})

store.dispatch({
	type: "DELETE_BOOK", 
	payload: { id: 1}
})

store.dispatch({
	type: "UPDATE_BOOK",
	payload: {
		id: 2,
		title: 'Learn React in 24h'
	}
})

store.dispatch({
	type: "ADD_TO_CART",
	payload: [{id: 2}]
})