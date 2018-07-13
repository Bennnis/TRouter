import {pushState, go} from '../utils/historySwitch'

export default class History {
    protected push(state: object = {}, path: string = undefined): void {
        pushState(state, path)
    }

    protected go(step: number): void {
        go(step)
    }

    protected foward(): void {
        this.go(+1)
    }

    protected back(): void {
        this.go(-1)
    }
}