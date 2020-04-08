const Blog = require('./mongoose')
const slugify = require('slugify')

const blog3 = new Blog({
    feature:true,
    title: 'Three pure CSS effects Ideas to make your website alive',
    SEOkeyWords:'css animation, css tricks, advanced css, web design user experience',
    categories: 'css',
    coverImage: 'images/blog3/blog3-cover.jpg',
    excerpt: 'What are your thoughts about CSS? CSS is a stylist and a magician ',
    MainContent: `I like CSS a lot, there are so many possiblities. In this blog, I am going to share three PURE CSS projects that I coded.#
    Let's start with an stright-forward one. This is an image gallery using Flexbox. Flexbox (Flexible Box) aims to provide a more efficient way to lay out, align and distribute space among items in your website, even when their size is unknown and/or dynamic. It is more than that. #

    By using the proprty "flex", you will be able to manipulate the side of the elements when you hover on it. Just like how my picture grow in size when I hover on the specific image. #
    The next one is slide show, I have 5 slides to show the website users with different information. This is enable by changing the transform: translateX value.#
    

    There are different javascript libraries that enable this function, but isn't it cool for you as a new web developer to create it? #
    The last one is 3D card hover effect. There are so many ways to showcase your service/ price card/ photo gallery and information. But it is a pretty cool effects when user hover or click on the card and the card will flip over#

    In my coding challenge journey, I have tried not to use any javascript library. The main goal of coding challenge is to familiarize yourself with organic code and expose yourself to different challenges and new knowledge.#
    If you like this article and would like to understand more. Please feel free to reach out to me on social media or send me an email.#
    There are some other projects with CSS effect. You can go checkout on my portfolio site. #
    `
    ,
    blogImage1: 'images/blog3/flexbox-gallery.png ',
    img1Description: 'https://irenekyc.github.io/photo-gallery-flexbox/',
    blogImage2: 'images/blog3/image-slider.jpg',
    img2Description: 'https://irenekyc.github.io/image-slider/',
    blogImage3: 'images/blog3/3D-hover-effect.jpg',
    img3Description: 'https://irenekyc.github.io/hover-3d-effects/',
    slug: slugify('Three pure CSS effects Ideas to make your website alive', {lower:true, strict:true})
})

blog3.save().then(()=>{
    console.log('blog3 is saved')
})
.catch((e)=> console.log(e))