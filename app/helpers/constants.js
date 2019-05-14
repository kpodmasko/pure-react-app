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

const CLIENT_BASE = 'http://localhost:8888/pure-react-app/';

const SERVER_BASE = 'http://localhost:3000';

const PAGES_CONFIG = [{path: '#/', component: Home, menu: {show: true, title: 'ГЛАВНАЯ'}},
    {path: '#/login', component: Login, customPropsNames: ['authorizeUser']},
    {path: '#/devices', component: Devices, menu: {show: true, title: 'УСТРОЙСТВА'}},
    {path: '#/macroses', component: Macroses, menu: {show: true, title: 'МАКРОСЫ'}},
    {path: '#/room', component: Room, title: 'КОМНАТА'},
    {path: '#/rooms', component: Rooms, menu: {show: true, title: 'КОМНАТЫ'}},
    {component: NotFound}];

const YOU_ARE_NOT_LOGGED_IN = 'Вы не вошли в аккаунт';

const YOU_CAN_NOT_LOG_AGAIN = 'Вы не можете войти еще раз';

const NOT_FOUND_PAGE_404 = '404 Not Found';

const DEFAULT_PAGE_TITLE = 'Smart House'