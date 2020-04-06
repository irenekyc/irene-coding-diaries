const express = require('express')
const app = express()
const path = require ('path')
const ejs = require('ejs')
const Blog = require('./js/mongoose')

const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates')

app.use(express.static(publicDirectoryPath))
app.set('views', viewsPath)
app.set('view engine', 'ejs')

app.get('/', async (req,res)=>{
    const posts =  await Blog.find({}).sort({createdDate: 'descending'})
    try{
    res.render('index', {posts})}
    catch{ e => console.log(e)}
})

app.get('/posts', async (req,res)=>{
    const posts =  await Blog.find({}).sort({createdDate: 'descending'})
    try{
        res.render('posts', {posts})
    }
    catch{ e=> console.log(e)
    }
    
})

app.get('/filter', async (req, res)=>{
    const searchQuery = req.query.search.toLowerCase()
    const sortQuery = req.query.sort
    const categoryQuery = req.query.category
    let foundPosts
    if (sortQuery){
        sortedPosts = await Blog.find({}).sort({createDate: sortQuery})
     } else {
        sortedPosts = await Blog.find({}).sort({createDate: 'descending'})
     }
    if (searchQuery){
        foundPosts = sortedPosts.filter((p)=>{
            const title = p.title.toLowerCase()
            if (title.includes(searchQuery) || p.MainContent.includes(searchQuery)||p.categories.includes(searchQuery)){
                const search = true
                return search
            }
    })} else if (categoryQuery){
        foundPosts = await Blog.find({categories: {"$regex": categoryQuery, $options: "i"}})
            }
            console.log(foundPosts)
        try{
            if(foundPosts){
                res.render('posts', {posts: foundPosts})
            } else {
                res.render('posts', {posts: sortedPosts})
            }           
        } catch{
            e=> console.log(e)
        }
    
})

app.get('/:slug', async (req, res)=>{  
    const slugQuery = req.params.slug
    const post = await Blog.findOne({slug: slugQuery})
    const paragraphs = post.MainContent.split('#')
    const tags = post.categories.split(',')
    const recommendedPosts = await Blog.find({feature : true}).sort({'createdDate': 'descending'}).limit(4)
    const recommendedPost = recommendedPosts.filter(e => e.title !==post.title)

    try {
        res.render('single-post', {post, paragraphs, tags, recommendedPost})
    } catch {
        e=> console.log(e)
    }
    
})

app.listen( '3000', ()=>{
    console.log('server is now up on 3000')
})