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

export const editBook = async (id, title, author, publisher, year, pages) => {
  try {
    const response = await fetch(`${BASE_URL}/editbooks/${id}`, {
      method: 'PUT',
      body: title,
      author,
      publisher,
      year,
      pages,
    })
    return response
  } catch (err) {
    throw new Error({ message: err.response.messsage })
  }
}

export const uploadImage = async (params) => {

  try {   
      const response = await fetch(`${BASE_URL}/books/uploads`, {
          method: "POST",
          body: params
      })
      
      const data = await response.json();

      return data
  } catch(err) {
      throw new Error({message: err.response.message || "Internal Server Error"})
  }
}