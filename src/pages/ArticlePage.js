import React from "react";
import articleContent from './ArticleContent'
import ArticlesList from "../components/ArticlesList";
import NotFoundPage from "./NotFoundPage";

const ArticlePage = ({match}) => {

    const name = match.params.name;
    const article = articleContent.find(article=> article.name == name);

    if(!article){return(<NotFoundPage/>)}

    const otherArticles = articleContent.filter(article => article.name != name);

    return(
        <>
            <h1>Article {article.title}</h1>
            {article.content.map((paragraph, key) => (
                <p key={key}>{paragraph}</p>
            ))}
            <ArticlesList articles={otherArticles}/>
            
        </>

    )
}

export default ArticlePage