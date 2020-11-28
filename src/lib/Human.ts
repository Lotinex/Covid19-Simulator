import Entity from './Entity';
import {PureCircle} from './PureEntity';
import U from './Utils';
import {boundClass} from 'autobind-decorator';
import Main from '../page/Main';

@boundClass
export default class Human extends PureCircle {
    public AI: boolean = true;
    public infected: boolean = false;
    /**
     * range: 0 ~ 100
     */
    public immunity: number = 100;
    constructor(options: Graphic.EntityInitialOptions & {
        radius: number;
        fill?: string;
    }){
        super(options)
        this.createUpdate(this.randomMove, 300)
    }
    private randomMove(){
        if(this.AI){
            if(U.haveChance(10)){
                const moveValue = U.rand(1, 3);
                const moveTime = U.rand(300, 1000);
                U.createRandomCase({
                    Up: () => {
                        U.animationLoop(progress => {
                            this.move({
                                y: -moveValue
                            })
                        }, moveTime)
                    },
                    Down: () => {
                        U.animationLoop(progress => {
                            this.move({
                                y: moveValue
                            })
                        }, moveTime)
                    },
                    Left: () => {
                        U.animationLoop(progress => {
                            this.move({
                                x: -moveValue
                            })
                        }, moveTime)
                    },
                    Right: () => {
                        U.animationLoop(progress => {
                            this.move({
                                x: moveValue
                            })
                        }, moveTime)
                    }
                })
            }
        }
    }
    private checkPeopleCollisionAll(): Human[] | null {
        const collisionList: Human[] = [];
        for(const entity of this.renderer!.entities){
            const target = entity as Human;
            if(target.id == this.id) continue;
            if(target.radius){
                const height = target.y - this.y;
                const lowerBase = target.x - this.x;
                const distance = Math.sqrt(height ** 2 + lowerBase ** 2);

                if(target.radius + this.radius >= distance) collisionList.push(target)

            }
        }
        if(collisionList.length == 0) return null;
        return collisionList;
    }
    public infect(): void {
        this.infected = true;
        this.fill = 'red';
        Main.setState({
            infected: Main.state.infected + 1
        })
    }
    public cure(): void {
        this.infected = false;
        this.fill = 'black';
    }
    public update(){
        const collisionList = this.checkPeopleCollisionAll();
        if(collisionList){
            if(this.infected){
                for(const entity of collisionList){
                    if(!entity.infected) entity.infect()
                }
            } else {
                for(const entity of collisionList){
                    if(entity.infected && !this.infected) this.infect()
                }
            }
        }
    }
}