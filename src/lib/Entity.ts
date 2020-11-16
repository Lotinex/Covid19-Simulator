import RenderingEngine from './Canvas';
import Texture from './Texture';

export default class Entity {
    public id?: string;
    public x: number;
    public y: number;
    public w: number;
    public h: number;
    
    protected texture?: Texture;

    public renderer?: RenderingEngine;

    constructor(options: Graphic.EntityInitialOptions){
        this.x = options.x || 0;
        this.y = options.y || 0;
        this.w = options.w || 100;
        this.h = options.h || 100;
    }
    public setRenderer(renderer: RenderingEngine): void {
        this.renderer = renderer;
    }
    public setTexture(source: string): void {
        this.texture = new Texture({ source });
    }
    public update(): void {
        //Implement Me
    }
    public render(): void {
        this.renderer?.draw({
            img: this.texture!
        })
    }
}