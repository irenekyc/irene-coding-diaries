const Blog = require('./mongoose')
const slugify = require('slugify')

const blog2 = new Blog({
    title: 'Second testing Post',
    categories: 'js, css, html',
    coverImage: 'images/blog2_cover.jpg',
    excerpt: 'Second blog Blog! testing!',
    MainContent: 'This is paragraph 1 # This is paragraph 2 # This is paragragh 3 # This is the last paragraph # this is the last last last paragraph',
    blogImage: 'images/blog_in_image-2.jpg',
    slug: slugify('Second testing Post', {lower:true, strict:true})
})


blog2.save().then(()=>{
    console.log('blog2 is saved')
})
.catch((e)=> console.log(e))