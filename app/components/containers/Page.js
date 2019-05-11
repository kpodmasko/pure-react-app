class Page extends React.Component {
    render() {
        const {children, userToken, errorMessage, cancelError, switchPage} = this.props;
        const showError = !(cancelError || userToken);

        return <React.Fragment>
            <Header switchPage={switchPage} userToken={userToken}/>
            {showError ?
            <ErrorViewer message={errorMessage || YOU_ARE_NOT_LOGGED_IN}/> : 
            children}
        </React.Fragment>
    }
}