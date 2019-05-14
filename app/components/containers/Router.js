
class Router extends React.Component {
    state = {
        activePageHash: window.location.hash
    };

    getActivePage = (pages, activePageHash) => pages.find((page) => page.props.path === activePageHash) || pages[pages.length - 1];

    switchPage = ({state = {}, title = DEFAULT_PAGE_TITLE, url = '', hash = '',}) => {
        const {pushState: parentState} = this.props;

        this.setState({
            ...this.state,
            activePageHash: hash
        }, routerState => {
            history.pushState({...routerState, ...parentState, ...state}, title, url);
        });
    }

    render() {
        const {children, pageProps} = this.props;
        const {activePageHash} = this.state;

        return React.cloneElement(this.getActivePage(children, activePageHash), {
            ...pageProps,
            switchPage: this.switchPage.bind(this),
            isActivePage: true
        });
    }
}