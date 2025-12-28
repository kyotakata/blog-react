const homeContainerStyle = {
  margin: "40px auto",
  maxWidth: "800px",
  padding: "0 1rem",
};

const homeListStyle = {
  display: "flex",
  flexDirection: "column",
  listStyle: "none",
  margin: "0 auto",
  padding: "0",
  maxWidth: "800px",
};

const homeLinkStyle = {
    color: "#333",
    textDecoration: "none",
};

const homePostStyle = {
    border: "1px solid #ccc",
    display: "flex",
    flexDirection: "row",
    marginBottom: "2rem",
    padding: "1rem",
};

const homePostInfoStyle = {
    display: "flex",
    justifyContent: "space-between",
}

const homePostDateStyle = {
    color: "#888",
    fontSize: ".8rem",
}

const homePostCategoriesStyle = {
    display: "flex",
    flexWrap: "wrap",
}

const homePostCategoryStyle = {
    border: "1px solid #06c",
    borderRadius: ".2rem",
    color: "#06c",
    fontSize: ".8rem",
    marginRight: ".5rem",
    padding: ".2rem .4rem",
}

const homePostTitleStyle =  {
    fontSize: "1.5rem",
    marginBottom: "1rem",
    marginTop: ".5rem",
}

const homePostBodyStyle = {
    fontSize: "1rem",
    lineHeight: "1.5",
    webkitBoxOrient: "vertical",
    display: "-webkit-box",
    overflow: "hidden",
    maxHeight: "60px",
}

export const Home = (props) => {
  const { postDatas } = props;
  return (
    <div class>
      <div style={homeContainerStyle}>
        <ul>
          {postDatas.map((post) => (
            <li style={homeListStyle} key={post.id}>
              <a style={homeLinkStyle} href="/">
                <div style={homePostStyle}>
                  <div>
                    <div style={homePostInfoStyle}>
                      <div style={homePostDateStyle}>{new Date(post.createdAt).toISOString().slice(0, 10)}</div>
                      <div style={homePostCategoriesStyle}>
                        {post.categories.map((cat, index) => (
                          <div style={homePostCategoryStyle} key={index}>{cat}</div>
                        ))}
                      </div>
                    </div>
                    <p style={homePostTitleStyle}>{post.title}</p>
                    <div style={homePostBodyStyle} dangerouslySetInnerHTML={{ __html: post.content }}/>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
