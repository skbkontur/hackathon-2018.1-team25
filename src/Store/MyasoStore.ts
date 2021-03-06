export type Player = {
    xp: number,
    level: number,
    money: number,
}

export enum UnitName {
    Zombie = 'Zombie',
    Poo = 'Poo',
    Bubble = 'Bubble',
    Tower = 'Tower',
    Piston = 'Piston',
    Bazooka = 'Bazooka',
    Machinegun = 'Machinegun',
    Threegun = 'Threegun',
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
    maxHp: number;
    xp: number;
    lastShootTime: number;
};

export type ShootCharacter = {
    lastShootTime: number;
};

export type WeaponBullet = {
    destination: PointCoordinates;
    death: boolean;
}

export type HealData = {
    cost: number;
    hpToHeal: number;
}

export type WeaponRevealData = {
    cost: number;
    weaponName: WeaponBulletName;
}

export type WeaponsData = {
    [UnitName.Piston]: boolean;
    [UnitName.Bazooka]: boolean;
    [UnitName.Machinegun]: boolean;
    [UnitName.Threegun]: boolean;
}

export type UnitData = {
    Zombie: Character;
    Poo: Character;
    Bubble: Character;
    Tower: Character & {
        weaponRotation: number;
        weaponName: WeaponBulletName;
    };
    Piston: WeaponBullet;
    Bazooka: WeaponBullet;
    Machinegun: WeaponBullet;
    Threegun: WeaponBullet;
};

export type Unit<T extends UnitName> =
    & UnitData[T]
    & Rotaion
    & PointCoordinates
    & Size
    & {
    name: T;
    intersection: boolean;
    money: number;
};

export type MyasoStore = {
    units: Unit<UnitName>[];
    speed: number;
    shotPosition: PointCoordinates | undefined;
    hoverPosition: PointCoordinates,
    player: Player;
    weapons: WeaponsData;
    weapon: WeaponBulletName;
    showShopMenu: boolean;
};

export const TOWER_SIZE = 11;

export type WeaponBulletName = UnitName.Piston | UnitName.Bazooka | UnitName.Machinegun | UnitName.Threegun;

export const WeaponIntervals: {
    [key in WeaponBulletName]: number;
} = {
    [UnitName.Piston]: 500,
    [UnitName.Bazooka]: 500,
    [UnitName.Machinegun]: 100,
    [UnitName.Threegun]: 100,
};

export const UnitSize: {
    [key in UnitName]: Size;
} = {
    [UnitName.Zombie]: {
        width:4,
        height:4,
    },
    [UnitName.Poo]: {
        width:7,
        height:7,
    },
    [UnitName.Bubble]: {
        width:7,
        height:7,
    },
    [UnitName.Piston]: {
        width: 1,
        height: 1,
    },
    [UnitName.Bazooka]: {
        width: 1,
        height: 1,
    },
    [UnitName.Machinegun]: {
        width: 1,
        height: 1,
    },
    [UnitName.Threegun]: {
        width: 1,
        height: 1,
    },
    [UnitName.Tower]: {
        width: TOWER_SIZE,
        height: TOWER_SIZE,
    },
};

export const CharacterParams: {
    [key in UnitName]: Character;
} = {
    [UnitName.Zombie]: {
        hp:5,
        maxHp:5,
        xp: 1,
        lastShootTime: 0,
    },
    [UnitName.Poo]: {
        hp:10,
        maxHp:10,
        xp: 3,
        lastShootTime: 0,
    },
    [UnitName.Bubble]: {
        hp:100,
        maxHp:100,
        xp: 10,
        lastShootTime: 0,
    },
    [UnitName.Piston]: {
        hp: 0,
        maxHp: 0,
        xp: 0,
        lastShootTime: 0,
    },
    [UnitName.Machinegun]: {
        hp: 0,
        maxHp: 0,
        xp: 0,
        lastShootTime: 0,
    },
    [UnitName.Threegun]: {
        hp: 0,
        maxHp: 0,
        xp: 0,
        lastShootTime: 0,
    },
    [UnitName.Bazooka]: {
        hp: 0,
        maxHp: 0,
        xp: 0,
        lastShootTime: 0,
    },
    [UnitName.Tower]: {
        hp: 0,
        maxHp: 0,
        xp: 0,
        lastShootTime: 0,
    },
};

export const UnitMoney: {
    [key in UnitName]: number;
} = {
    [UnitName.Zombie]: 10,
    [UnitName.Poo]: 25,
    [UnitName.Bubble]: 50,
    [UnitName.Piston]: 0,
    [UnitName.Machinegun]: 0,
    [UnitName.Threegun]: 0,
    [UnitName.Bazooka]: 0,
    [UnitName.Tower]: 0,
};

export const defaultConstructorState: MyasoStore = {
    units: [
        {
            name: UnitName.Tower,
            x: -TOWER_SIZE / 2,
            y: -TOWER_SIZE / 2,
            ...UnitSize.Tower,
            hp: 100,
            maxHp: 100,
            intersection: false,
            rotation: 0,
            lastShootTime: 0,
            xp: 0,
            weaponRotation: 0,
            money: 0,
            weaponName: UnitName.Machinegun,
        },
    ],
    speed: 1,
    shotPosition: undefined,
    hoverPosition: {
        x: 0,
        y: 0,
    },
    player: {
        level: 1,
        xp: 0,
        money: 100,
    },
    weapons: {
        [UnitName.Piston]: true,
        [UnitName.Bazooka]: false,
        [UnitName.Machinegun]: false,
        [UnitName.Threegun]: false,
    },
    weapon: UnitName.Piston,
    showShopMenu: false,
};
