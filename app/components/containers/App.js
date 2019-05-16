class App extends React.Component { 
    state = {
        user: null
    };

    authorizeUser = user => {
        this.setState({
            ...this.state,
            user
        })
    }

    logOutUser = () => {
        this.setState({
            ...this.state,
            user: null
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
        const {user} = this.state;
        const pageProps = {
            user,
            logOutUser: this.logOutUser.bind(this)
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