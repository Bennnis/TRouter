import BaseRouter from './base'
import InitConfig from "../utils/initConfig";

class HashRouter extends BaseRouter{
    router: HashRouter;

    constructor(config: InitConfig) {
        super(config)
    }

    protected initEvent(): void {
        window.onhashchange = (e: any) => {
            this.handleRouterChange(e.state)
        }
    }

    protected initRouter(): void {
        this.router = this
    }
}

export default HashRouter