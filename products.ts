export interface Product {
    id: number
    name: string
    price: string
    originalPrice: string
    image: string
    category: string
}

export const products = [
    {
        id: 1,
        name: 'watch',
        price: '$199.99',
        originalPrice: '$299.99',
        image: '/images/watch.jpeg',
        category: 'Electronics'
    },
    {
        id: 2,
        name: 'shoes',
        price: '$89.99',
        originalPrice: '$129.99',
        image: '/images/shoe.jpeg',
        category: 'Footwear'
    }
]