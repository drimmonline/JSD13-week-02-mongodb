use("sample_mflix");

//db.theaters.find({ "location.address.state": "AL" });
//db.theaters.find({ "location.address.state": "AL" }).count();
//db.theathers.find({ "location.address.city": "La Quinta" });
db.theathers.find({ "location.address.city": "La Quinta" }).count();
