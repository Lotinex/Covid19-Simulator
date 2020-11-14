declare namespace Graphic {
    type PurePoint = {
        x: number;
        y: number;
    }
    type EntityInitialOptions = {
        id: string;
        w?: number;
        h?: number;
    } & Partial<PurePoint>;

    type UIEntityInitialOptions = {
        w?: number;
        h?: number;
    } & Partial<PurePoint>;
    
    interface test {
        name: string;
    }
}