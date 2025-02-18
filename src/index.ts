import { app } from './app'
import { connectDb } from './db'
import { PORT } from './utils/constants'

connectDb()

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`)
})
