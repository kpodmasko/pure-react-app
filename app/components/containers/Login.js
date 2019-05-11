class Login extends React.Component {
    userLogin = React.createRef();
    userPassword = React.createRef();
    state = {
        errorMessage: null
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
            authorizeUser(JSON.parse(res))

            self.setState({
                ...self.state,
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
                errorMessage: error.message
            });
        });
    }

    handleClick = e => {
        e.preventDefault();

        this.setState({
            ...this.state,
            errorMessage: null
        })
    }

    render() {
        const {errorMessage} = this.state;

        return <Page {...this.props} cancelError={true}> 
            {errorMessage ? 
                <React.Fragment>
                    <ErrorViewer message={errorMessage}/>
                    <button onClick={this.handleClick}>Еще раз</button>
                </React.Fragment> : 
                <form onSubmit={this.handleSubmit}>
                    <input ref={this.userLogin} required/>
                    <input ref={this.userPassword} required/>
                    <input type='submit' value='Войти'/>
                </form>
            }
        </Page>
    }
}