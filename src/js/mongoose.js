const mongoose = require ('mongoose')
const slugify = require('slugify')

mongoose.connect('mongodb://127.0.0.1:27017/irene-coding-dailies', {
    useNewUrlParser: true,
})


const blogSchema = new mongoose.Schema({
    feature:{
        type: Boolean,
        default: false,
    },
    
    title: {
        type:String,
        required:true,
        trim:true,
    },
    author:{
        type: String,
        required: true,
        default: 'Irene K'
    },
    categories: {
        type: String,
        required: true,
        trim: true,
    },
    coverImage: {
        type: String,
        required: true,
         trim: true
    },
    createdDate: {
        type:Date,
        default: Date.now()
    },
    excerpt:{
        type: String,
        required: true
    },
    MainContent:{
        type: String,
        required: true
    },
    blogImage: {
        type: String
    },
    slug:{
        type: String, 
        unique:true,
    }
    
}, {timestamps: true})

// blogSchema.pre('save', (next)=>{
//         this.slug = slugify(this.slug, {lower: true, strict: true})
//     next()
// })

const Blog = mongoose.model('blog', blogSchema)



module.exports = Blog