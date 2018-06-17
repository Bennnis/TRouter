import BaseRouter from './base'
import InitConfig from "../utils/initConfig";

class HashRouter extends BaseRouter{
    router: HashRouter;

    constructor(config: InitConfig) {
        super(config)
    }

    protected handleRouterChange(state: object): void {
    }

    protected initEvent(): void {
    }

    protected initRouter(): void {
    }
}

export default HashRouter