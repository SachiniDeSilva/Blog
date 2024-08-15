const {Router} =  require('express')
const router = Router()


const {createPost, getPosts,getPost, getCatPost, getUserposts, editPost, deletePost} = require('../controllers/postControllers')


const authMiddleware =require('../middleware/authMiddleware')

router.post('/',authMiddleware, createPost)
router.get('/', getPosts)
router.get('/:id', getPost)
router.get('/categories/:category', getCatPost)
router.get('/users/:id', getUserposts)
router.patch('/:id', authMiddleware,editPost)
router.delete('/:id',authMiddleware, deletePost)

module.exports = router