import {Entity, UIEntity} from './Entity';

export class RenderingEngine {
    protected readonly ctx: CanvasRenderingContext2D;
    protected entities: {
        [entityID: string]: Entity; 
    } = {};
    constructor(options?: Partial<{
        width: number;
        height: number;
        id: string
    }>){
        const canvas = document.createElement('canvas');
        if(options?.id) canvas.id = options?.id;
        canvas.width = options?.width || window.innerWidth;
        canvas.height = options?.height || window.innerHeight;
        this.ctx = canvas.getContext('2d')!;
    }
    public update(): void {

    }
}
export class UIRenderingEngine extends RenderingEngine {
}