use("sample_mflix");
// by_id = ObjectId("5a9427648b0beebeb69579f5");
by_name = "John Bishop";
by_email = "john_bishop@fakegmail.com";
// db.comments.findOne({ _id: by_id });
// db.comments.findOne({ name: by_name });
db.comments.findOne({ email: by_email });
