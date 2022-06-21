import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PostUser from './pages/post/PostUser'
import CommentPost from './pages/post/CommentPost'
import AlbumUser from './pages/album/AlbumUser'
import PhotoAlbum from './pages/album/PhotoAlbum'
import TodoUser from './pages/TodoUser'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<PostUser />} />
        <Route path="/comment/:id" element={<CommentPost />} />
        <Route path="/album/:id" element={<AlbumUser />} />
        <Route path="/photo/:id" element={<PhotoAlbum />} />
        <Route path="/todo/:id" element={<TodoUser />} />
      </Routes>
    </Router>
  )
}

export default App
