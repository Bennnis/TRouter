export const pushState = (state: object = {}, path: string = undefined) => {
    history.pushState(state, path)
}
export const go = (step: number) => {
    console.log('go', step)
}