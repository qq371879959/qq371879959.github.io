    !function(e) {
        let t = e=>Math.trunc(e / 60 / 60 % 60, 10)
          , i = e=>Math.trunc(e / 60 % 60, 10)
          , s = e=>Math.trunc(e % 60, 10);
        class n {
            constructor(e) {
                this.player = e,
                this.loaded = !1,
                this.lastMouseMoveTime = Date.now(),
                this.mouseDown = !1,
                this.loadedImages = [],
                this.elements = {
                    thumb: {},
                    scrubbing: {}
                },
                this.load()
            }
            get enabled() {
                return this.player.isHTML5 && this.player.isVideo && this.player.config.thumbnail.enabled
            }
            get config() {
                return this.player.config.thumbnail
            }
            load() {
                this.player.elements.display.seekTooltip && (this.player.elements.display.seekTooltip.hidden = this.enabled),
                this.enabled && (this.render(),
                this.determineContainerAutoSizing(),
                this.loaded = !0,
                this.listeners())
            }
            startMove(e) {
                if (!(!this.loaded || !e instanceof Event || !["touchmove", "mousemove"].includes(e.type)) && this.player.media.duration) {
                    if ("touchmove" === e.type)
                        this.seekTime = this.player.media.duration * (this.player.elements.inputs.seek.value / 100);
                    else {
                        let n = this.player.elements.progress.getBoundingClientRect()
                          , a = 100 / n.width * (e.pageX - n.left);
                        this.seekTime = this.player.media.duration * (a / 100),
                        this.seekTime < 0 && (this.seekTime = 0),
                        this.seekTime > this.player.media.duration - 1 && (this.seekTime = this.player.media.duration - 1),
                        this.mousePosX = e.pageX,
                        this.elements.thumb.time.innerText = function e(n=0, a=!1, h=!1) {
                            var l, r;
                            if ("number" != (r = typeof (l = n)) && "string" !== r || isNaN(l - parseFloat(l)))
                                return e(null, a, h);
                            let o = e=>`0${e}`.slice(-2)
                              , m = t(n)
                              , u = i(n)
                              , g = s(n);
                            return `${h && n > 0 ? "-" : ""}${m = a || m > 0 ? `${m}:` : ""}${o(u)}:${o(g)}`
                        }(this.seekTime)
                    }
                    this.showImageAtCurrentTime()
                }
            }
            endMove() {
                this.toggleThumbContainer(!1, !0)
            }
            startScrubbing(e) {
                (!1 === e.button || 0 === e.button) && (this.mouseDown = !0,
                this.player.media.duration && (this.toggleScrubbingContainer(!0),
                this.toggleThumbContainer(!1, !0),
                this.showImageAtCurrentTime()))
            }
            endScrubbing() {
                this.mouseDown = !1,
                Math.ceil(this.lastTime) === Math.ceil(this.player.media.currentTime) ? this.toggleScrubbingContainer(!1) : this.player.media.addEventListener("timeupdate", ()=>{
                    this.mouseDown || this.toggleScrubbingContainer(!1)
                }
                , {
                    once: !0
                })
            }
            listeners() {
                let {player: e} = this;
                e.on("play", ()=>{
                    this.toggleThumbContainer(!1, !0)
                }
                ),
                e.on("seeked", ()=>{
                    this.toggleThumbContainer(!1)
                }
                ),
                e.on("timeupdate", ()=>{
                    this.lastTime = this.player.media.currentTime
                }
                );
                let t = this.player.elements;
                ["mousemove", "touchmove", "mouseleave", "click", "mousedown", "touchstart", "mouseup", "touchend"].forEach(i=>{
                    t.progress.addEventListener(i, t=>{
                        let {thumbnails: s} = e;
                        if (s && s.loaded)
                            switch (i) {
                            case "mousemove":
                            case "touchmove":
                            case "mousedown":
                            case "touchstart":
                                s.startMove(t);
                                break;
                            case "mouseleave":
                            case "click":
                                s.endMove(!1, !0);
                                break;
                            case "mouseup":
                            case "touchend":
                                s.endScrubbing(t)
                            }
                    }
                    )
                }
                )
            }
            render() {
                this.elements.thumb.container = e.createElement("div"),
                this.elements.thumb.container.classList.add(this.player.config.classNames.previewThumbnails.thumbContainer),
                this.elements.thumb.imageContainer = e.createElement("div"),
                this.elements.thumb.imageContainer.className = this.player.config.classNames.previewThumbnails.imageContainer,
                this.elements.thumb.container.appendChild(this.elements.thumb.imageContainer);
                let t = e.createElement("div");
                t.className = this.player.config.classNames.previewThumbnails.timeContainer,
                this.elements.thumb.time = e.createElement("span"),
                this.elements.thumb.time.textContent = "00:00",
                t.appendChild(this.elements.thumb.time),
                this.elements.thumb.container.appendChild(t),
                this.player.elements.progress instanceof Element && this.player.elements.progress.appendChild(this.elements.thumb.container),
                this.elements.scrubbing.container = e.createElement("div"),
                this.elements.scrubbing.container.className = this.player.config.classNames.previewThumbnails.scrubbingContainer,
                this.player.elements.wrapper.appendChild(this.elements.scrubbing.container)
            }







showImageAtCurrentTime() {
    if (this.player.media.duration) {
        const config = this.config;
        const thumbnails = this.player.elements.progress.getBoundingClientRect();
        const duration = this.player.media.duration;
        const currentTime = this.player.media.currentTime;
        const thumbIndex = Math.floor(currentTime / (duration / config.pic_num));
        const row = Math.ceil((thumbIndex + 1) / (config.col * config.row)) - 1;
        const showing = thumbIndex >= 0;

        if (!this.loaded || !showing) {
            return;
        }

        this.mouseDown ? this.setScrubbingContainerSize() : this.setThumbContainerSizeAndPos();
        const thumbContainer = this.currentImageContainer;

        if (thumbContainer && thumbContainer.children.length < config.pic_num) {
            this.loadImage(row);
        }
    }
}








            }
            loadImage(e=0) {
                let t = this.showingThumb
                  , i = this.config.urls[e];
                if (this.currentImageElement && this.currentImageElement.src === i)
                    this.showImage(this.currentImageElement, e, t, i, !1),
                    this.currentImageElement.dataset.index = t,
                    this.removeOldImages(this.currentImageElement);
                else {
                    this.loadingImage && (this.loadingImage.onload = null);
                    let s = new Image;
                    s.src = i,
                    s.dataset.index = t,
                    this.player.debug.log(`Loading image: ${i}`),
                    s.onload = ()=>this.showImage(s, e, t, i, !0),
                    this.loadingImage = s,
                    this.removeOldImages(s)
                }
            }
            showImage(e, t, i, s, n=!0) {
                this.player.debug.log(`Showing thumb: ${s}. num: ${i}. qual: ${t}. newimg: ${n}`),
                this.setImageSizeAndOffset(e, i),
                n && (this.currentImageContainer.appendChild(e),
                this.currentImageElement = e,
                this.loadedImages.includes(s) || this.loadedImages.push(s))
            }
            removeOldImages(e) {
                Array.from(this.currentImageContainer.children).forEach(t=>{
                    if ("img" === t.tagName.toLowerCase() && t.dataset.index !== e.dataset.index && !t.dataset.deleting) {
                        t.dataset.deleting = !0;
                        let {currentImageContainer: i} = this;
                        setTimeout(()=>{
                            i.removeChild(t),
                            this.player.debug.log(`Removing thumb: ${t.dataset.filename}`)
                        }
                        , 500)
                    }
                }
                )
            }
            get currentImageContainer() {
                return this.mouseDown ? this.elements.scrubbing.container : this.elements.thumb.imageContainer
            }
            get thumbAspectRatio() {
                return this.config.width / this.config.height
            }
            get thumbContainerHeight() {
                return this.mouseDown ? Math.floor(this.player.media.clientWidth / this.thumbAspectRatio) : Math.floor(this.player.media.clientWidth / this.thumbAspectRatio / 4)
            }
            get currentImageElement() {
                return this.mouseDown ? this.currentScrubbingImageElement : this.currentThumbnailImageElement
            }
            set currentImageElement(e) {
                this.mouseDown ? this.currentScrubbingImageElement = e : this.currentThumbnailImageElement = e
            }
            toggleThumbContainer(e=!1, t=!1) {
                let i = this.player.config.classNames.previewThumbnails.thumbContainerShown;
                this.elements.thumb.container.classList.toggle(i, e),
                !e && t && (this.showingThumb = null,
                this.showingThumbFilename = null)
            }
            toggleScrubbingContainer(e=!1) {
                let t = this.player.config.classNames.previewThumbnails.scrubbingContainerShown;
                this.elements.scrubbing.container.classList.toggle(t, e),
                e || (this.showingThumb = null,
                this.showingThumbFilename = null)
            }
            determineContainerAutoSizing() {
                this.elements.thumb.imageContainer.clientHeight > 20 && (this.sizeSpecifiedInCSS = !0)
            }
            setThumbContainerSizeAndPos() {
                if (!this.sizeSpecifiedInCSS) {
                    let e = Math.floor(this.thumbContainerHeight * this.thumbAspectRatio);
                    this.elements.thumb.imageContainer.style.height = `${this.thumbContainerHeight}px`,
                    this.elements.thumb.imageContainer.style.width = `${e}px`
                }
                this.setThumbContainerPos()
            }
            setThumbContainerPos() {
                let e = this.player.elements.progress.getBoundingClientRect()
                  , t = this.player.elements.container.getBoundingClientRect()
                  , {container: i} = this.elements.thumb
                  , s = t.left - e.left + 10
                  , n = t.right - e.left - i.clientWidth - 10
                  , a = this.mousePosX - e.left - i.clientWidth / 2;
                a < s && (a = s),
                a > n && (a = n),
                i.style.left = `${a}px`
            }
            setScrubbingContainerSize() {
                this.elements.scrubbing.container.style.width = `${this.player.media.clientWidth}px`,
                this.elements.scrubbing.container.style.height = `${this.player.media.clientWidth / this.thumbAspectRatio}px`
            }
            setImageSizeAndOffset(e, t) {
                let i = this.config
                  , s = t + 1 - i.col * i.row * (Math.ceil((t + 1) / (i.col * i.row)) - 1)
                  , n = Math.ceil(s / i.row) - 1
                  , a = s - n * i.row - 1
                  , h = this.thumbContainerHeight / i.height;
                e.style.height = `${Math.floor(e.naturalHeight * h)}px`,
                e.style.width = `${Math.floor(e.naturalWidth * h)}px`,
                e.style.left = `-${a * i.width * h}px`,
                e.style.top = `-${n * i.height * h}px`
            }
        }
        e.addEventListener("ready", e=>{
            let t = e.detail.plyr;
            t.thumbnails = new n(t)
        }
        )
    }(document);
