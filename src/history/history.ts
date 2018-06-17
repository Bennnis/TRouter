import BaseRouter from './base'
import InitConfig from "../utils/initConfig";

class HistoryRouter extends BaseRouter{
    router: HistoryRouter;

    constructor(config: InitConfig) {
        super(config)
    }

    protected handleRouterChange(state: Object): void {
        this.config.routes.some(route => {
            if (window.location.pathname === route.path) {
                route.render()
                return true
            }
        })
    }

    protected initEvent(): void {
        const pushState = history.pushState

        history.pushState = (state: Object, title: String, path: String) => {
            pushState.call(history, state, title, path)

            this.handleRouterChange(state)
        }

        window.onpopstate = (e: any) => {
            this.handleRouterChange(e.state)
        }
    }

    protected initRouter(): void {
        this.router = this
    }
}

export default HistoryRouter