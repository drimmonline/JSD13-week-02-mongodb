# Project Name: Ecommerce and Exam Test

## 1. Executive Summary (ภาพรวมโปรเจกต์)

- **Objective:** [เป็นโปรเจ็คecommerceขายชีทสรุปหรือหนังสือเรียนและนอกจากนี้ยังมีระบบทำข้อสอบและเฉลย]
- **Target Audience:** [นักเรียนนักศึกษา หรือ ผู้ใช้ที่ต้องการอ่านหนังสือไปสอบ]
- **Core Value:** [การหาเนื้อหาเรียนที่ตรงจุดเช่าต้องการสอบกพก็รู้เลยว่าต้องอ่านหัวข้ออะไรบ้าง]

## 2. Tech Stack & Architecture (เทคโนโลยีที่ใช้)

- **Frontend:** React, Tailwind CSS,Material UI
- **Backend:** Nodejs, Express,
- **Database:** Mongodbs (TypeORM), Redis
- **Automation/Tools:** n8n, Git (Main branch),cronjob
- **Deployment:** Versal ,github

## 3. Core Features & Scope (ขอบเขตและฟีเจอร์หลัก)

แบ่งเป็นเฟสหรือส่วนๆ เพื่อให้ AI ไม่งงเวลาสั่งงาน:

- [ ] **Feature 1: User Authentication**
  - มีระบบ Login/Logout (ยึด UI ตามสไตล์ที่ระบุ เช่น ชื่อ user และปุ่ม logout อยู่ที่เดียวกัน)
  - รองรับ JWT Auth
  - User Account: ระบบสมัครสมาชิก, เข้าสู่ระบบ (user) และเก็บสถานะ login_status
  - User Profile: เก็บข้อมูลส่วนตัวแยกต่างหาก (user_profile) เชื่อมความสัมพันธ์แบบ 1:1 กับบัญชีผู้ใช้
- [ ] **Feature 2: E-Commerce & Product Management**
  - Product Catalog: ระบบจัดการสินค้า สต็อกสินค้า ภาพ และราคา
  - Order & Purchase: ระบบสั่งซื้อสินค้า (order) และเก็บรายละเอียดสินค้าในคำสั่งซื้อนั้นๆ
  - Payment Processing: ระบบบันทึกการชำระเงิน ตรวจสอบสถานะและเก็บรายละเอียด
  - Sales Analytics: ระบบดึงข้อมูลมาสรุปยอดขายแยกตามช่วงเวลา (Summary_product) และดึงสินค้าขายดี (top_selling_products)
- [ ] **Feature 3: Examination System**
  - Exam & Question Bank: ระบบจัดการชุดข้อสอบ (Exam), คลังคำถาม (question) และตัวเลือกคำตอบ (choice) ที่มีสถานะเฉลยคำตอบ (is_correct)
  - Exam Attempt: ระบบบันทึกประวัติการเข้าสอบ เวลาที่เริ่มทำ/ส่งข้อสอบ และคะแนนรวมที่ได้ (Exam_attempt) ของ User แต่ละคน
  - User Answer Tracking: ระบบบันทึกการตอบคำถามของ User ในแต่ละข้อ (User_answer) เพื่อนำไปเปรียบเทียบกับตัวเลือกที่ถูกต้องและบันทึกสถานะตรวจคำตอบ (describe_correct)
- [ ] **Feature 4: Dashboard & Summary Product System**
  - แสดงผลสรุปข้อมูลยอดขาย
  - ระบบจัดการสิทธิ์สินค้าสามารถแก้ขายอัพเดทได้

## 4. Coding Standard & Rules (กฎเหล็กในการเขียนโค้ด)

_ส่วนนี้สำคัญมาก เพื่อบังคับให้ AI เขียนโค้ดในสไตล์ที่เราต้องการ_

- **Language:** ภาษาไทยสำหรับคำอธิบาย/UI และภาษาอังกฤษสำหรับ Code/Comments
- **Patterns:** เน้นการเขียนโค้ดแบบ Clean Code Architecture , Modular, และสม่ำเสมอ
- **Git Branch:** โปรเจกต์นี้ใช้ `main` เป็น branch หลักในการทำงาน
