
export const createProduct = async (list) => {
    console.log("pro",list);
    
    let req = await fetch('http://localhost:3040/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(list)
    })
    console.log(list);
    let res = await req.json()
    return res
    // console.log(res); 
}

export const getProduct = async () => {
    let req = await fetch('http://localhost:3040/');
    let res = await req.json()
    return res
}

export const DeleteProduct = async (id) => {

    let req = await fetch(`http://localhost:3040/${id}`, {
        method: 'DELETE'
    })
}

export const updateProduct = async (id, list) => {
    let req = await fetch(`http://localhost:3040/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(list)
    })
}
