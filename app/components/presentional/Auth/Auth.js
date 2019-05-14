class Auth extends React.Component {
    render() {
        const {user, switchPage, logOutUser} = this.props;

        return <div className={'Auth__container'}>
            {user ? 
            <React.Fragment>
                <div className={['Auth__login_info']}>
                    Ваш логин: {user.login}
                </div>
                <Link 
                    href="#/login" 
                    classNames={['Auth__link', 'Auth__log_out']}
                    onClick={() => {
                        logOutUser();
                        switchPage({
                        url: `${CLIENT_BASE}#/`,
                        hash: `#/login`
                    })}}>
                    ВЫЙТИ
                </Link>
            </React.Fragment> :
            <Link 
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