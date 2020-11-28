export default class U {
    public static rand(start: number, end: number): number {
        return Math.floor((Math.random() * (end-start+1)) + start)
    }
    public static pickRandomElement(arr: any[]): any {
        return arr[U.rand(0, arr.length - 1)];
    }
    public static loop(func: (counter: number) => void, number: number): void {
        for(let i=0; i<number; i++){
            func(i)
        }
    }
    public static generateRandomID(): string {
        return Math.random().toString(32).slice(2)
    }
    public static go(...funcs: Array<(...args: any) => any>): (init: any) => void {
        return (init: any) => {
            funcs.reduce((res, func) => {
                return func(res);
            }, init)
        };
    }
    public static haveChance(max: number): boolean {
        return U.rand(1, max) == 1;
    }
    public static toRadian(degree: number): number {
        return (degree * Math.PI) / 180;
    }
    public static toDegree(radian: number): number {
        return radian * 180 / Math.PI;
    }
    /**고치자. */
    public static animationLoop(func: (progress: number) => void, reqTime: number): Promise<void> {
        return new Promise(rs => {
            let start = 0;
            const action = (time: number) => {
                if(start == 0) start = time;
                const progress = time - start;
                if(progress >= reqTime) return rs();
                func(progress / reqTime)
                requestAnimationFrame(action)
            }
            requestAnimationFrame(action)
        })
    }
    public static createRandomCase(caseObject: {
        [caseName: string]: () => void;
    }): void {
        const caseNumber = U.rand(0, Object.keys(caseObject).length - 1);
        caseObject[Object.keys(caseObject)[caseNumber]]();
    }
}