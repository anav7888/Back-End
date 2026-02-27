import React, { use, useEffect } from 'react'
import Post from '../components/Post'
import "../style/feed.scss"
import { usePost } from '../hook/usePost'

const Feed = () => {

  const { feed, handleGetFeed, loading } = usePost()

  useEffect(() => {
    handleGetFeed()
  }, [])

  if (loading || !feed) {
    return (<main><h1>Feed is loading...</h1></main>)
  }


  return (
    <main className="feed-post">
      <div className="feed">
        <div className="posts">
          {feed.map(post=>{
            return <Post user={post.user} post={post} />
          })}
        </div>

      </div>
    </main>
  )
}

export default Feed