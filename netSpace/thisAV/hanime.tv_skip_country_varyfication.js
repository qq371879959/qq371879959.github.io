(window.webpackJsonp = window.webpackJsonp || []).push([
    [52], {
        237: function(t, i, a) {
            "use strict";
            (function(t) {
                a(97), a(98), a(71), a(72), a(21), a(25);
                var n = a(5),
                    o = a.n(n);
                a(2), a(3), a(4);
                i.a = {
                    middleware: "interad",
                    components: {
                        Comments: a(265).default,
                        "htv-ad": a(188).default,
                        "htv-lazy": a(183).default,
                        "htv-native-ad": a(266).default,
                        "htv-native-ad-1": a(267).default,
                        "htv-video-player": a(268).default,
                        "hentai-video-card-horizontal-menu": a(196).default,
                        "htv-playlist-panel": a(269).default,
                        "htv-video-page-action-bar": a(270).default,
                        "htv-video-page-info": a(271).default,
                        "htv-video-page-related": a(272).default,
                        "htv-video-page-tags-summary": a(273).default
                    },
                    fetch: function(e) {
                        return o()(regeneratorRuntime.mark((function t() {
                            var i, a, n, o;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (i = e.route.params.id || "") {
                                            t.next = 3;
                                            break
                                        }
                                        return t.abrupt("return", e.redirect(302, "/"));
                                    case 3:
                                        return a = [], e.route.query.playlist_id && a.push("playlist_id=".concat(e.route.query.playlist_id)), n = !1, t.prev = 6, t.next = 9, S.doFetch("".concat(hw_api_base_url, "/api/v8/video?id=").concat(i, "&").concat(a.join("&")), "video", e);
                                    case 9:
                                        t.next = 16;
                                        break;
                                    case 11:
                                        t.prev = 11, t.t0 = t.catch(6), l("IS ERROR!"), l(t.t0), n = !0;
                                    case 16:
                                        if (!n && S.data.video && !S.data.video.errors) {
                                            t.next = 18;
                                            break
                                        }
                                        return t.abrupt("return", e.redirect("/404"));
                                    case 18:
                                        S.page_name = "Now Playing", S.is_dev ? S.data.video.host = "http://localhost:2000" : (o = e.req ? e.req.headers.host : window.location.host, S.data.video.host = "https://".concat(o));
                                    case 20:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [6, 11]
                            ])
                        })))()
                    },
                    head: function() {
                        return this.getHead()
                    },
                    metaInfo: function() {
                        return this.getHead()
                    },
                    beforeCreate: function() {
                        var e = "undefined" == typeof window ? t : window;
                        this.S = e.S, this.App = e.App, this.Events = e.Events
                    },
                    data: function() {
                        return {
                            is_video_clicked: !1
                        }
                    },
                    mounted: function() {
                        var e = this;
                        return o()(regeneratorRuntime.mark((function t() {
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (Events.$on(Events.TOGGLE_SHUFFLE, e.toggleShuffle), Events.$on("PLAY_NEXT_VIDEO", e.goToNextVideo), S.browser_width >= 960 && e.$nextTick((function() {
                                                e.ensureNoSidePanelClipping()
                                            })), S.country_code) {
                                            t.next = 6;
                                            break
                                        }
                                        return t.next = 6, e.setCountryCode();
                                    case 6:
                                        S.is_dev && (window.Z = e);
                                    case 7:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    beforeDestroy: function() {
                        Events.$off(Events.TOGGLE_SHUFFLE, this.toggleShuffle), Events.$off("PLAY_NEXT_VIDEO", this.goToNextVideo)
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
                            return o()(regeneratorRuntime.mark((function t() {
                                var i, a;
                                return regeneratorRuntime.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, t.next = 3, axios.get("/country_code");
                                        case 3:
                                            i = t.sent, a = i.data, S.country_code = a.country_code, t.next = 12;
                                            break;
                                        case 8:
                                            t.prev = 8, t.t0 = t.catch(0), l("Unable to fetch country code:"), e(t.t0);
                                        case 12:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, null, [
                                    [0, 8]
                                ])
                            })))()
                        },
                        toggleShuffle: function() {
                            S.shuffle = !S.shuffle, S.shuffle ? Events.$emit(Events.SNACK, "Shuffle is on") : Events.$emit(Events.SNACK, "Shuffle is off")
                        },
                        goToNextVideo: function() {
                            if (this.pg.next_hentai_video) {
                                var e = "";
                                this.$route.fullPath.indexOf("?") > -1 && (e = "?".concat(this.$route.fullPath.split("?")[1]));
                                var t = this.pg.next_hentai_video.slug;
                                S.shuffle && (t = this.pg.next_random_hentai_video.slug), Events.$emit(Events.GOTO, "/videos/hentai/".concat(t).concat(e))
                            }
                        },
                        videoClicked: function() {
                            this.deactivateNTVAds(), this.is_video_clicked = !0
                        },
                        deactivateNTVAds: function() {
                            if (!this.is_video_clicked) {
                                var e = document.querySelectorAll(".ntv");
                                _.each(e, (function(e) {
                                    e.remove()
                                }))
                            }
                        },
                        ensureNoSidePanelClipping: function() {
                            var e = 0;
                            this.$refs.playlist_panel && (e = this.$refs.playlist_panel.$el.offsetHeight);
                            var t = document.getElementById("related_content"),
                                i = 88 + e + (t ? t.offsetHeight : 0) - this.$refs.video_page.offsetHeight;
                            i > 0 && (this.$refs.video_page.style.paddingBottom = "".concat(i, "px"))
                        },
                        onPageClicked: function() {
                            Events.$emit("PAGE_CLICKED")
                        }
                    },
                    computed: {
                        pg: function() {
                            return S.data.video
                        },
                        watch_later_playlist: function() {
                            return _.find(S.playlists, {
                                is_mutable: !1,
                                title: "Watch Later"
                            })
                        },
                        is_prohibited: function() {
                            return false;
                        }
                    }
                }
            }).call(this, a(17))
        },
        329: function(e, t, i) {
            "use strict";
            i.r(t);
            var a = i(237).a,
                n = i(9),
                o = Object(n.a)(a, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("div", {
                        ref: "video_page",
                        staticClass: "video page flex column align-center",
                        on: {
                            click: function(t) {
                                return e.onPageClicked()
                            }
                        }
                    }, [t("div", {
                        staticClass: "segment-main flex column align-center"
                    }, [t("div", {
                        staticClass: "player flex"
                    }, [e.is_prohibited ? t("div", {
                        staticClass: "prohibited flex column align-center justify-center"
                    }, [e._v("\n        This video is no longer available.    :(\n      ")]) : t("htv-video-player", {
                        staticClass: "flex fill-height",
                        attrs: {
                            video: e.pg.hentai_video,
                            storyboards: e.pg.hentai_video_storyboards,
                            "start-time": e.$nuxt.$route.query.start
                        },
                        on: {
                            "next-video": function(t) {
                                return e.goToNextVideo()
                            },
                            "video-clicked": function(t) {
                                return e.videoClicked()
                            }
                        }
                    })], 1), e._v(" "), e.S.is_mounted && e.S.browser_width < 960 ? t("htv-native-ad", {
                        class: "action-bar flex column",
                        attrs: {
                            placement: "native_0",
                            data: e.pg.bs
                        }
                    }) : e._e(), e._v(" "), t("div", {
                        staticClass: "action-bar flex column"
                    }, [t("htv-video-page-action-bar", {
                        attrs: {
                            pg: e.pg,
                            is_downloads_visible: !e.is_prohibited,
                            is_view_count_visible: !e.is_prohibited
                        }
                    })], 1), e._v(" "), e.$route.query.playlist_id ? t("div", {
                        staticClass: "playlist-panel flex"
                    }, [e.$route.query.playlist_id ? t("htv-playlist-panel", {
                        ref: "playlist_panel",
                        attrs: {
                            "playlist-id": e.$route.query.playlist_id,
                            "current-hentai-video": e.pg.hentai_video,
                            "watch-later-playlist-hentai-videos": e.pg.watch_later_playlist_hentai_videos,
                            "like-dislike-playlist-hentai-videos": e.pg.like_dislike_playlist_hentai_videos,
                            "playlist-hentai-videos": e.pg.playlist_hentai_videos
                        }
                    }) : e._e()], 1) : e._e(), e._v(" "), e.S.is_mounted && e.S.browser_width >= 960 ? t("htv-video-page-related", {
                        attrs: {
                            pg: e.pg
                        }
                    }) : e._e()], 1), e._v(" "), t("div", {
                        staticClass: "segment-remainder flex column"
                    }, [t("htv-video-page-info", {
                        attrs: {
                            pg: e.pg
                        }
                    }), e._v(" "), e.S.is_mounted && e.S.browser_width < 960 ? t("htv-native-ad-1", {
                        class: "action-bar flex column mt-2",
                        attrs: {
                            placement: "native_1",
                            data: e.pg.bs
                        }
                    }) : e._e(), e._v(" "), t("htv-video-page-tags-summary", {
                        attrs: {
                            pg: e.pg
                        }
                    }), e._v(" "), e.S.is_mounted && e.S.browser_width < 960 ? t("div", {
                        staticClass: "divider"
                    }) : e._e(), e._v(" "), e.S.is_mounted && e.S.browser_width < 960 ? t("htv-video-page-related", {
                        attrs: {
                            pg: e.pg
                        }
                    }) : e._e(), e._v(" "), t("htv-lazy", [e.S.is_mounted ? t("Comments", {
                        attrs: {
                            hentaiVideo: e.pg.hentai_video
                        }
                    }) : e._e()], 1), e._v(" "), t("htv-ad", {
                        staticClass: "mb-5 mt-5",
                        attrs: {
                            placement: "footer_0",
                            data: e.pg.bs
                        }
                    })], 1), e._v(" "), t("hentai-video-card-horizontal-menu", {
                        attrs: {
                            "watch-later-playlist": e.watch_later_playlist,
                            "watch-later-playlist-hentai-videos": e.pg.watch_later_playlist_hentai_videos,
                            "like-dislike-playlist-hentai-videos": e.pg.like_dislike_playlist_hentai_videos,
                            "playlist-hentai-videos": e.pg.playlist_hentai_videos
                        }
                    })], 1)
                }), [], !1, null, null, null);
            t.default = o.exports
        }
    }
]);