import Entity from './Entity';
import {boundClass} from 'autobind-decorator';

@boundClass
export default class RenderingEngine {
    protected readonly ctx: CanvasRenderingContext2D;
    protected entities: Entity[] = [];
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

        requestAnimationFrame(this.frameLoop)
    }
    public draw(options: Graphic.DrawOptions): void {
        const x = options.x || 0
        const y = options.y || 0;
        const w = options.w || 100;
        const h = options.h || 100;
        this.ctx.drawImage(options.img.img, x - w / 2, y - h / 2, w , h)
    }
    public addEntity(entity: Entity): void {
        this.entities.push(entity)
        entity.setRenderer(this)
    }
    public renderEntities(): void {
        for(const entity of this.entities){
            entity.render()
        }
    }
    public update(): void {
        for(const entity of this.entities){
            entity.update()
        }
    }
    private frameLoop(): void {
        this.update()
        this.renderEntities()
        requestAnimationFrame(this.frameLoop)
    }
}