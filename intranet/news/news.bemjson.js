({
    block: 'b-page',
    mods: { background: 'default' },
    title: 'Мастер банк',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '../resources/libs/bootstrap/css/bootstrap.min.css'},
        { elem: 'css', url: '../resources/libs/font-awesome/css/font-awesome.min.css'},
        { elem: 'css', url: 'http://fonts.googleapis.com/css?family=Roboto:400,300,300italic,400italic,700,700italic&subset=latin,cyrillic-ext,cyrillic'},
        { elem: 'css', url: '_news.css', ie: false },
        { elem: 'js', url: '../resources/libs/jquery/jquery.min.js' },
        { elem: 'js', url: '_news.js' }
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
                                                    title: 'События <br/> и акции',
                                                    cls: 'active'
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
                                            block: 'b-section',
                                            cls: 'b-page-nav',
                                            content: [
                                                {
                                                    block: 'b-simple-nav',
                                                    mods: {links: 'default'},
                                                    items: [
                                                        {
                                                            title: 'События',
                                                            url: '#',
                                                            cls: 'active'
                                                        },
                                                        {
                                                            title: 'Акции',
                                                            url: '#'
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
                                                    content: [
                                                        {
                                                            block: 'b-ul',
                                                            mix: [{block: 'b-separated-list'}],
                                                            cls: 'unstyled',
                                                            nodes: [
                                                                {
                                                                    block: 'b-biglist-item',
                                                                    cls: 'unread',
                                                                    date: '22.07.2013',
                                                                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3FHQBN6ZmO9bcJZ3ml62nlmttEJxemAf4Qsxp9nuS_rF3_Suz',
                                                                    title: 'График работы в июне 2013 г.',
                                                                    description: 'Уважаемые сотрудники! В связи с Днем незледующий режим работы: Предпраздничный день мы будем пить! мы будем пить! мы будем пить! мы будем пить!мы будем пить!мы будем пить!'
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    block: 'b-simple-block',
                                                    content: [
                                                        {
                                                            block: 'b-ul',
                                                            mix: [{block: 'b-separated-list'}],
                                                            cls: 'unstyled',
                                                            nodes: [
                                                                {
                                                                    block: 'b-biglist-item',
                                                                    date: '22.07.2013',
                                                                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3FHQBN6ZmO9bcJZ3ml62nlmttEJxemAf4Qsxp9nuS_rF3_Suz',
                                                                    title: 'График работы в июне 2013 г.',
                                                                    description: 'Уважаемые сотрудники! В связи с Днем незледующий режим работы: Предпраздничный день мы будем пить! мы будем пить! мы будем пить! мы будем пить!мы будем пить!мы будем пить!'
                                                                },
                                                                {
                                                                    block: 'b-biglist-item',
                                                                    date: '22.07.2013',
                                                                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3FHQBN6ZmO9bcJZ3ml62nlmttEJxemAf4Qsxp9nuS_rF3_Suz',
                                                                    title: 'График работы в июне 2013 г.',
                                                                    description: 'Уважаемые сотрудники! В связи с Днем незледующий режим работы: Предпраздничный день мы будем пить! мы будем пить! мы будем пить! мы будем пить!мы будем пить!мы будем пить!'
                                                                },
                                                                {
                                                                    block: 'b-biglist-item',
                                                                    date: '22.07.2013',
                                                                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3FHQBN6ZmO9bcJZ3ml62nlmttEJxemAf4Qsxp9nuS_rF3_Suz',
                                                                    title: 'График работы в июне 2013 г.',
                                                                    description: 'Уважаемые сотрудники! В связи с Днем незледующий режим работы: Предпраздничный день мы будем пить! мы будем пить! мы будем пить! мы будем пить!мы будем пить!мы будем пить!'
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            block: 'b-action',
                                                            cls: 'separated',
                                                            content: [
                                                                {
                                                                    block: 'b-link',
                                                                    mix: [ { block: 'b-btn', mods: {color: 'red'} } ],
                                                                    cls: 'inline',
                                                                    url: '#',
                                                                    title: 'Показать еще новости',
                                                                    content: 'Еще новости'
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
