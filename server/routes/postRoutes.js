const{Router} =require('express')
const router =Router()


const {createPost, getPosts,getPost, getCatPost, getUserpost, editPost, deletePost} = require('../controllers/postControllers ')

router.post('/', createPost)
router.get('/', getPosts)
router.get('/:id', getPost)
router.get('/categories/:categories', getCatPost)
router.get('/users/:id', getUserpost)
router.patch('/:id', editPost)
router.delete('/:id', deletePost)

module.exports = router