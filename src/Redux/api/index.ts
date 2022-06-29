import { create } from "apisauce";

const API = create({
 baseURL: 'https://studapi.teachmeskills.by/'
})

const getAllPostsApi = ({
 search = '',
 limit = 10,
 offset = 0,
 ordering = 'date'
}) => {
 return API.get('/blog/posts/', {search, limit, offset, ordering})
}

export {getAllPostsApi}