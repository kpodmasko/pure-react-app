class Login extends React.Component {
    userLogin = React.createRef();
    userPassword = React.createRef();
    state = {
        errorMessage: null,
        cancelError: !this.props.userToken
    }

    handleSubmit = e => {
        e.preventDefault();

        const self = this;
        const user = {
            login: this.userLogin.current.value,
            password: this.userPassword.current.value,
        };
        const {authorizeUser, switchPage} = this.props; 

        makeRequestAndGetPromise({
            type: 'post',
            url: `${SERVER_BASE}/login`,
            data: JSON.stringify(user)
        }).then((res) => {
            authorizeUser(JSON.parse(res).userToken)

            self.setState({
                ...self.state,
                cancelError: false,
                errorMessage: YOU_CAN_NOT_LOG_AGAIN
            })

            if (switchPage) {
                switchPage({
                    url: `${CLIENT_BASE}#/`,
                    hash: `#/`
                });
            }
        }).catch((error) => {
            self.setState({
                ...self.state,
                cancelError: false,
                errorMessage: error.message
            });
        });
    }

    render() {
        const {errorMessage, cancelError} = this.state;

        return <Page {...this.props} errorMessage={errorMessage} cancelError={cancelError}> 
            <form onSubmit={this.handleSubmit}>
                <input ref={this.userLogin} required/>
                <input ref={this.userPassword} required/>
                <input type='submit' value='Войти'/>
            </form>
        </Page>
    }
}