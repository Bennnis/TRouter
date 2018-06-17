export const pushState = (state: object = {}, path: string = undefined) => {
    console.log('push state', path)
    history.pushState(state, null, path)
}
export const go = (step: number) => {
    console.log('go', step)
}