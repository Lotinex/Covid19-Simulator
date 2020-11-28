import RenderingEngine from './Canvas';
import Texture from './Texture';

export default class Entity {
    public id: string;
    public x: number;
    public y: number;
    public w: number;
    public h: number;
    
    protected texture?: Texture;

    public renderer?: RenderingEngine;

    constructor(options: Graphic.EntityInitialOptions){
        this.id = options.id;
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
    protected createUpdate(updateMethod: (time: number) => void, delay: number): void {
        const original = updateMethod;
        let lastUpdate = 0;

        updateMethod = function(time){
            if(time - lastUpdate < delay){
                return void requestAnimationFrame(updateMethod);
            }
            lastUpdate = time;
            original(time)
            requestAnimationFrame(updateMethod)
        };
        requestAnimationFrame(updateMethod)
    }
    public move(point: Partial<Graphic.PurePoint>): void {
        if(point.x) this.x += point.x;
        if(point.y) this.y += point.y;
    }
    public position(point: Partial<Graphic.PurePoint>): void {
        if(point.x) this.x = point.x;
        if(point.y) this.y = point.y;
    }
    public update(): void {
        //Implement Me
    }
    public render(): void {
        this.renderer?.draw({
            img: this.texture!
        })
    }
    public onMouseOver(): void {
        
    }
    public onClick(): void {

    }
}