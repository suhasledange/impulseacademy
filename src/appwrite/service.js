import { Client, Databases, ID, Query, Storage } from "appwrite";
import conf from "../util/conf";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.APPWRITE_URL)
      .setProject(conf.APPWRITE_PROJECT_ID);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async getBlog(blogId){
    try {
        return await this.databases.getDocument(
            conf.APPWRITE_DATABASE_ID,
            conf.APPWRITE_COLLECTION_ID,
            blogId
           
        )
    } catch (error) {
        throw error
    }
  }
  
  async getBlogs(offset){
    try {
        return await this.databases.listDocuments(
            conf.APPWRITE_DATABASE_ID,
            conf.APPWRITE_COLLECTION_ID,
            [
                Query.limit(3),
                Query.offset(offset)
            ]
        );

    } catch (error) {
        throw error
    }
  }

  async getHomeBlogs(){
    try {
        return await this.databases.listDocuments(
            conf.APPWRITE_DATABASE_ID,
            conf.APPWRITE_COLLECTION_ID,
            [
                Query.limit(3),
                Query.offset(0)
            ]
        );

    } catch (error) {
        throw error
    }
  }

  getFilePreview(fileId){
    return this.bucket.getFilePreview(conf.APPWRITE_BUCKET_ID,fileId)
  }

}
const service = new Service();
export default service;
