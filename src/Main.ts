import $ from 'jquery';
import RenderingEngine from './lib/Canvas';
import Map from './lib/Canvas';
import Entity from './lib/Entity';
import {PureCircle} from './lib/PureEntity';
import U from './lib/Utils';
import Human from './lib/Human';
import Framework from './lib/Framework';

export default class Main {
    public static state: MainState = {
        infected: 0
    };
    private static Stage = new Map({id: 'stage'});
    public static Entry(): void {
        U.loop(() => {
            const human = new Human({
                id: U.generateRandomID(),
                x: U.rand(100, 1300),
                y: U.rand(100, 700),
                radius: 10
            });
            if(U.haveChance(20)) human.infect()
            Main.Stage.addEntity(human)
        }, 200)
    }
    public static setState(stateObj: Partial<MainState>): void {
        let state: keyof MainState;
        for(state in stateObj){
            Main.state[state] = stateObj[state]!;
            Main.onStateChange(state, stateObj[state]!)
        }
    }
    private static onStateChange<K extends keyof MainState, V extends MainState[K]>(state: K, value: V): void {
        switch(state){
            case 'infected':
                $('#confirmed').text(Main.state.infected)
                break;
        }
    }
}
Main.Entry();
