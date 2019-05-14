class HeaderItem extends React.Component {
    render() {
        const {classNames = []} = this.props;

        return <div className={['Header__item', ...classNames].join(' ')}>{this.props.children}</div>
    }
}