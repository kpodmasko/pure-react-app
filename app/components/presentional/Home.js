class Home extends React.Component {
    render() {
        return <Page {...this.props}>
            Your token is: {this.props.userToken}
            <br/>
            Home
        </Page>
    }
}