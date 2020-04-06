const Blog = require('./mongoose')
const slugify = require('slugify')

const blog3 = new Blog({
    title: 'Third testing Post',
    categories: 'js, css, express',
    coverImage: 'images/blog3_cover.jpg',
    excerpt: 'Third Third Blog! testing!',
    MainContent: 'This is paragraph 1 # This is paragraph 2 # This is paragragh 3',
    blogImage: 'images/blog_in_image-3.jpg',
    slug: slugify('Third testing Post', {lower:true, strict:true})
})


blog3.save().then(()=>{
    console.log('blog3 is saved')
})
.catch((e)=> console.log(e))