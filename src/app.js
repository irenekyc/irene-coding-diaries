const express = require('express')
const app = express()
const path = require ('path')
const ejs = require('ejs')
const Blog = require('./js/mongoose')
const PORT = process.env.PORT


const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates')

app.use(express.static(publicDirectoryPath))
app.set('views', viewsPath)
app.set('view engine', 'ejs')


app.get('/', async (req,res)=>{
    const posts =  await Blog.find({}).sort({createdDate: 'descending'}).limit(3)
    const featuredPosts = await Blog.find({feature: true}).sort({createdDate: 'descending'}).limit(1)
    try{
    res.render('index', {posts, featuredPosts})}
    catch{ e => console.log(e)}
})

let sortQuery, searchQuery, categoryQuery

app.get('/posts', async (req,res)=>{
    sortQuery='descending'
    const posts =  await Blog.find({}).sort({createdDate: sortQuery})
    try{
        res.render('posts', {posts, sortQuery, searchQuery, categoryQuery})
    }
    catch{ e=> console.log(e)
    }
    
})
let foundPosts

app.get('/filter', async (req, res)=>{
    searchQuery = req.query.search
    sortQuery = req.query.sort || 'descending'
    categoryQuery = req.query.category
    sortedPosts = await Blog.find({}).sort({createdDate: sortQuery})
    if (searchQuery){
        searchQuery = searchQuery.toLowerCase()
        foundPosts = sortedPosts.filter((p)=>{
            const title = p.title.toLowerCase()
            const author = p.author.toLowerCase()
            if (title.includes(searchQuery) || p.MainContent.includes(searchQuery)||p.categories.includes(searchQuery)||author.includes(searchQuery)){
                const search = true
                return search
            }
    })
    } 
    if (categoryQuery){
        foundPosts = await Blog.find({categories: {"$regex": categoryQuery, $options: "i"}}).sort({createdDate: sortQuery})
            }
        try{
            if(foundPosts){
                posts = foundPosts
            } else {
                posts= sortedPosts
            }   
             res.render('posts', {posts, searchQuery, sortQuery, categoryQuery})       
        } catch{
            e=> console.log(e)
        }
})

app.get('/:slug', async (req, res)=>{  
    const slugQuery = req.params.slug
    const post = await Blog.findOne({slug: slugQuery})
    const paragraphs = post.MainContent.split('#')
    let firstP=[], secondP = [], thirdP=[], lastP=[]
    for (i=0; i<2; i++){
        firstP.push(paragraphs[i])
    }
    for (i=2; i<4; i++){
        secondP.push(paragraphs[i])
    }
    for (i=4; i<6; i++){
        thirdP.push(paragraphs[i])
    }
    for (i=6; i<paragraphs.length; i++){
        lastP.push(paragraphs[i])
    }
    const tags = post.categories.split(',')
    const recommendedPosts = await Blog.find({feature : true}).sort({'createdDate': 'descending'}).limit(4)
    const recommendedPost = recommendedPosts.filter(e => e.title !==post.title)

    try {
        res.render('single-post', {post, firstP, secondP, thirdP, lastP, tags, recommendedPost})
    } catch {
        e=> console.log(e)
    }
    
})


app.listen( PORT, ()=>{
    console.log('server is now up on ' + PORT)
})