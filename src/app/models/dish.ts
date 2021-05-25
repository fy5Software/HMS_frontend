export class Dish {
    public id?: number;
    public name!: string;
    public description: string | undefined;
    public halfPrice!: number;
    public fullPrice!: number;
    public qty!: number;
    public image: any;
    public mainCategoryId?: number;
    public mainCategoryName: string;
    public newCategory: string;
    public isVeg:boolean;
    public isHalf:boolean;
    public isFull:boolean;
    public imageUrl:any;
    public nonVegCategory:string;
    public timeForService: number;
    constructor(
    ) { }
}

export class DishCategory{
    public id? : number;
    public name!: string;
    public description: string | undefined;
    constructor(
        ) { }
}
    
