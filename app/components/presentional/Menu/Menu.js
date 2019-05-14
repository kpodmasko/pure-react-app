class Menu extends React.Component {
    render() {
        const {switchPage} = this.props;
        const menuClassNames = {
            list: ['Menu__container'],
            listItem: ['Menu__item']
        };
        
        return <List keyPrefix={'MenuItem'} classNames={menuClassNames}>
            {PAGES_CONFIG
                .filter(page => page.menu && page.menu.show)
                .map((page,i) => <Link 
                    key={`MenuItemLink${i}`}
                    classNames={['Menu__link']}
                    href={`${page.path}`} 
                    onClick={() => switchPage({
                        url: `${CLIENT_BASE}${page.path}`,
                        hash: `${page.path}`
                    })}>
                {page.menu.title}</Link>)}
        </List>
    }
}