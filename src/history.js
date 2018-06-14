class HistoryRouter {
    constructor (config, callback) {
        window.onpopstate = history.onpushstate = function (state, title, path) {
            callback(state, title, path)
        }
    }

    push (path, state, title) {
        pushState(state, title, path)
    }
}