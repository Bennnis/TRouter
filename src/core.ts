import HistoryRouter from './history/history'
import HashRouter from './history/hash'
import InitConfig from './utils/initConfig'

export default class TRouter {
    history: HashRouter | HistoryRouter
    config: InitConfig

    constructor(config: InitConfig) {
        this.config = config

        this.history = this.initHistory()
    }

    private initHistory() {
        switch (this.config.type) {
            case 'history':
                return new HistoryRouter(this.config)
            default:
                return new HashRouter(this.config)
        }
    }
}