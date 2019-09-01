/**
 * Product model considering id as primary key
 */
export class Product {
    constructor(
        public id: number,
        public name: string,
        public description: string
    ) { }
}
