let posts = [] //JSON Array
let post //JSON Object

/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
const addPostData = (req, res) => {
    //postId, postTitle, postDesc
    let postId = req.body.postId
    let postTitle = req.body.postTitle
    let postDesc = req.body.postDesc

    post = {
        postId: postId,
        postTitle: postTitle,
        postDesc: postDesc
    }

    posts.push(post)

    res.status(201).send({
        message:'Create data success',
        data: post
    })
}

const getAllPostsData = (req, res) =>{
    res.status(200).send({message:'Get all posts data', posts:posts})
}

/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
const getPostById = (req, res) => {
    let postId = req.params.postId
    let findPost
    let index = -1
    let search = false
    for(let i = 0 ; i < posts.length ; i++){
        if(posts[i].postId == postId){
            index = i
            search = true
        }
    }
    if(search == true){
        findPost = posts[index]
        res.status(200).send({message:'Get post', data:findPost})
    }else{
        res.status(404).send({message:'Post data is not found'})
    }
    
}

/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
 const updatePostById = (req, res) => {
    let postId = req.params.postId
    let postTitle = req.body.postTitle
    let postDesc = req.body.postDesc
    let index = -1
    let search = false
    for(let i = 0 ; i < posts.length ; i++){
        if(posts[i].postId == postId){
            index = i
            search = true
        }
    }
    if(search == true){
        posts[index].postTitle = postTitle
        posts[index].postDesc = postDesc
        res.status(200).send({message:'Update post success', post:posts[index]})
    }else{
        res.status(404).send({message:'Post data is not found'})
    }
    
}

/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
 const deletePostById = (req, res) => {
    let postId = req.params.postId
    let index = -1
    let search = false
    for(let i = 0 ; i < posts.length ; i++){
        if(posts[i].postId == postId){
            index = i
            search = true
        }
    }
    if(search == true){
        posts.splice(index, 1)
        res.status(200).send({message:'Delete post success', posts:posts})
    }else{
        res.status(404).send({message:'Post data is not found'})
    }
    
}

module.exports = {
    addPostData,
    getAllPostsData,
    getPostById,
    updatePostById,
    deletePostById
}