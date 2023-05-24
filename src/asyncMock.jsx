const products = [
    {
        id: '1',
        name:'Media Nike',
        price: 100,
        category:'medias',
        img:'https://http2.mlstatic.com/D_NQ_NP_730604-MLA50010294566_052022-O.webp',
        stock:'10',
        description:'Descripcion de media',
    },
    {
        id: '2',
        name:'Lenceria',
        price: 100,
        category:'lenceria',
        img:'https://media.gotrendier.com.co/media/p/2021/12/14/n_9e152e3e-5d44-11ec-a368-024eb3899c31.jpeg',
        stock:'10',
        description:'Descripcion de lenceria',
    },
    {
        id: '3',
        name:'Gorra Nike',
        price: 100,
        category:'gorras',
        img:'https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwb5f32ae7/products/NI_DH1640-010/NI_DH1640-010-1.JPG',
        stock:'10',
        description:'Descripcion de gorra',
    },

]

export const getProductsByCategory =(productCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.category === productCategory))
        }, 500)
    })
} 

export const getProductsById =(productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

