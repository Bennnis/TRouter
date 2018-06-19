import History from '../abstracts/history'
import {pushState} from "../utils/historySwitch";
import {getUrl} from "../utils/helper";
import InitConfig from "../utils/initConfig";
import HashRouter from "./hash";
import HistoryRouter from "./history";

export default abstract class BaseHistory extends History {
    config: InitConfig
    abstract router: HashRouter | HistoryRouter

    constructor(config: InitConfig) {
        super();

        this.config = config

        this.initPushState()
        this.initEvent()

        window.onload = () => {
            this.initPage()
        }
    }

    initPushState() {
        let ps = history.pushState
        history.pushState = (state: object, path: string) => {
            ps.call(history, state, null, getUrl(this.config.type, path))

            this.handleRouterChange(state)
        }
    }

    handleRouterChange(state: object = {}) {
        const url = this.config.type === 'hash' ? window.location.hash.slice(1) : window.location.pathname

        this.config.routes.some(route => {
            if (url === route.path) {
                route.render()
                return true
            }
        })
    }

    push(state: object = {}, path: string) {
        pushState(state, path)
    };

    forward(): void {
        this.go(+1)
    }

    go(step: number): void {
        history.go(step)
    }

    back(): void {
        this.go(-1)
    }

    initPage(): void {
        this.handleRouterChange()
    }
}