import React, {lazy, Suspense} from 'react';
import {HashRouter  as Router, Route, Switch, Redirect} from 'react-router-dom';
import Layout from "../components/Layout/Layout";
import Homepage from "../containers/Homepage/Homepage";
import Loading from "../components/Loading/Loading";

const About = lazy(() => import('../containers/About/About'));
const Articles = lazy(() => import('../containers/Articles/Articles'));
const ArticleDetail = lazy(() => import('../containers/ArticleDetail/ArticleDetail'));
const Contact = lazy(() => import('../containers/Contact/Contact'));
const Errors = lazy(() => import('../components/Errors/Errors'));

const RoutingConfig = () => (
    <Router>
        <Suspense fallback={<Loading/>}>
            <Layout>
                <Switch>
                    <Route
                        path="/home" exact
                        render={props => <Homepage {...props}  />}
                    />
                    <Route path="/about" component={props => <About {...props} />}/>
                    <Route path="/articles/:id" component={props => <ArticleDetail {...props} />}/>
                    <Route path="/articles" component={props => <Articles {...props} />}/>
                    <Route path="/contact" component={props => <Contact {...props} />}/>
                    <Redirect from="/" to="home"/>
                    <Route component={props => <Errors {...props} />}/>
                </Switch>
            </Layout>
        </Suspense>
    </Router>
);

export default RoutingConfig;
