var BEMHTML = function() {
  var cache,
      xjst = (function(exports) {
    function $1(__$ctx) {
        var __t = __$ctx._mode;
        if (__t === "content") {
            return $2(__$ctx);
        } else if (__t === "cls") {
            return $165(__$ctx);
        } else if (__t === "attrs") {
            return $183(__$ctx);
        } else if (__t === "mix") {
            return $234(__$ctx);
        } else if (__t === "block") {
            if (__$ctx.block === "b-site-nav") {
                if (!!__$ctx.elem === false) {
                    return "b-nav-list";
                    return;
                } else {
                    return $323(__$ctx);
                }
            } else {
                return $323(__$ctx);
            }
        } else if (__t === "tag") {
            return $64(__$ctx);
        } else if (__t === "default") {
            return $278(__$ctx);
        } else if (__t === "xUACompatible") {
            if (__$ctx.block === "b-page") {
                if (!!__$ctx.elem === false) {
                    return $306(__$ctx);
                } else {
                    return $323(__$ctx);
                }
            } else {
                return $323(__$ctx);
            }
        } else if (__t === "doctype") {
            if (__$ctx.block === "b-page") {
                if (!!__$ctx.elem === false) {
                    return $314(__$ctx);
                } else {
                    return $323(__$ctx);
                }
            } else {
                return $323(__$ctx);
            }
        } else if (__t === "jsAttr") {
            return $320(__$ctx);
        } else if (__t === "js") {
            return $322(__$ctx);
        } else if (__t === "bem") {
            return $255(__$ctx);
        } else {
            return $323(__$ctx);
        }
    }
    function $2(__$ctx) {
        var __t = __$ctx.block;
        if (__t === "b-user-info") {
            if (!!__$ctx.elem === false) {
                return $5(__$ctx);
            } else {
                return $63(__$ctx);
            }
        } else if (__t === "b-user-card") {
            if (!!__$ctx.elem === false) {
                return [ {
                    block: "b-row-fluid",
                    content: [ {
                        block: "b-span5",
                        content: {
                            block: "b-user-avatar",
                            content: {
                                elem: "b-user-avatar-img",
                                tag: "img",
                                attrs: {
                                    src: __$ctx.ctx.avatar
                                }
                            }
                        }
                    }, {
                        block: "b-span7",
                        content: [ {
                            block: "b-user-name",
                            content: __$ctx.ctx.name
                        }, {
                            block: "b-user-position",
                            content: __$ctx.ctx.position
                        }, {
                            block: "b-user-actions",
                            content: []
                        } ]
                    } ]
                } ];
                return;
            } else {
                return $63(__$ctx);
            }
        } else if (__t === "b-checkbox-input") {
            if (!!__$ctx.elem === false) {
                return [ {
                    block: "checkbox",
                    bem: false,
                    tag: "input",
                    attrs: {
                        type: "checkbox",
                        id: __$ctx.ctx.name
                    }
                }, {
                    block: "checkbox-label",
                    bem: false,
                    tag: "label",
                    attrs: {
                        "for": __$ctx.ctx.name
                    },
                    content: __$ctx.ctx.label
                } ];
                return;
            } else {
                return $63(__$ctx);
            }
        } else if (__t === "b-simple-nav") {
            if (!!__$ctx.elem === false) {
                var _$2ccontent = [];
                __$ctx.ctx.items.forEach(function(item) {
                    _$2ccontent.push({
                        block: "b-simple-nav-link",
                        tag: "li",
                        cls: item.cls,
                        content: [ {
                            block: "b-link",
                            url: item.url,
                            content: [ item.title ]
                        } ]
                    });
                    _$2ccontent.push(" ");
                });
                return _$2ccontent;
                return;
            } else {
                return $63(__$ctx);
            }
        } else if (__t === "b-search") {
            if (!__$ctx.ctx.button === false) {
                if (!__$ctx.ctx.input === false) {
                    if (!!__$ctx.elem === false) {
                        __$ctx.ctx.input.block = "b-search";
                        __$ctx.ctx.button.block = "b-search";
                        var _$1uc = {
                            block: "b-search-layout",
                            content: [ {
                                block: "b-search-container",
                                content: [ {
                                    block: "b-search-input",
                                    mix: [ {
                                        block: "b-search",
                                        elem: "layout-input"
                                    } ],
                                    content: __$ctx.ctx.input
                                }, {
                                    block: "b-search-button",
                                    mix: [ {
                                        block: "b-search",
                                        elem: "layout-button"
                                    } ],
                                    content: __$ctx.ctx.button
                                } ]
                            } ]
                        };
                        return _$1uc;
                        return;
                    } else {
                        return $63(__$ctx);
                    }
                } else {
                    return $63(__$ctx);
                }
            } else {
                return $63(__$ctx);
            }
        } else if (__t === "b-search-block") {
            if (!!__$ctx.elem === false) {
                return [ {
                    block: "b-search-block-inner",
                    content: __$ctx.ctx.content
                } ];
                return;
            } else {
                return $63(__$ctx);
            }
        } else if (__t === "b-site-nav") {
            if (!!__$ctx.elem === false) {
                var _$1lcontent = [];
                __$ctx.ctx.items.forEach(function(item) {
                    _$1lcontent.push({
                        block: "b-nav-link",
                        tag: "li",
                        cls: item.cls,
                        content: [ {
                            block: "b-link",
                            url: item.url,
                            cls: item.cls,
                            content: [ {
                                block: "b-icon",
                                mods: {
                                    name: item.icon
                                }
                            }, {
                                block: "b-br",
                                tag: "br",
                                content: []
                            }, item.title ]
                        } ]
                    });
                    _$1lcontent.push(" ");
                });
                return _$1lcontent;
                return;
            } else {
                return $63(__$ctx);
            }
        } else if (__t === "b-link") {
            if (!(__$ctx.mods && __$ctx.mods.type === "filter") === false) {
                if (!!__$ctx.elem === false) {
                    return [ {
                        block: "b-link-filter",
                        tag: "span",
                        content: [ {
                            block: "icon-filter",
                            tag: "i"
                        } ]
                    } ];
                    return;
                } else {
                    return $63(__$ctx);
                }
            } else {
                return $63(__$ctx);
            }
        } else if (__t === "b-wrapper") {
            if (!!__$ctx.elem === false) {
                return [ __$ctx.ctx.content, {
                    block: "b-footer-ghost"
                } ];
                return;
            } else {
                return $63(__$ctx);
            }
        } else if (__t === "i-ua") {
            if (!!__$ctx.elem === false) {
                return [ ";(function(d,e,c,r){", "e=d.documentElement;", 'c="className";', 'r="replace";', 'e[c]=e[c][r]("i-ua_js_no","i-ua_js_yes");', 'if(d.compatMode!="CSS1Compat")', 'e[c]=e[c][r]("i-ua_css_standart","i-ua_css_quirks")', "})(document);" ].join("");
                return;
            } else {
                return $63(__$ctx);
            }
        } else {
            return $63(__$ctx);
        }
    }
    function $5(__$ctx) {
        return [ {
            block: "b-layout-table",
            mix: [ {
                block: "table"
            } ],
            content: [ {
                elem: "row",
                content: [ {
                    elem: "cell",
                    content: [ {
                        block: "b-icon-small",
                        mix: [ {
                            block: "b-link"
                        } ],
                        mods: {
                            name: "email"
                        }
                    } ]
                }, {
                    elem: "cell",
                    content: __$ctx.ctx.email
                } ]
            }, {
                elem: "row",
                content: [ {
                    elem: "cell",
                    content: [ {
                        block: "b-icon-small",
                        mods: {
                            name: "phone"
                        }
                    } ]
                }, {
                    elem: "cell",
                    content: __$ctx.ctx.phone
                } ]
            }, {
                elem: "row",
                content: [ {
                    elem: "cell",
                    content: [ {
                        block: "b-icon-small",
                        mods: {
                            name: "pin"
                        }
                    } ]
                }, {
                    elem: "cell",
                    content: __$ctx.ctx.address
                } ]
            } ]
        } ];
        return;
    }
    function $63(__$ctx) {
        return __$ctx.ctx.content;
        return;
    }
    function $64(__$ctx) {
        var __t = __$ctx.block;
        if (__t === "b-icon-small") {
            if (!!__$ctx.elem === false) {
                return "i";
                return;
            } else {
                return $164(__$ctx);
            }
        } else if (__t === "b-simple-nav") {
            if (!!__$ctx.elem === false) {
                return "ul";
                return;
            } else {
                return $164(__$ctx);
            }
        } else if (__t === "b-layout-table") {
            if (!(__$ctx.elem == "th") === false) {
                return "th";
                return;
            } else {
                if (!(__$ctx.elem === "cell" || __$ctx.elem === "gap") === false) {
                    return "td";
                    return;
                } else {
                    if (__$ctx.elem === "row") {
                        return "tr";
                        return;
                    } else {
                        if (!!__$ctx.elem === false) {
                            return "table";
                            return;
                        } else {
                            if (!(__$ctx.elem === "cell" || __$ctx.elem === "gap") === false) {
                                return "td";
                                return;
                            } else {
                                if (__$ctx.elem === "row") {
                                    return "tr";
                                    return;
                                } else {
                                    if (!!__$ctx.elem === false) {
                                        return "table";
                                        return;
                                    } else {
                                        return $164(__$ctx);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } else if (__t === "b-search") {
            var __t = __$ctx.elem;
            if (__t === "button" || __t === "input") {
                return "input";
                return;
            } else {
                if (!!__$ctx.elem === false) {
                    return "form";
                    return;
                } else {
                    var __t = __$ctx.elem;
                    if (__t === "button" || __t === "input") {
                        return "input";
                        return;
                    } else {
                        if (!!__$ctx.elem === false) {
                            return "form";
                            return;
                        } else {
                            return $164(__$ctx);
                        }
                    }
                }
            }
        } else if (__t === "b-site-nav") {
            if (!!__$ctx.elem === false) {
                return "ul";
                return;
            } else {
                return $164(__$ctx);
            }
        } else if (__t === "b-icon") {
            if (!!__$ctx.elem === false) {
                return "i";
                return;
            } else {
                return $164(__$ctx);
            }
        } else if (__t === "b-link") {
            if (!(__$ctx.mods && __$ctx.mods.type === "filter") === false) {
                if (!!__$ctx.elem === false) {
                    return "a";
                    return;
                } else {
                    return $132(__$ctx);
                }
            } else {
                return $132(__$ctx);
            }
        } else if (__t === "b-page") {
            var __t = __$ctx.elem;
            if (__t === "js") {
                return "script";
                return;
            } else if (__t === "css") {
                if (!__$ctx.ctx.url === false) {
                    return "link";
                    return;
                } else {
                    return "style";
                    return;
                }
            } else if (__t === "favicon") {
                return "link";
                return;
            } else if (__t === "meta") {
                return "meta";
                return;
            } else if (__t === "head") {
                return "head";
                return;
            } else if (__t === "root") {
                return "html";
                return;
            } else {
                if (!!__$ctx.elem === false) {
                    return "body";
                    return;
                } else {
                    return $164(__$ctx);
                }
            }
        } else if (__t === "i-ua") {
            if (!!__$ctx.elem === false) {
                return "script";
                return;
            } else {
                return $164(__$ctx);
            }
        } else {
            return $164(__$ctx);
        }
    }
    function $132(__$ctx) {
        if (!!__$ctx.elem === false) {
            return "a";
            return;
        } else {
            return $164(__$ctx);
        }
    }
    function $164(__$ctx) {
        return undefined;
        return;
    }
    function $165(__$ctx) {
        var __t = __$ctx.block;
        if (__t === "b-simple-nav") {
            if (!!__$ctx.elem === false) {
                return "unstyled inline";
                return;
            } else {
                return $182(__$ctx);
            }
        } else if (__t === "b-site-nav") {
            if (!!__$ctx.elem === false) {
                return "unstyled inline clearfix";
                return;
            } else {
                return $182(__$ctx);
            }
        } else if (__t === "b-page") {
            if (__$ctx.elem === "root") {
                return "i-ua_js_no i-ua_css_standard";
                return;
            } else {
                return $182(__$ctx);
            }
        } else {
            return $182(__$ctx);
        }
    }
    function $182(__$ctx) {
        return undefined;
        return;
    }
    function $183(__$ctx) {
        var __t = __$ctx.block;
        if (__t === "b-layout-table") {
            if (!(__$ctx.elem == "th") === false) {
                var _$29ctx = __$ctx.ctx, _$29a = {}, _$29props = [ "colspan", "rowspan" ], _$29p;
                while (_$29p = _$29props.shift()) {
                    _$29ctx[_$29p] && (_$29a[_$29p] = _$29ctx[_$29p]);
                }
                return _$29a;
                return;
            } else {
                if (!(__$ctx.elem === "cell" || __$ctx.elem === "gap") === false) {
                    var _$27ctx = __$ctx.ctx, _$27a = {}, _$27props = [ "colspan", "rowspan" ], _$27p;
                    while (_$27p = _$27props.shift()) {
                        _$27ctx[_$27p] && (_$27a[_$27p] = _$27ctx[_$27p]);
                    }
                    return _$27a;
                    return;
                } else {
                    return $233(__$ctx);
                }
            }
        } else if (__t === "b-search") {
            var __t = __$ctx.elem;
            if (__t === "button") {
                return {
                    type: "submit",
                    value: __$ctx.ctx.value
                };
                return;
            } else if (__t === "input") {
                return {
                    name: "query"
                };
                return;
            } else {
                return $233(__$ctx);
            }
        } else if (__t === "b-icon") {
            if (!!__$ctx.elem === false) {
                var _$1gctx = __$ctx.ctx, _$1ga = {
                    src: "//yandex.st/lego/_/La6qi18Z8LwgnZdsAr1qy1GwCwo.gif",
                    alt: ""
                }, _$1gprops = [ "alt", "width", "height" ], _$1gp;
                _$1gctx.url && (_$1ga.src = _$1gctx.url);
                while (_$1gp = _$1gprops.shift()) {
                    _$1gctx[_$1gp] && (_$1ga[_$1gp] = _$1gctx[_$1gp]);
                }
                return _$1ga;
                return;
            } else {
                return $233(__$ctx);
            }
        } else if (__t === "b-link") {
            if (!(__$ctx.mods && __$ctx.mods.type === "filter") === false) {
                if (!!__$ctx.elem === false) {
                    return $207(__$ctx);
                } else {
                    return $210(__$ctx);
                }
            } else {
                return $210(__$ctx);
            }
        } else if (__t === "b-page") {
            var __t = __$ctx.elem;
            if (__t === "js") {
                if (!__$ctx.ctx.url === false) {
                    return {
                        src: __$ctx.ctx.url
                    };
                    return;
                } else {
                    return $233(__$ctx);
                }
            } else if (__t === "css") {
                if (!__$ctx.ctx.url === false) {
                    return {
                        rel: "stylesheet",
                        href: __$ctx.ctx.url
                    };
                    return;
                } else {
                    return $233(__$ctx);
                }
            } else if (__t === "favicon") {
                return {
                    rel: "shortcut icon",
                    href: __$ctx.ctx.url
                };
                return;
            } else if (__t === "meta") {
                return __$ctx.ctx.attrs;
                return;
            } else {
                return $233(__$ctx);
            }
        } else {
            return $233(__$ctx);
        }
    }
    function $207(__$ctx) {
        var __r75, __r76, __r77, __r78;
        var _$1dctx = __$ctx.ctx, _$1dprops = [ "title", "target" ], _$1dp = typeof _$1dctx.url, _$1da = {
            href: _$1dp === "undefined" || _$1dp === "string" ? _$1dctx.url : (_$1dp = [], "", __r75 = __$ctx._buf, __$ctx._buf = _$1dp, __r76 = __$ctx._mode, __$ctx._mode = "", __r77 = __$ctx.ctx, __$ctx.ctx = _$1dctx.url, __r78 = $323(__$ctx), __$ctx._buf = __r75, __$ctx._mode = __r76, __$ctx.ctx = __r77, "", __r78, _$1dp.join(""))
        };
        while (_$1dp = _$1dprops.pop()) {
            _$1dctx[_$1dp] && (_$1da[_$1dp] = _$1dctx[_$1dp]);
        }
        return _$1da;
        return;
    }
    function $210(__$ctx) {
        if (!!__$ctx.elem === false) {
            return $212(__$ctx);
        } else {
            return $233(__$ctx);
        }
    }
    function $212(__$ctx) {
        var __r71, __r72, __r73, __r74;
        var _$1bctx = __$ctx.ctx, _$1bprops = [ "title", "target" ], _$1bp = typeof _$1bctx.url, _$1ba = {
            href: _$1bp === "undefined" || _$1bp === "string" ? _$1bctx.url : (_$1bp = [], "", __r71 = __$ctx._buf, __$ctx._buf = _$1bp, __r72 = __$ctx._mode, __$ctx._mode = "", __r73 = __$ctx.ctx, __$ctx.ctx = _$1bctx.url, __r74 = $323(__$ctx), __$ctx._buf = __r71, __$ctx._mode = __r72, __$ctx.ctx = __r73, "", __r74, _$1bp.join(""))
        };
        while (_$1bp = _$1bprops.pop()) {
            _$1bctx[_$1bp] && (_$1ba[_$1bp] = _$1bctx[_$1bp]);
        }
        return _$1ba;
        return;
    }
    function $233(__$ctx) {
        return undefined;
        return;
    }
    function $234(__$ctx) {
        var __t = __$ctx.block;
        if (__t === "b-search") {
            if (__$ctx.elem === "button") {
                return [ {
                    block: "b-btn",
                    mods: {
                        color: "default",
                        background: "blue"
                    }
                } ];
                return;
            } else {
                return $246(__$ctx);
            }
        } else if (__t === "b-page") {
            if (!!__$ctx.elem === false) {
                return [ {
                    elem: "body"
                } ];
                return;
            } else {
                return $246(__$ctx);
            }
        } else {
            return $246(__$ctx);
        }
    }
    function $246(__$ctx) {
        return undefined;
        return;
    }
    function $255(__$ctx) {
        var __t = __$ctx.block;
        if (__t === "b-page") {
            var __t = __$ctx.elem;
            if (__t === "js" || __t === "css" || __t === "favicon" || __t === "meta" || __t === "head" || __t === "root") {
                return false;
                return;
            } else {
                return $277(__$ctx);
            }
        } else if (__t === "i-ua") {
            if (!!__$ctx.elem === false) {
                return false;
                return;
            } else {
                return $277(__$ctx);
            }
        } else {
            return $277(__$ctx);
        }
    }
    function $277(__$ctx) {
        return undefined;
        return;
    }
    function $278(__$ctx) {
        var __t = __$ctx.block;
        if (__t === "b-page") {
            if (__$ctx.elem === "css") {
                if (!__$ctx.ctx.hasOwnProperty("ie") === false) {
                    if (!!__$ctx.ctx._ieCommented === false) {
                        return $283(__$ctx);
                    } else {
                        return $288(__$ctx);
                    }
                } else {
                    return $288(__$ctx);
                }
            } else {
                return $288(__$ctx);
            }
        } else if (__t === "i-jquery") {
            if (__$ctx.elem === "core") {
                var __r49, __r50, __r51;
                return "", __r49 = __$ctx._mode, __$ctx._mode = "", __r50 = __$ctx.ctx, __$ctx.ctx = {
                    block: "b-page",
                    elem: "js",
                    url: "//yandex.st/jquery/1.7.2/jquery.min.js"
                }, __r51 = $323(__$ctx), __$ctx._mode = __r49, __$ctx.ctx = __r50, "", __r51;
                return;
            } else {
                return $323(__$ctx);
            }
        } else {
            return $323(__$ctx);
        }
    }
    function $283(__$ctx) {
        var _$11ie = __$ctx.ctx.ie;
        if (_$11ie === true) {
            {
                "";
                var __r61 = __$ctx._mode;
                __$ctx._mode = "";
                var __r62 = __$ctx.ctx;
                __$ctx.ctx = [ 6, 7, 8, 9 ].map(function(v) {
                    return {
                        elem: "css",
                        url: this.ctx.url + ".ie" + v + ".css",
                        ie: "IE " + v
                    };
                }, __$ctx);
                $323(__$ctx);
                __$ctx._mode = __r61;
                __$ctx.ctx = __r62;
                "";
            }
            undefined;
        } else {
            var _$11hideRule = !_$11ie ? [ "gt IE 9", "<!-->", "<!--" ] : _$11ie === "!IE" ? [ _$11ie, "<!-->", "<!--" ] : [ _$11ie, "", "" ];
            {
                "";
                var __r63 = __$ctx._mode;
                __$ctx._mode = "";
                var __r64 = __$ctx.ctx, __r65 = __r64._ieCommented;
                __r64._ieCommented = true;
                var __r66 = __$ctx.ctx;
                __$ctx.ctx = [ "<!--[if " + _$11hideRule[0] + "]>", _$11hideRule[1], __$ctx.ctx, _$11hideRule[2], "<![endif]-->" ];
                $323(__$ctx);
                __$ctx._mode = __r63;
                __r64._ieCommented = __r65;
                __$ctx.ctx = __r66;
                "";
            }
            undefined;
        }
        return;
    }
    function $288(__$ctx) {
        if (!(__$ctx["__$anflg799199655"] !== true) === false) {
            if (!!__$ctx.elem === false) {
                return $291(__$ctx);
            } else {
                return $323(__$ctx);
            }
        } else {
            return $323(__$ctx);
        }
    }
    function $291(__$ctx) {
        var __r52, __r53, __r54, __r55;
        var _$lctx = __$ctx.ctx, _$ldtype = ("", __r52 = __$ctx._mode, __$ctx._mode = "doctype", __r53 = $314(__$ctx), __$ctx._mode = __r52, "", __r53), _$lxUA = ("", __r54 = __$ctx._mode, __$ctx._mode = "xUACompatible", __r55 = $306(__$ctx), __$ctx._mode = __r54, "", __r55), _$lbuf = [ _$ldtype, {
            elem: "root",
            content: [ {
                elem: "head",
                content: [ {
                    tag: "meta",
                    attrs: {
                        charset: "utf-8"
                    }
                }, _$lxUA, {
                    tag: "title",
                    content: _$lctx.title
                }, _$lctx.favicon ? {
                    elem: "favicon",
                    url: _$lctx.favicon
                } : "", _$lctx.meta, {
                    block: "i-ua"
                }, _$lctx.head ]
            }, _$lctx ]
        } ];
        {
            "";
            var __r56 = __$ctx["__$anflg799199655"];
            __$ctx["__$anflg799199655"] = true;
            {
                "";
                var __r57 = __$ctx.ctx;
                __$ctx.ctx = _$lbuf;
                var __r58 = __$ctx._mode;
                __$ctx._mode = "";
                $323(__$ctx);
                __$ctx.ctx = __r57;
                __$ctx._mode = __r58;
                "";
            }
            __$ctx["__$anflg799199655"] = __r56;
            "";
        }
        undefined;
        return;
    }
    function $306(__$ctx) {
        return __$ctx.ctx["x-ua-compatible"] === false ? false : {
            tag: "meta",
            attrs: {
                "http-equiv": "X-UA-Compatible",
                content: __$ctx.ctx["x-ua-compatible"] || "IE=edge"
            }
        };
        return;
    }
    function $314(__$ctx) {
        return __$ctx.ctx.doctype || "<!DOCTYPE html>";
        return;
    }
    function $320(__$ctx) {
        return undefined;
        return;
    }
    function $322(__$ctx) {
        return undefined;
        return;
    }
    function $323(__$ctx) {
        if (!__$ctx.ctx === false) {
            if (!__$ctx.ctx.link === false) {
                if (!!__$ctx._.isSimple(__$ctx.ctx) === false) {
                    return $327(__$ctx);
                } else {
                    return $332(__$ctx);
                }
            } else {
                return $332(__$ctx);
            }
        } else {
            return $332(__$ctx);
        }
    }
    function $327(__$ctx) {
        var __r47, __r48;
        function _$6follow() {
            if (this.ctx.link === "no-follow") {
                return undefined;
            } else {
                undefined;
            }
            var data = this._links[this.ctx.link];
            return "", __r47 = this.ctx, this.ctx = data, __r48 = $1(__$ctx), this.ctx = __r47, "", __r48;
        }
        if (!cache || !__$ctx._cacheLog) {
            return _$6follow.call(__$ctx);
        } else {
            undefined;
        }
        var _$6contents = __$ctx._buf.slice(__$ctx._cachePos).join("");
        __$ctx._cachePos = __$ctx._buf.length;
        __$ctx._cacheLog.push(_$6contents, {
            log: __$ctx._localLog.slice(),
            link: __$ctx.ctx.link
        });
        var _$6res = _$6follow.call(__$ctx);
        __$ctx._cachePos = __$ctx._buf.length;
        return _$6res;
        return;
    }
    function $332(__$ctx) {
        if (!cache === false) {
            if (!__$ctx.ctx === false) {
                if (!__$ctx.ctx.cache === false) {
                    return $336(__$ctx);
                } else {
                    return $341(__$ctx);
                }
            } else {
                return $341(__$ctx);
            }
        } else {
            return $341(__$ctx);
        }
    }
    function $336(__$ctx) {
        var _$5cached;
        function _$5setProperty(obj, key, value) {
            if (key.length === 0) {
                return undefined;
            } else {
                undefined;
            }
            if (Array.isArray(value)) {
                var target = obj;
                for (var i = 0; i < value.length - 1; i++) {
                    target = target[value[i]];
                }
                value = target[value[i]];
            } else {
                undefined;
            }
            var host = obj, previous;
            for (var i = 0; i < key.length - 1; i++) {
                host = host[key[i]];
            }
            previous = host[key[i]];
            host[key[i]] = value;
            return previous;
        }
        if (_$5cached = cache.get(__$ctx.ctx.cache)) {
            var _$5oldLinks = __$ctx._links;
            if (__$ctx.ctx.links) {
                __$ctx._links = __$ctx.ctx.links;
            } else {
                undefined;
            }
            for (var _$5i = 0; _$5i < _$5cached.log.length; _$5i++) {
                if (typeof _$5cached.log[_$5i] === "string") {
                    __$ctx._buf.push(_$5cached.log[_$5i]);
                    continue;
                } else {
                    undefined;
                }
                var _$5log = _$5cached.log[_$5i], _$5reverseLog;
                _$5reverseLog = _$5log.log.map(function(entry) {
                    return {
                        key: entry[0],
                        value: _$5setProperty(this, entry[0], entry[1])
                    };
                }, __$ctx).reverse();
                {
                    "";
                    var __r37 = __$ctx.ctx, __r38 = __r37.cache;
                    __r37.cache = null;
                    var __r39 = __$ctx._cacheLog;
                    __$ctx._cacheLog = null;
                    var __r40 = __$ctx.ctx, __r41 = __r40.link;
                    __r40.link = _$5log.link;
                    $1(__$ctx);
                    __r37.cache = __r38;
                    __$ctx._cacheLog = __r39;
                    __r40.link = __r41;
                    "";
                }
                undefined;
                _$5reverseLog.forEach(function(entry) {
                    _$5setProperty(this, entry.key, entry.value);
                }, __$ctx);
            }
            __$ctx._links = _$5oldLinks;
            return _$5cached.res;
        } else {
            undefined;
        }
        var _$5cacheLog = [], _$5res;
        {
            "";
            var __r42 = __$ctx.ctx, __r43 = __r42.cache;
            __r42.cache = null;
            var __r44 = __$ctx._cachePos;
            __$ctx._cachePos = __$ctx._buf.length;
            var __r45 = __$ctx._cacheLog;
            __$ctx._cacheLog = _$5cacheLog;
            var __r46 = __$ctx._localLog;
            __$ctx._localLog = [];
            {
                _$5res = $1(__$ctx);
                var _$5tail = __$ctx._buf.slice(__$ctx._cachePos).join("");
                if (_$5tail) {
                    _$5cacheLog.push(_$5tail);
                } else {
                    undefined;
                }
            }
            __r42.cache = __r43;
            __$ctx._cachePos = __r44;
            __$ctx._cacheLog = __r45;
            __$ctx._localLog = __r46;
            "";
        }
        cache.set(__$ctx.ctx.cache, {
            log: _$5cacheLog,
            res: _$5res
        });
        return _$5res;
        return;
    }
    function $341(__$ctx) {
        var __t = __$ctx._mode;
        if (__t === "default") {
            return $343(__$ctx);
        } else if (__t === "") {
            if (!__$ctx._.isSimple(__$ctx.ctx) === false) {
                __$ctx._listLength--;
                var _$3ctx = __$ctx.ctx;
                (_$3ctx && _$3ctx !== true || _$3ctx === 0) && __$ctx._buf.push(_$3ctx);
                return;
            } else {
                if (!!__$ctx.ctx === false) {
                    __$ctx._listLength--;
                    return;
                } else {
                    if (!__$ctx._.isArray(__$ctx.ctx) === false) {
                        return $352(__$ctx);
                    } else {
                        if (!true === false) {
                            return $355(__$ctx);
                        } else {
                            return $e(__$ctx);
                        }
                    }
                }
            }
        } else {
            return $e(__$ctx);
        }
    }
    function $343(__$ctx) {
        var __r20, __r8, __r12, __r13, __r14, __r15, __r16, __r17, __r18, __r19, __r9, __r21, __r22, __r23, __r26, __r27, __r28, __r29, __r30, __r31;
        var _$4_this = __$ctx, _$4BEM_ = _$4_this.BEM, _$4v = __$ctx.ctx, _$4buf = __$ctx._buf, _$4tag;
        _$4tag = ("", __r8 = __$ctx._mode, __$ctx._mode = "tag", __r9 = $64(__$ctx), __$ctx._mode = __r8, "", __r9);
        typeof _$4tag != "undefined" || (_$4tag = _$4v.tag);
        typeof _$4tag != "undefined" || (_$4tag = "div");
        if (_$4tag) {
            var _$4jsParams, _$4js;
            if (__$ctx.block && _$4v.js !== false) {
                _$4js = ("", __r12 = __$ctx._mode, __$ctx._mode = "js", __r13 = $322(__$ctx), __$ctx._mode = __r12, "", __r13);
                _$4js = _$4js ? __$ctx._.extend(_$4v.js, _$4js === true ? {} : _$4js) : _$4v.js === true ? {} : _$4v.js;
                _$4js && ((_$4jsParams = {})[_$4BEM_.INTERNAL.buildClass(__$ctx.block, _$4v.elem)] = _$4js);
            } else {
                undefined;
            }
            _$4buf.push("<", _$4tag);
            var _$4isBEM = ("", __r14 = __$ctx._mode, __$ctx._mode = "bem", __r15 = $255(__$ctx), __$ctx._mode = __r14, "", __r15);
            typeof _$4isBEM != "undefined" || (_$4isBEM = typeof _$4v.bem != "undefined" ? _$4v.bem : _$4v.block || _$4v.elem);
            var _$4cls = ("", __r16 = __$ctx._mode, __$ctx._mode = "cls", __r17 = $165(__$ctx), __$ctx._mode = __r16, "", __r17);
            _$4cls || (_$4cls = _$4v.cls);
            var _$4addJSInitClass = _$4v.block && _$4jsParams;
            if (_$4isBEM || _$4cls) {
                _$4buf.push(' class="');
                if (_$4isBEM) {
                    _$4BEM_.INTERNAL.buildClasses(__$ctx.block, _$4v.elem, _$4v.elemMods || _$4v.mods, _$4buf);
                    var _$4mix = ("", __r18 = __$ctx._mode, __$ctx._mode = "mix", __r19 = $234(__$ctx), __$ctx._mode = __r18, "", __r19);
                    _$4v.mix && (_$4mix = _$4mix ? _$4mix.concat(_$4v.mix) : _$4v.mix);
                    if (_$4mix) {
                        var _$4visited = {};
                        function _$4visitedKey(block, elem) {
                            return (block || "") + "__" + (elem || "");
                        }
                        _$4visited[_$4visitedKey(__$ctx.block, __$ctx.elem)] = true;
                        if (!__$ctx._.isArray(_$4mix)) {
                            _$4mix = [ _$4mix ];
                        } else {
                            undefined;
                        }
                        for (var _$4i = 0; _$4i < _$4mix.length; _$4i++) {
                            var _$4mixItem = _$4mix[_$4i], _$4hasItem = _$4mixItem.block || _$4mixItem.elem, _$4block = _$4mixItem.block || _$4mixItem._block || _$4_this.block, _$4elem = _$4mixItem.elem || _$4mixItem._elem || _$4_this.elem;
                            _$4hasItem && _$4buf.push(" ");
                            _$4BEM_.INTERNAL[_$4hasItem ? "buildClasses" : "buildModsClasses"](_$4block, _$4mixItem.elem || _$4mixItem._elem || (_$4mixItem.block ? undefined : _$4_this.elem), _$4mixItem.elemMods || _$4mixItem.mods, _$4buf);
                            if (_$4mixItem.js) {
                                (_$4jsParams || (_$4jsParams = {}))[_$4BEM_.INTERNAL.buildClass(_$4block, _$4mixItem.elem)] = _$4mixItem.js === true ? {} : _$4mixItem.js;
                                _$4addJSInitClass || (_$4addJSInitClass = _$4block && !_$4mixItem.elem);
                            } else {
                                undefined;
                            }
                            if (_$4hasItem && !_$4visited[_$4visitedKey(_$4block, _$4elem)]) {
                                _$4visited[_$4visitedKey(_$4block, _$4elem)] = true;
                                var _$4nestedMix = ("", __r20 = __$ctx.block, __$ctx.block = _$4block, __r21 = __$ctx.elem, __$ctx.elem = _$4elem, __r22 = __$ctx._mode, __$ctx._mode = "mix", __r23 = $234(__$ctx), __$ctx.block = __r20, __$ctx.elem = __r21, __$ctx._mode = __r22, "", __r23);
                                if (_$4nestedMix) {
                                    for (var _$4j = 0; _$4j < _$4nestedMix.length; _$4j++) {
                                        var _$4nestedItem = _$4nestedMix[_$4j];
                                        if (!_$4nestedItem.block && !_$4nestedItem.elem || !_$4visited[_$4visitedKey(_$4nestedItem.block, _$4nestedItem.elem)]) {
                                            _$4nestedItem._block = _$4block;
                                            _$4nestedItem._elem = _$4elem;
                                            _$4mix.splice(_$4i + 1, 0, _$4nestedItem);
                                        } else {
                                            undefined;
                                        }
                                    }
                                } else {
                                    undefined;
                                }
                            } else {
                                undefined;
                            }
                        }
                    } else {
                        undefined;
                    }
                } else {
                    undefined;
                }
                _$4cls && _$4buf.push(_$4isBEM ? " " : "", _$4cls);
                _$4addJSInitClass && _$4buf.push(" i-bem");
                _$4buf.push('"');
            } else {
                undefined;
            }
            if (_$4jsParams) {
                var _$4jsAttr = ("", __r26 = __$ctx._mode, __$ctx._mode = "jsAttr", __r27 = $320(__$ctx), __$ctx._mode = __r26, "", __r27);
                _$4buf.push(" ", _$4jsAttr || "onclick", '="return ', __$ctx._.attrEscape(JSON.stringify(_$4jsParams)), '"');
            } else {
                undefined;
            }
            var _$4attrs = ("", __r28 = __$ctx._mode, __$ctx._mode = "attrs", __r29 = $183(__$ctx), __$ctx._mode = __r28, "", __r29);
            _$4attrs = __$ctx._.extend(_$4attrs, _$4v.attrs);
            if (_$4attrs) {
                var _$4name;
                for (_$4name in _$4attrs) {
                    if (_$4attrs[_$4name] === undefined) {
                        continue;
                    } else {
                        undefined;
                    }
                    _$4buf.push(" ", _$4name, '="', __$ctx._.attrEscape(_$4attrs[_$4name]), '"');
                }
            } else {
                undefined;
            }
        } else {
            undefined;
        }
        if (__$ctx._.isShortTag(_$4tag)) {
            _$4buf.push("/>");
        } else {
            _$4tag && _$4buf.push(">");
            var _$4content = ("", __r30 = __$ctx._mode, __$ctx._mode = "content", __r31 = $2(__$ctx), __$ctx._mode = __r30, "", __r31);
            if (_$4content || _$4content === 0) {
                var _$4isBEM = __$ctx.block || __$ctx.elem;
                {
                    "";
                    var __r32 = __$ctx._notNewList;
                    __$ctx._notNewList = false;
                    var __r33 = __$ctx.position;
                    __$ctx.position = _$4isBEM ? 1 : __$ctx.position;
                    var __r34 = __$ctx._listLength;
                    __$ctx._listLength = _$4isBEM ? 1 : __$ctx._listLength;
                    var __r35 = __$ctx.ctx;
                    __$ctx.ctx = _$4content;
                    var __r36 = __$ctx._mode;
                    __$ctx._mode = "";
                    $323(__$ctx);
                    __$ctx._notNewList = __r32;
                    __$ctx.position = __r33;
                    __$ctx._listLength = __r34;
                    __$ctx.ctx = __r35;
                    __$ctx._mode = __r36;
                    "";
                }
                undefined;
            } else {
                undefined;
            }
            _$4tag && _$4buf.push("</", _$4tag, ">");
        }
        return;
    }
    function $352(__$ctx) {
        var _$1v = __$ctx.ctx, _$1l = _$1v.length, _$1i = 0, _$1prevPos = __$ctx.position, _$1prevNotNewList = __$ctx._notNewList;
        if (_$1prevNotNewList) {
            __$ctx._listLength += _$1l - 1;
        } else {
            __$ctx.position = 0;
            __$ctx._listLength = _$1l;
        }
        __$ctx._notNewList = true;
        while (_$1i < _$1l) {
            var _$1newCtx = _$1v[_$1i++];
            {
                "";
                var __r7 = __$ctx.ctx;
                __$ctx.ctx = _$1newCtx === null ? "" : _$1newCtx;
                $323(__$ctx);
                __$ctx.ctx = __r7;
                "";
            }
            undefined;
        }
        _$1prevNotNewList || (__$ctx.position = _$1prevPos);
        return;
    }
    function $355(__$ctx) {
        var _$0vBlock = __$ctx.ctx.block, _$0vElem = __$ctx.ctx.elem, _$0block = __$ctx._currBlock || __$ctx.block;
        __$ctx.ctx || (__$ctx.ctx = {});
        {
            "";
            var __r0 = __$ctx._mode;
            __$ctx._mode = "default";
            var __r1 = __$ctx._links;
            __$ctx._links = __$ctx.ctx.links || __$ctx._links;
            var __r2 = __$ctx.block;
            __$ctx.block = _$0vBlock || (_$0vElem ? _$0block : undefined);
            var __r3 = __$ctx._currBlock;
            __$ctx._currBlock = _$0vBlock || _$0vElem ? undefined : _$0block;
            var __r4 = __$ctx.elem;
            __$ctx.elem = __$ctx.ctx.elem;
            var __r5 = __$ctx.mods;
            __$ctx.mods = (_$0vBlock ? __$ctx.ctx.mods : __$ctx.mods) || {};
            var __r6 = __$ctx.elemMods;
            __$ctx.elemMods = __$ctx.ctx.elemMods || {};
            {
                __$ctx.block || __$ctx.elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
                $278(__$ctx);
                undefined;
            }
            __$ctx._mode = __r0;
            __$ctx._links = __r1;
            __$ctx.block = __r2;
            __$ctx._currBlock = __r3;
            __$ctx.elem = __r4;
            __$ctx.mods = __r5;
            __$ctx.elemMods = __r6;
            "";
        }
        return;
    }
    function $e(__$ctx) {
        throw new Error(this);
        return;
    }
    !function() {
        var BEM_ = {}, toString = Object.prototype.toString, SHORT_TAGS = {
            area: 1,
            base: 1,
            br: 1,
            col: 1,
            command: 1,
            embed: 1,
            hr: 1,
            img: 1,
            input: 1,
            keygen: 1,
            link: 1,
            meta: 1,
            param: 1,
            source: 1,
            wbr: 1
        };
        (function(BEM, undefined) {
            var MOD_DELIM = "_", ELEM_DELIM = "__", NAME_PATTERN = "[a-zA-Z0-9-]+";
            function buildModPostfix(modName, modVal, buffer) {
                buffer.push(MOD_DELIM, modName, MOD_DELIM, modVal);
            }
            function buildBlockClass(name, modName, modVal, buffer) {
                buffer.push(name);
                modVal && buildModPostfix(modName, modVal, buffer);
            }
            function buildElemClass(block, name, modName, modVal, buffer) {
                buildBlockClass(block, undefined, undefined, buffer);
                buffer.push(ELEM_DELIM, name);
                modVal && buildModPostfix(modName, modVal, buffer);
            }
            BEM.INTERNAL = {
                NAME_PATTERN: NAME_PATTERN,
                MOD_DELIM: MOD_DELIM,
                ELEM_DELIM: ELEM_DELIM,
                buildModPostfix: function(modName, modVal, buffer) {
                    var res = buffer || [];
                    buildModPostfix(modName, modVal, res);
                    return buffer ? res : res.join("");
                },
                buildClass: function(block, elem, modName, modVal, buffer) {
                    var typeOf = typeof modName;
                    if (typeOf == "string") {
                        if (typeof modVal != "string") {
                            buffer = modVal;
                            modVal = modName;
                            modName = elem;
                            elem = undefined;
                        } else {
                            undefined;
                        }
                    } else {
                        if (typeOf != "undefined") {
                            buffer = modName;
                            modName = undefined;
                        } else {
                            if (elem && typeof elem != "string") {
                                buffer = elem;
                                elem = undefined;
                            } else {
                                undefined;
                            }
                        }
                    }
                    if (!(elem || modName || buffer)) {
                        return block;
                    } else {
                        undefined;
                    }
                    var res = buffer || [];
                    elem ? buildElemClass(block, elem, modName, modVal, res) : buildBlockClass(block, modName, modVal, res);
                    return buffer ? res : res.join("");
                },
                buildModsClasses: function(block, elem, mods, buffer) {
                    var res = buffer || [];
                    if (mods) {
                        var modName;
                        for (modName in mods) {
                            if (!mods.hasOwnProperty(modName)) {
                                continue;
                            } else {
                                undefined;
                            }
                            var modVal = mods[modName];
                            if (modVal == null) {
                                continue;
                            } else {
                                undefined;
                            }
                            modVal = mods[modName] + "";
                            if (!modVal) {
                                continue;
                            } else {
                                undefined;
                            }
                            res.push(" ");
                            if (elem) {
                                buildElemClass(block, elem, modName, modVal, res);
                            } else {
                                buildBlockClass(block, modName, modVal, res);
                            }
                        }
                    } else {
                        undefined;
                    }
                    return buffer ? res : res.join("");
                },
                buildClasses: function(block, elem, mods, buffer) {
                    var res = buffer || [];
                    elem ? buildElemClass(block, elem, undefined, undefined, res) : buildBlockClass(block, undefined, undefined, res);
                    this.buildModsClasses(block, elem, mods, buffer);
                    return buffer ? res : res.join("");
                }
            };
        })(BEM_);
        var buildEscape = function() {
            var ts = {
                '"': "&quot;",
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;"
            }, f = function(t) {
                return ts[t] || t;
            };
            return function(r) {
                r = new RegExp(r, "g");
                return function(s) {
                    return ("" + s).replace(r, f);
                };
            };
        }();
        function BEMContext(context, apply_) {
            this.ctx = typeof context === null ? "" : context;
            this.apply = apply_;
            this._buf = [];
            this._ = this;
            this._start = true;
            this._mode = "";
            this._listLength = 0;
            this._notNewList = false;
            this.position = 0;
            this.block = undefined;
            this.elem = undefined;
            this.mods = undefined;
            this.elemMods = undefined;
        }
        BEMContext.prototype.isArray = function isArray(obj) {
            return toString.call(obj) === "[object Array]";
        };
        BEMContext.prototype.isSimple = function isSimple(obj) {
            var t = typeof obj;
            return t === "string" || t === "number" || t === "boolean";
        };
        BEMContext.prototype.isShortTag = function isShortTag(t) {
            return SHORT_TAGS.hasOwnProperty(t);
        };
        BEMContext.prototype.extend = function extend(o1, o2) {
            if (!o1 || !o2) {
                return o1 || o2;
            } else {
                undefined;
            }
            var res = {}, n;
            for (n in o1) {
                o1.hasOwnProperty(n) && (res[n] = o1[n]);
            }
            for (n in o2) {
                o2.hasOwnProperty(n) && (res[n] = o2[n]);
            }
            return res;
        };
        BEMContext.prototype.identify = function() {
            var cnt = 0, id = BEM_["__id"] = +(new Date), expando = "__" + id, get = function() {
                return "uniq" + id + ++cnt;
            };
            return function(obj, onlyGet) {
                if (!obj) {
                    return get();
                } else {
                    undefined;
                }
                if (onlyGet || obj[expando]) {
                    return obj[expando];
                } else {
                    return obj[expando] = get();
                }
            };
        }();
        BEMContext.prototype.xmlEscape = buildEscape("[&<>]");
        BEMContext.prototype.attrEscape = buildEscape('["&<>]');
        BEMContext.prototype.BEM = BEM_;
        BEMContext.prototype.isFirst = function isFirst() {
            return this.position === 1;
        };
        BEMContext.prototype.isLast = function isLast() {
            return this.position === this._listLength;
        };
        BEMContext.prototype.generateId = function generateId() {
            return this.identify(this.ctx);
        };
        exports.apply = BEMContext.apply = function _apply() {
            var ctx = new BEMContext(this, apply);
            ctx.apply();
            return ctx._buf.join("");
        };
    }();
    return exports;
    exports.apply = apply;
    function apply(ctx) {
        return applyc(ctx || this);
    }
    function applyc(__$ctx) {
        return $1(__$ctx);
    }
    return exports;
})(typeof exports === "undefined" ? {} : exports);;
  return function(options) {
    if (!options) options = {};
    cache = options.cache;
    return xjst.apply.call(
[this]
    );
  };
}();
typeof exports === "undefined" || (exports.BEMHTML = BEMHTML);