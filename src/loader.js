const URL = process.env.REACT_APP_URL

export const productLoader = async () => {
    const response = await fetch(`${URL}`)
    const data = await response.json()
    return data
}

export const showLoader = async ({params}) => {
    const response = await fetch(`${URL}${params.id}`)
    const data = await response.json()
    return data
}