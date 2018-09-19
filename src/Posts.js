const url ="https://public-api.wordpress.com/rest/v1.1/sites/rutacincohn.com/posts";

export async function getPosts() {
  let result = await fetch(url).then(response => response.json());
  return result.posts;
}