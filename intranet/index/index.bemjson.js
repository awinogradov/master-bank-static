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
        { elem: 'css', url: '_index.css' },
        { elem: 'js', url: '../resources/libs/jquery/jquery.min.js' },
        { elem: 'js', url: '../resources/libs/jquery-icheck/jquery.icheck.min.js' },
        { elem: 'js', url: '_index.js' }
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
                                            block: 'b-row-fluid',
                                            content: [
                                                {
                                                    block: 'b-span9',
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
                                                                            block: 'b-dictionary',
                                                                            content: [
                                                                                {
                                                                                    block: 'b-table-container',
                                                                                    title: 'Москва',
                                                                                    content: [
                                                                                        {
                                                                                            block: 'b-layout-table',
                                                                                            mix: [ { block: 'table' } ],
                                                                                            content: [
                                                                                                {
                                                                                                    elem: 'row',
                                                                                                    content: [
                                                                                                        {
                                                                                                            elem: 'cell',
                                                                                                            attrs: { width: '150px' },
                                                                                                            content: {
                                                                                                                block: 'b-link',
                                                                                                                url: '#',
                                                                                                                content: 'Центральный офис'
                                                                                                            }
                                                                                                        },
                                                                                                        {
                                                                                                            elem: 'cell',
                                                                                                            attrs: { width: '200px' },
                                                                                                            content: '8(495)123-45-66'
                                                                                                        },
                                                                                                        {
                                                                                                            elem: 'cell',
                                                                                                            content: 'Факс: 956-2250. Главный вход: 1719. Телефон для проверки факсов: 3107'
                                                                                                        }
                                                                                                    ]
                                                                                                },
                                                                                                {
                                                                                                    elem: 'row',
                                                                                                    content: [
                                                                                                        {
                                                                                                            elem: 'cell',
                                                                                                            content: {
                                                                                                                block: 'b-link',
                                                                                                                url: '#',
                                                                                                                content: 'Какой-то еще офис'
                                                                                                            }
                                                                                                        },
                                                                                                        {
                                                                                                            elem: 'cell',
                                                                                                            content: '8(495)123-45-66'
                                                                                                        },
                                                                                                        {
                                                                                                            elem: 'cell',
                                                                                                            content: 'Факс: 956-2250. Главный вход: 1719. Телефон для проверки факсов: 3107'
                                                                                                        }
                                                                                                    ]
                                                                                                }
                                                                                            ]
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    block: 'b-table-container',
                                                                                    title: 'Москва',
                                                                                    content: [
                                                                                        {
                                                                                            block: 'b-layout-table',
                                                                                            mix: [ { block: 'table' } ],
                                                                                            content: [
                                                                                                {
                                                                                                    elem: 'row',
                                                                                                    content: [
                                                                                                        {
                                                                                                            elem: 'cell',
                                                                                                            attrs: { width: '150px' },
                                                                                                            content: {
                                                                                                                block: 'b-link',
                                                                                                                url: '#',
                                                                                                                content: 'Центральный офис'
                                                                                                            }
                                                                                                        },
                                                                                                        {
                                                                                                            elem: 'cell',
                                                                                                            attrs: { width: '200px' },
                                                                                                            content: '8(495)123-45-66'
                                                                                                        },
                                                                                                        {
                                                                                                            elem: 'cell',
                                                                                                            content: 'Факс: 956-2250. Главный вход: 1719. Телефон для проверки факсов: 3107'
                                                                                                        }
                                                                                                    ]
                                                                                                },
                                                                                                {
                                                                                                    elem: 'row',
                                                                                                    content: [
                                                                                                        {
                                                                                                            elem: 'cell',
                                                                                                            content: {
                                                                                                                block: 'b-link',
                                                                                                                url: '#',
                                                                                                                content: 'Какой-то еще офис'
                                                                                                            }
                                                                                                        },
                                                                                                        {
                                                                                                            elem: 'cell',
                                                                                                            content: '8(495)123-45-66'
                                                                                                        },
                                                                                                        {
                                                                                                            elem: 'cell',
                                                                                                            content: 'Факс: 956-2250. Главный вход: 1719. Телефон для проверки факсов: 3107'
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
                                                    block: 'b-span3',
                                                    content: [
                                                        {
                                                            block: 'b-section',
                                                            cls: 'b-page-sidebar',
                                                            content: [
                                                                {
                                                                    block: 'b-site-news',
                                                                    mix: [ { block: 'b-simple-block' } ],
                                                                    content: [
                                                                        {
                                                                            elem: 'title',
                                                                            tag: 'h4',
                                                                            content: 'Последние новости'
                                                                        },
                                                                        {
                                                                            block: 'b-sidebar-list',
                                                                            items: [
                                                                                {
                                                                                    url: '#',
                                                                                    date: '22.07.2013',
                                                                                    image: '../resources/images/news.png',
                                                                                    title: 'График работы в июне 2013 г.',
                                                                                    description: 'Уважаемые сотрудники! В связи с Днем незледующий режим работы: Предпраздничный день...',
                                                                                    cls: 'unread'

                                                                                },
                                                                                {
                                                                                    url: '#',
                                                                                    date: '22.07.2013',
                                                                                    image: '../resources/images/news.png',
                                                                                    title: 'График работы в июне 2013 г.',
                                                                                    description: 'Уважаемые сотрудники! В связи с Днем незледующий режим работы: Предпраздничный день...'
                                                                                },
                                                                                {
                                                                                    url: '#',
                                                                                    date: '22.07.2013',
                                                                                    image: '../resources/images/news.png',
                                                                                    title: 'График работы в июне 2013 г.',
                                                                                    description: 'Уважаемые сотрудники! В связи с Днем незледующий режим работы: Предпраздничный день...'
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            block: 'b-action',
                                                                            content: [
                                                                                {
                                                                                    block: 'b-link',
                                                                                    url: '#',
                                                                                    title: 'Показать все новости',
                                                                                    content: 'Показать все новости'
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
