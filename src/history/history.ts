import BaseRouter from './base'
import InitConfig from "../utils/initConfig";

class HistoryRouter extends BaseRouter{
    router: HistoryRouter;

    constructor(config: InitConfig) {
        super(config)
    }

    protected initEvent(): void {
        window.onpopstate = (e: any) => {
            this.handleRouterChange(e.state)
        }
    }

    protected initRouter(): void {
        this.router = this
    }
}

export default HistoryRouter