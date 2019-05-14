class Header extends React.Component {
    render() {
        const {switchPage, userToken} = this.props;

        return <div className={'Header__container'}>
            <HeaderItem>
                <Menu switchPage={switchPage}/>
            </HeaderItem>
            <HeaderItem>
                <Auth userToken={userToken} switchPage={switchPage}/>
            </HeaderItem>
        </div>
    }
}