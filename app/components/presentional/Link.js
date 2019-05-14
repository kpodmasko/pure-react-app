class Link extends React.Component {
    render() {
        const {children, href, onClick, classNames = []} = this.props;

        return <a href={href} onClick={onClick} className={classNames.join(' ')}>{children}</a>
    }
}