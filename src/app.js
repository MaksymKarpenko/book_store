"use strict"
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import reducers from './reducers/index';
import {addToCart} from './actions/cartActions';
import {postBooks, deleteBooks, updateBooks} from './actions/booksActions';

const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

import BooksList from './components/pages/booksList';
render(
	<Provider store={store}>
		<BooksList />
	</Provider>, document.getElementById('app')
)
/*
//store.dispatch(postBooks(
	 	
//	)	
//)
//store.dispatch(deleteBooks(
	//{ id: 1}
//))

//store.dispatch(updateBooks(
	//{
		//id: 2,
		//title: 'Learn React in 24h'
	//}
//))


//store.dispatch(addToCart([{id: 1}]));
*/