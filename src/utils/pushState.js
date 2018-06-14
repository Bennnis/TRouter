(function (history) {
    var p = history.pushState

    history.pushState = function (state, title, path) {
        if (typeof history.onpushstate === 'function') {
            history.onpushstate(state, title, path)
        }

        return p.apply(history, arguments)
    }
})(window.history)

var pushState = (state, title, path) => {
    history.pushState(state, title, path)
}