import { useState } from "react";
import ArticlesList from "./ArticlesList";
import Search from "./Search";

export default function Home(){
    return(
        <div id="home-page">
            <Search />
            <ArticlesList />
        </div>
    )
}