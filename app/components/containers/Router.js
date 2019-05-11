
class Router extends React.Component {
    state = {
        activePageHash: window.location.hash.split('/').slice(0,2).join('/')
    };

    getActivePage = (pages, activePageHash) => pages.find((page) => page.props.path === activePageHash) || pages[pages.length - 1];

    switchPage = ({state = {}, title = DEFAULT_PAGE_TITLE, url = '', hash = '',}) => {
        const {pushState: parentState} = this.props;

        history.pushState({...this.state, ...parentState, ...state}, title, url);

        this.setState({
            ...this.state,
            activePageHash: hash
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