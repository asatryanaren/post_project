import { useDispatch, useSelector } from "react-redux";
import {
  getSinglePostState,
  selectBasePostsLength,
  selectCurrentPage,
  selectPostsState,
} from "../../features/postsSlice";
import { NavLink, useSearchParams } from "react-router-dom";
import { Container, Grid, Typography, Button } from "@material-ui/core";
import { postsStyle } from "./styles/postsStyle";
import Pagination from "../Pagination/Pagination";
import { useEffect, useState } from "react";
import { postsAPI, postsSearchAPI } from "../../app/service/posts.service";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPostsState);
  const Length = useSelector(selectBasePostsLength);
  const styles = postsStyle();
  const postsPerPage = 10;
  let [searchParams, setSearchParams] = useSearchParams();
  const currentPage = useSelector(selectCurrentPage);
  let page = searchParams.get("page") ?? currentPage;
  const postQuery = searchParams.get("post") || "";
  const logOut = () => {
    localStorage.clear();
    page = 1;
  };

  const [queryValue, setQueryValue] = useState("");
  useEffect(() => {
    let searchClick = localStorage.getItem("searchClick") || "";
    console.log(searchClick);
    if (!searchClick) {
      dispatch(postsAPI(page));
      setSearchParams({ page: page ?? currentPage });
      localStorage.removeItem("searchClick");
    } else {
      dispatch(postsSearchAPI(queryValue));
      setSearchParams({ post: queryValue });
    }
  }, [dispatch, page]);

  const search = () => {
    // dispatch(postsSearchAPI());
    // setSearchParams({ post: queryValue });
    localStorage.setItem("searchClick", JSON.stringify(true));
  };

  return (
    <Container>
      <Grid container className={styles.flexContainer}>
        <Typography variant="h4">
          There are {Length} post in the database
        </Typography>
        <form>
          <input
            type="search"
            value={queryValue}
            onChange={(e) => setQueryValue(e.target.value)}
          />
          <input type="submit" onClick={search} />
        </form>
        <Grid className={styles.btn_container}>
          <NavLink to="/addpost" className={styles.link}>
            <Button variant="contained" className={styles.btn}>
              Add post
            </Button>
          </NavLink>
          <NavLink to="/" className={styles.link}>
            <Button onClick={logOut} variant="contained" className={styles.btn}>
              Log Out
            </Button>
          </NavLink>
        </Grid>
      </Grid>
      <Typography variant="h6">Posts title</Typography>
      <hr />
      {posts
        .filter((p) => p.title.includes(postQuery))
        .map((post) => {
          return (
            <Grid key={post.id}>
              <NavLink to={`/post/${post.id}`} className={styles.postsTitle}>
                <Typography
                  variant="h6"
                  onClick={() => dispatch(getSinglePostState(post))}
                >
                  {post.title}
                </Typography>
              </NavLink>
            </Grid>
          );
        })}
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={Length}
        searchParams={searchParams}
        page={page}
      />
    </Container>
  );
};
export default Posts;
