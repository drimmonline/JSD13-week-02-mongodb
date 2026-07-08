# Mongodb Command

# use() เรียกใช้ database หรือสร้าง database

    example  use("sample_mflix"); เรียกใช้ database หรือสร้าง database

# find() / findall() หาข้อมูลตัวเดียวหรือหลายตัว

    db.comments.find() ดู doucments ทั้งหมด ของ db
    db.comments.findone() ดู doucments ตัวเดีย ของ db
    # example
    by_email = "john_bishop@fakegmail.com";
    db.comments.findOne({ email: by_email });

# count() นับข้อมูลในแถว

    db.movies.find().count() นับ field ในแถว
    .countDocuments(<query>, <options>)

# Regex เป็นการค้นหาคำหรือข้อความแบบยืดหยุ่น

## ค้นหาคำที่ "ขึ้นต้นด้วย..."ใช้เครื่องหมายหมวก ^ วางไว้ข้างหน้าคำ เพื่อบอกว่าต้องขึ้นต้นด้วยคำนี้เท่านั้น

    db.collection.find( {
    plot: { $regex: “^A convent girl” }
    })

    Find documents where a field exactly matches a pattern
    db.collection.find( {plot: { $regex: “^pattern$”, options:"i" }})

## $option i (Insensitive) เพื่อให้หาเจอทั้ง "Cheese", "CHEESE", หรือ "cheese"

    example db.menus.find({ name: { $regex: "cheese", $options: "i" } })

## ค้นหาคำที่ "ลงท้ายด้วย..." ใช้เครื่องหมายดอลลาร์ $ วางไว้ข้างหลังคำ เพื่อบอกว่าต้องลงท้ายด้วยคำนี้เท่านั้น

    // หาเมนูที่ลงท้ายด้วยคำว่า "healthy" เช่น Salad healthy
    db.menus.find({ name: { $regex: "healthy$" } })

# $gt หาข้อมูลมากกว่า

    db.collection.find({
    num_field: {$gt: 300}})// condition met, if num_field > 300

# $lte หาข้อมูลน้อยกว่า แบบ

    db.collection.find({
    num_field: {$lte: 99}}) // condition met, if num_field <= 99

# $eq หาข้อมูลเท่ากับ

    db.collection.find({
    num_field: {$eq: -405} // condition met, if num_field == -405
    })

# limit() เป็นการกำหนดจำนวนข้อมูล

    db.collection.find( <query> ).limit()

# sort() เป็นการเรียงลำดับข้อมูล

    db.collection.find( <query> ).sort({ field: 1 or -1 })
     1 = ascending (น้อย ไป มาก)
    -1 = descending (มาก ไป น้อย)
    // Find document(s) following query and sort by field
