import React from "react";
import { useContext, createContext, useState } from "react";
// Create your context in here
// export your provider component
// const { useContext, createContext } = require("react")

// export your consumer hook

//create the context
const blogContext = createContext(0);

export function BlogProvider({ children }) {
  const [articleId, setArticleId] = useState(0);

  //function to set the article id number
  function AddArticleId(id) {
    setArticleId(id);
  }
  return (
    <blogContext.Provider value={[articleId, AddArticleId]}>
      {children}
    </blogContext.Provider>
  );
}
//export provider COMPONENT, accepts context object & returns current context value
export function UseBlogContext() {
  return useContext(blogContext);
}
