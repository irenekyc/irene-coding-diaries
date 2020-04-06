const Blog = require('./mongoose')
const slugify = require('slugify')

const blog1 = new Blog({
    feature: true,
    title: 'First testing Post',
    categories: 'js, css, mb',
    coverImage: 'images/blog1.jpg',
    excerpt: 'First blog Blog! testing!',
    MainContent: 'This is paragraph 1 # This is paragraph 2 # This is paragragh 3 # This is the last paragraph',
    blogImage: 'images/blog_in_image-1.jpg',
    slug: slugify('First testing Post', {lower:true, strict:true})
})

blog1.save().then(()=>{
    console.log('blog1 is saved')
})
.catch((e)=> console.log(e))