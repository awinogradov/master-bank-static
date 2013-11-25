({
    block: 'b-page',
    mods: { background: 'default' },
    title: 'Мастер банк',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '../resources/libs/bootstrap/css/bootstrap.min.css'},
        { elem: 'css', url: '../resources/libs/font-awesome/css/font-awesome.min.css'},
        { elem: 'css', url: 'http://fonts.googleapis.com/css?family=Roboto:400,300,300italic,400italic,700,700italic&subset=latin,cyrillic-ext,cyrillic'},
        { elem: 'css', url: '_systems.css', ie: false },
        { elem: 'js', url: '../resources/libs/jquery/jquery.min.js' },
        { elem: 'js', url: '_systems.js' }
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
                    mods: {view: 'buttons'},
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
                                                    url: '/www/intranet/index/index.html',
                                                    title: 'Контакты'
                                                },
                                                {
                                                    icon: 'headphones',
                                                    url: '/www/intranet/callcenter/callcenter.html',
                                                    title: 'Call-центру'
                                                },
                                                {
                                                    icon: 'login',
                                                    url: '/www/intranet/systems/systems.html',
                                                    title: 'Вход <br/> в системы',
                                                    cls: 'active'
                                                },
                                                {
                                                    icon: 'newspapper',
                                                    url: '/www/intranet/news/news.html',
                                                    title: 'События <br/> и акции'
                                                },
                                                {
                                                    icon: 'notebook',
                                                    url: '/www/intranet/orders/orders.html',
                                                    title: 'Приказы'
                                                },
                                                {
                                                    icon: 'docs',
                                                    url: '/www/intranet/documents/documents.html',
                                                    title: 'Документы'
                                                },
                                                {
                                                    icon: 'chalkboard',
                                                    url: '/www/intranet/tutorials/tutorials.html',
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
                                                    block: 'b-span3',
                                                    content: [
                                                        {
                                                            block: 'b-link',
                                                            mods: {size: 'big'},
                                                            url: '#',
                                                            title: 'Система для чего-то',
                                                            content: 'Real Bank'
                                                        },
                                                        {
                                                            block: 'b-link',
                                                            url: '#',
                                                            title: 'Как юзать',
                                                            content: [
                                                                {
                                                                    block: 'b-icon',
                                                                    mods: {files: 'big', files_big: 'txt'}
                                                                },
                                                                'Как пользоваться?'
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    block: 'b-span3',
                                                    content: [
                                                        {
                                                            block: 'b-link',
                                                            mods: {size: 'big'},
                                                            url: '#',
                                                            title: 'Система для чего-то',
                                                            content: 'Service desc'
                                                        },
                                                        {
                                                            block: 'b-link',
                                                            url: '#',
                                                            title: 'Как юзать',
                                                            content: [
                                                                {
                                                                    block: 'b-icon',
                                                                    mods: {files: 'big', files_big: 'doc'}
                                                                },
                                                                'Работа с программой'
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    block: 'b-span3',
                                                    content: [
                                                        {
                                                            block: 'b-link',
                                                            mods: {size: 'big'},
                                                            url: '#',
                                                            title: 'Система для чего-то',
                                                            content: 'Masterbank.ru'
                                                        },
                                                        {
                                                            block: 'b-link',
                                                            url: '#',
                                                            title: 'Как юзать',
                                                            content: [
                                                                {
                                                                    block: 'b-icon',
                                                                    mods: {files: 'big', files_big: 'doc'}
                                                                },
                                                                'Администрирование'
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    block: 'b-span3',
                                                    content: [
                                                        {
                                                            block: 'b-link',
                                                            mods: {size: 'big'},
                                                            url: '#',
                                                            title: 'Система для чего-то',
                                                            content: 'Кабинет мерчанта'
                                                        },
                                                        {
                                                            block: 'b-link',
                                                            url: '#',
                                                            title: 'Как юзать',
                                                            content: [
                                                                {
                                                                    block: 'b-icon',
                                                                    mods: {files: 'big', files_big: 'doc'}
                                                                },
                                                                'Как пользоваться?'
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            block: 'b-row-fluid',
                                            content: [
                                                {
                                                    block: 'b-span3',
                                                    content: [
                                                        {
                                                            block: 'b-link',
                                                            mods: {size: 'big'},
                                                            url: '#',
                                                            title: 'Система для чего-то',
                                                            content: 'Card service'
                                                        },
                                                        {
                                                            block: 'b-link',
                                                            url: '#',
                                                            title: 'Как юзать',
                                                            content: [
                                                                {
                                                                    block: 'b-icon',
                                                                    mods: {files: 'big', files_big: 'doc'}
                                                                },
                                                                'Как пользоваться?'
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    block: 'b-span3',
                                                    content: [
                                                        {
                                                            block: 'b-link',
                                                            mods: {size: 'big'},
                                                            url: '#',
                                                            title: 'Система для чего-то',
                                                            content: 'Master Bankir'
                                                        },
                                                        {
                                                            block: 'b-link',
                                                            url: '#',
                                                            title: 'Как юзать',
                                                            content: [
                                                                {
                                                                    block: 'b-icon',
                                                                    mods: {files: 'big', files_big: 'pdf'}
                                                                },
                                                                'Как пользоваться?'
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    block: 'b-span3',
                                                    content: [
                                                        {
                                                            block: 'b-link',
                                                            mods: {size: 'big'},
                                                            url: '#',
                                                            title: 'Система для чего-то',
                                                            content: 'Infonew'
                                                        },
                                                        {
                                                            block: 'b-link',
                                                            url: '#',
                                                            title: 'Как юзать',
                                                            content: [
                                                                {
                                                                    block: 'b-icon',
                                                                    mods: {files: 'big', files_big: 'doc'}
                                                                },
                                                                'Как пользоваться?'
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    block: 'b-span3',
                                                    content: [
                                                        {
                                                            block: 'b-link',
                                                            mods: {size: 'big'},
                                                            url: '#',
                                                            title: 'Система для чего-то',
                                                            content: 'ATM-locator'
                                                        },
                                                        {
                                                            block: 'b-link',
                                                            url: '#',
                                                            title: 'Как юзать',
                                                            content: [
                                                                {
                                                                    block: 'b-icon',
                                                                    mods: {files: 'big', files_big: 'xls'}
                                                                },
                                                                'Как пользоваться?'
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            block: 'b-row-fluid',
                                            content: [
                                                {
                                                    block: 'b-span3',
                                                    content: [
                                                        {
                                                            block: 'b-link',
                                                            mods: {size: 'big'},
                                                            url: '#',
                                                            title: 'Система для чего-то',
                                                            content: 'Master Garant'
                                                        },
                                                        {
                                                            block: 'b-link',
                                                            url: '#',
                                                            title: 'Как юзать',
                                                            content: [
                                                                {
                                                                    block: 'b-icon',
                                                                    mods: {files: 'big', files_big: 'txt'}
                                                                },
                                                                'Как пользоваться?'
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    block: 'b-span3',
                                                    content: [
                                                        {
                                                            block: 'b-link',
                                                            mods: {size: 'big'},
                                                            url: '#',
                                                            title: 'Система для чего-то',
                                                            content: 'На дело'
                                                        }
                                                    ]
                                                },
                                                {
                                                    block: 'b-span3',
                                                    content: [
                                                        {
                                                            block: 'b-link',
                                                            mods: {size: 'big'},
                                                            url: '#',
                                                            title: 'Система для чего-то',
                                                            content: 'Переводденег.ру'
                                                        },
                                                        {
                                                            block: 'b-link',
                                                            url: '#',
                                                            title: 'Как юзать',
                                                            content: [
                                                                {
                                                                    block: 'b-icon',
                                                                    mods: {files: 'big', files_big: 'doc'}
                                                                },
                                                                'Как пользоваться?'
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    block: 'b-span3',
                                                    content: [
                                                        {
                                                            block: 'b-link',
                                                            mods: {size: 'big'},
                                                            url: '#',
                                                            title: 'Система для чего-то',
                                                            content: 'Masterbonus.ru'
                                                        },
                                                        {
                                                            block: 'b-link',
                                                            url: '#',
                                                            title: 'Как юзать',
                                                            content: [
                                                                {
                                                                    block: 'b-icon',
                                                                    mods: {files: 'big', files_big: 'doc'}
                                                                },
                                                                'Как пользоваться?'
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
