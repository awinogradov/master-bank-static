({
    block: 'b-page',
    mods: { background: 'default' },
    title: 'Мастер банк',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '../resources/libs/bootstrap/css/bootstrap.min.css'},
        { elem: 'css', url: '../resources/libs/font-awesome/css/font-awesome.min.css'},
        { elem: 'css', url: '../resources/libs/chosen/chosen.min.css'},
        { elem: 'css', url: 'http://fonts.googleapis.com/css?family=Roboto:400,300,300italic,400italic,700,700italic&subset=latin,cyrillic-ext,cyrillic'},
        { elem: 'css', url: '_orders.css' },
        { elem: 'js', url: '../resources/libs/jquery/jquery.min.js' },
        { elem: 'js', url: '../resources/libs/bootstrap/js/bootstrap.min.js'},
        { elem: 'js', url: '../resources/libs/chosen/chosen.jquery.js'},
        { elem: 'js', url: '_orders.js' }
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
                                                    title: 'Вход <br/> в системы'
                                                },
                                                {
                                                    icon: 'newspapper',
                                                    url: '/www/intranet/news/news.html',
                                                    title: 'События <br/> и акции'
                                                },
                                                {
                                                    icon: 'notebook',
                                                    url: '/www/intranet/orders/orders.html',
                                                    title: 'Приказы',
                                                    cls: 'active'
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
                                            block: 'b-section',
                                            cls: 'b-page-search',
                                            content: [
                                                {
                                                    block: 'b-simple-block',
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
                                                                                    content: 'Поиск приказа'
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
                                                                    content: 'Впишите номер или ключевое слово'
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            block: 'b-search-properties',
                                                            content: [
                                                                {
                                                                    elem: 'hint',
                                                                    content: 'дополнительные параметры'
                                                                },
                                                                {
                                                                    block: 'b-properties-list',
                                                                    content: [
                                                                        {
                                                                            block: 'b-row-fluid',
                                                                            content: [
                                                                                {
                                                                                    block: 'b-span6',
                                                                                    content: [
                                                                                        {
                                                                                            block: 'b-select-input',
                                                                                            label: 'Тип документа:',
                                                                                            width: 'b-span12',
                                                                                            options: [
                                                                                                'Приказ',
                                                                                                'Приказ2',
                                                                                                'Приказ3',
                                                                                                'Приказ4',
                                                                                                'Приказ5'
                                                                                            ]
                                                                                        },
                                                                                        {
                                                                                            block: 'b-select-input',
                                                                                            label: 'Тематика:',
                                                                                            width: 'b-span12',
                                                                                            options: [
                                                                                                'Все'
                                                                                            ]
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    block: 'b-span6',
                                                                                    content: [
                                                                                        {
                                                                                            block: 'b-select-input',
                                                                                            label: 'Офис (доступны только московские):',
                                                                                            width: 'b-span12',
                                                                                            options: [
                                                                                                'Центральный'
                                                                                            ]
                                                                                        },
                                                                                        {
                                                                                            block: 'b-select-input',
                                                                                            label: 'Год:',
                                                                                            width: 'b-span12',
                                                                                            options: [
                                                                                                'Все'
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
                                                            content: 'Приказы'
                                                        },
                                                        {
                                                            block: 'b-dictionary',
                                                            content: [
                                                                {
                                                                    block: 'b-layout-table',
                                                                    attrs: {width: '100%'},
                                                                    mix: [ { block: 'table' } ],
                                                                    content: [
                                                                        {
                                                                            elem: 'row',
                                                                            content: [
                                                                                {
                                                                                    elem: 'th',
                                                                                    attrs: {width: '50px'},
                                                                                    content: '№'
                                                                                },
                                                                                {
                                                                                    elem: 'th',
                                                                                    attrs: {width: '100px'},
                                                                                    content: 'Дата'
                                                                                },
                                                                                {
                                                                                    elem: 'th',
                                                                                    colspan: '2',
                                                                                    content: 'Название'
                                                                                },
                                                                                {
                                                                                    elem: 'th',
                                                                                    attrs: {width: '150px'},
                                                                                    content: 'Ответственный <br/> за исполнение'
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            elem: 'row',
                                                                            content: [
                                                                                {
                                                                                    elem: 'cell',
                                                                                    content: '237'
                                                                                },
                                                                                {
                                                                                    elem: 'cell',
                                                                                    content: '08.07.2013'
                                                                                },
                                                                                {
                                                                                    elem: 'cell',
                                                                                    cls: 'colspan',
                                                                                    content: [
                                                                                        {
                                                                                            block: 'b-docs-list',
                                                                                            files: 'doc',
                                                                                            counter: 3,
                                                                                            documents: [
                                                                                                {
                                                                                                    block: 'b-link',
                                                                                                    url: '#',
                                                                                                    content: 'document1.doc'
                                                                                                },
                                                                                                {
                                                                                                    block: 'b-link',
                                                                                                    url: '#',
                                                                                                    content: 'document2.doc'
                                                                                                },
                                                                                                {
                                                                                                    block: 'b-link',
                                                                                                    url: '#',
                                                                                                    content: 'document3.doc'
                                                                                                }
                                                                                            ]
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    elem: 'cell',
                                                                                    cls: 'colspan',
                                                                                    content: 'Очень длинное название чертова приказа. Можно написать кучу ненужной информации. Очень круто.'
                                                                                },
                                                                                {
                                                                                    elem: 'cell',
                                                                                    content: 'Петрова Н.Ю.'
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
