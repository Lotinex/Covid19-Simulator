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
    type DrawOptions = {
        img: import('../lib/Texture').default;
        w?: number;
        h?: number;
    } & Partial<PurePoint>;
    type TextureInitialOptions = {
        w?: number;
        h?: number;
        source: string;
    }
    type DrawCirclesOptions = {
        radius: number;
        fill?: string;
    } & Partial<PurePoint>;
}
type MainState = {
    infected: number;
}