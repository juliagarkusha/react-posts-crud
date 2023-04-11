class PostApi {
  static URL = "https://jsonplaceholder.typicode.com/posts/";

  static getList () {
    return fetch(PostApi.URL)
      .then(response => {
        if(response.ok) {
          return response.json();
        }

        throw new Error('Can not fetch post list from server');
      })
  }

  static getPostById (id) {
    return fetch(`${PostApi.URL}/${id}`)
      .then(response => {
        if(response.ok) {
          return response.json();
        }

        throw new Error('Can not fetch post list from server');
      })
  }

  static create(todo) {
    return fetch(PostApi.URL, {
      method: 'POST',
      body: JSON.stringify(todo),
      headers: {
        'Content-type': 'application/json',
      }
    }).then(response => {
      if(response.ok) {
        return response.json();
      }

      throw new Error('Can not create post on server')
    })
  }

  static update(newPost) {
    return fetch(PostApi.URL + newPost.id, {
      method: 'PUT',
      body: JSON.stringify(newPost),
      headers: {
        'Content-type': 'application/json',
      }
    }).then(response => {
      if(response.ok) {
        return response.json();
      }

      throw new Error('Can not update post on server')
    })
  }

  static delete(id) {
    return fetch(PostApi.URL + id, {
      method: 'DELETE',
    }).then(response => {
      if(response.ok) {
        return response.json();
      }

      throw new Error('Can not delete post on server')
    })
  }
}

export default PostApi;
