const Blog = require('./mongoose')
const slugify = require('slugify')

const blog4 = new Blog({
    feature:true,
    title: 'My coding journey: How I code this blog site',
    SEOkeyWords:'how to code a blog, using Mongodb, express and node JS, coding challenges idea',
    categories: 'css, html',
    coverImage: 'images/blog4/blog4-cover.jpg',
    excerpt: 'Part of the coding challenges, I coded this blog site with MongoDB, Express and Node JS. ',
    MainContent: `When I started learning node js, I knew that I wanted to build a blog site myself. I understand that Word Press is the most well-developed platform for blog hosting. But wouldn't it be cool to build your own? #
    So here are the ingredient I used to build this website. MongoDB for database storing and management, Express for routing and EJS (embedded javascript) for managing templates.#

    To empower a blog, first you will need a database. MongoDB is the most popular database for modern apps, and I pick mongoose modeling systems to manage my blog posts data. Mongoose allows programmers to model our database structure. And my data model for this blog site is rather simple at this launch stage. Later on in the future, I will 
    add more advanced data modeling including relational and nesting. #
    Then you will need to build the template for each page. I have only three templates, index page, all posts pages and individual post page, the one that you are currently on. What I did was to code the front end design in html first. Later on, when mongodb, express router are set up. I then converted them into EJS. It is the combination of html and javascript code.# 
    

    You can write javascript code within html code using <% %> symbol, you can fetch data from monogodb and insert them into your template.  #
    Last but not least, of course, setting up a server and different routes. npm originally possesses "http" module for routing. But I pick Express because express works well with templating, including ejs. Express, in my simple expression, enable developer to set up the web framework and communicate between front-end user request and back-end fetching database and show in an ejs template .#

    In this blogsite, I have only 4 main routes. They are '/' for the home page, '/posts' for showing all posts, '/filter' for sorting, filter by categories and search by keywords, and the one you are currently on empowered by slugify to create an unique pathname for each individual posts. To explain in short, when users request '/'(means irene-coding-diaries.heroku.com/), express will render index page and fetch neccessarily data to show on the index page. Similary, if users request '/posts' (=irene-coding-dairies.heroku.com/posts), express knows that it is gonna need all blog posts data and render the post.ejs template.#
    Of course, at this stage, I only need four. In the future, when I increase the function of this blogsite, such as allow users to register and post their blog, then I will need at least three different routes. I will save that explanation later when I get there. #
    So here are the three main ingredients for this blog site. Using MongoDB as my database, express as the router to tell what the server and data should be fetch, and ejs as the template to show the data that user request in the front-end. If you have any question, please do not hestiate to contact me via social media or email. #
    `
    ,
    blogImage1: 'images/blog4/mongoose.png ',
    img1Description: 'This is part of my blog data model, it is simple.',
    blogImage2: 'images/blog4/ejs.png ',
    img2Description: 'Within the html code, you can user <% %> to wrap your javascript code',
    blogImage3: 'images/blog4/express.png ',
    img3Description: 'using app.get to read the data from the server and database',
    slug: slugify('My coding journey: How I code this blog site', {lower:true, strict:true})
})

blog4.save().then(()=>{
    console.log('blog4 is saved')
})
.catch((e)=> console.log(e))