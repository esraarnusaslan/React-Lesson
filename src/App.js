import AppRouterProvider from './router';
import './App.css';
import StoreContext from './store';
import { useEffect, useState } from 'react';
import axios from 'axios';


/*
import Form5 from './components/25-forms/Form5';
import Form4 from './components/25-forms/Form4';
import Form3 from './components/25-forms/Form3';
import Form2 from './components/25-forms/Form2';
import Form1 from './components/25-forms/Form1';
import ParentComponent from './components/24-lifting-state-up/ParentComponent';
import Countries from './components/23-axios/Countries';
import Fetch1 from './components/22-fetch/Fetch1';
import ClassComp from './components/21-components-types/ClassComp';
import UseRef from './components/20-useRef/UseRef';
import Clock3 from './components/19-clock-3/Clock3';
import CountryFilter from './components/18-country-filter/CountryFilter';
import Counter from './components/17-useEffect/Counter';
import UseEffect from './components/17-useEffect/UseEffect';
import ESignature from './components/16-e-signatur/ESignature';
import StateModeExm from "./components/14-useState/StateModeExm";
import Counter from "./components/15-counter/Counter";
import Shop from './components/13-card-practice/Shop';
import Events from "./components/12-events/Events";
import Icons from './components/11-icons/Icons';
import ReactBootstrap from "./components/10-bootstrap/ReactBootstrap";
import StaticBootstrap from "./components/10-bootstrap/StaticBootstrap";
import ProfileCard from './components/09-profile-card/ProfileCard';
import Gallery from "./components/08-image/Gallery";
import ImageAdd from './components/08-image/ImageAdd';
import Clock2 from './components/07-clock-2/Clock2';
import Products from "./components/06-props-2-children/Products";
import Greetings from "./components/05-props-1/Greetings";
import Clock from "./components/04-clock-1/Clock";
import { ExternalSass } from "./components/03-styles/ExternalSass";
import ExternalStyles from "./components/03-styles/ExternalStyles";
import InternalStyles from "./components/03-styles/InternalStyles";
import InlineStyle from "./components/03-styles/InlineStyle";
import Products from "./components/02-jsx/Products.jsx";
import Products from "./components/02-jsx/Products";
import Countries from './components/02-jsx/Countries';
import Jsx4Map from "./components/02-jsx/Jsx4Map";
import Jsx3ShortCircuit from "./components/02-jsx/Jsx3ShortCircuit.jsx";
import ControlMenu from "./components/02-jsx/ControlMenu";
import Jsx2 from './components/02-jsx/Jsx2';
import MyReact from './components/01-hello-world/MyReact';
import Jsx1 from './components/02-jsx/Jsx1.jsx';
import HelloWorld from './components/01-hello-world/HelloWorld.jsx'; 
import MyFruit, { MyApple } from './components/01-hello-world/MyApp.jsx';
*/
const App = () => {
    const [counter, setCounter] = useState(100);
    const [currencies, setCurrencies] = useState(null);

    const loadData = async () => {
        try {
            const resp = await axios.get(
                'https://api.frankfurter.app/latest?from=try'
            );
            const data = resp.data;

            setCurrencies(data.rates);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    if (!currencies) return null;

    const sharedData = { counter, setCounter, currencies };

    return (
        <StoreContext.Provider value={{ counter, setCounter, currencies }}>
            <AppRouterProvider />
        </StoreContext.Provider>
    );
    /* {
        <div>
                    <HelloWorld />
                    <MyApple />
                    <MyFruit />
                    <MyReact />
                    <Jsx1 />
                    <Jsx2 />
                    <ControlMenu />
                    <Jsx3ShortCircuit />
                    <Jsx4Map />
                    <Countries />
                    <Products />
                    <Products />
                    <InlineStyle />
                    <InternalStyles />
                     <ExternalStyles />
                      <ExternalSass />
                     <Clock /> 
                     <Greetings />
                     <Products />
                      <Clock2 textColor="red" backgroundColor="yellow"/>
                      <ImageAdd /> 
                       <Gallery />
                      <ProfileCard
                avatar="cooper.jpg"
                name="Sheldon Lee Cooper"
                location="San Francisco, CA"
                shot="33"
                followers="1000"
                following="500"
            />  
            <StaticBootstrap />
            <ReactBootstrap />
            <Icons />
            <Events />
            <Shop />
            <StateModeExm />
             <Counter />
            <ESignature />
            <UseEffect />
            <Counter />
            <CountryFilter />
            <Clock3 />
            <UseRef />
            <ClassComp />
            <Fetch1 />
            <Countries />
            <ParentComponent />
            <Form1 />
            <Form2 />
            <Form3 />
            <Form4 />
            <Form5 />
        </div>    
    };*/
};

export default App;
