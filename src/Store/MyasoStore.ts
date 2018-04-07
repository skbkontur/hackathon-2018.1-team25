export type Player = {
    xp: number,
    level: number,
    money: number,
}

export enum UnitName {
    Zombie = 'Zombie',
    Tower = 'Tower',
}

export type Rotaion = {
    rotation: number;
};

export type PointCoordinates = {
    x: number;
    y: number;
}

export type Size = {
    width: number;
    height: number;
}

export type Character = {
    // 0 - 100
    hp: number;
    intersection: boolean;
};

export type UnitData = {
    Zombie: Character;
    Tower: Character;
};

export type Unit<T extends UnitName> =
    & UnitData[T]
    & Rotaion
    & PointCoordinates
    & Size
    & {
    name: T;
};

export type MyasoStore = {
    units: Unit<UnitName>[];
    speed: number;
    player: Player;
};

export const TOWER_SIZE = 9;

export const defaultConstructorState: MyasoStore = {
    units: [
        {
            name: UnitName.Tower,
            x: -TOWER_SIZE / 2,
            y: -TOWER_SIZE / 2,
            width: TOWER_SIZE,
            height: TOWER_SIZE,
            hp: 100,
            intersection: false,
            rotation: 0,
        },
        {
            name: UnitName.Zombie,
            x: -50,
            y: 0,
            width: 2,
            height: 2,
            hp: 100,
            intersection: true,
            rotation: 45,
        },
        {
            name: UnitName.Zombie,
            x: 50,
            y: 80,
            width: 2,
            height: 2,
            hp: 100,
            intersection: true,
            rotation: 45,
        },
        {
            name: UnitName.Zombie,
            x: -40,
            y: 100,
            width: 2,
            height: 2,
            hp: 100,
            intersection: true,
            rotation: 45,
        },
        {
            name: UnitName.Zombie,
            x: 100,
            y: -50,
            width: 2,
            height: 2,
            hp: 100,
            intersection: true,
            rotation: 45,
        },
        {
            name: UnitName.Zombie,
            x: -70,
            y: 50,
            width: 2,
            height: 2,
            hp: 100,
            intersection: true,
            rotation: 45,
        },
    ],
    speed: 3,
    player: {
        level: 1,
        xp: 0,
        money: 100,
    },
};
