class Page extends React.Component {
    render() {
        const {children, userToken, errorMessage, cancelError} = this.props;
        const showError = !(cancelError || userToken);

        return showError ?
            <ErrorViewer message={errorMessage || YOU_ARE_NOT_LOGGED_IN}/> : 
            children
    }
}