const DEFAULT_STYLES_STUB_FOR_ERROR_PAGE = {
    container: {},
    message: {}
}

const DEFAULT_CLASSNAMES_STUB_FOR_ERROR_PAGE = {
    container: [],
    message: []
}

const DEFAULT_STYLES_STUB_FOR_LIST_TEMPLATE = {
    list: {},
    listItem: {}
}

const DEFAULT_CLASSNAMES_STUB_FOR_LIST_TEMPLATE = {
    list: [],
    listItem: []
}

const CLIENT_BASE = 'http://127.0.0.1:8888/pure-react-app/';

const SERVER_BASE = 'http://127.0.0.1:3000';

const PAGES_CONFIG = [{path: '#/', component: HomePage, menu: {show: true, title: 'ГЛАВНАЯ'}},
    {path: '#/login', component: LoginPage, customPropsNames: ['authorizeUser']},
    {path: '#/devices', component: HouseControllersPage, menu: {show: true, title: 'УСТРОЙСТВА И ДАТЧИКИ'}},
    {path: '#/macroses', component: MacrosesPage, menu: {show: true, title: 'МАКРОСЫ'}},
    {path: '#/room', component: RoomPage, title: 'КОМНАТА'},
    {component: NotFoundPage}];

const YOU_ARE_NOT_LOGGED_IN = 'Вы не вошли в аккаунт';

const YOU_CAN_NOT_LOG_AGAIN = 'Вы не можете войти еще раз';

const NOT_FOUND_PAGE_404 = '404 Not Found';

const DEFAULT_PAGE_TITLE = 'Smart House'