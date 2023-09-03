import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img
            className="postImg"
            src="data:image/jpeg;base64,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"
            alt=""
        />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Laborum labore doloribus inventore officiis aut ex earum est ullam dolorem? 
        Blanditiis amet unde et doloremque eligendi, vitae labore provident. Alias, mollitia.
      </p>   
    </div>
    );
}
