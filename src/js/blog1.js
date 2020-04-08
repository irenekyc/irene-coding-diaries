const Blog = require('./mongoose')
const slugify = require('slugify')

const blog1 = new Blog({
    feature: true,
    title: 'Some thoughts about coding challenges as a new web developer ',
    SEOkeyWords:'30 days of coding challenge, start web development, code Newbie, how to learn web code',
    categories: 'css, html',
    coverImage: 'images/blog1/blog1-cover.jpg',
    excerpt: 'In the middle of my 30 days coding challenges, I want to share some thoughts and reviews. Hope these help code newbies to start their own challenge ',
    MainContent: `Coding challenge is the homework of almost every new web developer. To newbies, at this point, if you haven't pick the path if you want to develop website, mobile apps, frontend, backend, I would suggest you do it now. If you don't know how to pick one, ask yourself if you are a logical person? if you like following the rules? if you are a creative person? These questions help me to determine my path. I know I am not a designer material. I do like building, I do not mind following the "well-design piece of art" and turn them into a functionable and animated website. So I have learned basic HTML, CSS and javascript, advance my skill with different coding challenges. #
    In my first 15 days of my coding challenges journey, they focus merely on the front-end. My struggle is mainly on the design! I have no sense of beauty, color, golden grid proportion concept. It is frustrating. #

    Well, I should not be too hard on myself at this point. I suppose I will work with real web designer in the real world! At the first three days, I was really disappointed at myself. I always wanted to achieve more in one challenge. But often failed. I remembered that I sit in front of my laptop, tapping on the keyboards non-stop but failed to finish a navigation menu, despite my challenge is to finish a brochure website.  #
    But then I slow down and reduce my ambitious, I started coding different individual seperate compotents in a website as a challenge. Such as animated menu bar, dropdown menu, service cards, footer, photo gallery etc. After 2 weeks, I am comfortable to code a full website without struggle too much! I am proudly showcase my portfolio site. #
    
    

    My personal website: https://irenekyc.github.io/my-site #
    The wesbite is not yet fully functionable, and I will continue the rest of the coding challenges in javascripts, focusing on the client side javascripts. I am so looking forward to it!#
   
    I've read a book - The Outlier, and this is one of my favourite book. Successful people do not manage to accomplish huge within a short period of time, they all managed to overcome a "manageable difficult" each time and progress to achieve another level of manageable difficult challenge next.#
    If you have struggle like I did, please hang in there. Manage your journey to give you both challenging yet managable difficulties and joy to overcome each challenge. Coding should be fun, not stressed, right?#
    Remember, the aim of these challenges will improve and advance your coding skills and knowledge. Do not be afraid to make mistakes!`
    ,
    blogImage1: 'images/blog1/blog-1-in-image-1.png ',
    img1Description: 'One of my "design", I am not very proud of it',
    blogImage2: 'images/blog1/blog-1-in-image-2.png ',
    img2Description: 'My first full website coding challenge completed!',
    slug: slugify('Some thoughts as a new web developer about coding challenges', {lower:true, strict:true})
})

blog1.save().then(()=>{
    console.log('blog1 is saved')
})
.catch((e)=> console.log(e))