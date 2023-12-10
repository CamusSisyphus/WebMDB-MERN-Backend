import * as dao from "./dao.js";

function LikesRoutes(app) {
  const findAllLikes = async (req, res) => {
    const likes = await dao.findAllLikes();
    res.json(likes);
  };
  const hasUserLikedMovie = async (req, res) => {
    const userId = req.params.userId;
    const imdbID = req.params.imdbID;
    const likes = await dao.hasUserLikedMovie(userId, imdbID);
    res.json(likes);
  };
  const createUserLikesMovie = async (req, res) => {
    const userId = req.params.userId;
    const imdbID = req.params.imdbID;
    if (await dao.hasUserLikedMovie(userId, imdbID)) {
      return;
    }
    const likes = await dao.createUserLikesMovie(userId, imdbID);
    res.json(likes);
  };
  const deleteUserLikesMovie = async (req, res) => {
    const userId = req.params.userId;
    const imdbID = req.params.imdbID;
    const likes = await dao.deleteUserLikesMovie(userId, imdbID);
    res.json(likes);
  };
  const findUsersThatLikeMovie = async (req, res) => {
    const imdbID = req.params.imdbID;

    const likes = await dao.findUsersThatLikeMovie(imdbID);
    res.json(likes);
  };
  const findMoviesThatUserLikes = async (req, res) => {
    const userId = req.params.userId;
    const likes = await dao.findMoviesThatUserLikes(userId);
    res.json(likes);
  };
  app.get("/api/likes", findAllLikes);
  app.post("/api/users/:userId/likes/:imdbID", createUserLikesMovie);
  app.delete("/api/users/:userId/likes/:imdbID", deleteUserLikesMovie);
  app.get("/api/likes/:imdbID/users", findUsersThatLikeMovie);
  app.get("/api/users/:userId/likes", findMoviesThatUserLikes);
  app.get("/api/users/:userId/likes/:imdbID", hasUserLikedMovie);
}

export default LikesRoutes;
