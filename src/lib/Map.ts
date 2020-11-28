import RenderingEngine from './Canvas';
import Entity from './Entity';
import Human from './Human';
import {PureCircle} from './PureEntity'
import U from './Utils';

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

