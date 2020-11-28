export default class Framework<T> {
    public state: T = {} as any;
    public setState(stateObj: Partial<T>): void {
        for(const state in stateObj){
            this.state[state] = stateObj[state]!;
            this.onStateChange(state, stateObj[state]!)
        }
    }
    protected onStateChange<K extends keyof T, V extends T[K]>(state: K, value: V): void {
        // Implement this
    }
}