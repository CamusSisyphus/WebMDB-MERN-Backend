import model from "./model.js";

export const findAllLikes = () => model.find();
export const createUserLikesMovie = (userId, imdbID) =>
  model.create({ user: userId, imdbID: imdbID });
export const deleteUserLikesMovie = (userId, imdbID) =>
  model.deleteOne({ user: userId, imdbID: imdbID });
export const findUsersThatLikeMovie = (imdbID) =>
  model.find({ imdbID: imdbID }).populate("user");
export const findMoviesThatUserLikes = (userId) => model.find({ user: userId });

export const hasUserLikedMovie = (userId, imdbID) =>
  model.findOne({ user: userId, imdbID: imdbID });
