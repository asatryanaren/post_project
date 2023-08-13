import { useDispatch, useSelector } from "react-redux";
import {
  getSinglePostState,
  selectBasePostsLength,
  selectCurrentPage,
  selectPostsState,
} from "../../features/postsSlice";
import { NavLink, useSearchParams } from "react-router-dom";
import {
  Container,
  Grid,
  Typography,
  Button,
  TextField,
} from "@material-ui/core";
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
  const currentPage = useSelector(selectCurrentPage);
  let [searchParams, setSearchParams] = useSearchParams();
  let page = searchParams.get("page") ?? currentPage;

  const [queryValue, setQueryValue] = useState("");
  let [searchQuery, setSearchQuery] = useSearchParams();
  let postQuery = searchQuery.get("post") ?? queryValue;

  const logOut = () => {
    localStorage.clear();
    page = 1;
  };
  let query = localStorage.getItem("postQuery");
  query = JSON.parse(query);
  useEffect(() => {
    let searchClick = localStorage.getItem("searchClick") || "";
    if (!searchClick) {
      dispatch(postsAPI(page));
      setSearchParams({ page: page ?? currentPage });
      localStorage.removeItem("searchClick");
    } else {
      dispatch(postsSearchAPI(query));
      setSearchQuery({ post: query });
    }
  }, [dispatch, page]);

  const search = () => {
    localStorage.setItem("searchClick", JSON.stringify(true));
    localStorage.setItem("postQuery", JSON.stringify(queryValue));
  };
  const allPosts = () => {
    localStorage.removeItem("searchClick");
    localStorage.removeItem("postQuery");
  };
  return (
    <Container>
      <Grid container className={styles.flexContainer}>
        <Typography variant="h4">
          There are {Length} post in the database
        </Typography>

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
      <form autoComplete="off" className={styles.form}>
        <TextField
          type="search"
          label="Search post"
          value={queryValue}
          onChange={(e) => setQueryValue(e.target.value)}
          className={styles.search}
        />
        <Button
          type="submit"
          onClick={search}
          className={styles.search_btn}
          disabled={queryValue.length === 0 && true}
        >
          Search
        </Button>
        <Button type="submit" onClick={allPosts} className={styles.search_btn}>
          All posts
        </Button>
      </form>
      <hr />
      {posts.map((post) => {
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
      <Pagination postsPerPage={postsPerPage} totalPosts={Length} page={page} />
    </Container>
  );
};
export default Posts;
