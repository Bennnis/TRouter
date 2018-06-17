export default abstract class History {
    abstract push(state: object, path: string): void;

    abstract go(step: number): void;

    abstract forward(): void;

    abstract back(): void;

    protected abstract handleRouterChange(state: object): void

    protected abstract initEvent(): void

    protected abstract initRouter(): void
}