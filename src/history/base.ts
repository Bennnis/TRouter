import History from '../abstracts/history'
import {pushState} from "../utils/historySwitch";
import InitConfig from "../utils/initConfig";
import HashRouter from "./hash";
import HistoryRouter from "./history";

export default abstract class BaseHistory extends History {
    config: InitConfig
    abstract router: HashRouter | HistoryRouter

    constructor(config: InitConfig) {
        super();

        this.config = config

        this.initEvent()
    }

    push(state: object, path: string) {
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
}