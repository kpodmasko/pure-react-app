class Page extends React.Component {
    render() {
        const {children, user, errorMessage, cancelError, switchPage, logOutUser} = this.props;
        const showError = !(cancelError || user);

        return <React.Fragment>
            <Header switchPage={switchPage} user={user} logOutUser={logOutUser}/>
            {showError ?
            <ErrorViewer message={errorMessage || YOU_ARE_NOT_LOGGED_IN}/> : 
            children}
        </React.Fragment>
    }
}