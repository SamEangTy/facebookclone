import { useState } from "react";
import { Users } from "../../dummyData";
import "./post.css"
import {MoreVert} from '@mui/icons-material'
export default function Post({post}) {
  const [like, setlike] = useState(post.like)
  const [isLike, setIsLike] = useState(false)
  const handlerLike = () => {
    setlike(isLike ? like-1 : like +1)
    setIsLike(!isLike)
  }
  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src={Users.filter((u) => u.id === post?.userId)[0].profilePicture} className='postProfileImg' alt="" />
            <span className='postUsername'>
              {Users.filter((u) => u.id === post?.userId)[0].username}
            </span>
            <span className='postDate'>{post.date}</span>
          </div>
          <div className="postTopRight"><MoreVert/></div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img src={post.photo} alt="" className="postCenterImg" />
        </div>
        <div className="postButtom">
          <div className="postBtnLeft">
            <img src="assets/like.png" onClick={handlerLike} className="likeIcon" alt="" />
            <img src="assets/heart.png" onClick={handlerLike} className="likeIcon" alt="" />
            <span className="postLikeCounter">{like}</span>
          </div>
          <div className="postBtnRight">
            <span className="postComment">{post.comment}</span>
          </div>
        </div> 
      </div>
    </div>
  )
}
