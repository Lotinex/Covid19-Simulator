import Entity from './Entity';
import {boundClass} from 'autobind-decorator';
import $ from 'jquery';

@boundClass
export default class RenderingEngine {
    protected readonly ctx: CanvasRenderingContext2D;
    protected entities: Entity[] = [];
    constructor(options: {
        width?: number;
        height?: number;
        id: string
    }){
        const canvas = document.getElementById(options.id)! as HTMLCanvasElement;
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
    public drawCircle(options: Graphic.DrawCirclesOptions): void {
        this.ctx.beginPath()
        this.ctx.fillStyle = options.fill || 'black';
        this.ctx.arc(options.x || 0, options.y || 0, options.radius, 0, Math.PI * 2)
        this.ctx.fill()
        this.ctx.closePath()
    }
    public addEntity(entity: Entity): void {
        this.entities.push(entity)
        entity.setRenderer(this)
    }
    public renderEntities(): void {
        this.clear()
        for(const entity of this.entities){
            entity.render()
        }
    }
    public update(): void {
        for(const entity of this.entities){
            entity.update()
        }
    }
    public clear(): void {
        this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
    }
    private frameLoop(): void {
        this.update()
        this.renderEntities()
        requestAnimationFrame(this.frameLoop)
    }
}