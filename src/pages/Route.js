import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));
const Services = lazy(() => import('./Services'));
const Residential = lazy(() => import('./Services/Residential'));
const Commercial = lazy(() => import('./Services/Commercial'));
const ElectricalInspections = lazy(() => import('./Services/ElectricalInspections'));
const GeneratorServices = lazy(() => import('./Services/GeneratorServices'));
const LightingServices = lazy(() => import('./Services/LightingServices'));
const NewInstallation = lazy(() => import('./Services/NewInstallation'));
const Gallery = lazy(() => import('./Gallery'));
const FAQ = lazy(() => import('./FAQ'));
const GetAQuote = lazy(() => import('./GetAQuote'));
const Contact = lazy(() => import('./Contacts'));

const App = (props) => (
    <Router basename="/windows">
        <Suspense fallback={
            <div id="loading-screen">Loading...</div>
        }>
            <Switch>
                <Route exact path={`/`} component={Home}/>
                <Route path={`/about`} component={About}/>
                <Route path={`/services`} component={Services}/>
                    <Route path={`/service/residential`} component={Residential}/>
                    <Route path={`/service/commercial`} component={Commercial}/>
                    <Route path={`/service/electrical-inspections`} component={ElectricalInspections}/>
                    <Route path={`/service/generator-services`} component={GeneratorServices}/>
                    <Route path={`/service/lighting-services`} component={LightingServices}/>
                    <Route path={`/service/new-installation`} component={NewInstallation}/>
                <Route path={`/gallery`} component={Gallery}/>
                <Route path={`/faq`} component={FAQ}/>
                <Route path={`/get-a-quote`} component={GetAQuote}/>
                <Route path={`/contact`} component={Contact}/>
            </Switch>
        </Suspense>
    </Router>
);

export default App;
