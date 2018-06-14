class TRouter {
    constructor (config) {
        //---------------------private varible---------------------------
        const _modeMap = {
            'history': HistoryRouter
        }

        //---------------------private function--------------------------
        const initWithMode = (config) => {
            return new _modeMap[config.mode](config, routeChangeHandler)
        }

        const routeChangeHandler = (state, title, path) => {
            var route = findRouter(path)

            !!route && route.render()
        }

        const findRouter = (path) => {
            var r
            this.config.routes.forEach(function(route) {
                if (route.path === path) {
                    r = route
                }
            })

            return r
        }
        
        //---------------------public varible----------------------------
        this.config = config
        this.history = initWithMode(config)
    }
}