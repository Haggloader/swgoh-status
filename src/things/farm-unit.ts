export class FarmUnit {
    name: string
    stars: number
    gear_level?: number
    relic_level?: number
    speed: number

    constructor(name: string, stars: number, gear_level?: number, relic_level?: number, speed: number)
    {
        this.name = name
        this.stars = stars
        this.gear_level = gear_level
        this.relic_level = relic_level
        this.speed = speed
    }
}

export const spacer = new FarmUnit('Darth Revan', 0)
