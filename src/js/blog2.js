const Blog = require('./mongoose')
const slugify = require('slugify')

const blog2 = new Blog({
    feature:true,
    title: 'Some useful and free tools to use in your coding challenges',
    SEOkeyWords:'useful resources free tool for web project',
    categories: 'css, html',
    coverImage: 'images/blog2/blog2-cover.jpg',
    excerpt: 'No more struggle in finding design resources for your coding challenges',
    MainContent: ` If you just started learning web development, or kick start your coding challenges. You might find it difficult to find compotent for your website, such as pictures, icons, vector and color palette. I had the same struggle and now I do. I am not a designer anyway. I do not possess original state-of-art piece of design. That's okay. I found a few sources of materials that help me and hopefully help code newbies to design their development projects.#
    First of all, COLOR! I am not a good color picker! All I know is that I should not use too many sharp colors in a website, and you should have a color theme. Converting colors can help you to have better sense of color!#

    Before start coding this website, I picked a light grey pink color, I know the HEX code (#EEDBDB) but I don't know what other colors go well with it. I simply key in the HEX color (or any other color code will work too). converting colro will give you different color selections. I picked my entire website color palette from converting color. Next time, if you stuck with color, you might wanna try this. :) #
    Second, ICONS! I use font awesome, with embedded scripts of svg, you will be able to manipulate the size and color of your icon. All icons I used to build this website are from font awasome. And font awesome is completely free for starters. 
    

    However, if you are looking for more specifc themes of logos, you might instead pay a designer for these digital assets. #
    Third, FONTS! I love google font, they offer a wide range of fonts, they are free too! Simply embed the css file in your html, you are good to go!#

    There are more other resources that I used to extend my css, html and javascript knowledges.#
    CSS-TRICKS.com and Youtube are the best libraries for online tutorials for CSS animation. I learned SO MUCH about Flexbox from CSS-TRICKS and Youtube. #
    If you are interested to understand more where I learn and advance my CSS skills, send me a message via social media or email me. I will write another blog post about my favourite tutors. #
    `
    ,
    blogImage1: 'images/blog2/convertingcolors.png ',
    img1Description: 'https://convertingcolors.com',
    blogImage2: 'images/blog2/fontawesome.png ',
    img2Description: 'https://fontawesome.com',
    blogImage3: 'images/blog2/googlefont.png ',
    img3Description: 'https://fonts.google.com/',
    slug: slugify('Some useful and free tools to use in your coding challenges', {lower:true, strict:true})
})

blog2.save().then(()=>{
    console.log('blog2 is saved')
})
.catch((e)=> console.log(e))