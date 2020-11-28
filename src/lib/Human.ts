import Entity from './Entity';
import {PureCircle} from './PureEntity';
import U from './Utils';
import {boundClass} from 'autobind-decorator';

@boundClass
export default class Human extends PureCircle {
    private AI: boolean = true;
    constructor(options: Graphic.EntityInitialOptions & {
        radius: number;
        fill?: string;
    }){
        super(options)
    }
    public update(){
        if(this.AI){
            if(U.haveChance(100)){
                U.createRandomCase({
                    Up: () => {
                        U.animationLoop(progress => {
                            this.move({
                                y: -(U.rand(5, 10) * progress)
                            })
                        }, U.rand(100, 300))
                    },
                    Down: () => {
                        U.animationLoop(progress => {
                            this.move({
                                y: U.rand(5, 10) * progress
                            })
                        }, U.rand(100, 300))
                    },
                    Left: () => {
                        U.animationLoop(progress => {
                            this.move({
                                x: -(U.rand(5, 10) * progress)
                            })
                        }, U.rand(100, 300))
                    },
                    Right: () => {
                        U.animationLoop(progress => {
                            this.move({
                                x: (U.rand(5, 10) * progress)
                            })
                        }, U.rand(100, 300))
                    }
                })
            }
        }
    }
}