class Header extends React.Component {
    render() {
        const {switchPage, user, logOutUser} = this.props;

        return <div className={'Header__container'}>
            <HeaderItem classNames={['Header__item4']}>
                <Menu switchPage={switchPage}/>
            </HeaderItem>
            <HeaderItem>
                <Auth user={user} switchPage={switchPage} logOutUser={logOutUser}/>
            </HeaderItem>
        </div>
    }
}