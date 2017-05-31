import React from 'react';
import { render } from 'react-dom';
import SubTitle from './components/SubTitle.jsx';
import TodosList from './containers/TodosList/index.jsx';

const todos1 = [{title: 'Aprender React'}];
const todos2 = [{title: 'Aprender Redux'}];

const todosl = [{
	todos: [
			{title:'algo',id:0}
		],
	title: 'cosas',
	id:0}
];

const App = () => (
    <TodosList todos={todosl} />
)

const appRender = ()=> render( <App />, document.getElementById('app') );

appRender();
