import $ from 'jquery';
import RenderingEngine from './lib/Canvas';
import Map from './lib/Canvas';
import Entity from './lib/Entity';
import {PureCircle} from './lib/PureEntity';
import U from './lib/Utils';
import Human from './lib/Human';
import Framework from './lib/Framework';
import Building from './lib/Building';
import {alertIcons} from './lib/Data';

export default class Main {
    public static state: MainState = {
        infected: 0
    };
    public static Stage = new Map({id: 'stage'});
    public static TextRenderer = new RenderingEngine({id: 'textrenderer'});
    public static Entry(): void {
        U.loop(() => {
            const human = new Human({
                id: U.generateRandomID(),
                x: U.rand(-2000, 2000),
                y: U.rand(-2000, 2000),
                radius: 10
            });
            if(U.haveChance(20)) human.infect()
            Main.Stage.addEntity(human)
        }, 100)
        U.loop(() => {
            const building = new Building({
                id: U.generateRandomID(),
                x: U.rand(100, 1300),
                y: U.rand(100, 700),
                w: U.rand(50, 200),
                h: U.rand(50, 200),
                fill: 'gray'
            })
            Main.Stage.addEntity(building)
        }, 10)
        Main.alert('info', '2명의 신규 확진자 발생')
        Main.alert('warn', '전국의 모든 학교는 온라인으로 전환됩니다.')
        Main.alert('important', '백신 개발 진전 -2.5%')
    }
    public static setState(stateObj: Partial<MainState>): void {
        let state: keyof MainState;
        for(state in stateObj){
            Main.state[state] = stateObj[state]!;
            Main.onStateChange(state, stateObj[state]!)
        }
    }
    public static alert(type: 'info' | 'warn' | 'important', text: string): void {
        const alertBox = $('<div>').addClass('alertBox').addClass(`alertBox-style-${type}`);
        const closeBtn = $('<div>').addClass('alertBox-close').html('<i class="fas fa-times"></i>');
        alertBox.append($('<span>').addClass('alertBox-icon').html(alertIcons[type]))
        alertBox.append($('<span>').addClass('alertBox-text').text(text))
        alertBox.append(closeBtn)

        closeBtn.on('click', e => {
            alertBox.addClass('disappearBox')
            alertBox.on('animationend', () => {
                alertBox.remove()
            })
        })

        $('#alertArea').append(alertBox)
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
