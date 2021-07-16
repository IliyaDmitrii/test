import Router from 'express'
import postController from "./Controllers/postController.js";

const router = new Router()

router.post('/posts',postController.create)
router.put('/posts',postController.edit)
router.get('/posts',postController.getAll)
router.get('/posts/:id',postController.getOne)
router.get('/remote', postController.remote )

export default router;