import React from 'react';
import ReactDOM, {createRoot} from 'react-dom/client';
import PropsSimple from './components/PropsSimple';
import PropsObject from './components/PropsObject';
import PropsArray from './components/PropsArray';
import PropsComTwo from './components/PropsComponent';
import PropsDestructure from './components/PropsDestructure';

const props_simple = createRoot(document.getElementById('props_simple'));
props_simple.render(<PropsSimple name="John Doe" age={30} gender="Male" />);

const props_obj = {
    name: "Jane Doe",
    age: 25,
    gender: "Female"
}

const props_object = createRoot(document.getElementById('props_object'));
props_object.render(<PropsObject person_obj={props_obj} />);

const props_array = createRoot(document.getElementById('props_array'));
props_array.render(<PropsArray person_obj={["Dog", 28, "Female"]} />);

const props_component = createRoot(document.getElementById('props_component'));
props_component.render(<PropsComTwo/>);

const props_destructure = createRoot(document.getElementById('props_destructure'));
props_destructure.render(<PropsDestructure name="John Doe" age={30} occupation="Developer" country="PH" />);