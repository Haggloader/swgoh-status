import type { Farm } from "./farm";

export class FarmCategory {
    name: string
    farms: Farm[]

    public constructor(name: string, farms: Farm[]) {
        this.name = name
        this.farms = farms
        this.sortFarms()
    }

    public sortFarms() {
        this.farms.sort((a, b) => {
            if (a.name < b.name) {
                return -1
            }
            if (a.name > b.name) {
                return 1
            }
            return 0
        })
    }
}