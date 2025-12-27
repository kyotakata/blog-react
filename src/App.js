import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import { posts } from "./data/post.js"

function App() {
  const [postDatas, setPosts] = useState(posts); 
  return (
    <div>
      <header className="header">
        <a className="header-link" href="/">Blog</a>
        <a className="header-link" href="/">お問い合わせ</a>
      </header>
      <div class>
        <div className="Home_container__cF\+Wd">
          <ul>
            {postDatas.map((post)=> (
            <li className="Home_list__pwU2m">
              <a className="Home_link__dG8iO" href="/">
                <div className='Home_post__5TdqA'>
                  <div>
                    <div className='Home_postInfo__g-RmQ'>
                      <div className='Home_postDate__tvUdI'>
                        {new Date(post.createdAt).toISOString().slice(0,10)}</div>
                      <div className='Home_postCategories__jjPkH'>
                        {post.categories.map((cat)=>(
                          <div className='Home_postCategory__MwsK3'>{cat}</div>
                        ))}
                      </div>
                    </div>
                    <p className='Home_postTitle__AlP6s'> {post.title}</p>
                    <div className='Home_postBody__AnnY-'>{post.content}</div>
                  </div>
                </div>
              </a>
            </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
