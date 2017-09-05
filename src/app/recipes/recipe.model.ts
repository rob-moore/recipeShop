export class Recipe {
    public id: number;
    public name: string;
    public description: string;
    public imagePath: string;

    constructor(name: string, desciprtion: string, imagePath: string) {
        this.name = name;
        this.description= desciprtion;
        this.imagePath = imagePath
    }
}