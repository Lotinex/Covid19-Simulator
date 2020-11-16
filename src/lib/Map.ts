import RenderingEngine from './Canvas';
import Entity from './Entity';
import Human from './Human';


export default class Map extends RenderingEngine {
    constructor(options: {
        width?: number;
        height?: number;
        id: string
    }){
        super(options)
    }
    public addHuman(human: Human): void {
        this.addEntity(human)
    }
    public setAreas(): void {

    }
}

