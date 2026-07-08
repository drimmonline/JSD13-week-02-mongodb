use("sample_mflix");

//db.movies.find({ plot: { $regex: "American", $options: "i" } });
//db.movies.find({ plot: { $regex: "American", $options: "i" } }).count();

//db.movies.find({ plot: { $regex: "Street.$", $options: "i" } });
db.movies.find({ plot: { $regex: "Street.$", $options: "i" } }).count();
