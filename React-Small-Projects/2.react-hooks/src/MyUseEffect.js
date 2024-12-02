import { React, useState, useEffect } from "react";
// Every time we running the resource type we change our code.
// Or everytime we change our type we want to do some thing
// every time we change our type we want to render type specific data
// But this type will not call exact same resource type twice.
// suppose post is printed automatically but if you click on the post button this post data will not print again or
// api will not be called again.
const MyUseEffect = () => {
  const [resourceType, setResourceType] = useState("posts");
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      //   .then((json) => console.log(json));
      .then((json) => setItem(json));
  }, [resourceType]);

  return (
    <>
      <button onClick={() => setResourceType("posts")}>Post</button>
      <button onClick={() => setResourceType("users")}>User</button>
      <button onClick={() => setResourceType("comments")}>Comment</button>

      <h1>{resourceType}</h1>
      {item.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>;
      })}
    </>
  );
};

export default MyUseEffect;
