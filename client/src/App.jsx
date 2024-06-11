import PostCreate from "./componets/PostCreate";
import PostList from "./componets/PostList";

function App(){
  return(
    <>
      <h1>Create Post</h1>
      <PostCreate />
      <hr />
      <h1>Posts</h1>
      <PostList />
    </>
  )
}

export default App;