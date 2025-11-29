(window.webpackJsonp = window.webpackJsonp || []).push([[50], {
    308: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = {
            props: [],
            data: function() {
                return {}
            },
            beforeMount: function() {},
            mounted: function() {},
            methods: {
                onShow: function() {
                    this.$emit("show")
                }
            }
        }
          , o = n(15)
          , component = Object(o.a)(r, function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                staticClass: "lazy"
            }, [e("transition", {
                attrs: {
                    name: "fade"
                }
            }, [e("lazy-component", {
                on: {
                    show: t.onShow
                }
            }, [t._t("default")], 2)], 1)], 1)
        }, [], !1, null, null, null);
        e.default = component.exports
    },
    309: function(t, e, n) {
        "use strict";
        n.r(e);
        n(45);
        var r = {
            components: {},
            props: ["placement", "data", "isCloseable"],
            beforeCreate: function() {},
            beforeMount: function() {
                this.form_factor = "mobile",
                this.$S.browser_width >= 960 && (this.form_factor = "desktop"),
                this.data && this.data[this.placement] && (this.unit_data = this.data[this.placement][this.form_factor])
            },
            data: function() {
                return {
                    unit_data: null,
                    form_factor: "mobile",
                    is_closed: !1
                }
            },
            mounted: function() {},
            methods: {
                close: function() {
                    this.is_closed = !0
                }
            }
        }
          , o = n(15)
          , component = Object(o.a)(r, function() {
            var t = this
              , e = t._self._c;
            return !t.$App.is_bot && t.$S.is_mounted && t.unit_data && !t.is_closed ? e("div", {
                class: "htvad ".concat(t.form_factor, " ").concat(t.$S.scrollY > 0 ? "active" : "", " ").concat("smart" == t.unit_data.placement_x ? "smart_banner" : ""),
                style: {
                    width: "".concat(t.unit_data.width, "px"),
                    display: "block"
                }
            }, [e("div", {
                staticClass: "unit__text"
            }, [t._v("Advertisement")]), t._v(" "), e("v-btn", {
                staticClass: "unit__close flex justify-center align-center",
                attrs: {
                    outline: ""
                },
                on: {
                    click: function(e) {
                        return t.close()
                    }
                }
            }, [e("span", {
                staticClass: "pr-2"
            }, [t._v("Close Ad")]), t._v(" "), e("v-icon", [t._v("mdi-close")])], 1), t._v(" "), e("div", {
                staticClass: "unit__container flex"
            }, [t._m(0), t._v(" "), "banner_image" == t.unit_data.ad_type ? e("a", {
                staticClass: "unit__link unit__content",
                attrs: {
                    href: t.unit_data.click_url,
                    rel: "noopener",
                    target: "_blank"
                }
            }, [e("img", {
                attrs: {
                    src: t.unit_data.image_url
                }
            })]) : "ifr" == t.unit_data.ad_type ? e("iframe", {
                staticClass: "unit__frame unit__content",
                attrs: {
                    src: t.unit_data.iframe_url,
                    width: t.unit_data.width,
                    height: t.unit_data.height,
                    scrolling: "no",
                    marginWidth: "0",
                    marginHeight: "0",
                    frameBorder: "0",
                    allowTransparency: "true"
                }
            }) : t._e()])], 1) : t._e()
        }, [function() {
            var t = this._self._c;
            return t("div", {
                staticClass: "unit__block flex row justify-center align-center"
            }, [t("span", [this._v("We are supported primarily by advertisements.\n      Please whitelist us so we can continue to build new\n      features. You'll thank us later. :)")])])
        }
        ], !1, null, null, null);
        e.default = component.exports
    },
    313: function(t, e, n) {
        "use strict";
        n.r(e);
        n(22),
        n(45);
        var r = {
            components: {
                "htv-lazy": n(308).default
            },
            props: ["uid", "hentaiVideo", "playlist", "isNowPlaying", "large", "isHasActions"],
            beforeCreate: function() {},
            data: function() {
                return {}
            },
            methods: {
                activateMenu: function() {
                    this.$EVT.$emit(this.$EVT.ACTIVATE_HENTAI_VIDEO_CARD_HORIZONTAL_MENU, {
                        dom_id: this.uid,
                        hv: this.hentaiVideo
                    })
                }
            },
            computed: {
                is_large_variant: function() {
                    return "string" == typeof this.large
                },
                video_url: function() {
                    var t = this.$route.fullPath.split("?");
                    return t.length > 1 ? "/videos/hentai/".concat(this.hentaiVideo.slug, "?").concat(t[1]) : this.playlist && (this.playlist.is_mutable || "History" != this.playlist.title) ? "/videos/hentai/".concat(this.hentaiVideo.slug, "?playlist_id=").concat(this.playlist.slug) : "/videos/hentai/".concat(this.hentaiVideo.slug)
                },
                poster_url: function() {
                    return this.$App.jetpackUrl(this.hentaiVideo.poster_url, 100, null, null, "cps")
                }
            }
        }
          , o = n(15)
          , component = Object(o.a)(r, function() {
            var t = this
              , e = t._self._c;
            return t.hentaiVideo && t.hentaiVideo.views ? e("div", {
                staticClass: "video__item flex row"
            }, [e("router-link", {
                staticClass: "flex row",
                attrs: {
                    to: t.video_url
                }
            }, [e("div", {
                staticClass: "video__item__image",
                style: {
                    background: "transparent url(".concat(t.poster_url, ") center center / cover no-repeat")
                }
            }, [t.isNowPlaying ? e("div", {
                staticClass: "video__item__image__now_playing"
            }, [t._v("Now Playing")]) : t._e(), t._v(" "), e("div", {
                staticClass: "video__item__image__progress_playback"
            }, [e("div", {
                staticClass: "video__item__image__progress_playback__fill"
            })])]), t._v(" "), e("div", {
                class: ["video__item__info flex column", {
                    "has-actions": !!t.isHasActions
                }]
            }, [e("div", {
                staticClass: "video__item__info__title"
            }, [t._v(t._s(t.hentaiVideo.name))]), t._v(" "), e("div", {
                staticClass: "video__item__info__subtitle flex column"
            }, [e("div", {
                staticClass: "video__item__info__subtitle__one_liner"
            }, [t._v(t._s(t.hentaiVideo.brand))]), t._v(" "), e("div", {
                staticClass: "video__item__info__subtitle__one_liner"
            }, [t._v(t._s(t.hentaiVideo.views.toLocaleString("en-US")) + " views")])])])]), t._v(" "), t.isHasActions ? e("div", {
                staticClass: "video__item__action"
            }, [e("v-btn", {
                class: "".concat(t.is_large_variant ? "large" : ""),
                attrs: {
                    small: "",
                    icon: "",
                    id: t.uid
                },
                on: {
                    click: function(e) {
                        return t.activateMenu()
                    }
                }
            }, [e("v-icon", [t._v("mdi-dots-vertical")])], 1)], 1) : t._e()], 1) : t._e()
        }, [], !1, null, null, null);
        e.default = component.exports
    },
    314: function(t, e, n) {
        "use strict";
        (function(t) {
            var r = n(5)
              , o = (n(27),
            n(45),
            n(20),
            n(159),
            n(14),
            n(39),
            n(78))
              , c = n.n(o);
            e.a = {
                components: {
                    "add-to-playlist-card": n(319).default
                },
                props: ["pg", "is_downloads_visible", "is_view_count_visible"],
                data: function() {
                    return {
                        is_loading: !1,
                        is_add_to_playlist_menu_visible: !1,
                        add_to_playlist_position_x: 0,
                        add_to_playlist_position_y: 0,
                        target_hentai_video: null
                    }
                },
                beforeMount: function() {
                    this.$EVT.$on(this.$EVT.ACTIVATE_ADD_TO_PLAYLIST_MENU, this.activateAddToMenuAroundElementWithId)
                },
                mounted: function() {},
                beforeDestroy: function() {
                    this.$EVT.$off(this.$EVT.ACTIVATE_ADD_TO_PLAYLIST_MENU, this.activateAddToMenuAroundElementWithId)
                },
                methods: {
                    toggleLikeDislikeVideo: function(t) {
                        var e = this;
                        return Object(r.a)(regeneratorRuntime.mark(function n() {
                            var r, o, _, d, v, h, m, f, y;
                            return regeneratorRuntime.wrap(function(n) {
                                for (; ; )
                                    switch (n.prev = n.next) {
                                    case 0:
                                        if (e.$S.user) {
                                            n.next = 1;
                                            break
                                        }
                                        return n.abrupt("return", e.$S.confirm({
                                            is_persistent: !1,
                                            is_mini_close_button_visible: !0,
                                            is_cancel_button_visible: !0,
                                            cancel_button_text: "Cancel",
                                            title: "Sign In Required",
                                            body: "Liking, disliking, rating, commenting and many other features are only possible after you sign in.",
                                            confirm_button_text: "Sign In",
                                            confirmation_callback: function() {
                                                e.$EVT.$emit(e.$EVT.GOTO, "/sign-in")
                                            }
                                        }));
                                    case 1:
                                        if (!e.is_loading) {
                                            n.next = 2;
                                            break
                                        }
                                        return n.abrupt("return");
                                    case 2:
                                        if (e.is_loading = !0,
                                        r = c.a.find(e.$S.playlists, {
                                            title: "Liked Videos",
                                            is_mutable: !1
                                        }),
                                        o = e.pg.hentai_video,
                                        _ = c.a.find(e.$S.data.video.like_dislike_playlist_hentai_videos, {
                                            playlist_id: r.id,
                                            hentai_video_id: o.id
                                        }),
                                        n.prev = 3,
                                        !(e.is_video_liked && "like" == t || e.is_video_disliked && "dislike" == t)) {
                                            n.next = 5;
                                            break
                                        }
                                        return n.next = 4,
                                        e.$del("".concat(e.$getApiBaseUrl(), "/rapi/v7/like_dislike_playlist_hentai_videos/").concat(_.id));
                                    case 4:
                                        d = n.sent,
                                        d.data,
                                        e.$S.data.video.like_dislike_playlist_hentai_videos = c.a.filter(e.$S.data.video.like_dislike_playlist_hentai_videos, function(t) {
                                            return t.id != _.id
                                        }),
                                        "like" == t ? e.$S.data.video.hentai_video.likes-- : e.$S.data.video.hentai_video.dislikes--,
                                        n.next = 9;
                                        break;
                                    case 5:
                                        if (v = {
                                            playlist_id: r.id,
                                            hentai_video_id: o.id
                                        },
                                        "like" == t && (v.is_like = "1"),
                                        !_) {
                                            n.next = 7;
                                            break
                                        }
                                        return n.next = 6,
                                        e.$put("".concat(e.$getApiBaseUrl(), "/rapi/v7/like_dislike_playlist_hentai_videos/").concat(_.id), v);
                                    case 6:
                                        h = n.sent,
                                        h.data,
                                        "like" == t ? (e.$S.data.video.hentai_video.likes++,
                                        e.$S.data.video.hentai_video.dislikes--,
                                        _.is_like = !0) : (e.$S.data.video.hentai_video.likes--,
                                        e.$S.data.video.hentai_video.dislikes++,
                                        _.is_like = !1),
                                        n.next = 9;
                                        break;
                                    case 7:
                                        return n.next = 8,
                                        e.$post("".concat(e.$getApiBaseUrl(), "/rapi/v7/like_dislike_playlist_hentai_videos"), v);
                                    case 8:
                                        m = n.sent,
                                        f = m.data,
                                        e.$S.data.video.like_dislike_playlist_hentai_videos.push(f),
                                        "like" == t ? e.$S.data.video.hentai_video.likes++ : e.$S.data.video.hentai_video.dislikes++;
                                    case 9:
                                        n.next = 11;
                                        break;
                                    case 10:
                                        n.prev = 10,
                                        y = n.catch(3),
                                        l("ERROR"),
                                        l(y);
                                    case 11:
                                        e.is_loading = !1;
                                    case 12:
                                    case "end":
                                        return n.stop()
                                    }
                            }, n, null, [[3, 10]])
                        }))()
                    },
                    activateAddToMenuAroundElementWithId: function(t, e) {
                        var n = this
                          , r = 0
                          , o = 0
                          , l = document.getElementById(t)
                          , rect = l.getBoundingClientRect();
                        if (void 0 === rect.y) {
                            var c = this.$S.getOffset(l);
                            o = c.top,
                            r = c.left
                        } else
                            o = rect.y,
                            r = rect.x;
                        this.add_to_playlist_position_x = r,
                        this.add_to_playlist_position_y = o,
                        this.target_hentai_video = e,
                        this.$nextTick(function() {
                            n.is_add_to_playlist_menu_visible = !0
                        })
                    },
                    activateReportMenuItems: function() {
                        this.$EVT.$emit(this.$EVT.GOTO, "/report-video")
                    }
                },
                computed: {
                    is_video_liked: function() {
                        var t = c.a.find(this.$S.playlists, {
                            title: "Liked Videos",
                            is_mutable: !1
                        });
                        if (!t)
                            return !1;
                        var e = c.a.find(this.pg.like_dislike_playlist_hentai_videos, {
                            playlist_id: t.id,
                            hentai_video_id: this.pg.hentai_video.id
                        });
                        return e && e.is_like
                    },
                    is_video_disliked: function() {
                        var t = c.a.find(this.$S.playlists, {
                            title: "Liked Videos",
                            is_mutable: !1
                        });
                        if (!t)
                            return !1;
                        var e = c.a.find(this.pg.like_dislike_playlist_hentai_videos, {
                            playlist_id: t.id,
                            hentai_video_id: this.pg.hentai_video.id
                        });
                        return e && !e.is_like
                    },
                    likes_k: function() {
                        if (this.pg.hentai_video.likes < 1e3)
                            return this.pg.hentai_video.likes;
                        var t = parseInt(this.pg.hentai_video.likes / 1e3);
                        return "".concat(t.toLocaleString("en-US"), "K")
                    },
                    dislikes_k: function() {
                        if (this.pg.hentai_video.dislikes < 1e3)
                            return this.pg.hentai_video.dislikes;
                        var t = parseInt(this.pg.hentai_video.dislikes / 1e3);
                        return "".concat(t.toLocaleString("en-US"), "K")
                    },
                    downloads_k: function() {
                        if (this.pg.hentai_video.downloads < 1e3)
                            return this.pg.hentai_video.downloads;
                        var t = parseInt(this.pg.hentai_video.downloads / 1e3);
                        return "".concat(t.toLocaleString("en-US"), "K")
                    },
                    hentai_video_download_url: function() {
                        var e = "";
                        is_server ? e = new t(this.pg.hentai_video.slug).toString("base64") : e = btoa(this.pg.hentai_video.slug);
                        return "/downloads/".concat(e)
                    }
                }
            }
        }
        ).call(this, n(324).Buffer)
    },
    317: function(t, e, n) {
        "use strict";
        n.r(e);
        n(159),
        n(14);
        var r = {
            props: ["watchLaterPlaylist", "watchLaterPlaylistHentaiVideos", "isLikeDislikeEnabled", "likeDislikePlaylist", "likeDislikePlaylistHentaiVideos"],
            beforeCreate: function() {},
            data: function() {
                return {
                    is_visible: !1,
                    x: 0,
                    y: 0,
                    hv: null,
                    dom_id: null
                }
            },
            mounted: function() {
                this.$EVT.$on(this.$EVT.ACTIVATE_HENTAI_VIDEO_CARD_HORIZONTAL_MENU, this.activateEventHandler)
            },
            beforeDestroy: function() {
                this.$EVT.$off(this.$EVT.ACTIVATE_HENTAI_VIDEO_CARD_HORIZONTAL_MENU, this.activateEventHandler)
            },
            methods: {
                activateEventHandler: function(t) {
                    this.hv = t.hv,
                    this.dom_id = t.dom_id,
                    this.activateMenuAroundElementWithId(t.dom_id)
                },
                activateMenuAroundElementWithId: function(t) {
                    var e = 0
                      , n = 0
                      , r = document.getElementById(t)
                      , rect = r.getBoundingClientRect();
                    if (void 0 === rect.y) {
                        var o = this.$S.getOffset(r);
                        n = o.top,
                        e = o.left
                    } else
                        n = rect.y,
                        e = rect.x;
                    this.x = e,
                    this.y = n,
                    this.is_visible = !0
                },
                toggleHentaiVideoInWatchLaterPlaylist: function() {
                    this.$PlaylistManagement.toggleHentaiVideoInPlaylist(this.$S, this.hv.id, this.watchLaterPlaylist, this.watchLaterPlaylistHentaiVideos, this)
                },
                toggleHentaiVideoInLikeDislikePlaylist: function() {
                    this.$PlaylistManagement.toggleHentaiVideoInPlaylist(this.$S, this.hv.id, this.likeDislikePlaylist, this.likeDislikePlaylistHentaiVideos, this)
                }
            },
            computed: {
                is_in_watch_later: function() {
                    return !!this.hv && _.find(this.watchLaterPlaylistHentaiVideos, {
                        hentai_video_id: this.hv.id
                    })
                },
                is_liked: function() {
                    if (!this.hv)
                        return !1;
                    var t = _.find(this.likeDislikePlaylistHentaiVideos, {
                        playlist_id: this.likeDislikePlaylist.id,
                        hentai_video_id: this.hv.id
                    });
                    return !!t && t.is_like
                }
            }
        }
          , o = n(15)
          , component = Object(o.a)(r, function() {
            var t = this
              , e = t._self._c;
            return e("v-menu", {
                attrs: {
                    id: "hvch_menu",
                    "position-x": t.x,
                    "position-y": t.y
                },
                model: {
                    value: t.is_visible,
                    callback: function(e) {
                        t.is_visible = e
                    },
                    expression: "is_visible"
                }
            }, [e("v-list", [t.isLikeDislikeEnabled && t.likeDislikePlaylist && t.is_liked ? e("v-list-tile", {
                on: {
                    click: function(e) {
                        return t.toggleHentaiVideoInLikeDislikePlaylist()
                    }
                }
            }, [e("v-list-tile-title", [t._v("Remove")])], 1) : t._e(), t._v(" "), t.watchLaterPlaylist && t.is_in_watch_later ? e("v-list-tile", {
                on: {
                    click: function(e) {
                        return t.toggleHentaiVideoInWatchLaterPlaylist()
                    }
                }
            }, [e("v-list-tile-title", [t._v("Remove from Watch Later")])], 1) : t._e(), t._v(" "), t.watchLaterPlaylist && !t.is_in_watch_later ? e("v-list-tile", {
                on: {
                    click: function(e) {
                        return t.toggleHentaiVideoInWatchLaterPlaylist()
                    }
                }
            }, [e("v-list-tile-title", [t._v("Add to Watch Later")])], 1) : t._e(), t._v(" "), e("v-list-tile", {
                on: {
                    click: function(e) {
                        return t.$EVT.$emit(t.$EVT.ACTIVATE_ADD_TO_PLAYLIST_MENU, t.dom_id, t.hv)
                    }
                }
            }, [e("v-list-tile-title", [t._v("Add to playlist")])], 1)], 1)], 1)
        }, [], !1, null, null, null);
        e.default = component.exports
    },
    319: function(t, n, r) {
        "use strict";
        r.r(n);
        r(28),
        r(77),
        r(45);
        var o = r(5)
          , l = (r(27),
        r(159),
        r(160),
        r(14),
        {
            props: ["hentaiVideo", "watchLaterPlaylistHentaiVideos", "playlistHentaiVideos"],
            beforeCreate: function() {},
            data: function() {
                return {
                    is_creating_new_playlist: !1,
                    playlist_visibilities: [{
                        text: "Public",
                        description: "Anyone can search for and view",
                        value: "public"
                    }, {
                        text: "Unlisted",
                        description: "Anyone with the link can view",
                        value: "unlisted"
                    }, {
                        text: "Private",
                        description: "Only you can view",
                        value: "private"
                    }],
                    new_playlist: {
                        visibility: "public",
                        title: ""
                    },
                    title_length_limit: 35
                }
            },
            mounted: function() {
                this.$S.user && this.initializeScrollbars(),
                this.$EVT.$on(this.$EVT.LOGGED_IN, this.onLoggedInEventHandler)
            },
            beforeDestroy: function() {
                this.$EVT.$off(this.$EVT.LOGGED_IN, this.onLoggedInEventHandler)
            },
            methods: {
                onLoggedInEventHandler: function() {
                    var t = this;
                    this.$nextTick(function() {
                        t.initializeScrollbars()
                    })
                },
                initializeScrollbars: function() {
                    if (!this.$App.is_safari)
                        try {
                            new SimpleBar(this.$refs.playlists_container_simple_bar)
                        } catch (t) {
                            e(t)
                        }
                },
                isHentaiVideoInPlaylist: function(t, e) {
                    return e.is_mutable ? _.find(this.playlistHentaiVideos, {
                        playlist_id: e.id,
                        hentai_video_id: t
                    }) : "Watch Later" == e.title ? _.find(this.watchLaterPlaylistHentaiVideos, {
                        playlist_id: e.id,
                        hentai_video_id: t
                    }) : void e.title
                },
                activateSignInDialog: function() {
                    this.$EVT.$emit(this.$EVT.GOTO, "/sign-in")
                },
                newPlaylistTitleValidation: function() {
                    var t = this.new_playlist.title.length;
                    return !(0 == t || t > this.title_length_limit) || "Invalid title."
                },
                doCreatePlaylist: function() {
                    var t = this;
                    return Object(o.a)(regeneratorRuntime.mark(function n() {
                        var r, data, o, l, c, _;
                        return regeneratorRuntime.wrap(function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    if (!t.$S.is_loading) {
                                        n.next = 1;
                                        break
                                    }
                                    return n.abrupt("return");
                                case 1:
                                    return t.$S.is_loading = !0,
                                    n.prev = 2,
                                    n.next = 3,
                                    t.$post("".concat(t.$getApiBaseUrl(), "/rapi/v7/playlists"), {
                                        title: t.new_playlist.title,
                                        visibility: t.new_playlist.visibility,
                                        hentai_video_id: t.hentaiVideo.id
                                    });
                                case 3:
                                    r = n.sent,
                                    data = r.data,
                                    o = data.playlists,
                                    l = data.playlist_hentai_video,
                                    t.$S.playlists.splice(0, t.$S.playlists.length),
                                    t.$S.playlists = t.$S.playlists.concat(o),
                                    t.playlistHentaiVideos.push(l),
                                    t.new_playlist.title = "",
                                    t.$EVT.$emit(t.$EVT.SNACK, "Created playlist."),
                                    n.next = 5;
                                    break;
                                case 4:
                                    n.prev = 4,
                                    _ = n.catch(2),
                                    c = "Unable to create playlist.  Try again later.",
                                    e(_),
                                    _.response && _.response.data && _.response.data.errors && (c = _.response.data.errors[0]),
                                    t.$EVT.$emit(t.$EVT.SNACK_ERR, c);
                                case 5:
                                    t.$S.is_loading = !1;
                                case 6:
                                case "end":
                                    return n.stop()
                                }
                        }, n, null, [[2, 4]])
                    }))()
                },
                close: function() {
                    this.is_creating_new_playlist = !1,
                    this.$emit("close")
                },
                toggleHentaiVideoInPlaylist: function(t) {
                    t.is_mutable ? this.$PlaylistManagement.toggleHentaiVideoInPlaylist(this.$S, this.hentaiVideo.id, t, this.playlistHentaiVideos, this) : this.$PlaylistManagement.toggleHentaiVideoInPlaylist(this.$S, this.hentaiVideo.id, t, this.watchLaterPlaylistHentaiVideos, this)
                }
            },
            computed: {}
        })
          , c = r(15)
          , component = Object(c.a)(l, function() {
            var t = this
              , e = t._self._c;
            return e("v-card", {
                staticClass: "playlists-card"
            }, [t.$S.user ? [e("v-card-title", {
                staticClass: "relative"
            }, [e("span", {
                staticClass: "px-2"
            }, [t._v("Add to...")]), t._v(" "), e("v-spacer"), t._v(" "), e("v-btn", {
                attrs: {
                    icon: ""
                },
                on: {
                    click: function(e) {
                        return t.close()
                    }
                }
            }, [e("v-icon", [t._v("mdi-close")])], 1)], 1), t._v(" "), e("v-card-text", {
                staticClass: "flex column justify-center pa-0"
            }, [e("div", {
                ref: "playlists_container_simple_bar",
                staticClass: "playlists-card__playlists-container"
            }, [e("v-list", t._l(t.$S.playlists, function(n, i) {
                return n.is_mutable || "Watch Later" == n.title ? e("v-list-tile", {
                    key: "playlist-".concat(i, "-").concat(n.id),
                    attrs: {
                        avatar: ""
                    },
                    on: {
                        click: function(e) {
                            return t.toggleHentaiVideoInPlaylist(n)
                        }
                    }
                }, [e("v-list-tile-action", [t.isHentaiVideoInPlaylist(t.hentaiVideo.id, n) ? e("v-icon", [t._v("mdi-checkbox-marked")]) : e("v-icon", [t._v("mdi-checkbox-blank-outline")])], 1), t._v(" "), e("v-list-tile-content", [e("v-list-tile-title", {
                    domProps: {
                        textContent: t._s(n.title)
                    }
                })], 1), t._v(" "), e("v-list-tile-avatar", ["private" == n.visibility ? e("v-icon", [t._v("mdi-lock-outline")]) : "unlisted" == n.visibility ? e("v-icon", [t._v("mdi-file-hidden")]) : e("v-icon", [t._v("mdi-earth")])], 1)], 1) : t._e()
            }), 1)], 1)]), t._v(" "), e("v-card-actions", {
                staticClass: "pa-0"
            }, [t.is_creating_new_playlist ? e("div", {
                staticClass: "pa-3 flex column playlist-card__create-section"
            }, [e("v-text-field", {
                attrs: {
                    label: "Title",
                    counter: t.title_length_limit,
                    max: t.title_length_limit
                },
                model: {
                    value: t.new_playlist.title,
                    callback: function(e) {
                        t.$set(t.new_playlist, "title", e)
                    },
                    expression: "new_playlist.title"
                }
            }), t._v(" "), e("div", {
                staticClass: "playlist-card__create-section__selection-title"
            }, [t._v("Privacy")]), t._v(" "), e("v-menu", {
                attrs: {
                    "offset-y": "",
                    right: "",
                    "content-class": "playlist-visibility"
                }
            }, [e("v-btn", {
                attrs: {
                    slot: "activator",
                    flat: "",
                    block: "",
                    large: ""
                },
                slot: "activator"
            }, [t._v("\n            " + t._s(t.new_playlist.visibility) + "\n            "), e("v-spacer"), t._v(" "), e("v-icon", [t._v("mdi-chevron-down")])], 1), t._v(" "), e("v-list", t._l(t.playlist_visibilities, function(n, i) {
                return e("v-list-tile", {
                    key: i,
                    on: {
                        click: function(e) {
                            t.new_playlist.visibility = n.value
                        }
                    }
                }, [e("v-list-tile-title", [e("div", [t._v(t._s(n.text))]), t._v(" "), e("div", {
                    staticClass: "playlist-card__create-section__subtext"
                }, [t._v(t._s(n.description))])])], 1)
            }), 1)], 1), t._v(" "), e("v-btn", {
                staticClass: "ma-0 mt-3",
                attrs: {
                    raised: "",
                    large: "",
                    color: t.$S.is_loading || 1 != t.newPlaylistTitleValidation() ? "" : "primary",
                    loading: t.$S.is_loading,
                    disabled: t.$S.is_loading || 1 != t.newPlaylistTitleValidation()
                },
                on: {
                    click: function(e) {
                        return t.doCreatePlaylist()
                    }
                }
            }, [t._v("\n          Create\n          "), e("span", {
                staticClass: "spins",
                attrs: {
                    slot: "loader"
                },
                slot: "loader"
            }, [e("v-icon", [t._v("mdi-loading")])], 1)])], 1) : e("v-btn", {
                staticClass: "playlist-card__create-btn",
                attrs: {
                    large: "",
                    flat: "",
                    block: ""
                },
                on: {
                    click: function(e) {
                        t.is_creating_new_playlist = !0
                    }
                }
            }, [e("v-icon", [t._v("mdi-plus")]), t._v(" "), e("span", [t._v("Create new playlist")]), t._v(" "), e("v-spacer")], 1)], 1)] : [e("v-card-title", {
                staticClass: "relative"
            }, [e("span", {
                staticClass: "px-2"
            }, [t._v("Add to...")]), t._v(" "), e("v-spacer"), t._v(" "), e("v-btn", {
                attrs: {
                    icon: ""
                },
                on: {
                    click: function(e) {
                        return t.close()
                    }
                }
            }, [e("v-icon", [t._v("mdi-close")])], 1)], 1), t._v(" "), e("v-card-text", {
                staticClass: "flex column justify-center"
            }, [e("span", [t._v("Sign in to add this video to a playlist.")])]), t._v(" "), e("v-card-actions", [e("v-btn", {
                attrs: {
                    color: "primary",
                    large: "",
                    block: ""
                },
                on: {
                    click: function(e) {
                        return t.activateSignInDialog()
                    }
                }
            }, [t._v("\n        Sign In\n      ")])], 1)]], 2)
        }, [], !1, null, null, null);
        n.default = component.exports
    },
    321: function(t, n, r) {
        "use strict";
        r.r(n);
        var o = r(26)
          , c = r(5)
          , _ = (r(45),
        r(160),
        r(14),
        r(39),
        r(97),
        r(161),
        r(27),
        {
            components: {},
            props: ["dataKey", "kind", "parent", "comment", "mode"],
            beforeCreate: function() {},
            data: function() {
                return {
                    text: "",
                    is_commenting: !1,
                    is_attachment_visible: !1,
                    text_url_regexp: /(http|\/\/).+\w{1}/gi,
                    image_urls_hash: {},
                    good_urls_hash: {},
                    bad_urls_hash: {},
                    attachment: null,
                    discord_attachment: null
                }
            },
            mounted: function() {
                this.text = this.initial_comment_for_edit
            },
            methods: {
                onFocus: function() {
                    this.is_commenting = !0
                },
                commentValidation: function() {
                    var t = this.text;
                    return 0 == t.length || (t.length < 10 ? "At least 10 characters required." : !(t.length > 2e3) || "Comment too long")
                },
                submit: function() {
                    "edit" == this.mode ? this.submitEdit() : this.submitComment()
                },
                submitEdit: function() {
                    var t = this;
                    return Object(c.a)(regeneratorRuntime.mark(function n() {
                        var r, o, l, c, data, _, d;
                        return regeneratorRuntime.wrap(function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    if (!t.$S.is_loading && !0 === t.commentValidation() && 0 != t.text.length) {
                                        n.next = 1;
                                        break
                                    }
                                    return n.abrupt("return");
                                case 1:
                                    if (t.comment) {
                                        n.next = 2;
                                        break
                                    }
                                    return n.abrupt("return");
                                case 2:
                                    return t.$S.is_loading = !0,
                                    r = t.comment.id,
                                    o = {
                                        text: t.text
                                    },
                                    n.prev = 3,
                                    l = t.getEndpoint(r),
                                    n.next = 4,
                                    t.$put(l, o);
                                case 4:
                                    c = n.sent,
                                    data = c.data,
                                    _ = data,
                                    t.comment.msg = _.msg,
                                    t.unfocus(),
                                    n.next = 6;
                                    break;
                                case 5:
                                    n.prev = 5,
                                    d = n.catch(3),
                                    e(d);
                                case 6:
                                    t.$S.is_loading = !1;
                                case 7:
                                case "end":
                                    return n.stop()
                                }
                        }, n, null, [[3, 5]])
                    }))()
                },
                submitComment: function() {
                    var t = this;
                    return Object(c.a)(regeneratorRuntime.mark(function e() {
                        var n, r, c, _, d, v, h, m, data, f, y, k, $, body, C;
                        return regeneratorRuntime.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (!t.$S.is_loading && !0 === t.commentValidation() && 0 != t.text.length) {
                                        e.next = 1;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 1:
                                    return t.$S.is_loading = !0,
                                    r = null,
                                    t.comment && (n = "hthread_comment_comment" == t.kind ? t.parent.id : t.comment.id,
                                    r = t.comment.original_poster_user_id),
                                    c = null,
                                    _ = null,
                                    t.$S.data && t.$S.data.video && t.$S.data.video.hentai_video && (c = t.$S.data.video.hentai_video.slug,
                                    _ = t.$S.data.video.hentai_video.id),
                                    d = {
                                        parent_id: n,
                                        text: t.text,
                                        reply_to_user_id: r,
                                        hentai_video_slug: c,
                                        hentai_video_id: _
                                    },
                                    v = null,
                                    e.prev = 2,
                                    h = t.getEndpoint(),
                                    e.next = 3,
                                    t.$post(h, d);
                                case 3:
                                    m = e.sent,
                                    data = m.data,
                                    f = data,
                                    n ? t.$emit("created-user-comment", f, t.kind) : (t.$S.data[t.dataKey].num_threads += 1,
                                    t.$S.data[t.dataKey].hthreads.splice(0, 0, f)),
                                    t.$S.data[t.dataKey].num_comments += 1,
                                    t.unfocus(),
                                    e.next = 5;
                                    break;
                                case 4:
                                    e.prev = 4,
                                    (C = e.catch(2)).response || (C.toString = function() {
                                        return "Error: Network Error"
                                    }
                                    ),
                                    v = C;
                                case 5:
                                    return e.prev = 5,
                                    t.$S.is_loading = !1,
                                    e.finish(5);
                                case 6:
                                    if (v)
                                        try {
                                            (y = v.toString()).toLowerCase().startsWith("error: network error") ? t.$S.alert({
                                                title: "Oops!",
                                                body: "It looks like your browser can't connect to our comments servers, so you can't post the comment.\n\nPlease contact us and tell us about your browser, ISP, and city so we may diagnose the problem.",
                                                is_cancel_button_visible: !1,
                                                confirm_button_text: "OK"
                                            }) : (null === (k = v.response) || void 0 === k ? void 0 : k.status,
                                            body = null === ($ = v.response) || void 0 === $ ? void 0 : $.data,
                                            y = body && "object" === Object(o.a)(body) && Array.isArray(body.errors) && body.errors[0] ? body.errors[0] : "string" == typeof body && "" !== body.trim() ? body : "UNKNOWN ERROR 1",
                                            l(v.response),
                                            t.$S.alert({
                                                title: "Oops!",
                                                body: "Something went wrong, so your comment did not post:\n\n".concat(y, "\n\nIf you have questions, please contact us about the above error."),
                                                is_cancel_button_visible: !1,
                                                confirm_button_text: "OK"
                                            }))
                                        } catch (t) {
                                            l("err2:", t)
                                        }
                                case 7:
                                case "end":
                                    return e.stop()
                                }
                        }, e, null, [[2, 4, 5, 6]])
                    }))()
                },
                getEndpoint: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
                      , e = t ? "/".concat(t) : "";
                    return "hthread_comment" == this.kind ? "".concat(this.$getApiBaseUrl(), "/api/v8/hthread_comments").concat(e) : "hthread_comment_comment" == this.kind ? "".concat(this.$getApiBaseUrl(), "/api/v8/hthread_comment_comments").concat(e) : "".concat(this.$getApiBaseUrl(), "/api/v8/hthreads").concat(e)
                },
                unfocus: function() {
                    this.text = "",
                    this.is_commenting = !1,
                    this.image_urls_hash = Object.assign({}),
                    this.$emit("cancel")
                }
            },
            computed: {
                my_avatar_url: function() {
                    var t = this.$S.user;
                    return t ? this.$App.jetpackUrl(t.effective_avatar_url, 100, null, null, "apbcb") : ""
                },
                initial_comment_for_edit: function() {
                    return "edit" == this.mode && this.comment ? this.comment.msg : ""
                }
            }
        })
          , d = _
          , v = r(15)
          , component = Object(v.a)(d, function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                class: "user_comment_input"
            }, [t.$S.user ? [e("div", {
                staticClass: "flex"
            }, [e("div", {
                staticClass: "uc_avatar",
                style: {
                    background: "#3a3c3f url(".concat(t.my_avatar_url, ") center center / cover no-repeat")
                }
            }), t._v(" "), e("v-text-field", {
                staticClass: "htv-input",
                attrs: {
                    name: "comment",
                    placeholder: "reply" == t.mode ? "Add a reply" : "Post a comment",
                    "multi-line": "",
                    "hide-details": "",
                    min: "10",
                    max: "2000",
                    type: "text",
                    autocomplete: "off",
                    autocorrect: "off",
                    autocapitalize: "off",
                    spellcheck: "false",
                    rules: [t.commentValidation]
                },
                on: {
                    focus: t.onFocus,
                    change: function(t) {},
                    keyup: function(e) {
                        if (!e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter"))
                            return null
                    }
                },
                model: {
                    value: t.text,
                    callback: function(e) {
                        t.text = e
                    },
                    expression: "text"
                }
            })], 1)] : e("div", {
                staticClass: "flex justify-center align-center"
            }, [e("div", [t._v("Sign in to post a comment!")]), t._v(" "), e("v-btn", {
                attrs: {
                    color: "primary"
                },
                on: {
                    click: function(e) {
                        return t.$EVT.$emit(t.$EVT.GOTO, "/sign-in")
                    }
                }
            }, [t._v("Sign In")])], 1), t._v(" "), e("div", {
                staticClass: "actions_bar"
            }, [e("transition", {
                attrs: {
                    name: "slide-x-reverse-transition"
                }
            }, [t.is_commenting ? e("div", {
                staticClass: "flex"
            }, [e("div", {
                staticClass: "actions_bar_spacer"
            }), t._v(" "), e("v-spacer"), t._v(" "), e("v-btn", {
                attrs: {
                    flat: ""
                },
                on: {
                    click: function(e) {
                        return t.unfocus()
                    }
                }
            }, [t._v("Cancel")]), t._v(" "), e("v-btn", {
                staticClass: "action_btn",
                attrs: {
                    color: t.$S.is_loading ? "" : "primary",
                    loading: t.$S.is_loading,
                    disabled: t.$S.is_loading || t.text.length < 10
                },
                on: {
                    click: function(e) {
                        return t.submit()
                    }
                }
            }, ["edit" == t.mode ? e("span", [t._v("Save Edit")]) : e("span", [t._v("Comment")]), t._v(" "), e("span", {
                staticClass: "spins",
                attrs: {
                    slot: "loader"
                },
                slot: "loader"
            }, [e("v-icon", [t._v("mdi-loading")])], 1)])], 1) : t._e()])], 1)], 2)
        }, [], !1, null, null, null);
        n.default = component.exports
    },
    332: function(t, e, n) {
        "use strict";
        n.r(e);
        n(45),
        n(28),
        n(20),
        n(35),
        n(36),
        n(29),
        n(30);
        var r = n(17)
          , o = n(5)
          , l = (n(27),
        n(159),
        n(14),
        n(62),
        n(1))
          , c = n.n(l);
        function d(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                })),
                n.push.apply(n, r)
            }
            return n
        }
        function v(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? d(Object(n), !0).forEach(function(e) {
                    Object(r.a)(t, e, n[e])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                })
            }
            return t
        }
        var h = {
            components: {
                Comment: n(343).default,
                CommentInput: n(321).default,
                "user-comment-menu": n(344).default
            },
            props: ["hentaiVideo"],
            beforeCreate: function() {
                this.dataKey = "Comments",
                c.a.set(this.$S.data, this.dataKey, {
                    now: new Date,
                    is_confirm_dialog_visible: !1,
                    confirm_callback: null,
                    sort_bys: [{
                        title: "Newest",
                        slug: "created_at,desc",
                        is_active: !1
                    }, {
                        title: "Best Comments",
                        slug: "upvotes,desc",
                        is_active: !0
                    }],
                    comments_system: null,
                    state: "UNINITIALIZED",
                    is_hthreads_initialized: !1,
                    users_hash: {},
                    page_size: 12,
                    offset: -12,
                    num_threads: 0,
                    num_comments: 0,
                    hthreads: [],
                    my_hthreads_flags_hash: {},
                    my_hthreads_votes_hash: {},
                    my_hthread_comments_flags_hash: {},
                    my_hthread_comments_votes_hash: {},
                    my_hthread_comment_comments_flags_hash: {},
                    my_hthread_comment_comments_votes_hash: {}
                })
            },
            data: function() {
                return {
                    now_timer: null
                }
            },
            mounted: function() {
                this.$S.user && c.a.set(this.$S.data[this.dataKey].users_hash, "users/".concat(this.$S.user.id), this.$S.user),
                window.cs = new CommentsSystem(this.dataKey,this.hentaiVideo,this),
                this.$S.data[this.dataKey].comments_system = window.cs,
                this.now_timer = setInterval(this.updateNow, 6e4),
                this.refresh()
            },
            beforeDestroy: function() {
                this.now_timer && (clearInterval(this.now_timer),
                this.now_timer = null),
                c.a.delete(this.$S.data, this.dataKey),
                delete this.$S.data[this.dataKey]
            },
            methods: {
                updateNow: function() {
                    this.$S.data[this.dataKey] && (this.$S.data[this.dataKey].now = new Date)
                },
                refresh: function() {
                    var t = this;
                    return Object(o.a)(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    t.$S.data[t.dataKey] = v(v({}, t.$S.data[t.dataKey]), {}, {
                                        is_confirm_dialog_visible: !1,
                                        confirm_callback: null,
                                        state: "UNINITIALIZED",
                                        is_hthreads_initialized: !1,
                                        page_size: 12,
                                        offset: -12,
                                        num_threads: 0,
                                        num_comments: 0,
                                        hthreads: [],
                                        my_hthreads_flags_hash: {},
                                        my_hthreads_votes_hash: {},
                                        my_hthread_comments_flags_hash: {},
                                        my_hthread_comments_votes_hash: {},
                                        my_hthread_comment_comments_flags_hash: {},
                                        my_hthread_comment_comments_votes_hash: {}
                                    }),
                                    t.showMore();
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }, e)
                    }))()
                },
                showMore: function() {
                    this.$S.data[this.dataKey].comments_system.showMore(this, "hthread", null, !0)
                },
                applySort: function(t, e) {
                    var n = _.find(this.$S.data[this.dataKey].sort_bys, {
                        is_active: !0
                    })
                      , r = null;
                    n && (r = n.slug);
                    var o = null;
                    _.each(this.$S.data[this.dataKey].sort_bys, function(t, n) {
                        t.is_active = !1,
                        n == e && (t.is_active = !0,
                        o = t.slug)
                    }),
                    o != r && this.refresh()
                },
                confirmFlagUserComment: function(t) {
                    this.$S.data[this.dataKey].confirm_callback = t,
                    this.$S.data[this.dataKey].is_confirm_dialog_visible = !0
                },
                confirmed: function() {
                    this.$S.data[this.dataKey].confirm_callback(),
                    this.$S.data[this.dataKey].is_confirm_dialog_visible = !1
                }
            }
        }
          , m = n(15)
          , component = Object(m.a)(h, function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                staticClass: "user_comments"
            }, [e("div", {
                staticClass: "uc-divider my-3"
            }), t._v(" "), e("div", {
                staticClass: "user_comments__header flex align-center"
            }, [t.$S.data[t.dataKey].num_threads > 0 ? e("div", [t._v("\n      " + t._s(t.$S.data[t.dataKey].num_threads) + " Threads\n          \n      " + t._s(t.$S.data[t.dataKey].num_comments) + " Comments\n    ")]) : e("div", [t._v("Be the first to comment!")]), t._v(" "), e("v-spacer"), t._v(" "), e("v-menu", {
                attrs: {
                    transition: "slide-y-transition",
                    bottom: "",
                    "content-class": "sort_menu"
                }
            }, [e("v-btn", {
                staticClass: "sort_btn",
                attrs: {
                    slot: "activator",
                    flat: "",
                    outline: ""
                },
                slot: "activator"
            }, [e("v-icon", [t._v("mdi-sort-variant")]), t._v("\n        Sort\n      ")], 1), t._v(" "), e("v-list", t._l(t.$S.data[t.dataKey].sort_bys, function(n, i) {
                return e("v-list-tile", {
                    key: "sort-option-".concat(i),
                    on: {
                        click: function(e) {
                            return t.applySort(n, i)
                        }
                    }
                }, [e("v-list-tile-title", [e("v-icon", {
                    class: {
                        invisible: !n.is_active
                    }
                }, [t._v("mdi-checkbox-blank-circle")]), t._v("\n            " + t._s(n.title) + "\n          ")], 1)], 1)
            }), 1)], 1)], 1), t._v(" "), t.$S.data[t.dataKey] && "UNINITIALIZED" != t.$S.data[t.dataKey].state ? e("div", {
                staticClass: "initialized"
            }, [e("div", {
                staticClass: "user_comments__post"
            }, [e("CommentInput", {
                attrs: {
                    dataKey: t.dataKey,
                    kind: "hthread",
                    parent: null,
                    comment: null,
                    mode: "new_user_comment"
                }
            })], 1), t._v(" "), e("div", {
                staticClass: "user_comments__content"
            }, [t._l(t.$S.data[t.dataKey].hthreads, function(n, i) {
                return e("Comment", {
                    key: "user_comment-".concat(i, "-").concat(n.id),
                    attrs: {
                        dataKey: t.dataKey,
                        depth: 0,
                        kind: "hthread",
                        parent: null,
                        userComment: n,
                        myFlagsHash: t.$S.data[t.dataKey].my_hthreads_flags_hash,
                        myVotesHash: t.$S.data[t.dataKey].my_hthreads_votes_hash
                    }
                })
            }), t._v(" "), t.$S.data[t.dataKey].offset + t.$S.data[t.dataKey].page_size < t.$S.data[t.dataKey].num_threads ? e("v-btn", {
                attrs: {
                    large: "",
                    disabled: t.$S.is_loading,
                    loading: t.$S.is_loading
                },
                on: {
                    click: function(e) {
                        return t.showMore()
                    }
                }
            }, [e("span", {
                staticClass: "primary-color"
            }, [t._v("Load More Comments")]), t._v(" "), e("span", {
                staticClass: "spins",
                attrs: {
                    slot: "loader"
                },
                slot: "loader"
            }, [e("v-icon", [t._v("mdi-loading")])], 1)]) : t._e()], 2), t._v(" "), e("v-dialog", {
                attrs: {
                    "max-width": "290"
                },
                model: {
                    value: t.$S.data[t.dataKey].is_confirm_dialog_visible,
                    callback: function(e) {
                        t.$set(t.$S.data[t.dataKey], "is_confirm_dialog_visible", e)
                    },
                    expression: "$S.data[dataKey].is_confirm_dialog_visible"
                }
            }, [e("v-card", [e("v-card-title", {
                staticClass: "headline"
            }, [t._v("Flag this comment?")]), t._v(" "), e("v-card-text", [t._v("Are you sure you want to flag this comment?  Only flag comments that break our community guidelines!")]), t._v(" "), e("v-card-actions", [e("v-spacer"), t._v(" "), e("v-btn", {
                attrs: {
                    flat: ""
                },
                nativeOn: {
                    click: function(e) {
                        t.$S.data[t.dataKey].is_confirm_dialog_visible = !1
                    }
                }
            }, [t._v("Cancel")]), t._v(" "), e("v-btn", {
                attrs: {
                    color: "primary"
                },
                nativeOn: {
                    click: function(e) {
                        return t.confirmed()
                    }
                }
            }, [t._v("Confirm")])], 1)], 1)], 1), t._v(" "), e("user-comment-menu", {
                attrs: {
                    dataKey: t.dataKey
                },
                on: {
                    "confirm-flag-user-comment": t.confirmFlagUserComment,
                    "flag-user-comment": t.flagUserComment,
                    "unflag-user-comment": t.unflagUserComment
                }
            })], 1) : e("div", {
                staticClass: "uninitialized flex justify-center"
            }, [e("v-progress-circular", {
                attrs: {
                    indeterminate: "",
                    color: "primary"
                }
            })], 1)])
        }, [], !1, null, null, null);
        e.default = component.exports
    },
    333: function(t, e, n) {
        "use strict";
        n.r(e);
        n(45);
        var r = {
            components: {},
            props: ["placement", "data", "isCloseable"],
            beforeCreate: function() {},
            beforeMount: function() {
                if (this.form_factor = "mobile",
                this.$S.browser_width >= 960 && (this.form_factor = "desktop"),
                this.data && this.data[this.placement] && (this.unit_data = this.data[this.placement][this.form_factor],
                this.unit_data)) {
                    var t = this.unit_data.placement_x.split(",");
                    this.title = t[0],
                    this.subtitle = t[1]
                }
            },
            data: function() {
                return {
                    unit_data: null,
                    form_factor: "mobile",
                    is_closed: !1,
                    title: "",
                    subtitle: ""
                }
            },
            mounted: function() {},
            methods: {
                close: function() {
                    this.is_closed = !0
                }
            }
        }
          , o = n(15)
          , component = Object(o.a)(r, function() {
            var t = this
              , e = t._self._c;
            return !t.$App.is_bot && t.$S.is_mounted && t.unit_data && !t.is_closed ? e("div", {
                class: "htvnad ".concat(t.form_factor, " ").concat(t.unit_data.placement)
            }, [e("div", {
                staticClass: "unit__close flex justify-center align-center",
                on: {
                    click: function(e) {
                        return t.close()
                    }
                }
            }, [e("v-icon", [t._v("mdi-close")])], 1), t._v(" "), e("v-btn", {
                staticClass: "unit__btn",
                attrs: {
                    color: "blue lighten-1",
                    href: t.unit_data.click_url,
                    rel: "noopener",
                    target: "_blank"
                }
            }, [t._v("LEARN MORE")]), t._v(" "), e("a", {
                staticClass: "unit__container flex row",
                attrs: {
                    href: t.unit_data.click_url,
                    rel: "noopener",
                    target: "_blank"
                }
            }, [e("img", {
                staticClass: "unit__icon mr-2",
                attrs: {
                    src: t.unit_data.image_url
                }
            }), t._v(" "), e("div", {
                staticClass: "unit__text flex column"
            }, [e("div", {
                staticClass: "unit__container__title mb-1"
            }, [t._v(t._s(t.title))]), t._v(" "), e("div", {
                staticClass: "unit__container__subtitle"
            }, [e("span", {
                staticClass: "indicator mr-1"
            }, [t._v("Ad")]), t._v("\n        " + t._s(t.subtitle) + "\n      ")])])])], 1) : t._e()
        }, [], !1, null, null, null);
        e.default = component.exports
    },
    334: function(t, e, n) {
        "use strict";
        n.r(e);
        n(45);
        var r = {
            components: {},
            props: ["placement", "data", "isCloseable"],
            beforeCreate: function() {},
            beforeMount: function() {
                if (this.form_factor = "mobile",
                this.$S.browser_width >= 960 && (this.form_factor = "desktop"),
                this.data && this.data[this.placement] && (this.unit_data = this.data[this.placement][this.form_factor],
                this.unit_data)) {
                    var t = this.unit_data.placement_x.split(",");
                    this.title = t[0],
                    this.subtitle = t[1]
                }
            },
            data: function() {
                return {
                    unit_data: null,
                    form_factor: "mobile",
                    is_closed: !1,
                    title: "",
                    subtitle: ""
                }
            },
            mounted: function() {},
            methods: {
                close: function() {
                    this.is_closed = !0
                }
            }
        }
          , o = n(15)
          , component = Object(o.a)(r, function() {
            var t = this
              , e = t._self._c;
            return !t.$App.is_bot && t.$S.is_mounted && t.unit_data && !t.is_closed ? e("div", {
                class: "htvnad1 ".concat(t.form_factor, " ").concat(t.unit_data.placement)
            }, [e("div", {
                staticClass: "unit__close flex justify-center align-center",
                on: {
                    click: function(e) {
                        return t.close()
                    }
                }
            }, [e("v-icon", [t._v("mdi-close")])], 1), t._v(" "), e("a", {
                staticClass: "unit__container flex row",
                attrs: {
                    href: t.unit_data.click_url,
                    rel: "noopener",
                    target: "_blank"
                }
            }, [e("img", {
                staticClass: "unit__icon mr-2",
                attrs: {
                    src: t.unit_data.image_url
                }
            }), t._v(" "), e("div", {
                staticClass: "unit__text flex column"
            }, [e("div", {
                staticClass: "unit__container__title mb-1"
            }, [t._v(t._s(t.title))]), t._v(" "), e("div", {
                staticClass: "unit__container__subtitle"
            }, [e("span", {
                staticClass: "indicator mr-1"
            }, [t._v("Ad")]), t._v("\n        " + t._s(t.subtitle) + "\n      ")]), t._v(" "), e("v-btn", {
                staticClass: "unit__btn",
                attrs: {
                    small: "",
                    color: "blue lighten-1",
                    href: t.unit_data.click_url,
                    rel: "noopener",
                    target: "_blank"
                }
            }, [t._v("VISIT SITE")])], 1)])]) : t._e()
        }, [], !1, null, null, null);
        e.default = component.exports
    },
    335: function(t, e, n) {
        "use strict";
        n.r(e);
        n(22),
        n(28),
        n(20),
        n(35),
        n(36),
        n(29),
        n(30);
        var r = n(17)
          , o = n(5)
          , c = (n(45),
        n(159),
        n(46),
        n(121),
        n(160),
        n(14),
        n(52),
        n(62),
        n(27),
        n(1))
          , d = n.n(c);
        function v(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                })),
                n.push.apply(n, r)
            }
            return n
        }
        function h(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? v(Object(n), !0).forEach(function(e) {
                    Object(r.a)(t, e, n[e])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : v(Object(n)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                })
            }
            return t
        }
        var m = {
            props: ["video", "storyboards", "startTime"],
            beforeCreate: function() {
                this.slug = this.$route.params.id
            },
            data: function() {
                return {
                    is_using_classic_poster: !1,
                    iframe_src: null,
                    is_ready: !1,
                    video_player_skin: "vjs",
                    accepted_video_stream_extensions: ["mp4"],
                    servers: [],
                    is_view_recorded: !1,
                    selected_server: null,
                    selected_video_stream: null,
                    normalized_sources: null,
                    vjs_video_ref: null,
                    is_video_settings_dialog_visible: !1,
                    initial_time: null,
                    is_adaptive_streaming_server_present: !1,
                    is_poster_visible: !0,
                    all_useable_video_streams: [],
                    player_bg_image: null,
                    pr: !1,
                    playback_speeds: [{
                        label: "0.25",
                        id: "playback-speed",
                        value: .25
                    }, {
                        label: "0.5",
                        id: "playback-speed",
                        value: .5
                    }, {
                        label: "Normal",
                        id: "playback-speed",
                        value: 1
                    }, {
                        label: "1.5",
                        id: "playback-speed",
                        value: 1.5
                    }, {
                        label: "2",
                        id: "playback-speed",
                        value: 2
                    }],
                    selected_playback_speed: 1
                }
            },
            beforeMount: function() {
                this.$S.$on("VIDEOS_MANIFEST_DECODED", this.videosManifestDecoded),
                this.$EVT.$on("PLAYER_ON_POSTER_CLICK", this.onPosterClick),
                this.$EVT.$on("OPEN_VIDEO_SETTINGS", this.openVideoSettings),
                this.$EVT.$on("PLAYER_ON_PREROLL_AD_FAILURE", this.onPrerollAdFailure),
                this.$EVT.$on("PLAYER_REQUESTS_VIDEOS_MANIFEST", this.onPlayerRequestVideosManifest),
                this.$EVT.$on("PAGE_CLICKED", this.onPageClicked),
                this.$EVT.$on("PREMIUM_ALERT", this.premiumAlert),
                this.$EVT.$on("PLAYER_REQUESTS_TOGGLE_FULL_BROWSER_SCREEN", this.onPlayerRequestToggleFullBrowserScreen),
                this.$EVT.$on("PREROLL_ENDED_CONTENT_RESUMED", this.onPrerollEndedContentResumed),
                this.$S.is_dev && (window.VP = this)
            },
            mounted: function() {
                var t = this;
                return Object(o.a)(regeneratorRuntime.mark(function e() {
                    var n;
                    return regeneratorRuntime.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                (t.$App.is_ios || t.$App.is_android || t.$App.is_safari || t.$App.is_edge) && (t.accepted_video_stream_extensions.push("m3u8"),
                                t.$App.is_android && parseInt(t.$S.getAndroidVersion()) < 5 && (t.video_player_skin = "native")),
                                t.is_using_classic_poster = "native" == t.video_player_skin || !1,
                                t.pr = Math.random() <= parseFloat(t.$S.data.video.ap),
                                "native" == t.video_player_skin && "skin=native",
                                n = t.filterVideosManifest(t.$S.data.video.videos_manifest),
                                d.a.set(t.$S.data.video, "videos_manifest", h({}, n)),
                                t.$S.decodeVideosManifest(t.$S.data.video.videos_manifest);
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }, e)
                }))()
            },
            beforeDestroy: function() {
                this.$S.$off("VIDEOS_MANIFEST_DECODED", this.videosManifestDecoded),
                this.$EVT.$off("PLAYER_ON_POSTER_CLICK", this.onPosterClick),
                this.$EVT.$off("OPEN_VIDEO_SETTINGS", this.openVideoSettings),
                this.$EVT.$off("PLAYER_ON_PREROLL_AD_FAILURE", this.onPrerollAdFailure),
                this.$EVT.$off("PLAYER_REQUESTS_VIDEOS_MANIFEST", this.onPlayerRequestVideosManifest),
                this.$EVT.$off("PAGE_CLICKED", this.onPageClicked),
                this.$EVT.$off("PREMIUM_ALERT", this.premiumAlert),
                this.$EVT.$off("PLAYER_REQUESTS_TOGGLE_FULL_BROWSER_SCREEN", this.onPlayerRequestToggleFullBrowserScreen),
                this.$EVT.$off("PREROLL_ENDED_CONTENT_RESUMED", this.onPrerollEndedContentResumed),
                this.vjs_video_ref && this.vjs_video_ref.dispose()
            },
            methods: {
                filterVideosManifest: function(t) {
                    var e = this
                      , n = document.createElement("video")
                      , r = [];
                    return _.each(t.servers, function(t, i) {
                        var o = 0;
                        _.each(t.streams, function(t, r) {
                            var l = !1;
                            (_.includes([9, 10, 12, 14, 17], t.server_id) || n.canPlayType(t.mime_type)) && (l = !0),
                            l && (o++,
                            t.url && t.url.length > 0 && e.all_useable_video_streams.push(t))
                        }),
                        o > 0 && r.push(t)
                    }),
                    h(h({}, t), {}, {
                        servers: r
                    })
                },
                videosManifestDecoded: function() {
                    var t = this;
                    if (this.servers = this.$S.data.video.videos_manifest.servers,
                    this.pr && !this.is_using_classic_poster) {
                        var e = encodeURIComponent(this.poster_url)
                          , n = this.$S.data.video.pre;
                        this.iframe_src = "/omni-player/index.html?poster_url=".concat(e, "&c=").concat((new Date).getTime(), "#").concat(n)
                    } else
                        this.is_using_classic_poster = !0;
                    this.is_ready = !0,
                    setTimeout(function() {
                        t.player_bg_image = "url(".concat("https://hanime-cdn.com/images/video-player-fail-bg-v3.jpg", ")")
                    }, 1700)
                },
                onVolumeChanged: function() {
                    this.$S.save("preferred_volume", this.vjs_video_ref.volume()),
                    this.$S.save("preferred_is_muted", this.vjs_video_ref.muted())
                },
                onPosterClick: function() {
                    if (!this.is_view_recorded) {
                        if (this.is_view_recorded = !0,
                        this.is_using_classic_poster) {
                            this.is_using_classic_poster = !1;
                            var t = this.getInitialServerAndVideoStream();
                            this.selectServerVideoStream(t.server, t.video_stream)
                        }
                        this.$emit("video-clicked");
                        var e = 0
                          , n = 0;
                        try {
                            e = document.documentElement.clientWidth,
                            n = document.documentElement.clientHeight
                        } catch (t) {}
                        try {
                            this.$post("".concat(this.$getApiBaseUrl(), "/api/v8/hentai_videos/").concat(this.video.slug, "/play"), {
                                width: e,
                                height: n,
                                ab: "kh"
                            })
                        } catch (t) {}
                    }
                },
                setInitialTime: function() {
                    if (this.initial_time || this.startTime) {
                        var s = 0;
                        s = null != this.initial_time ? this.initial_time : this.startTime || 0;
                        try {
                            s = parseFloat(s)
                        } catch (t) {}
                        isNaN(s) || (l("setting current time to:", s),
                        this.vjs_video_ref.currentTime(s),
                        setTimeout(function() {}))
                    }
                },
                premiumAlert: function() {
                    var t = this;
                    this.$S.confirm({
                        title: "Premium Members Only",
                        body: "<p>Oops!  This video resolution is reserved for Premium Members only. =(</p><p>Go premium today to get additional benefits such as NO ADS, faster video streaming, FullHD 1080p videos, and more!</p>",
                        cancel_button_text: "OK",
                        confirm_button_text: "What is Premium?",
                        confirmation_callback: function() {
                            t.$EVT.$emit(t.$EVT.GOTO, "/premium")
                        }
                    })
                },
                selectServerVideoStream: function(t) {
                    var e = this
                      , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
                      , r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                      , o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    if (this.is_video_settings_dialog_visible = !1,
                    n) {
                        if ("premium_alert" == n.kind)
                            return this.premiumAlert();
                        if ("member_alert" == n.kind)
                            return void this.$EVT.$emit(this.$EVT.ACTIVATE_GENERAL_CONFIRMATION_DIALOG, {
                                is_persistent: !1,
                                is_mini_close_button_visible: !0,
                                is_cancel_button_visible: !0,
                                title: "Registered Members Only",
                                body: "<p>Oops!  This video resolution for ".concat(t.name, " server is for our signed in Members only. =(</p><p>Create an account today to sign in!  It's FREE. :o</p>"),
                                confirm_button_text: "Create Free Account",
                                confirmation_callback: function() {
                                    e.$EVT.$emit(e.$EVT.GOTO, "/create-account")
                                }
                            })
                    }
                    this.selected_server = t,
                    this.selected_video_stream = n,
                    o ? this.onServerVideoStreamChange(r) : this.applyVideoSource(r)
                },
                streamsToSources: function(t, e) {
                    var n = this
                      , r = [];
                    return _.each(t, function(t) {
                        var source = n.vsToSource(t);
                        source.selected = t.id == e.id,
                        r.push(source)
                    }),
                    r
                },
                vsToSource: function(t) {
                    if (!t)
                        return null;
                    var label = "auto" == t.height ? "AUTO" : "".concat(t.height, "P");
                    return {
                        src: t.signed_url || t.url,
                        type: t.mime_type,
                        label: label,
                        selected: !1,
                        kind: t.kind
                    }
                },
                applyVideoSource: function() {
                    var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
                      , e = encodeURIComponent(this.selected_video_stream.url)
                      , n = this.$S.data.video.player_base_url;
                    if ("native" == this.video_player_skin) {
                        var r = n.split("/");
                        r.splice(-1, 1),
                        n = r.join("/") + "/native.htm?"
                    }
                    var o = encodeURIComponent(this.poster_url);
                    "native" == this.video_player_skin ? this.iframe_src = "".concat(n, "&hv_id=").concat(this.video.id, "#").concat(e) : this.iframe_src = "".concat(n, "&#v2,").concat(this.video.id, ",").concat(this.video.slug, ",").concat(o, ",").concat(t ? "yes" : "no")
                },
                getInitialServerAndVideoStream: function() {
                    for (var t = this.getPreferredHeight(), e = _.orderBy(this.all_useable_video_streams, ["server_sequence"], ["desc"]), n = null, i = 0; i < e.length; ++i) {
                        var r = e[i];
                        if (r.height == t) {
                            n = r;
                            break
                        }
                    }
                    return n || (n = e[0]),
                    {
                        server: _.find(this.$S.data.video.videos_manifest.servers, {
                            id: n.server_id
                        }),
                        video_stream: n
                    }
                },
                getPreferredHeight: function() {
                    var t = this.$S.user_setting ? this.$S.user_setting.preferred_height : null;
                    return t && 1080 != t ? t : _.find(this.all_useable_video_streams, {
                        height: "720"
                    }) ? "720" : "480"
                },
                onPlayerRequestVideosManifest: function(t) {
                    var e = this;
                    return Object(o.a)(regeneratorRuntime.mark(function n() {
                        var r, o, data, l, c, _, i, d;
                        return regeneratorRuntime.wrap(function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    return r = e.$S.user ? "member" : "guest",
                                    n.next = 1,
                                    e.$get("".concat(e.$getApiBaseUrl(), "/api/v8/").concat(r, "/videos/").concat(e.video.id, "/manifest"));
                                case 1:
                                    o = n.sent,
                                    data = o.data,
                                    l = data.videos_manifest,
                                    c = l.servers[0],
                                    _ = null,
                                    i = 0;
                                case 2:
                                    if (!(i < c.streams.length)) {
                                        n.next = 4;
                                        break
                                    }
                                    if ("premium_alert" === (d = c.streams[i]).kind || "member_alert" === d.kind) {
                                        n.next = 3;
                                        break
                                    }
                                    return _ = d,
                                    n.abrupt("continue", 4);
                                case 3:
                                    ++i,
                                    n.next = 2;
                                    break;
                                case 4:
                                    e.selected_server = c,
                                    e.selected_video_stream = _,
                                    e.$S.data.video.videos_manifest = h({}, l),
                                    e.servers = l.servers,
                                    t.source.postMessage({
                                        kind: "VIDEOS_MANIFEST_RESPONSE",
                                        videos_manifest: l,
                                        selected_server: c,
                                        selected_video_stream: _
                                    }, t.origin);
                                case 5:
                                case "end":
                                    return n.stop()
                                }
                        }, n)
                    }))()
                },
                onPageClicked: function() {
                    this.$refs.player_iframe && this.$refs.player_iframe.contentWindow.postMessage({
                        kind: "PAGE_CLICKED"
                    }, "*")
                },
                onPlayerRequestToggleFullBrowserScreen: function() {
                    this.$refs.htv_video_player.classList.toggle("maximized")
                },
                onPrerollEndedContentResumed: function() {
                    this.player_bg_image = "url()";
                    var t = this.getInitialServerAndVideoStream();
                    this.selectServerVideoStream(t.server, t.video_stream, !0)
                },
                onPrerollAdFailure: function() {
                    var t = this;
                    return Object(o.a)(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    t.onPrerollEndedContentResumed();
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }, e)
                    }))()
                },
                openVideoSettings: function() {
                    this.is_video_settings_dialog_visible = !0
                },
                onVideoPlaybackSpeedChange: function(t) {
                    this.selected_playback_speed = t,
                    this.is_video_settings_dialog_visible = !1,
                    this.$refs.player_iframe && this.$refs.player_iframe.contentWindow.postMessage({
                        kind: "VIDEO_PLAYBACK_SPEED_CHANGE",
                        kind_id: t
                    }, "*")
                },
                onServerVideoStreamChange: function(t) {
                    this.$refs.player_iframe && this.$refs.player_iframe.contentWindow.postMessage({
                        kind: "VIDEO_STREAM_CHANGE",
                        server: this.selected_server,
                        video_stream: this.selected_video_stream
                    }, "*")
                }
            },
            computed: {
                poster_url: function() {
                    return this.$App.jetpackUrl(this.video.poster_url, 100, null, null, "cps")
                }
            }
        }
          , f = m
          , y = n(15)
          , component = Object(y.a)(f, function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                ref: "htv_video_player",
                staticClass: "htv-video-player",
                style: {
                    backgroundImage: t.player_bg_image
                }
            }, [t.iframe_src ? e("iframe", {
                ref: "player_iframe",
                class: "hvp-panel ".concat(t.$S.user && t.$S.user.is_able_to_access_premium ? "" : "ad-content-area banner-ad vertical-ad"),
                attrs: {
                    src: t.iframe_src,
                    frameborder: "0",
                    scrolling: "no",
                    allowfullscreen: "",
                    allow: "autoplay"
                }
            }) : t._e(), t._v(" "), t.is_using_classic_poster && t.is_ready ? e("div", {
                staticClass: "hvp-panel flex align-center justify-center pointer htvad",
                on: {
                    click: function(e) {
                        return t.onPosterClick()
                    }
                }
            }, [e("div", {
                staticClass: "poster",
                style: {
                    background: "transparent url(".concat(t.poster_url, ") center center / cover no-repeat")
                }
            }), t._v(" "), e("div", {
                staticClass: "play-btn flex justify-center align-center"
            }, [e("v-icon", {
                staticClass: "icon"
            }, [t._v("mdi-play")])], 1)]) : t._e(), t._v(" "), e("v-dialog", {
                attrs: {
                    "max-width": "500",
                    lazy: "",
                    "content-class": "htv-server-selector-dialog",
                    fullscreen: t.$S.browser_width < 600,
                    transition: t.$S.browser_width < 600 ? "dialog-bottom-transition" : "dialog-transition"
                },
                model: {
                    value: t.is_video_settings_dialog_visible,
                    callback: function(e) {
                        t.is_video_settings_dialog_visible = e
                    },
                    expression: "is_video_settings_dialog_visible"
                }
            }, [e("v-card", {
                staticClass: "htvssd-container"
            }, [e("v-card-title", {
                staticClass: "htvssd-title justify-center subheading primary-border-color"
            }, [e("span", [t._v("Video Settings")]), t._v(" "), e("v-btn", {
                staticClass: "htvssd-close my-0",
                attrs: {
                    icon: ""
                },
                on: {
                    click: function(e) {
                        t.is_video_settings_dialog_visible = !1
                    }
                }
            }, [e("v-icon", [t._v("mdi-close")])], 1)], 1), t._v(" "), e("v-card-text", {
                staticClass: "ma-0 pa-0 htvssd-body"
            }, [t.$App.is_android ? t._e() : e("div", {
                staticClass: "htvssd-playback-speed-container mt-4"
            }, [e("div", {
                staticClass: "px-3 py-0 htvssd-server-hints"
            }, [e("span", [t._v("PLAYBACK SPEED")])]), t._v(" "), e("v-btn-toggle", {
                staticClass: "playback-speed-btn-group",
                attrs: {
                    mandatory: ""
                },
                model: {
                    value: t.selected_playback_speed,
                    callback: function(e) {
                        t.selected_playback_speed = e
                    },
                    expression: "selected_playback_speed"
                }
            }, t._l(t.playback_speeds, function(n, r) {
                return e("v-btn", {
                    key: r,
                    staticClass: "playback-speed-btn",
                    attrs: {
                        flat: "",
                        value: n.value
                    },
                    on: {
                        click: function(e) {
                            return t.onVideoPlaybackSpeedChange(n.value)
                        }
                    }
                }, [t._v("\n              " + t._s(n.label) + "\n            ")])
            }), 1)], 1), t._v(" "), t.is_adaptive_streaming_server_present ? e("v-expansion-panel", {
                staticClass: "elevation-0"
            }, [e("v-expansion-panel-content", {
                staticClass: "htvssd-expansion",
                attrs: {
                    "expand-icon": "mdi-chevron-down",
                    ripple: ""
                }
            }, [e("div", {
                staticClass: "htvssd-help subheading pr-1",
                attrs: {
                    slot: "header"
                },
                slot: "header"
            }, [t._v("What is AUTO?")]), t._v(" "), e("v-card", [e("v-card-text", [e("p", [t._v("AUTO resolution uses adaptive streaming technology to\n                  display the best possible video resolution for you based\n                  on your current network conditions.")]), t._v(" "), e("p", [t._v("\n                  It will automatically increase and decrease video\n                  quality accordingly to offer the optimal viewing\n                  experience.\n                ")])])], 1)], 1)], 1) : t._e(), t._v(" "), t._l(t.servers, function(n, i) {
                return e("div", {
                    key: i,
                    staticClass: "htvssd-server mt-4"
                }, [e("div", {
                    staticClass: "flex row align-center px-3 py-0 htvssd-server-hints"
                }, [e("span", [t._v("VIDEO SERVER")]), t._v(" "), e("v-spacer"), t._v(" "), e("span", [t._v("SPEED")])], 1), t._v(" "), e("div", {
                    staticClass: "flex row align-center htvssd-server-toc py-2 pr-1"
                }, [e("div", {
                    staticClass: "pl-3"
                }, [t._v(t._s(n.name) + "\n              "), 0 == i ? e("span", {
                    staticClass: "htvssd-server-toc-recommended primary-color"
                }, [t._v("(Recommended)")]) : t._e()]), t._v(" "), e("v-spacer"), t._v(" "), e("div", {
                    staticClass: "htvssd-ratings"
                }, [e("div", {
                    staticClass: "flex row align-center"
                }, [e("div", {
                    staticClass: "htvssd-ratings-region"
                }, [t._v("NA")]), t._v(" "), e("div", {
                    staticClass: "htvssd-ratings-region"
                }, [t._v("EU")]), t._v(" "), e("div", {
                    staticClass: "htvssd-ratings-region"
                }, [t._v("Asia")])])])], 1), t._v(" "), t._l(n.streams, function(r, o) {
                    return e("div", {
                        directives: [{
                            name: "ripple",
                            rawName: "v-ripple"
                        }],
                        key: "vs-".concat(o),
                        class: "flex row align-center pl-3 pr-1 py-2 relative htvssd-server-vs ".concat(t.selected_video_stream && t.selected_video_stream.slug == r.slug ? "active" : ""),
                        on: {
                            click: function(e) {
                                return t.selectServerVideoStream(n, r, !0, !0)
                            }
                        }
                    }, [t.selected_video_stream && t.selected_video_stream.slug == r.slug ? e("div", {
                        staticClass: "htvssd-selected-indicator"
                    }) : t._e(), t._v(" "), t.selected_video_stream && t.selected_video_stream.slug == r.slug ? e("v-icon", {
                        staticClass: "htvssd-radio mr-2 primary-color"
                    }, [t._v("mdi-radiobox-marked")]) : e("v-icon", {
                        staticClass: "htvssd-radio mr-2"
                    }, [t._v("mdi-radiobox-blank")]), t._v(" "), e("span", {
                        staticClass: "htvssd-radio-text"
                    }, [t._v(t._s("auto" == r.height ? "AUTO (Best)" : "".concat(r.height, "P")))]), t._v(" "), r.url ? t._e() : e("v-icon", {
                        staticClass: "ml-1",
                        attrs: {
                            color: "primary",
                            small: ""
                        }
                    }, [t._v("mdi-crown")]), t._v(" "), e("v-spacer"), t._v(" "), e("div", {
                        staticClass: "htvssd-ratings"
                    }, [e("div", {
                        staticClass: "htvssd-ratings-region"
                    }, [t._l(n.na_rating, function(n) {
                        return e("v-icon", {
                            key: "star-".concat(n),
                            staticClass: "htvssd-ratings-region-star"
                        }, [t._v("mdi-star")])
                    }), t._v(" "), t._l(3 - n.na_rating, function(n) {
                        return e("v-icon", {
                            key: "inverse-star-".concat(n),
                            staticClass: "htvssd-ratings-region-inverse-star"
                        }, [t._v("mdi-star")])
                    })], 2), t._v(" "), e("div", {
                        staticClass: "htvssd-ratings-region"
                    }, [t._l(n.eu_rating, function(n) {
                        return e("v-icon", {
                            key: "star-".concat(n),
                            staticClass: "htvssd-ratings-region-star"
                        }, [t._v("mdi-star")])
                    }), t._v(" "), t._l(3 - n.eu_rating, function(n) {
                        return e("v-icon", {
                            key: "inverse-star-".concat(n),
                            staticClass: "htvssd-ratings-region-inverse-star"
                        }, [t._v("mdi-star")])
                    })], 2), t._v(" "), e("div", {
                        staticClass: "htvssd-ratings-region"
                    }, [t._l(n.asia_rating, function(n) {
                        return e("v-icon", {
                            key: "star-".concat(n),
                            staticClass: "htvssd-ratings-region-star"
                        }, [t._v("mdi-star")])
                    }), t._v(" "), t._l(3 - n.asia_rating, function(n) {
                        return e("v-icon", {
                            key: "inverse-star-".concat(n),
                            staticClass: "htvssd-ratings-region-inverse-star"
                        }, [t._v("mdi-star")])
                    })], 2)])], 1)
                })], 2)
            })], 2)], 1)], 1)], 1)
        }, [], !1, null, null, null);
        e.default = component.exports
    },
    336: function(t, n, r) {
        "use strict";
        r.r(n);
        r(45),
        r(22);
        var o = r(63)
          , c = r(5)
          , d = (r(160),
        r(27),
        r(1))
          , v = r.n(d)
          , h = {
            components: {
                "hentai-video-card-horizontal": r(313).default
            },
            props: ["playlistId", "currentHentaiVideo", "watchLaterPlaylistHentaiVideos", "likeDislikePlaylistHentaiVideos", "playlistHentaiVideos"],
            beforeCreate: function() {},
            data: function() {
                return {
                    panel_state: "UNINITIALIZED",
                    is_playlist_expanded: !0,
                    playlist: null,
                    playlist_owner: null,
                    playlist_owner_user_channel: null,
                    hvs: [],
                    current_index: -1,
                    offset: -24,
                    total: 0,
                    page_size: 24,
                    is_busy: !1
                }
            },
            mounted: function() {
                void 0 !== this.playlistId ? this.initializeData() : this.panel_state = "INVALID_PLAYLIST"
            },
            methods: {
                toggleCollapsePlaylist: function() {
                    this.is_playlist_expanded = !this.is_playlist_expanded
                },
                initializeScrollbars: function() {
                    if (!this.$App.is_safari)
                        try {
                            new SimpleBar(this.$refs.playlist_panel_simple_bar)
                        } catch (t) {
                            e(t)
                        }
                },
                initializeData: function() {
                    var t = this;
                    return Object(c.a)(regeneratorRuntime.mark(function e() {
                        var n;
                        return regeneratorRuntime.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    e.next = 1,
                                    t.showMore();
                                case 1:
                                    t.panel_state = "INITIALIZED",
                                    v.a.nextTick(function() {
                                        t.initializeScrollbars()
                                    }),
                                    e.next = 3;
                                    break;
                                case 2:
                                    e.prev = 2,
                                    n = e.catch(0),
                                    l(n),
                                    t.panel_state = "UNAUTHORIZED";
                                case 3:
                                    t.is_busy = !1;
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }, e, null, [[0, 2]])
                    }))()
                },
                showMore: function() {
                    var t = this;
                    return Object(c.a)(regeneratorRuntime.mark(function e() {
                        var n, r, l, c, d, data, v;
                        return regeneratorRuntime.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (!t.is_busy) {
                                        e.next = 1;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 1:
                                    return t.is_busy = !0,
                                    t.offset += t.page_size,
                                    e.next = 2,
                                    t.$get("".concat(t.$getApiBaseUrl(), "/api/v8/playlist_hentai_videos?playlist_id=").concat(t.playlistId, "&__order=sequence,DESC&__offset=").concat(t.offset, "&__count=").concat(t.page_size, "&personalized=1"));
                                case 2:
                                    d = e.sent,
                                    data = d.data,
                                    v = data.fapi,
                                    (n = t.hvs).splice.apply(n, [t.hvs.length, 0].concat(Object(o.a)(v.data))),
                                    t.playlist = data.playlist,
                                    t.playlist_owner = data.playlist_owner,
                                    t.playlist_owner_user_channel = data.playlist_owner_user_channel,
                                    t.total = v.meta.count,
                                    -1 == t.current_index && _.each(t.hvs, function(e, n) {
                                        if (e.id == t.currentHentaiVideo.id)
                                            return t.current_index = n + 1,
                                            !1
                                    }),
                                    t.watchLaterPlaylistHentaiVideos && (r = t.watchLaterPlaylistHentaiVideos).splice.apply(r, [t.watchLaterPlaylistHentaiVideos.length, 0].concat(Object(o.a)(data.watch_later_playlist_hentai_videos))),
                                    t.likeDislikePlaylistHentaiVideos && (l = t.likeDislikePlaylistHentaiVideos).splice.apply(l, [t.likeDislikePlaylistHentaiVideos.length, 0].concat(Object(o.a)(data.like_dislike_playlist_hentai_videos))),
                                    t.playlistHentaiVideos && (c = t.playlistHentaiVideos).splice.apply(c, [t.playlistHentaiVideos.length, 0].concat(Object(o.a)(data.playlist_hentai_videos))),
                                    t.is_busy = !1;
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }, e)
                    }))()
                }
            },
            computed: {
                avatar_url: function() {
                    var t = this.playlist_owner;
                    if (t) {
                        if (t.avatar_url)
                            return this.$App.staticallyUrl(t.avatar_url, 250, "avatar");
                        var i = t.id % 59;
                        return "https://hanime-cdn.com/images/default-avatars/".concat(i, ".png")
                    }
                    return ""
                }
            }
        }
          , m = r(15)
          , component = Object(m.a)(h, function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                class: ["htv-playlist-panel flex column", {
                    expanded: t.is_playlist_expanded && t.$S.browser_width < 960
                }]
            }, [e("div", {
                staticClass: "hpp-header"
            }, [e("div", {
                directives: [{
                    name: "ripple",
                    rawName: "v-ripple"
                }],
                staticClass: "header__collapse flex justify-right align-center",
                on: {
                    click: function(e) {
                        return t.toggleCollapsePlaylist()
                    }
                }
            }, [e("v-icon", [t._v(t._s(t.is_playlist_expanded ? "mdi-chevron-up" : "mdi-chevron-down"))])], 1), t._v(" "), t.playlist ? [e("router-link", {
                staticClass: "header__avatar_bg",
                attrs: {
                    to: "/channels/".concat(t.playlist_owner_user_channel.slug)
                }
            }, [e("div", {
                staticClass: "header__avatar_bg__image",
                style: {
                    background: "#303030 url(".concat(t.avatar_url, ") center center / cover no-repeat")
                }
            })]), t._v(" "), e("div", {
                staticClass: "header__title"
            }, [t._v(t._s(t.playlist.title))]), t._v(" "), e("div", {
                staticClass: "header__subtext"
            }, [e("router-link", {
                attrs: {
                    to: "/channels/".concat(t.playlist_owner_user_channel.slug),
                    title: "Go to ".concat(t.playlist_owner.name, "'s Channel")
                }
            }, [t._v(t._s(t.playlist_owner.name))]), t._v(" "), t.current_index > -1 ? e("span", [t._v(" ‐ " + t._s(t.current_index) + " / " + t._s(t.playlist.count))]) : e("span", [t._v(" ‐ " + t._s(t.playlist.count) + " videos")])], 1), t._v(" "), e("div", {
                staticClass: "header__sorting flex row"
            }, [e("v-btn", {
                class: {
                    active: t.$S.shuffle
                },
                attrs: {
                    icon: ""
                },
                on: {
                    click: function(e) {
                        return t.$EVT.$emit(t.$EVT.TOGGLE_SHUFFLE)
                    }
                }
            }, [e("v-icon", [t._v("mdi-shuffle-variant")])], 1), t._v(" "), e("v-btn", {
                attrs: {
                    icon: "",
                    to: "/playlists/".concat(t.playlist.slug)
                }
            }, [e("v-icon", [t._v("mdi-view-grid")])], 1), t._v(" "), e("div", {
                staticClass: "header__views flex justify-right align-center"
            }, [t._v(t._s(t.playlist.views.toLocaleString("en-US")) + " views")])], 1)] : t._e()], 2), t._v(" "), e("div", {
                ref: "playlist_panel_simple_bar",
                class: ["hpp-body", {
                    "ios-scrollable": t.$App.is_safari
                }]
            }, [t.playlist ? e("div", [t._l(t.hvs, function(n, i) {
                return e("hentai-video-card-horizontal", {
                    key: "playlist_hv_".concat(i, "_").concat(n.id),
                    attrs: {
                        uid: "playlist_hv_".concat(i, "_").concat(n.id),
                        "hentai-video": n,
                        playlist: t.playlist,
                        "is-now-playing": n.id == t.currentHentaiVideo.id,
                        isHasActions: !0
                    }
                })
            }), t._v(" "), t.offset + t.page_size < t.playlist.count ? e("v-btn", {
                staticClass: "mb-5",
                attrs: {
                    color: "primary",
                    flat: "",
                    large: "",
                    block: "",
                    disabled: this.is_busy,
                    loading: this.is_busy
                },
                on: {
                    click: function(e) {
                        return t.showMore()
                    }
                }
            }, [t._v("\n        Show More\n        "), e("span", {
                staticClass: "spins",
                attrs: {
                    slot: "loader"
                },
                slot: "loader"
            }, [e("v-icon", [t._v("mdi-loading")])], 1)]) : t._e()], 2) : "UNAUTHORIZED" == t.panel_state ? e("div", {
                staticClass: "scroller_loading flex justify-center align-center"
            }, [t._v("This playlist is set to private.")]) : e("div", {
                staticClass: "scroller_loading flex justify-center align-center fill-height"
            }, [e("v-progress-circular", {
                attrs: {
                    indeterminate: "",
                    color: "primary"
                }
            })], 1)]), t._v(" "), e("div", {
                staticClass: "hpp-scroll-shadow"
            })])
        }, [], !1, null, null, null);
        n.default = component.exports
    },
    337: function(t, e, n) {
        "use strict";
        n.r(e);
        n(22);
        var r = {
            props: ["pg"],
            beforeCreate: function() {},
            data: function() {
                return {
                    stills: null
                }
            },
            beforeMount: function() {},
            mounted: function() {},
            methods: {},
            computed: {
                cover_url: function() {
                    return this.$App.staticallyUrl(this.pg.hentai_video.cover_url, null, "cps", 100)
                }
            }
        }
          , o = n(15)
          , component = Object(o.a)(r, function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                staticClass: "htv-video-page-info"
            }, [e("div", {
                staticClass: "clearfix"
            }, [e("div", {
                staticClass: "hvpi-cover-container"
            }, [t._m(0)]), t._v(" "), e("div", {
                staticClass: "hvpi-main flex column"
            }, [e("div", {
                staticClass: "hvpim-brand-censor flex"
            }, [e("div", {
                staticClass: "flex wrap"
            }, [e("div", {
                staticClass: "hvpimbc-item full"
            }, [e("div", {
                staticClass: "hvpimbc-header grey--text text--darken-2"
            }, [t._v("Brand")]), t._v(" "), t._m(1)], 1), t._v(" "), e("div", {
                staticClass: "hvpimbc-item full"
            }, [e("div", {
                staticClass: "hvpimbc-header grey--text text--darken-2"
            }, [t._v("Brand Uploads")]), t._v(" "), e("div", {
                staticClass: "hvpimbc-text grey--text"
            }, [t._v(t._s(t.pg.brand.count))])]), t._v(" "), e("div", {
                staticClass: "hvpimbc-item"
            }, [e("div", {
                staticClass: "hvpimbc-header grey--text text--darken-2"
            }, [t._v("Release Date")]), t._v(" "), t._m(2)]), t._v(" "), e("div", {
                staticClass: "hvpimbc-item"
            }, [e("div", {
                staticClass: "hvpimbc-header grey--text text--darken-2"
            }, [t._v("Upload Date")]), t._v(" "), t._m(3)]), t._v(" "), e("div", {
                staticClass: "hvpimbc-item full"
            }, [e("div", {
                staticClass: "hvpimbc-header grey--text text--darken-2"
            }, [t._v("Alternate Titles")]), t._v(" "), t.pg.hentai_video.titles.length > 1 ? e("h2", t._l(t.pg.hentai_video.titles, function(n, r) {
                return e("span", {
                    key: "at-".concat(r),
                    staticClass: "mr-3 grey--text"
                }, [t._v(t._s(n.title))])
            }), 0) : e("div", {
                staticClass: "hvpimbc-text grey--text"
            }, [e("em", [t._v("not available")])])])]), t._v(" "), t.pg.hentai_video.is_censored ? e("router-link", {
                directives: [{
                    name: "ripple",
                    rawName: "v-ripple"
                }],
                staticClass: "hvpimbc-censorship-btn",
                attrs: {
                    to: "/browse/tags/censored",
                    rel: "nofollow",
                    alt: "This video is currently censored.",
                    title: "This video is currently censored."
                }
            }, [t._v("CENSORED")]) : e("router-link", {
                directives: [{
                    name: "ripple",
                    rawName: "v-ripple"
                }],
                staticClass: "hvpimbc-censorship-btn unc",
                attrs: {
                    to: "/browse/tags/uncensored",
                    rel: "nofollow",
                    alt: "This video is in uncensored HD!",
                    title: "This video is in uncensored HD!"
                }
            }, [t._v("UNCENSORED")])], 1)])])])
        }, [function() {
            var t = this;
            return (0,
            t._self._c)("img", {
                staticClass: "hvpi-cover",
                attrs: {
                    src: t.cover_url,
                    alt: "".concat(t.pg.hentai_video.name, " dvd blu-ray video cover art"),
                    referrerpolicy: "origin"
                }
            })
        }
        , function() {
            var t = this;
            return (0,
            t._self._c)("router-link", {
                staticClass: "hvpimbc-text",
                attrs: {
                    to: "/browse/brands/".concat(t.pg.brand.slug),
                    rel: "nofollow",
                    alt: "Explore more video uploads for ".concat(t.pg.brand.title),
                    title: "Explore more video uploads for ".concat(t.pg.brand.title)
                }
            }, [t._v(t._s(t.pg.hentai_video.brand))])
        }
        , function() {
            var t = this;
            return (0,
            t._self._c)("div", {
                staticClass: "hvpimbc-text grey--text"
            }, [t._v(t._s(t.$S.dateHuman(t.pg.hentai_video.released_at, "M dd, yyyy")))])
        }
        , function() {
            var t = this;
            return (0,
            t._self._c)("div", {
                staticClass: "hvpimbc-text grey--text"
            }, [t._v(t._s(t.$S.dateHuman(t.pg.hentai_video.created_at, "M dd, yyyy")))])
        }
        ], !1, null, null, null);
        e.default = component.exports
    },
    338: function(t, e, n) {
        "use strict";
        n.r(e);
        n(45);
        var r = n(5)
          , o = (n(27),
        n(28),
        n(77),
        n(79),
        n(20),
        n(80),
        n(54),
        n(22),
        n(14),
        n(19),
        n(39),
        n(40),
        n(47),
        n(1))
          , c = n.n(o);
        function d(t, e) {
            var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (!n) {
                if (Array.isArray(t) || (n = function(t, a) {
                    if (t) {
                        if ("string" == typeof t)
                            return v(t, a);
                        var e = {}.toString.call(t).slice(8, -1);
                        return "Object" === e && t.constructor && (e = t.constructor.name),
                        "Map" === e || "Set" === e ? Array.from(t) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? v(t, a) : void 0
                    }
                }(t)) || e && t && "number" == typeof t.length) {
                    n && (t = n);
                    var r = 0
                      , o = function() {};
                    return {
                        s: o,
                        n: function() {
                            return r >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[r++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: o
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var l, a = !0, u = !1;
            return {
                s: function() {
                    n = n.call(t)
                },
                n: function() {
                    var t = n.next();
                    return a = t.done,
                    t
                },
                e: function(t) {
                    u = !0,
                    l = t
                },
                f: function() {
                    try {
                        a || null == n.return || n.return()
                    } finally {
                        if (u)
                            throw l
                    }
                }
            }
        }
        function v(t, a) {
            (null == a || a > t.length) && (a = t.length);
            for (var e = 0, n = Array(a); e < a; e++)
                n[e] = t[e];
            return n
        }
        var h = {
            components: {
                "htv-ad": n(309).default,
                "htv-playlist-horizontal": n(345).default,
                "hentai-video-card-horizontal": n(313).default
            },
            props: ["pg"],
            beforeCreate: function() {},
            data: function() {
                return {
                    related_playlists: null,
                    users_hash: {},
                    is_related_playlists_fetched: !1
                }
            },
            beforeMount: function() {
                this.fetchRelatedPlaylists()
            },
            methods: {
                fetchRelatedPlaylists: function() {
                    var t = this;
                    return Object(r.a)(regeneratorRuntime.mark(function e() {
                        var n, r, data, o;
                        return regeneratorRuntime.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return n = t.$route.query.playlist_id,
                                    e.prev = 1,
                                    e.next = 2,
                                    t.$get("".concat(t.$getApiBaseUrl(), "/api/v8/playlists?source=related&hv_id=").concat(t.pg.hentai_video.id));
                                case 2:
                                    return r = e.sent,
                                    data = r.data,
                                    t.related_playlists = _.filter(data.playlists, function(t) {
                                        return t.id != n
                                    }),
                                    e.next = 3,
                                    t.fetchRelatedPlaylistUsers();
                                case 3:
                                    e.next = 5;
                                    break;
                                case 4:
                                    e.prev = 4,
                                    o = e.catch(1),
                                    l("Failed to fetch related playlists:"),
                                    l(o);
                                case 5:
                                    t.is_related_playlists_fetched = !0;
                                case 6:
                                case "end":
                                    return e.stop()
                                }
                        }, e, null, [[1, 4]])
                    }))()
                },
                fetchRelatedPlaylistUsers: function() {
                    var t = this;
                    return Object(r.a)(regeneratorRuntime.mark(function e() {
                        var n, r, o, _, v, data, h, m, f, y, k;
                        return regeneratorRuntime.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    n = "",
                                    r = d(t.related_playlists);
                                    try {
                                        for (r.s(); !(o = r.n()).done; )
                                            _ = o.value,
                                            n += "&user_ids[]=".concat(_.user_id)
                                    } catch (t) {
                                        r.e(t)
                                    } finally {
                                        r.f()
                                    }
                                    return e.prev = 1,
                                    e.next = 2,
                                    t.$get("".concat(t.$getApiBaseUrl(), "/rapi/v7/users?source=simple").concat(n));
                                case 2:
                                    v = e.sent,
                                    data = v.data,
                                    h = {},
                                    m = d(data);
                                    try {
                                        for (m.s(); !(f = m.n()).done; )
                                            y = f.value,
                                            h["user_id_".concat(y.id)] = y
                                    } catch (t) {
                                        m.e(t)
                                    } finally {
                                        m.f()
                                    }
                                    c.a.set(t, "users_hash", h),
                                    e.next = 4;
                                    break;
                                case 3:
                                    e.prev = 3,
                                    k = e.catch(1),
                                    l("Failed to fetch related playlists' users:"),
                                    l(k);
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }, e, null, [[1, 3]])
                    }))()
                }
            }
        }
          , m = n(15)
          , component = Object(m.a)(h, function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                class: ["related flex column", {
                    "fill-height": !t.$route.query.playlist_id && t.$S.browser_width >= 960
                }]
            }, [e("div", {
                staticClass: "related-content",
                attrs: {
                    id: "related_content"
                }
            }, [!t.$route.query.playlist_id && t.is_related_playlists_fetched && t.pg.next_hentai_video ? e("div", {
                staticClass: "up-next rc-section"
            }, [e("div", {
                staticClass: "rcs-title"
            }, [t._v("Up Next:")]), t._v(" "), e("hentai-video-card-horizontal", {
                staticClass: "unbound",
                attrs: {
                    uid: "up_next_hentai_videos-".concat(t.pg.next_hentai_video.id),
                    "hentai-video": t.pg.next_hentai_video,
                    playlist: t.pg.specified_playlist,
                    isHasActions: !0
                }
            })], 1) : t._e(), t._v(" "), t.$S.is_mounted && t.$S.browser_width >= 960 ? e("div", {
                staticClass: "relative rc-section",
                staticStyle: {
                    width: "100%"
                }
            }, [e("htv-ad", {
                class: "ntv hidden-sm-and-down flex row my-3",
                attrs: {
                    placement: "ntv_0",
                    data: t.pg.bs
                }
            })], 1) : t._e(), t._v(" "), t.pg.hentai_franchise_hentai_videos.length > 1 ? e("div", {
                staticClass: "rc-section"
            }, [t._m(0), t._v(" "), t._l(t.pg.hentai_franchise_hentai_videos, function(n, i) {
                return e("hentai-video-card-horizontal", {
                    key: i,
                    staticClass: "unbound",
                    attrs: {
                        uid: "hentai_franchise_hentai_videos-".concat(i, "-").concat(n.id),
                        "hentai-video": n,
                        playlist: t.pg.specified_playlist,
                        "is-now-playing": n.id == t.pg.hentai_video.id,
                        isHasActions: !0
                    }
                })
            })], 2) : t._e(), t._v(" "), t.is_related_playlists_fetched && t.related_playlists && t.related_playlists.length > 0 ? e("div", {
                staticClass: "rc-section"
            }, [e("div", {
                staticClass: "rcs-title"
            }, [t._v("Related playlists:")]), t._v(" "), t._l(t.related_playlists, function(n, i) {
                return e("htv-playlist-horizontal", {
                    key: i,
                    staticClass: "unbound",
                    attrs: {
                        playlist: n,
                        user: t.users_hash["user_id_".concat(n.user_id)]
                    }
                })
            })], 2) : t._e()])])
        }, [function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                staticClass: "rcs-title"
            }, [t._v("More from "), e("strong", [t._v(t._s(t.pg.hentai_franchise.title))]), t._v(" series:")])
        }
        ], !1, null, null, null);
        e.default = component.exports
    },
    339: function(t, e, n) {
        "use strict";
        n.r(e);
        n(28),
        n(77),
        n(45);
        var r = {
            props: ["pg"],
            beforeCreate: function() {},
            data: function() {
                return {
                    stills: null
                }
            },
            beforeMount: function() {},
            mounted: function() {
                this.calculateStills(this.$S.data.video.hentai_video_storyboards)
            },
            methods: {
                calculateStills: function(t) {
                    if (0 != t.length) {
                        for (var e = t[0].frame_height, n = t[0].frame_width, r = t[0].num_total_frames, o = t[0].num_horizontal_frames * t[0].num_vertical_frames, l = [], i = 0; i < 12; i++) {
                            var c = Math.floor(r / 12 * i);
                            0 == c && (c = 4);
                            var _ = Math.floor(c / o);
                            _ >= t.length ? _ = t.length - 1 : _ < 0 && (_ = 0);
                            var d = t[_].url
                              , v = this.$App.jetpackUrl(d, 80, null, null, "cps-no-random")
                              , h = "url(".concat(v, ")")
                              , m = (Math.floor(c / t[0].num_horizontal_frames) - _ * t[0].num_vertical_frames) * e
                              , f = c % t[0].num_horizontal_frames * n
                              , style = {
                                background: "transparent ".concat(h, " -").concat(f, "px -").concat(m, "px no-repeat"),
                                width: "".concat(n, "px"),
                                height: "".concat(e, "px")
                            };
                            l.push({
                                id: i,
                                style: style
                            })
                        }
                        this.stills = l
                    }
                }
            },
            computed: {}
        }
          , o = n(15)
          , component = Object(o.a)(r, function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                staticClass: "htv-video-page-info"
            }, [e("div", {
                staticClass: "hvpi-summary"
            }, [e("div", {
                staticClass: "hvpis-text grey--text text--lighten-1"
            }, [t._l(t.pg.hentai_tags, function(n, i) {
                return e("v-btn", {
                    key: i,
                    staticClass: "ml-0 mr-3",
                    attrs: {
                        outline: "",
                        color: "grey",
                        rel: "nofollow",
                        to: "/browse/tags/".concat(n.text),
                        alt: "Explore more videos that have the ".concat(n.text, " tag."),
                        title: "Explore more videos that have the ".concat(n.text, " tag.")
                    }
                }, [t._v(t._s(n.text))])
            }), t._v(" "), e("div", {
                staticClass: "mt-3 mb-0 hvpist-description",
                domProps: {
                    innerHTML: t._s(t.pg.hentai_video.description)
                }
            })], 2), t._v(" "), e("div", {
                staticClass: "flex row wrap mt-3"
            }, t._l(t.stills, function(t, i) {
                return e("div", {
                    key: "still-".concat(i, "-").concat(t.id),
                    staticClass: "below_fold__grouping__actions__desc__still",
                    style: t.style
                })
            }), 0)])])
        }, [], !1, null, null, null);
        e.default = component.exports
    },
    343: function(t, n, r) {
        "use strict";
        r.r(n);
        r(45),
        r(22);
        var o = r(5)
          , c = r(63)
          , _ = (r(27),
        r(1))
          , d = r.n(_)
          , v = {
            name: "Comment",
            components: {
                CommentInput: r(321).default
            },
            props: ["dataKey", "depth", "kind", "parent", "userComment", "myFlagsHash", "myVotesHash"],
            beforeCreate: function() {},
            data: function() {
                return {
                    mode: null,
                    active_sort_slug: null,
                    child_comments: [],
                    offset: -12,
                    page_size: 12,
                    is_replies_visible: !1
                }
            },
            methods: {
                onChildCommentCreatedCallback: function(t) {
                    l("received child created event. kind:", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null),
                    l("this.kind:", this.kind),
                    "hthread_comment_comment" == this.kind ? this.$emit("created-user-comment", t) : (this.userComment.num_replies += 1,
                    this.child_comments = [t].concat(Object(c.a)(this.child_comments)))
                },
                toggleUpvote: function() {
                    var t = this;
                    return Object(o.a)(regeneratorRuntime.mark(function n() {
                        var r;
                        return regeneratorRuntime.wrap(function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    if (t.$S.user) {
                                        n.next = 1;
                                        break
                                    }
                                    return n.abrupt("return", t.$EVT.$emit(t.$EVT.ACTIVATE_GENERAL_CONFIRMATION_DIALOG, {
                                        is_persistent: !1,
                                        is_mini_close_button_visible: !0,
                                        is_cancel_button_visible: !0,
                                        title: "Sign In Required",
                                        body: "You need to be signed in to be able to upvote this comment.",
                                        confirm_button_text: "Sign In",
                                        confirmation_callback: function() {
                                            t.$EVT.$emit(t.$EVT.GOTO, "/sign-in")
                                        }
                                    }));
                                case 1:
                                    if (!t.$S.is_loading) {
                                        n.next = 2;
                                        break
                                    }
                                    return n.abrupt("return");
                                case 2:
                                    if (t.$S.is_loading = !0,
                                    n.prev = 3,
                                    !t.i_upvoted_this_comment) {
                                        n.next = 5;
                                        break
                                    }
                                    return n.next = 4,
                                    t.$post("".concat(t.$getApiBaseUrl(), "/api/v8/").concat(t.kind, "s/").concat(t.userComment.id, "/unvote"), {});
                                case 4:
                                    n.sent,
                                    t.userComment.upvotes--,
                                    d.a.delete(t.myVotesHash, t.userComment.id),
                                    n.next = 9;
                                    break;
                                case 5:
                                    if (!t.i_downvoted_this_comment) {
                                        n.next = 7;
                                        break
                                    }
                                    return n.next = 6,
                                    t.$post("".concat(t.$getApiBaseUrl(), "/api/v8/").concat(t.kind, "s/").concat(t.userComment.id, "/vote"), {
                                        vote: 1
                                    });
                                case 6:
                                    n.sent,
                                    t.userComment.upvotes++,
                                    t.userComment.downvotes--,
                                    d.a.set(t.myVotesHash, t.userComment.id, 1),
                                    n.next = 9;
                                    break;
                                case 7:
                                    return n.next = 8,
                                    t.$post("".concat(t.$getApiBaseUrl(), "/api/v8/").concat(t.kind, "s/").concat(t.userComment.id, "/vote"), {
                                        vote: 1
                                    });
                                case 8:
                                    n.sent,
                                    t.userComment.upvotes++,
                                    d.a.set(t.myVotesHash, t.userComment.id, 1);
                                case 9:
                                    n.next = 11;
                                    break;
                                case 10:
                                    n.prev = 10,
                                    r = n.catch(3),
                                    e(r);
                                case 11:
                                    t.$S.is_loading = !1;
                                case 12:
                                case "end":
                                    return n.stop()
                                }
                        }, n, null, [[3, 10]])
                    }))()
                },
                toggleDownvote: function() {
                    var t = this;
                    return Object(o.a)(regeneratorRuntime.mark(function n() {
                        var r;
                        return regeneratorRuntime.wrap(function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    if (t.$S.user) {
                                        n.next = 1;
                                        break
                                    }
                                    return n.abrupt("return", t.$EVT.$emit(t.$EVT.ACTIVATE_GENERAL_CONFIRMATION_DIALOG, {
                                        is_persistent: !1,
                                        is_mini_close_button_visible: !0,
                                        is_cancel_button_visible: !0,
                                        title: "Sign In Required",
                                        body: "You need to be signed in to be able to downvote this comment.",
                                        confirm_button_text: "Sign In",
                                        confirmation_callback: function() {
                                            t.$EVT.$emit(t.$EVT.GOTO, "/sign-in")
                                        }
                                    }));
                                case 1:
                                    if (!t.$S.is_loading) {
                                        n.next = 2;
                                        break
                                    }
                                    return n.abrupt("return");
                                case 2:
                                    if (t.$S.is_loading = !0,
                                    n.prev = 3,
                                    !t.i_downvoted_this_comment) {
                                        n.next = 5;
                                        break
                                    }
                                    return n.next = 4,
                                    t.$post("".concat(t.$getApiBaseUrl(), "/api/v8/").concat(t.kind, "s/").concat(t.userComment.id, "/unvote"), {});
                                case 4:
                                    n.sent,
                                    t.userComment.downvotes--,
                                    d.a.delete(t.myVotesHash, t.userComment.id),
                                    n.next = 9;
                                    break;
                                case 5:
                                    if (!t.i_upvoted_this_comment) {
                                        n.next = 7;
                                        break
                                    }
                                    return n.next = 6,
                                    t.$post("".concat(t.$getApiBaseUrl(), "/api/v8/").concat(t.kind, "s/").concat(t.userComment.id, "/vote"), {
                                        vote: -1
                                    });
                                case 6:
                                    n.sent,
                                    t.userComment.upvotes--,
                                    t.userComment.downvotes++,
                                    d.a.set(t.myVotesHash, t.userComment.id, -1),
                                    n.next = 9;
                                    break;
                                case 7:
                                    return n.next = 8,
                                    t.$post("".concat(t.$getApiBaseUrl(), "/api/v8/").concat(t.kind, "s/").concat(t.userComment.id, "/vote"), {
                                        vote: -1
                                    });
                                case 8:
                                    n.sent,
                                    t.userComment.downvotes++,
                                    d.a.set(t.myVotesHash, t.userComment.id, -1);
                                case 9:
                                    n.next = 11;
                                    break;
                                case 10:
                                    n.prev = 10,
                                    r = n.catch(3),
                                    e(r);
                                case 11:
                                    t.$S.is_loading = !1;
                                case 12:
                                case "end":
                                    return n.stop()
                                }
                        }, n, null, [[3, 10]])
                    }))()
                },
                cancel: function() {
                    this.mode = null
                },
                toggleShowHideReplies: function() {
                    this.is_replies_visible ? (this.offset = -1 * this.page_size,
                    d.a.set(this, "child_comments", [])) : this.showMore(),
                    this.is_replies_visible = !this.is_replies_visible
                },
                showMore: function() {
                    this.$S.data[this.dataKey].comments_system.showMore(this, this.kind, "".concat(this.kind, "_comment"))
                }
            },
            computed: {
                input_kind: function() {
                    return "reply" == this.mode ? "hthread_comment_comment" == this.kind ? "hthread_comment_comment" : "".concat(this.kind, "_comment") : this.kind
                },
                avatar_url: function() {
                    var t = this.$S.data[this.dataKey].users_hash["users/".concat(this.userComment.original_poster_user_id)];
                    return t ? this.$App.jetpackUrl(t.effective_avatar_url, 100, null, null, "apbcb") : ""
                },
                user_channel_url: function() {
                    var t = this.$S.data[this.dataKey].users_hash["users/".concat(this.userComment.original_poster_user_id)];
                    return t && t.user_channel ? "/channels/".concat(t.user_channel.slug) || !1 : ""
                },
                user: function() {
                    return this.$S.data[this.dataKey].users_hash["users/".concat(this.userComment.original_poster_user_id)]
                },
                time_ago: function() {
                    var t = this.userComment
                      , e = this.$S.data[this.dataKey].now - new Date(1e3 * parseInt(t.created_at_unix));
                    if (e <= 6e4)
                        return "a few seconds ago";
                    if (e <= 36e5) {
                        var n = parseInt(e / 6e4);
                        return n < 2 ? "a minute ago" : "".concat(n, " minutes ago")
                    }
                    if (e <= 864e5) {
                        var r = parseInt(e / 36e5);
                        return r < 2 ? "an hour ago" : "".concat(r, " hours ago")
                    }
                    if (e <= 6048e5) {
                        var o = parseInt(e / 864e5);
                        return o < 2 ? "yesterday" : "".concat(o, " days ago")
                    }
                    if (e <= 2592e6) {
                        var l = parseInt(e / 6048e5);
                        return l < 2 ? "last week" : "".concat(l, " weeks ago")
                    }
                    var c = parseInt(e / 2592e6);
                    return "".concat(c, " months ago")
                },
                i_upvoted_this_comment: function() {
                    return 1 == this.$S.data[this.dataKey]["my_".concat(this.kind, "s_votes_hash")][this.userComment.id]
                },
                i_downvoted_this_comment: function() {
                    return -1 == this.$S.data[this.dataKey]["my_".concat(this.kind, "s_votes_hash")][this.userComment.id]
                },
                reply_to_user: function() {
                    return this.$S.data[this.dataKey].users_hash["users/".concat(this.userComment.reply_to_user_id)]
                }
            }
        }
          , h = v
          , m = r(15)
          , component = Object(m.a)(h, function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                staticClass: "user_comment_thread"
            }, [e("div", {
                class: "user_comment ".concat(t.userComment.is_first ? "first" : "", " flex row ").concat(0 == t.depth ? "pt-2" : "")
            }, [t.depth > 0 ? e("div", {
                staticClass: "uc_depth_line_container flex justify-center"
            }, [e("div", {
                staticClass: "line_down full-height"
            })]) : t._e(), t._v(" "), t.depth > 1 ? e("div", {
                staticClass: "uc_depth_line_container flex justify-center"
            }, [e("div", {
                staticClass: "line_down"
            })]) : t._e(), t._v(" "), e("div", {
                class: "uc_left_container flex column align-center ".concat(t.depth > 0 ? "mt-2" : "")
            }, [e("router-link", {
                staticClass: "uc_avatar_container",
                attrs: {
                    to: t.user_channel_url
                }
            }, [e("div", {
                staticClass: "uc_avatar",
                style: {
                    background: "transparent url(".concat(t.avatar_url, ") center center / cover no-repeat")
                }
            })]), t._v(" "), t.userComment.is_first ? e("div", {
                staticClass: "uc_avatar_first"
            }, [e("div", {
                staticClass: "uc_avatar_first_text"
            }, [t._v("1st")]), t._v(" "), e("v-icon", {
                staticClass: "uc_avatar_first_icon primary-color"
            }, [t._v("mdi-trophy")])], 1) : e("div", {
                staticClass: "line_down flex mt-2"
            })], 1), t._v(" "), e("div", {
                class: "uc_comment_details flex column ".concat(t.depth > 0 ? "mt-2" : "")
            }, [e("v-btn", {
                class: "uc_menu_action_button user_comment_menu_anchor_".concat(t.kind, "_").concat(t.userComment.id),
                attrs: {
                    icon: ""
                },
                on: {
                    click: function(e) {
                        return t.$EVT.$emit(t.$EVT.ACTIVATE_USER_COMMENT_MENU_AROUND, t.kind, t.userComment, ".user_comment_menu_anchor_".concat(t.kind, "_").concat(t.userComment.id))
                    }
                }
            }, [e("v-icon", [t._v("mdi-dots-vertical")])], 1), t._v(" "), e("div", {
                staticClass: "uc_name_line flex row align-right"
            }, [t.user ? e("router-link", {
                class: "uc_username primary-color cut_text",
                attrs: {
                    to: t.user_channel_url
                }
            }, [t._v(t._s(t.user.name)), e("span", {
                staticClass: "uc_discriminator"
            }, [t._v("#" + t._s(t.user.number))])]) : t._e()], 1), t._v(" "), e("div", {
                staticClass: "uc_time_ago"
            }, [t._v(t._s(t.time_ago))]), t._v(" "), t.userComment.is_deleted ? e("div", {
                staticClass: "uc_comment uc_comment_deleted my-2"
            }, [t._v("[This comment has been deleted.]")]) : ["hthread_comment_comment" == t.kind && t.reply_to_user ? e("div", {
                staticClass: "uc_at_name mt-1"
            }, [e("span", [t._v("@" + t._s(t.reply_to_user.name))])]) : t._e(), t._v(" "), e("div", {
                staticClass: "uc_comment my-2",
                domProps: {
                    innerHTML: t._s(t.userComment.msg)
                }
            }), t._v(" "), e("div", {
                staticClass: "uc_actions_bar flex row wrap align-center"
            }, [e("v-btn", {
                class: "uc_action upvote ".concat(t.i_upvoted_this_comment ? "active" : ""),
                attrs: {
                    icon: "",
                    disabled: t.$S.is_loading
                },
                on: {
                    click: function(e) {
                        return t.toggleUpvote()
                    }
                }
            }, [e("v-icon", {
                class: t.i_upvoted_this_comment ? "primary-color" : ""
            }, [t._v(t._s(t.i_upvoted_this_comment ? "mdi-thumb-up" : "mdi-thumb-up-outline"))])], 1), t._v(" "), t.userComment.upvotes > 0 ? e("span", {
                class: t.i_upvoted_this_comment ? "uc_counter primary-color" : "uc_counter"
            }, [t._v(t._s(t.userComment.upvotes))]) : t._e(), t._v(" "), e("v-btn", {
                class: "uc_action downvote ".concat(t.i_downvoted_this_comment ? "active" : ""),
                attrs: {
                    icon: "",
                    disabled: t.$S.is_loading
                },
                on: {
                    click: function(e) {
                        return t.toggleDownvote()
                    }
                }
            }, [e("v-icon", {
                class: t.i_downvoted_this_comment ? "primary-color" : ""
            }, [t._v(t._s(t.i_downvoted_this_comment ? "mdi-thumb-down" : "mdi-thumb-down-outline"))])], 1), t._v(" "), t.userComment.downvotes > 0 ? e("span", {
                class: t.i_downvoted_this_comment ? "uc_counter primary-color" : "uc_counter"
            }, [t._v(t._s(t.userComment.downvotes))]) : t._e(), t._v(" "), e("v-btn", {
                staticClass: "uc_action reply_btn",
                attrs: {
                    flat: ""
                },
                on: {
                    click: function(e) {
                        t.mode = "reply"
                    }
                }
            }, [e("v-icon", [t._v("mdi-reply")]), t._v(" "), e("span", {
                staticClass: "btn_text"
            }, [t._v("Reply")])], 1), t._v(" "), t.$S.user && t.$S.user.id == t.userComment.original_poster_user_id ? e("v-btn", {
                staticClass: "uc_action edit_btn",
                attrs: {
                    flat: ""
                },
                on: {
                    click: function(e) {
                        t.mode = "edit"
                    }
                }
            }, [e("v-icon", [t._v("mdi-pencil")]), t._v(" "), e("span", {
                staticClass: "btn_text"
            }, [t._v("Edit")])], 1) : t._e()], 1)], t._v(" "), t.userComment.num_replies > 0 ? e("div", {
                staticClass: "uc_actions_bar flex row wrap align-center justify-left"
            }, [e("v-btn", {
                staticClass: "uc_action view_replies_btn",
                attrs: {
                    small: "",
                    flat: ""
                },
                on: {
                    click: function(e) {
                        return t.toggleShowHideReplies()
                    }
                }
            }, [e("v-icon", {
                staticClass: "primary-color"
            }, [t._v("mdi-menu-down")]), t._v(" "), e("span", {
                staticClass: "btn_text primary-color"
            }, [t._v(t._s(t.is_replies_visible ? "Hide" : "View ".concat(t.userComment.num_replies)) + "  Replies")])], 1)], 1) : t._e()], 2)]), t._v(" "), t.mode ? e("CommentInput", {
                staticClass: "uci_nested",
                attrs: {
                    mode: t.mode,
                    dataKey: t.dataKey,
                    kind: t.input_kind,
                    parent: t.parent ? t.parent : t.userComment,
                    comment: t.userComment
                },
                on: {
                    cancel: function(e) {
                        return t.cancel()
                    },
                    "created-user-comment": t.onChildCommentCreatedCallback
                }
            }) : t._e(), t._v(" "), t._l(t.child_comments, function(n, i) {
                return e("Comment", {
                    key: "".concat(i, "-").concat(t.kind, "_comment-").concat(n.id),
                    attrs: {
                        dataKey: t.dataKey,
                        depth: t.depth + 1,
                        kind: "".concat(t.kind, "_comment"),
                        parent: t.parent ? t.parent : n,
                        userComment: n,
                        myFlagsHash: t.$S.data[t.dataKey]["my_".concat(t.kind, "_comments_flags_hash")],
                        myVotesHash: t.$S.data[t.dataKey]["my_".concat(t.kind, "_comments_votes_hash")]
                    },
                    on: {
                        "created-user-comment": t.onChildCommentCreatedCallback
                    }
                })
            }), t._v(" "), e("div", {
                staticClass: "user_comment flex row"
            }, [t._m(0), t._v(" "), t.depth > 0 ? e("div", {
                staticClass: "uc_depth_line_container flex justify-center"
            }, [e("div", {
                staticClass: "line_down"
            })]) : t._e(), t._v(" "), t.is_replies_visible && t.child_comments.length < t.userComment.num_replies ? e("v-btn", {
                attrs: {
                    large: "",
                    disabled: t.$S.is_loading,
                    loading: t.$S.is_loading
                },
                on: {
                    click: function(e) {
                        return t.showMore()
                    }
                }
            }, [e("span", {
                staticClass: "primary-color"
            }, [t._v("Load More Comments")]), t._v(" "), e("span", {
                staticClass: "spins",
                attrs: {
                    slot: "loader"
                },
                slot: "loader"
            }, [e("v-icon", [t._v("mdi-loading")])], 1)]) : t._e()], 1)], 2)
        }, [function() {
            var t = this._self._c;
            return t("div", {
                staticClass: "uc_depth_line_container flex justify-center"
            }, [t("div", {
                staticClass: "line_down full-height"
            })])
        }
        ], !1, null, null, null);
        n.default = component.exports
    },
    344: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n(5)
          , o = (n(27),
        n(45),
        n(1))
          , c = n.n(o)
          , _ = {
            props: ["dataKey"],
            beforeCreate: function() {},
            data: function() {
                return {
                    is_visible: !1,
                    x: 0,
                    y: 0,
                    selector: null,
                    user_comment: null,
                    kind: null
                }
            },
            mounted: function() {
                this.$EVT.$on(this.$EVT.ACTIVATE_USER_COMMENT_MENU_AROUND, this.activateEventHandler)
            },
            beforeDestroy: function() {
                this.$EVT.$off(this.$EVT.ACTIVATE_USER_COMMENT_MENU_AROUND, this.activateEventHandler)
            },
            methods: {
                activateEventHandler: function(t, e, n) {
                    this.kind = t,
                    this.user_comment = e,
                    this.selector = n,
                    this.activateUserCommentMenuAround(n)
                },
                activateUserCommentMenuAround: function(t) {
                    var e = 0
                      , n = 0
                      , r = document.querySelector(t)
                      , rect = r.getBoundingClientRect();
                    if (void 0 === rect.y) {
                        var o = this.$S.getOffset(r);
                        n = o.top,
                        e = o.left
                    } else
                        n = rect.y,
                        e = rect.x;
                    this.x = e,
                    this.y = n,
                    this.is_visible = !0
                },
                beforeToggleFlag: function() {
                    var t = this;
                    if (!this.$S.user)
                        return this.$EVT.$emit(this.$EVT.ACTIVATE_GENERAL_CONFIRMATION_DIALOG, {
                            is_persistent: !1,
                            is_mini_close_button_visible: !0,
                            is_cancel_button_visible: !0,
                            title: "Sign In Required",
                            body: "You need to be signed in to be able to flag this comment.",
                            confirm_button_text: "Sign In",
                            confirmation_callback: function() {
                                t.$EVT.$emit(t.$EVT.GOTO, "/sign-in")
                            }
                        });
                    this.i_flagged_this_comment ? this.toggleFlag() : this.$emit("confirm-flag-user-comment", this.toggleFlag)
                },
                toggleFlag: function() {
                    var t = this;
                    return Object(r.a)(regeneratorRuntime.mark(function e() {
                        var n;
                        return regeneratorRuntime.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (!t.$S.is_loading) {
                                        e.next = 1;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 1:
                                    if (t.$S.is_loading = !0,
                                    e.prev = 2,
                                    !t.i_flagged_this_comment) {
                                        e.next = 4;
                                        break
                                    }
                                    return e.next = 3,
                                    t.$post("".concat(t.$getApiBaseUrl(), "/api/v8/").concat(t.kind, "s/").concat(t.user_comment.id, "/unflag"), {});
                                case 3:
                                    c.a.delete(t.$S.data[t.dataKey]["my_".concat(t.kind, "s_flags_hash")], "".concat(t.user_comment.id)),
                                    e.next = 6;
                                    break;
                                case 4:
                                    return e.next = 5,
                                    t.$post("".concat(t.$getApiBaseUrl(), "/api/v8/").concat(t.kind, "s/").concat(t.user_comment.id, "/flag"), {});
                                case 5:
                                    c.a.set(t.$S.data[t.dataKey]["my_".concat(t.kind, "s_flags_hash")], "".concat(t.user_comment.id), 1);
                                case 6:
                                    e.next = 8;
                                    break;
                                case 7:
                                    e.prev = 7,
                                    n = e.catch(2),
                                    l(n);
                                case 8:
                                    t.$S.is_loading = !1;
                                case 9:
                                case "end":
                                    return e.stop()
                                }
                        }, e, null, [[2, 7]])
                    }))()
                },
                beforeDelete: function() {
                    this.$EVT.$emit(this.$EVT.ACTIVATE_GENERAL_CONFIRMATION_DIALOG, {
                        is_persistent: !1,
                        is_mini_close_button_visible: !0,
                        is_cancel_button_visible: !0,
                        title: "Delete this comment?",
                        body: "Are you sure you want to delete this comment?  If it has replies then only the comment body will be deleted.",
                        confirm_button_text: "Delete",
                        confirmation_callback: this.deleteUserComment
                    })
                },
                deleteUserComment: function() {
                    var t = this;
                    return Object(r.a)(regeneratorRuntime.mark(function e() {
                        var n;
                        return regeneratorRuntime.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (!t.$S.is_loading) {
                                        e.next = 1;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 1:
                                    return t.$S.is_loading = !0,
                                    e.prev = 2,
                                    e.next = 3,
                                    t.$del("".concat(t.$getApiBaseUrl(), "/api/v8/").concat(t.kind, "s/").concat(t.user_comment.id), {
                                        x_license: t.$S.data.video.user_license
                                    });
                                case 3:
                                    t.user_comment.is_deleted = !0,
                                    t.user_comment.msg = "[This message has been deleted.]",
                                    e.next = 5;
                                    break;
                                case 4:
                                    e.prev = 4,
                                    n = e.catch(2),
                                    l(n);
                                case 5:
                                    t.$S.is_loading = !1;
                                case 6:
                                case "end":
                                    return e.stop()
                                }
                        }, e, null, [[2, 4]])
                    }))()
                }
            },
            computed: {
                i_flagged_this_comment: function() {
                    return !!this.user_comment && 1 == this.$S.data[this.dataKey]["my_".concat(this.kind, "s_flags_hash")][this.user_comment.id]
                },
                is_able_to_delete_comment: function() {
                    return !(!this.$S.user || !this.user_comment) && (this.$S.user.access_level >= 6 || this.user_comment.original_poster_user_id == this.$S.user.id && !this.user_comment.is_deleted)
                }
            }
        }
          , d = n(15)
          , component = Object(d.a)(_, function() {
            var t = this
              , e = t._self._c;
            return e("v-menu", {
                attrs: {
                    id: "user_comment_menu",
                    "position-x": t.x,
                    "position-y": t.y
                },
                model: {
                    value: t.is_visible,
                    callback: function(e) {
                        t.is_visible = e
                    },
                    expression: "is_visible"
                }
            }, [e("v-list", [t.i_flagged_this_comment ? e("v-list-tile", {
                on: {
                    click: function(e) {
                        return t.beforeToggleFlag()
                    }
                }
            }, [e("v-list-tile-title", [t._v("Unflag this comment")])], 1) : e("v-list-tile", {
                on: {
                    click: function(e) {
                        return t.beforeToggleFlag()
                    }
                }
            }, [e("v-list-tile-title", [t._v("Flag this comment")])], 1), t._v(" "), t.is_able_to_delete_comment ? e("v-list-tile", {
                on: {
                    click: function(e) {
                        return t.beforeDelete()
                    }
                }
            }, [e("v-list-tile-title", [t._v("Delete this comment")])], 1) : t._e()], 1)], 1)
        }, [], !1, null, null, null);
        e.default = component.exports
    },
    345: function(t, e, n) {
        "use strict";
        n.r(e);
        n(22),
        n(45);
        var r = {
            components: {},
            props: ["playlist", "user"],
            beforeCreate: function() {},
            data: function() {
                return {}
            },
            methods: {
                reload: function(t) {
                    window.location.href = t
                },
                playlistBannerUrl: function(t) {
                    return t.custom_poster_url ? this.$App.jetpackUrl(t.custom_poster_url, 99, null, 90, "playlist-banner") : 0 == t.count ? "https://hanime-cdn.com/images/empty_playlist_bg.jpg" : this.$App.jetpackUrl(t.poster_url, 100, null, null, "cps")
                }
            },
            computed: {
                is_same_path: function() {
                    var t = this.url.split("?")[0];
                    return this.$route.path == t
                },
                url: function() {
                    return "/videos/hentai/".concat(this.playlist.hentai_video_slug, "?playlist_id=").concat(this.playlist.slug)
                }
            }
        }
          , o = n(15)
          , component = Object(o.a)(r, function() {
            var t = this
              , e = t._self._c;
            return t.playlist && t.playlist.views ? e("div", {
                staticClass: "video__item flex row"
            }, [e("router-link", {
                staticClass: "flex row",
                attrs: {
                    to: t.url
                }
            }, [e("div", {
                staticClass: "video__item__image",
                style: {
                    background: "url(".concat(t.playlistBannerUrl(t.playlist), ") center center / cover no-repeat")
                }
            }, [e("div", {
                staticClass: "video__item__image__progress_playback"
            }, [e("div", {
                staticClass: "video__item__image__progress_playback__fill"
            })]), t._v(" "), e("div", {
                staticClass: "playlist__cover flex column justify-center align-center"
            }, [e("div", [t._v(t._s(t.playlist.count))]), t._v(" "), e("v-icon", [t._v("mdi-playlist-play")])], 1)]), t._v(" "), e("div", {
                staticClass: "video__item__info flex column"
            }, [e("div", {
                staticClass: "video__item__info__title"
            }, [t._v(t._s(t.playlist.title))]), t._v(" "), e("div", {
                staticClass: "video__item__info__subtitle flex column"
            }, [e("div", {
                staticClass: "video__item__info__subtitle__one_liner"
            }, [t._v(t._s(t.user ? t.user.name : ""))]), t._v(" "), e("div", {
                staticClass: "video__item__info__subtitle__one_liner"
            }, [t._v(t._s(t.playlist.views.toLocaleString("en-US")) + " views")])])])]), t._v(" "), t.is_same_path ? e("div", {
                staticClass: "video__item__click_cover",
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        e.stopPropagation(),
                        t.reload(t.url)
                    }
                }
            }) : t._e()], 1) : t._e()
        }, [], !1, null, null, null);
        e.default = component.exports
    },
    346: function(t, e, n) {
        "use strict";
        n.r(e);
        n(22);
        var r = n(314).a
          , o = n(15)
          , component = Object(o.a)(r, function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                staticClass: "htv-video-page-action-bar flex wrap"
            }, [e("div", {
                staticClass: "title-views flex column"
            }, [e("h1", {
                staticClass: "tv-title"
            }, [t._v(t._s(t.pg.hentai_video.name))]), t._v(" "), t.is_view_count_visible ? e("div", {
                staticClass: "tv-views grey--text"
            }, [t._v(t._s(t.pg.hentai_video.views.toLocaleString("en-US")) + " views")]) : t._e()]), t._v(" "), e("div", {
                staticClass: "actions flex row justify-right align-right"
            }, [e("v-tooltip", {
                attrs: {
                    top: ""
                }
            }, [e("div", {
                directives: [{
                    name: "ripple",
                    rawName: "v-ripple"
                }],
                staticClass: "hvpab-btn flex justify-center align-center primary-color-hover",
                attrs: {
                    slot: "activator"
                },
                on: {
                    click: function(e) {
                        return t.toggleLikeDislikeVideo("like")
                    }
                },
                slot: "activator"
            }, [e("v-icon", {
                class: "".concat(t.is_video_liked ? "primary--text" : "grey--text")
            }, [t._v("mdi-heart")]), t._v(" "), e("span", {
                class: "hvpabb-text ".concat(t.is_video_liked ? "primary--text" : "")
            }, [t._v(t._s(t.likes_k))])], 1), t._v(" "), e("span", [t._v("Like")])]), t._v(" "), e("v-tooltip", {
                attrs: {
                    top: ""
                }
            }, [e("div", {
                directives: [{
                    name: "ripple",
                    rawName: "v-ripple"
                }],
                staticClass: "hvpab-btn flex justify-center align-center primary-color-hover",
                attrs: {
                    slot: "activator"
                },
                on: {
                    click: function(e) {
                        return t.toggleLikeDislikeVideo("dislike")
                    }
                },
                slot: "activator"
            }, [e("v-icon", {
                class: "".concat(t.is_video_disliked ? "primary--text" : "grey--text")
            }, [t._v("mdi-heart-off")]), t._v(" "), e("span", {
                class: "hvpabb-text ".concat(t.is_video_disliked ? "primary--text" : "")
            }, [t._v(t._s(t.dislikes_k))])], 1), t._v(" "), e("span", [t._v("Dislike")])]), t._v(" "), t.is_downloads_visible ? e("v-tooltip", {
                attrs: {
                    top: ""
                }
            }, [e("a", {
                directives: [{
                    name: "ripple",
                    rawName: "v-ripple"
                }],
                staticClass: "hvpab-btn flex align-center primary-color-hover",
                attrs: {
                    slot: "activator",
                    href: t.hentai_video_download_url,
                    alt: "Download ".concat(t.pg.hentai_video.name, " hentai video"),
                    title: "Download ".concat(t.pg.hentai_video.name, " hentai video"),
                    rel: "nofollow"
                },
                slot: "activator"
            }, [e("v-icon", {
                staticClass: "grey--text"
            }, [t._v("mdi-cloud-download")]), t._v(" "), e("span", {
                staticClass: "hvpabb-text hidden-sm-and-up"
            }, [t._v(t._s(t.downloads_k))]), t._v(" "), e("span", {
                staticClass: "hvpabb-text hidden-xs-only"
            }, [t._v("DOWNLOAD (" + t._s(t.downloads_k) + ")")])], 1), t._v(" "), e("span", [t._v("Download video")])]) : t._e(), t._v(" "), e("v-tooltip", {
                attrs: {
                    top: ""
                }
            }, [e("div", {
                directives: [{
                    name: "ripple",
                    rawName: "v-ripple"
                }],
                staticClass: "hvpab-btn flex justify-center align-center primary-color-hover",
                attrs: {
                    slot: "activator",
                    id: "add_to_playlist_btn"
                },
                on: {
                    click: function(e) {
                        return t.activateAddToMenuAroundElementWithId("add_to_playlist_btn", t.pg.hentai_video)
                    }
                },
                slot: "activator"
            }, [e("v-icon", {
                staticClass: "grey--text"
            }, [t._v("mdi-playlist-plus")]), t._v(" "), e("span", {
                staticClass: "hvpabb-text"
            }, [t._v("SAVE")])], 1), t._v(" "), e("span", [t._v("Save to Playlist")])]), t._v(" "), e("v-tooltip", {
                attrs: {
                    top: ""
                }
            }, [e("div", {
                directives: [{
                    name: "ripple",
                    rawName: "v-ripple"
                }],
                staticClass: "hvpab-btn flex justify-center align-center primary-color-hover",
                attrs: {
                    slot: "activator"
                },
                on: {
                    click: function(e) {
                        return t.activateReportMenuItems()
                    }
                },
                slot: "activator"
            }, [e("v-icon", {
                staticClass: "grey--text"
            }, [t._v("mdi-flag")]), t._v(" "), e("span", {
                staticClass: "hvpabb-text"
            }, [t._v("REPORT")])], 1), t._v(" "), e("span", [t._v("Report Video Problem")])])], 1), t._v(" "), e("v-menu", {
                attrs: {
                    "content-class": "add_to_playlist_menu",
                    "close-on-content-click": !1,
                    "position-x": t.add_to_playlist_position_x,
                    "position-y": t.add_to_playlist_position_y,
                    absolute: ""
                },
                model: {
                    value: t.is_add_to_playlist_menu_visible,
                    callback: function(e) {
                        t.is_add_to_playlist_menu_visible = e
                    },
                    expression: "is_add_to_playlist_menu_visible"
                }
            }, [t.target_hentai_video ? e("add-to-playlist-card", {
                attrs: {
                    "hentai-video": t.target_hentai_video,
                    "watch-later-playlist-hentai-videos": t.pg.watch_later_playlist_hentai_videos,
                    "playlist-hentai-videos": t.pg.playlist_hentai_videos
                },
                on: {
                    close: function(e) {
                        t.is_add_to_playlist_menu_visible = !1
                    }
                }
            }) : t._e()], 1)], 1)
        }, [], !1, null, null, null);
        e.default = component.exports
    },
    378: function(t, n, r) {
        "use strict";
        r.r(n);
        var o = r(5)
          , c = (r(27),
        r(45),
        r(159),
        r(46),
        r(121),
        r(22),
        r(14),
        r(52),
        r(78))
          , _ = r.n(c)
          , d = {
            middleware: "interad",
            components: {
                Comments: r(332).default,
                "htv-ad": r(309).default,
                "htv-lazy": r(308).default,
                "htv-native-ad": r(333).default,
                "htv-native-ad-1": r(334).default,
                "htv-video-player": r(335).default,
                "hentai-video-card-horizontal-menu": r(317).default,
                "htv-playlist-panel": r(336).default,
                "htv-video-page-action-bar": r(346).default,
                "htv-video-page-info": r(337).default,
                "htv-video-page-related": r(338).default,
                "htv-video-page-tags-summary": r(339).default
            },
            fetch: function(t) {
                return Object(o.a)(regeneratorRuntime.mark(function e() {
                    var n, r, o, c, _;
                    return regeneratorRuntime.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (n = t.route.params.id || "") {
                                    e.next = 1;
                                    break
                                }
                                return e.abrupt("return", t.redirect(302, "/"));
                            case 1:
                                return r = [],
                                t.route.query.playlist_id && r.push("playlist_id=".concat(t.route.query.playlist_id)),
                                o = !1,
                                e.prev = 2,
                                e.next = 3,
                                t.$S.doFetch("".concat(t.$getApiBaseUrl(), "/api/v8/video?id=").concat(n, "&").concat(r.join("&")), "video", t);
                            case 3:
                                e.next = 5;
                                break;
                            case 4:
                                e.prev = 4,
                                _ = e.catch(2),
                                l("IS ERROR!"),
                                l(_),
                                o = !0;
                            case 5:
                                if (!o && t.$S.data.video && !t.$S.data.video.errors) {
                                    e.next = 6;
                                    break
                                }
                                return e.abrupt("return", t.redirect("/404"));
                            case 6:
                                t.$S.page_name = "Now Playing",
                                t.$S.is_dev ? t.$S.data.video.host = "http://localhost:2000" : (c = t.req ? t.req.headers.host : window.location.host,
                                t.$S.data.video.host = "https://".concat(c));
                            case 7:
                            case "end":
                                return e.stop()
                            }
                    }, e, null, [[2, 4]])
                }))()
            },
            head: function() {
                return this.getHead()
            },
            metaInfo: function() {
                return {
                    title: this.getHead().title
                }
            },
            beforeCreate: function() {},
            data: function() {
                return {
                    is_video_clicked: !1
                }
            },
            mounted: function() {
                var t = this;
                return Object(o.a)(regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (t.$EVT.$on(t.$EVT.TOGGLE_SHUFFLE, t.toggleShuffle),
                                t.$EVT.$on(t.$EVT.PLAY_NEXT_VIDEO, t.goToNextVideo),
                                t.$S.browser_width >= 960 && t.$nextTick(function() {
                                    t.ensureNoSidePanelClipping()
                                }),
                                t.$S.country_code) {
                                    e.next = 1;
                                    break
                                }
                                return e.next = 1,
                                t.setCountryCode();
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }, e)
                }))()
            },
            beforeDestroy: function() {
                this.$EVT.$off(this.$EVT.TOGGLE_SHUFFLE, this.toggleShuffle),
                this.$EVT.$off(this.$EVT.PLAY_NEXT_VIDEO, this.goToNextVideo)
            },
            methods: {
                getHead: function() {
                    return {
                        title: "rape-gouhouka-1" == this.pg.hentai_video.slug || "ecchi-na-onee-chan-ni-shiboraretai-2" == this.pg.hentai_video.slug ? "Hentai Haven Replacement 1080p HD Videos - hanime.tv" : "Watch ".concat(this.pg.hentai_video.name, " Hentai Video in 1080p HD - hanime.tv"),
                        meta: [{
                            hid: "description",
                            name: "description",
                            content: "rape-gouhouka-1" == this.pg.hentai_video.slug || "ecchi-na-onee-chan-ni-shiboraretai-2" == this.pg.hentai_video.slug ? "".concat(this.pg.hentai_video.name, " uncensored 1080p.  Enjoy the latest hentai videos for free, ripped Blu-Rays and direct download source leaks.  We have an app, and site is mobile friendly.") : "Watch ".concat(this.pg.hentai_video.name, " latest hentai online free download HD on mobile phone tablet laptop desktop.  Stream online, regularly released uncensored, subbed, in 720p and 1080p!")
                        }]
                    }
                },
                setCountryCode: function() {
                    var t = this;
                    return Object(o.a)(regeneratorRuntime.mark(function n() {
                        var r, data, o;
                        return regeneratorRuntime.wrap(function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    return n.prev = 0,
                                    n.next = 1,
                                    t.$get("/country_code");
                                case 1:
                                    r = n.sent,
                                    data = r.data,
                                    t.$S.country_code = data.country_code,
                                    n.next = 3;
                                    break;
                                case 2:
                                    n.prev = 2,
                                    o = n.catch(0),
                                    l("Unable to fetch country code:"),
                                    e(o);
                                case 3:
                                case "end":
                                    return n.stop()
                                }
                        }, n, null, [[0, 2]])
                    }))()
                },
                toggleShuffle: function() {
                    this.$S.shuffle = !this.$S.shuffle,
                    this.$S.shuffle ? this.$EVT.$emit(this.$EVT.SNACK, "Shuffle is on") : this.$EVT.$emit(this.$EVT.SNACK, "Shuffle is off")
                },
                goToNextVideo: function() {
                    if (l("goToNextVideo called"),
                    this.pg.next_hentai_video) {
                        var t = "";
                        this.$route.fullPath.indexOf("?") > -1 && (t = "?".concat(this.$route.fullPath.split("?")[1]));
                        var e = this.pg.next_hentai_video.slug;
                        this.$S.shuffle && (e = this.pg.next_random_hentai_video.slug),
                        this.$EVT.$emit(this.$EVT.GOTO, "/videos/hentai/".concat(e).concat(t))
                    }
                },
                videoClicked: function() {
                    this.deactivateNTVAds(),
                    this.is_video_clicked = !0
                },
                deactivateNTVAds: function() {
                    if (!this.is_video_clicked) {
                        var t = document.querySelectorAll(".ntv");
                        _.a.each(t, function(t) {
                            t.remove()
                        })
                    }
                },
                ensureNoSidePanelClipping: function() {
                    var t = 0;
                    this.$refs.playlist_panel && (t = this.$refs.playlist_panel.$el.offsetHeight);
                    var e = document.getElementById("related_content")
                      , n = 88 + t + (e ? e.offsetHeight : 0) - this.$refs.video_page.offsetHeight;
                    n > 0 && (this.$refs.video_page.style.paddingBottom = "".concat(n, "px"))
                },
                onPageClicked: function() {
                    this.$EVT.$emit(this.$EVT.PAGE_CLICKED)
                }
            },
            computed: {
                pg: function() {
                    return this.$S.data.video
                },
                watch_later_playlist: function() {
                    return _.a.find(this.$S.playlists, {
                        is_mutable: !1,
                        title: "Watch Later"
                    })
                },
                is_prohibited: function() {
                    return false;
                }
            }
        }
          , v = r(15)
          , component = Object(v.a)(d, function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                ref: "video_page",
                staticClass: "video page flex column align-center",
                on: {
                    click: function(e) {
                        return t.onPageClicked()
                    }
                }
            }, [e("div", {
                staticClass: "segment-main flex column align-center"
            }, [e("div", {
                staticClass: "player flex"
            }, [t.is_prohibited ? e("div", {
                staticClass: "prohibited flex column align-center justify-center"
            }, [t._v("\n        This video is no longer available.    :(\n      ")]) : e("htv-video-player", {
                staticClass: "flex fill-height",
                attrs: {
                    video: t.pg.hentai_video,
                    storyboards: t.pg.hentai_video_storyboards,
                    "start-time": t.$nuxt.$route.query.start
                },
                on: {
                    "next-video": function(e) {
                        return t.goToNextVideo()
                    },
                    "video-clicked": function(e) {
                        return t.videoClicked()
                    }
                }
            })], 1), t._v(" "), t.$S.is_mounted && t.$S.browser_width < 960 ? e("htv-native-ad", {
                class: "action-bar flex column",
                attrs: {
                    placement: "native_0",
                    data: t.pg.bs
                }
            }) : t._e(), t._v(" "), e("div", {
                staticClass: "action-bar flex column"
            }, [e("htv-video-page-action-bar", {
                attrs: {
                    pg: t.pg,
                    is_downloads_visible: !t.is_prohibited,
                    is_view_count_visible: !t.is_prohibited
                }
            })], 1), t._v(" "), t.$route.query.playlist_id ? e("div", {
                staticClass: "playlist-panel flex"
            }, [t.$route.query.playlist_id ? e("htv-playlist-panel", {
                ref: "playlist_panel",
                attrs: {
                    "playlist-id": t.$route.query.playlist_id,
                    "current-hentai-video": t.pg.hentai_video,
                    "watch-later-playlist-hentai-videos": t.pg.watch_later_playlist_hentai_videos,
                    "like-dislike-playlist-hentai-videos": t.pg.like_dislike_playlist_hentai_videos,
                    "playlist-hentai-videos": t.pg.playlist_hentai_videos
                }
            }) : t._e()], 1) : t._e(), t._v(" "), t.$S.is_mounted && t.$S.browser_width >= 960 ? e("htv-video-page-related", {
                attrs: {
                    pg: t.pg
                }
            }) : t._e()], 1), t._v(" "), e("div", {
                staticClass: "segment-remainder flex column"
            }, [e("htv-video-page-info", {
                attrs: {
                    pg: t.pg
                }
            }), t._v(" "), t.$S.is_mounted && t.$S.browser_width < 960 ? e("htv-native-ad-1", {
                class: "action-bar flex column mt-2",
                attrs: {
                    placement: "native_1",
                    data: t.pg.bs
                }
            }) : t._e(), t._v(" "), e("htv-video-page-tags-summary", {
                attrs: {
                    pg: t.pg
                }
            }), t._v(" "), t.$S.is_mounted && t.$S.browser_width < 960 ? e("div", {
                staticClass: "divider"
            }) : t._e(), t._v(" "), t.$S.is_mounted && t.$S.browser_width < 960 ? e("htv-video-page-related", {
                attrs: {
                    pg: t.pg
                }
            }) : t._e(), t._v(" "), e("htv-lazy", [t.$S.is_mounted ? e("Comments", {
                attrs: {
                    hentaiVideo: t.pg.hentai_video
                }
            }) : t._e()], 1), t._v(" "), e("htv-ad", {
                staticClass: "mb-5 mt-5",
                attrs: {
                    placement: "footer_0",
                    data: t.pg.bs
                }
            })], 1), t._v(" "), e("hentai-video-card-horizontal-menu", {
                attrs: {
                    "watch-later-playlist": t.watch_later_playlist,
                    "watch-later-playlist-hentai-videos": t.pg.watch_later_playlist_hentai_videos,
                    "like-dislike-playlist-hentai-videos": t.pg.like_dislike_playlist_hentai_videos,
                    "playlist-hentai-videos": t.pg.playlist_hentai_videos
                }
            })], 1)
        }, [], !1, null, null, null);
        n.default = component.exports
    }
}]);
