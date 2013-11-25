({
    block: 'b-page',
    mods: { background: 'default' },
    title: 'Мастер банк',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '../resources/libs/bootstrap/css/bootstrap.min.css'},
        { elem: 'css', url: '../resources/libs/font-awesome/css/font-awesome.min.css'},
        { elem: 'css', url: '../resources/libs/jquery-icheck/skins/polaris/polaris.css'},
        { elem: 'css', url: 'http://fonts.googleapis.com/css?family=Roboto:400,300,300italic,400italic,700,700italic&subset=latin,cyrillic-ext,cyrillic'},
        { elem: 'css', url: '_index-search.css' },
        { elem: 'js', url: '../resources/libs/jquery/jquery.min.js' },
        { elem: 'js', url: '../resources/libs/jquery-icheck/jquery.icheck.min.js' },
        { elem: 'js', url: '_index-search.js' }
    ],
    content:[
        {
            block: 'b-wrapper',
            content: [
                {
                    block: 'b-header',
                    content: [
                        {
                            block: 'b-container',
                            content: [
                                {
                                    block: 'b-row-fluid',
                                    content: [
                                        {
                                            block: 'b-span2',
                                            content: [
                                                {
                                                    block: 'b-mb-logo',
                                                    mods: { size: 'default' },
                                                    content: [
                                                        {
                                                            block: 'b-link',
                                                            url: '/',
                                                            content: ''
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            block: 'b-span4',
                                            content: [
                                                {
                                                    block: 'b-site-name',
                                                    content: [
                                                        {
                                                            block: 'b-simple-text',
                                                            mods: { size: 'middle', color: 'black', type: 'normal' },
                                                            content: [
                                                                'Внутренний сайт'
                                                            ]
                                                        },
                                                        {
                                                            block: 'b-simple-text',
                                                            mods: { size: 'small', color: 'gray', type: 'normal' },
                                                            content: [
                                                                'для служебного пользования'
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'b-content',
                    content: [
                        {
                            block: 'b-container',
                            content: [
                                {
                                    block: 'b-section',
                                    cls: 'b-nav',
                                    content: [
                                        {
                                            block: 'b-site-nav',
                                            items: [
                                                {
                                                    icon: 'phone',
                                                    url: '/mb-folio/intranet/index/index.html',
                                                    title: 'Контакты',
                                                    cls: 'active'
                                                },
                                                {
                                                    icon: 'headphones',
                                                    url: '/mb-folio/intranet/callcenter/callcenter.html',
                                                    title: 'Call-центру'
                                                },
                                                {
                                                    icon: 'login',
                                                    url: '/mb-folio/intranet/systems/systems.html',
                                                    title: 'Вход <br/> в системы'
                                                },
                                                {
                                                    icon: 'newspapper',
                                                    url: '/mb-folio/intranet/news/news.html',
                                                    title: 'События <br/> и акции'
                                                },
                                                {
                                                    icon: 'notebook',
                                                    url: '/mb-folio/intranet/orders/orders.html',
                                                    title: 'Приказы'
                                                },
                                                {
                                                    icon: 'docs',
                                                    url: '/mb-folio/intranet/documents/documents.html',
                                                    title: 'Документы'
                                                },
                                                {
                                                    icon: 'chalkboard',
                                                    url: '/mb-folio/intranet/tutorials/tutorials.html',
                                                    title: 'Обучение'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    block: 'b-section',
                                    cls: 'b-page-inner',
                                    content: [
                                        {
                                            block: 'b-section',
                                            cls: 'b-page-search',
                                            content: [
                                                {
                                                    block: 'b-search-block',
                                                    content: [
                                                        {
                                                            block: 'b-row-fluid',
                                                            content: [
                                                                {
                                                                    block: 'b-span6',
                                                                    content: [
                                                                        {
                                                                            block: 'b-search-title',
                                                                            bem: false,
                                                                            tag: 'h4',
                                                                            content: 'Поиск сотрудника'
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    block: 'b-span6',
                                                                    content: [
                                                                        {
                                                                            block: 'b-search-actions',
                                                                            content: [
                                                                                {
                                                                                    block: 'b-link',
                                                                                    target: '_blank',
                                                                                    title: 'Скачать адресную книгу в Outlook',
                                                                                    url: '#',
                                                                                    content: 'Скачать адресную книгу в Outlook'
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            block: 'b-search',
                                                            mods: {size: 'large'},
                                                            js: true,
                                                            attrs: { action: '/mb-folio/intranet/index-search/index-search.html' },
                                                            input: {
                                                                elem: 'input'
                                                            },
                                                            button: {
                                                                elem: 'button',
                                                                value: 'Найти'
                                                            }
                                                        },
                                                        {
                                                            block: 'b-search-hint',
                                                            content: 'Введите фамилию, имя, должность, телефон, e-mail, информацию об отделе или городе сотрудника'
                                                        }

                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            block: 'b-section',
                                            cls: 'b-page-nav',
                                            content: [
                                                {
                                                    block: 'b-row-fluid',
                                                    content: [
                                                        {
                                                            block: 'b-span10',
                                                            content: [
                                                                {
                                                                    block: 'b-simple-nav',
                                                                    mods: {links: 'tabs'},
                                                                    items: [
                                                                        {
                                                                            title: 'Список офисов',
                                                                            url: '#',
                                                                            cls: 'active'
                                                                        },
                                                                        {
                                                                            title: 'Структура центр. офиса',
                                                                            url: '#'
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            block: 'b-span2',
                                                            content: [
                                                                {
                                                                    block: 'b-link',
                                                                    cls: 'pull-right active',
                                                                    mods: {type: 'filter'},
                                                                    title: 'Показать фильтры',
                                                                    url: '#',
                                                                    attrs: {"data-toggle": 'b-search-filters'}
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            block: 'b-section',
                                            cls: 'b-page-content',
                                            content: [
                                                {
                                                    block: 'b-simple-block',
                                                    mods: {view: 'with-nav'},
                                                    content: [
                                                        {
                                                            block: 'b-search-filters',
                                                            content: [
                                                                {
                                                                    block: 'b-row-fluid',
                                                                    content: [
                                                                        {
                                                                            block: 'b-span3',
                                                                            content: [
                                                                                {
                                                                                    block: 'b-checkbox-input',
                                                                                    name: 'moscow',
                                                                                    label: 'Москва'
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            block: 'b-span3',
                                                                            content: [
                                                                                {
                                                                                    block: 'b-checkbox-input',
                                                                                    name: 'moscow1',
                                                                                    label: 'Москва'
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            block: 'b-span3',
                                                                            content: [
                                                                                {
                                                                                    block: 'b-checkbox-input',
                                                                                    name: 'moscow2',
                                                                                    label: 'Москва'
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            block: 'b-span3',
                                                                            content: [
                                                                                {
                                                                                    block: 'b-checkbox-input',
                                                                                    name: 'moscow3',
                                                                                    label: 'Москва'
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            block: 'b-search-results',
                                                            content: [
                                                                {
                                                                    elem: 'title',
                                                                    mix: [ { block: 'b-title', mods: { color: 'gray' } } ],
                                                                    content: 'Найдено сотрудников: 3'
                                                                },
                                                                {
                                                                    block: 'b-layout-table',
                                                                    mix: [
                                                                        { block: 'b-search-results-list' },
                                                                        { block: 'table' }
                                                                    ],
                                                                    content: [
                                                                        {
                                                                            elem: 'row',
                                                                            content: [
                                                                                {
                                                                                    elem: 'cell',
                                                                                    attrs: { width: '30%' },
                                                                                    content: [
                                                                                        {
                                                                                            block: 'b-user-card',
                                                                                            avatar: 'http://mtvhive.mtvnimages.com/uri/mgid:uma:video:mtv.com:294427?width=324&height=324&crop=true&quality=0.85',
                                                                                            name: 'Горбенко Лариса Дмитриевна',
                                                                                            position: 'Специалист'
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    elem: 'cell',
                                                                                    attrs: { width: '35%' },
                                                                                    content: [
                                                                                        {
                                                                                            block: 'b-user-position-info',
                                                                                            content: [
                                                                                                {
                                                                                                    block: 'b-link',
                                                                                                    url: '#',
                                                                                                    content: 'Москва'
                                                                                                },
                                                                                                {
                                                                                                    block: 'b-link',
                                                                                                    url: '#',
                                                                                                    content: 'д.о. "Рублевский"'
                                                                                                }
                                                                                            ]
                                                                                        }

                                                                                    ]
                                                                                },
                                                                                {
                                                                                    elem: 'cell',
                                                                                    content: [
                                                                                        {
                                                                                            block: 'b-user-info',
                                                                                            email: 'begibistro@mail.ru',
                                                                                            phone: '8(916)495-644-24',
                                                                                            address: '129327, г.Москва, ул. Трололо, д.12'
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            elem: 'row',
                                                                            content: [
                                                                                {
                                                                                    elem: 'cell',
                                                                                    attrs: { width: '30%' },
                                                                                    content: [
                                                                                        {
                                                                                            block: 'b-user-card',
                                                                                            avatar: 'http://mtvhive.mtvnimages.com/uri/mgid:uma:video:mtv.com:294427?width=324&height=324&crop=true&quality=0.85',
                                                                                            name: 'Горбенко Лариса Дмитриевна',
                                                                                            position: 'Специалист'
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    elem: 'cell',
                                                                                    attrs: { width: '35%' },
                                                                                    content: [
                                                                                        {
                                                                                            block: 'b-user-position-info',
                                                                                            content: [
                                                                                                {
                                                                                                    block: 'b-link',
                                                                                                    url: '#',
                                                                                                    content: 'Москва'
                                                                                                },
                                                                                                {
                                                                                                    block: 'b-link',
                                                                                                    url: '#',
                                                                                                    content: 'д.о. "Рублевский"'
                                                                                                }
                                                                                            ]
                                                                                        }

                                                                                    ]
                                                                                },
                                                                                {
                                                                                    elem: 'cell',
                                                                                    content: [
                                                                                        {
                                                                                            block: 'b-user-info',
                                                                                            email: 'begibistro@mail.ru',
                                                                                            phone: '8(916)495-644-24',
                                                                                            address: '129327, г.Москва, ул. Трололо, д.12'
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            block: 'b-footer',
            content: [
                {
                    block: 'b-container',
                    content: [
                        'Информация, размещенная на данном сайте, является КОНФИДЕНЦИАЛЬНОЙ и ' +
                            'НЕ ПОДЛЕЖИТ РАЗГЛАШЕНИЮ сторонним лицам. Сотрудники Банка несут ' +
                            'дисциплинарную и имущественную ответственность за несоблюдение ' +
                            'конфиденциальности представленной информации.'
                    ]
                }
            ]
        }
    ]
})
