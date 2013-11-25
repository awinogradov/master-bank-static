({
    block: 'b-page',
    mods: { background: 'default' },
    title: 'Мастер банк',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '../resources/libs/bootstrap/css/bootstrap.min.css'},
        { elem: 'css', url: '../resources/libs/font-awesome/css/font-awesome.min.css'},
        { elem: 'css', url: 'http://fonts.googleapis.com/css?family=Roboto:400,300,300italic,400italic,700,700italic&subset=latin,cyrillic-ext,cyrillic'},
        { elem: 'css', url: '_documents.css', ie: false },
        { elem: 'js', url: '../resources/libs/jquery/jquery.min.js' },
        { elem: 'js', url: '_documents.js' }
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
                                                    title: 'Контакты'
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
                                                    title: 'Документы',
                                                    cls: 'active'
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
                                            cls: 'b-page-nav',
                                            content: [
                                                {
                                                    block: 'b-simple-nav',
                                                    mods: {links: 'default'},
                                                    items: [
                                                        {
                                                            title: 'Все',
                                                            url: '#',
                                                            cls: 'active'
                                                        },
                                                        {
                                                            title: 'ДРБ',
                                                            url: '#'
                                                        },
                                                        {
                                                            title: 'ОПЕРУ',
                                                            url: '#'
                                                        },
                                                        {
                                                            title: 'Отдел кадров',
                                                            url: '#'
                                                        },
                                                        {
                                                            title: 'Заявки, заявления, бланки',
                                                            url: '#'
                                                        },
                                                        {
                                                            title: 'Другие',
                                                            url: '#'
                                                        },
                                                        {
                                                            title: 'ОРСДП',
                                                            url: '#'
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
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
                                                                            content: 'Поиск документа'
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    block: 'b-span6',
                                                                    content: []
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            block: 'b-search',
                                                            mods: {size: 'large'},
                                                            js: true,
                                                            attrs: { action: '#' },
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
                                                            content: 'Впишите ключевое слово'
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
                                                    block: 'b-search-results',
                                                    mix: [{block: 'b-simple-block'}],
                                                    content: [
                                                        {
                                                            elem: 'title',
                                                            mix: [ { block: 'b-title', mods: { color: 'gray' } } ],
                                                            content: 'Документы'
                                                        },
                                                        {
                                                            block: 'b-dictionary',
                                                            mods: {type: 'tree'},
                                                            content: [
                                                                {
                                                                    block: 'b-collapsable-tree',
                                                                    mods: {type: 'folder'},
                                                                    title: 'Банковские карты физ. лицам',
                                                                    nodes: [
                                                                        {
                                                                            block: 'b-collapsable-tree',
                                                                            mods: {type: 'folder'},
                                                                            title: 'Дебетовые карты',
                                                                            nodes: [
                                                                                {
                                                                                    block: 'b-collapsable-tree',
                                                                                    mods: {type: 'folder'},
                                                                                    title: 'Дебетовые карты',
                                                                                    nodes: [
                                                                                        {
                                                                                            block: 'b-link',
                                                                                            mods: {icon: 'mini'},
                                                                                            url: '#',
                                                                                            title: 'Документ',
                                                                                            content: [
                                                                                                {
                                                                                                    block: 'b-icon',
                                                                                                    mods: { file_mini: 'doc', files: 'mini' }
                                                                                                },
                                                                                                'Документ'
                                                                                            ]
                                                                                        },
                                                                                        {
                                                                                            block: 'b-link',
                                                                                            mods: {icon: 'mini'},
                                                                                            url: '#',
                                                                                            title: 'Документ',
                                                                                            content: [
                                                                                                {
                                                                                                    block: 'b-icon',
                                                                                                    mods: { file_mini: 'pdf', files: 'mini' }
                                                                                                },
                                                                                                'Документ'
                                                                                            ]
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    block: 'b-link',
                                                                                    mods: {icon: 'mini'},
                                                                                    url: '#',
                                                                                    title: 'Документ',
                                                                                    content: [
                                                                                        {
                                                                                            block: 'b-icon',
                                                                                            mods: { file_mini: 'doc', files: 'mini' }
                                                                                        },
                                                                                        'Документ'
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    block: 'b-link',
                                                                                    mods: {icon: 'mini'},
                                                                                    url: '#',
                                                                                    title: 'Документ',
                                                                                    content: [
                                                                                        {
                                                                                            block: 'b-icon',
                                                                                            mods: { file_mini: 'pdf', files: 'mini' }
                                                                                        },
                                                                                        'Документ'
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            block: 'b-link',
                                                                            mods: {icon: 'mini'},
                                                                            url: '#',
                                                                            title: 'Документ',
                                                                            content: [
                                                                                {
                                                                                    block: 'b-icon',
                                                                                    mods: { file_mini: 'xls', files: 'mini' }
                                                                                },
                                                                                'Документ'
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    block: 'b-collapsable-tree',
                                                                    mods: {type: 'folder'},
                                                                    title: 'Банковские карты физ. лицам',
                                                                    nodes: [
                                                                        {
                                                                            block: 'b-collapsable-tree',
                                                                            mods: {type: 'folder'},
                                                                            title: 'Дебетовые карты',
                                                                            nodes: [
                                                                                {
                                                                                    block: 'b-link',
                                                                                    mods: {icon: 'mini'},
                                                                                    url: '#',
                                                                                    title: 'Документ',
                                                                                    content: [
                                                                                        {
                                                                                            block: 'b-icon',
                                                                                            mods: { file_mini: 'txt', files: 'mini' }
                                                                                        },
                                                                                        'Документ'
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
