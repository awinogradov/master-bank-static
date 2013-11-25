({
    block: 'b-page',
    mods: { background: 'default' },
    title: 'Мастер банк',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '../resources/libs/bootstrap/css/bootstrap.min.css'},
        { elem: 'css', url: '../resources/libs/font-awesome/css/font-awesome.min.css'},
        { elem: 'css', url: 'http://fonts.googleapis.com/css?family=Roboto:400,300,300italic,400italic,700,700italic&subset=latin,cyrillic-ext,cyrillic'},
        { elem: 'css', url: '_callcenter.css', ie: false },
        { elem: 'js', url: '../resources/libs/jquery/jquery.min.js' },
        { elem: 'js', url: '_callcenter.js' }
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
                                                    url: '/mb-folio/intranet/index/index.html',
                                                    title: 'Контакты'
                                                },
                                                {
                                                    icon: 'headphones',
                                                    url: '/mb-folio/intranet/callcenter/callcenter.html',
                                                    title: 'Call-центру',
                                                    cls: 'active'
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
                                                    block: 'b-span6',
                                                    mix: [{ block: 'b-separate', mods: {direction: 'right'}}],
                                                    content: [
                                                        {
                                                            block: 'b-row-fluid',
                                                            content: [
                                                                {
                                                                    block: 'b-span6',
                                                                    content: [
                                                                        {
                                                                            block: 'b-link',
                                                                            mods: {size: 'middle', width: '160'},
                                                                            url: '#',
                                                                            title: 'Как юзать',
                                                                            content: [
                                                                                {
                                                                                    block: 'b-icon',
                                                                                    mods: {systems: 'office'}
                                                                                },
                                                                                {
                                                                                    block: 'i-span',
                                                                                    tag: 'span',
                                                                                    content: 'Все <br/> офисы'
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    block: 'b-span6',
                                                                    content: [
                                                                        {
                                                                            block: 'b-link',
                                                                            mods: {size: 'middle', width: '160'},
                                                                            url: '#',
                                                                            title: 'Как юзать',
                                                                            content: [
                                                                                {
                                                                                    block: 'b-icon',
                                                                                    mods: {systems: 'banks'}
                                                                                },
                                                                                {
                                                                                    block: 'i-span',
                                                                                    tag: 'span',
                                                                                    content: 'Все банкоматы'
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            block: 'b-simple-text',
                                                            mix: [{block: 'control-group'}],
                                                            mods: {type: 'italic', color: 'gray'},
                                                            content: [
                                                                'или посмотреть ',
                                                                {
                                                                    block: 'b-link',
                                                                    url: '#',
                                                                    content: 'офисы'
                                                                },
                                                                ' и ',
                                                                {
                                                                    block: 'b-link',
                                                                    url: '#',
                                                                    content: 'банкоматы'
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
                                                                            block: 'b-simple-text',
                                                                            mods: {type: 'italic', color: 'gray'},
                                                                            content: 'на схеме метро'
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    block: 'b-span3',
                                                                    content: [
                                                                        {
                                                                            block: 'b-radio-input',
                                                                            id: 'moscow',
                                                                            name: 'city',
                                                                            label: 'Москва',
                                                                            value: 'Москва',
                                                                            checked: 'checked'
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    block: 'b-span4',
                                                                    content: [
                                                                        {
                                                                            block: 'b-radio-input',
                                                                            id: 'piter',
                                                                            name: 'city',
                                                                            label: 'Санкт-Петербург',
                                                                            value: 'Санкт-Петербург'
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    block: 'b-span6',
                                                    content: [
                                                        {
                                                            block: 'b-row-fluid',
                                                            content: [
                                                                {
                                                                    block: 'b-span6',
                                                                    content: [
                                                                        {
                                                                            block: 'b-link',
                                                                            mods: {size: 'middle', width: '160'},
                                                                            url: '#',
                                                                            title: 'Как юзать',
                                                                            content: [
                                                                                {
                                                                                    block: 'b-icon',
                                                                                    mods: {systems: 'currency'}
                                                                                },
                                                                                {
                                                                                    block: 'i-span',
                                                                                    tag: 'span',
                                                                                    content: 'Курсы валют'
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    block: 'b-span6',
                                                                    content: [
                                                                        {
                                                                            block: 'b-link',
                                                                            mods: {size: 'middle', width: '160'},
                                                                            url: '#',
                                                                            title: 'Как юзать',
                                                                            content: [
                                                                                {
                                                                                    block: 'b-icon',
                                                                                    mods: {systems: 'docs'}
                                                                                },
                                                                                {
                                                                                    block: 'i-span',
                                                                                    tag: 'span',
                                                                                    content: 'Руководство по банкиру'
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
