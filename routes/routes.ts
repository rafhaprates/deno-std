import { Router }from 'https://deno.land/x/oak/mod.ts'

import { getHello } from '../controller/controller.ts'

const router = new Router()

router.get("/", getHello);


export default router
