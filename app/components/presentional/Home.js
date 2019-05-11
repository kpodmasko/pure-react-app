class Home extends React.Component {
    render() {
        const {user} = this.props;
        return <Page {...this.props}>
            <p>Информация о ващем аккаунте:</p>
            <p>Логин: {user ? user.login : ''}</p>
            <p>Пароль: {user ? user.password : ''}  </p>
            Home
        </Page>
    }
}