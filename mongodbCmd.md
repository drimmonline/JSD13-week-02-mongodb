# Mongodb Command

    use เรียกใช้ databaseหรือสร้าง database
    db.comments.find() ดู doucments ทั้งหมด ของ db
    db.comments.findone() ดู doucments ตัวเดีย ของ db
        # example
        use("sample_mflix");
        by_email = "john_bishop@fakegmail.com";
        db.comments.findOne({ email: by_email });
