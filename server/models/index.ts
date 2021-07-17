import PostType from "../../client/core/src/models/PostType";
import { Model, Document } from "mongoose";
import ArticleCollection from "./Article/ArticleCollection";

type Collection = typeof ArticleCollection;
export const getCollectionByPostType = (type: PostType): Collection  => {
    switch (type) {
        case PostType.ARTICLE:
            return ArticleCollection;
        default:
            throw new Error("Unknown PostType");
    }
};