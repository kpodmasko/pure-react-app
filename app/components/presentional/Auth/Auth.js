class Auth extends React.Component {
    render() {
        const {userToken, switchPage} = this.props;

        return <div className={'Auth__container'}>
            {userToken || <Link 
                    href="#/login" 
                    classNames={['Auth__link']}
                    onClick={() => switchPage({
                        url: `${CLIENT_BASE}#/`,
                        hash: `#/login`
                    })}>
                ВОЙТИ
            </Link>}
        </div>
    }
}