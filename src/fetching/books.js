import BASE_URL from '@/lib/baseUrl'

export const deleteBook = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/books/${id} `, {
      method: 'DELETE',
    })
    return response
  } catch (err) {
    throw new Error({ message: err.response.messsage })
  }
}

export const createBook = async (params) => {
  try {
    const response = await fetch(`${BASE_URL}/books/ `, {
      method: 'POST',
      body: JSON.stringify(params),
    })
    return response
  } catch (err) {
    throw new Error({ message: err.response.messsage })
  }
}

export const editBook = async (id, params) => {
  try {
    const response = await fetch(`${BASE_URL}/books/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    })

    const data = await response.json()

    return data
  } catch (error) {
    throw new Error({
      message: error.response.message || 'Internal Server Error',
    })
  }
}

export const uploadImage = async (params) => {
  try {
    const response = await fetch(`${BASE_URL}/books/uploads`, {
      method: 'POST',
      body: params,
    })

    const data = await response.json()

    return data
  } catch (err) {
    throw new Error({
      message: err.response.message || 'Internal Server Error',
    })
  }
}
