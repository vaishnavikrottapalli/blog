import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
          <span className="sidebarTitle">ABOUT ME</span>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj6F2UafVgdlSNb1O1_0eQYCF3QnwNZzVIDA&usqp=CAU"
          alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Laboriosam, recusandae. Veritatis ducimus distinctio
            </p>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">CATEGORIES</span>
          <ul className="sidebarList">
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Sport</li>
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Tech</li>
            <li className="sidebarListItem">Cinema</li>
          </ul>
        </div>
    </div>
  )
}
