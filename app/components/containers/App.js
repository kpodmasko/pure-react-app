class App extends React.Component { 
    state = {
        userToken: null    
    };

    authorizeUser = userToken => {
        this.setState({
            ...this.state,
            userToken
        })
    }

    mapCustomPropsNamesToRouteProps = (customPropsNames = []) => {
        const self = this;
        const routeProps = {};

        customPropsNames.forEach(customPropName => {
            if (!self[customPropName]) {
                return;
            }

            if (typeof self[customPropName] === 'function') {
                routeProps[customPropName] = self[customPropName].bind(self);
                return;
            }

            routeProps[customPropName] = self[customPropName];
        });

        return routeProps;
    }

    render() {
        const {userToken} = this.state;
        const pageProps = {
            userToken
        }

        return <Router pageProps={pageProps}>
            {PAGES_CONFIG.map(({component, path, customPropsNames}, i) => {
                const Route = component;

                return <Route 
                    key={`${component}${path}${i}`} 
                    path={path} 
                    {...this.mapCustomPropsNamesToRouteProps(customPropsNames)}/>
            })}
        </Router>
    }
}