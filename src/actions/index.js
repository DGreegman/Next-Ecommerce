"use server"

export async function fetchAllProducts(){
    try {
        const result = await fetch('https://dummyjson.com/products',
            {
                method: 'GET',
                cache: 'no-store'
            }
        )
        const data = await result.json()
        return {
            success: true,
            data: data?.products
        }
    } catch (error) {
        console.log(error.message);
        return {
            success: false,
            message: 'Some Error Occured while getting all products'
        }
        
    }
}

export async function fetchProductDetails(id){
    try {
        const product = await fetch(`https://dummyjson.com/products/${id}`, {
            method: 'GET',
            cache: 'no-store'
        })
        const data = product.json();
        return data

    } catch (error) {
        console.log(error.message);
        return {
            success: false,
            message: 'Some Error Occured while getting all products'
        }
    }
}