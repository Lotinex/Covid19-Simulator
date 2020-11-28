import $ from 'jquery';
import RenderingEngine from './lib/Canvas';
import Map from './lib/Canvas';
import Entity from './lib/Entity';
import {PureCircle} from './lib/PureEntity';
import U from './lib/Utils';
import Human from './lib/Human';

export default class Main {
    private static Stage = new Map({id: 'stage'});
    public static Entry(): void {
        U.loop(() => {
            Main.Stage.addEntity(
                new Human({
                    x: U.rand(100, 1300),
                    y: U.rand(100, 700),
                    radius: 10
                })
            )
        }, 10)
    }
}
Main.Entry();
