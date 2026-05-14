# English Vocab Flashcard — เรียนคำศัพท์ภาษาอังกฤษ

แอปฝึกคำศัพท์ภาษาอังกฤษแบบ Flashcard และ Quiz ออกแบบสำหรับผู้ใช้ภาษาไทย

---

## Features

- **Flashcard Mode** — กลับการ์ดดูคำแปล กดรู้แล้ว / ยังไม่รู้
- **Quiz Mode (4 ตัวเลือก)** — ทดสอบแบบ multiple choice เลือกไทย→อังกฤษ หรือ อังกฤษ→ไทย
- **Category Filter** — กรองคำศัพท์ตามหมวดหมู่
- **Stats Panel** — ดูความคืบหน้าแต่ละหมวดและภาพรวม
- **Local Progress** — บันทึกความคืบหน้าไว้ใน localStorage

---

## คำศัพท์ (140 คำ / 15 หมวด)

| หมวด | คำ |
|------|----|
| 🏠 ชีวิตประจำวัน | 10 |
| 🍜 อาหาร | 10 |
| ✈️ การเดินทาง | 10 |
| 💼 การทำงาน | 10 |
| 🌿 ธรรมชาติ | 10 |
| 💪 ร่างกาย | 10 |
| 😊 อารมณ์ความรู้สึก | 10 |
| 🎨 สี | 10 |
| 🔢 ตัวเลข | 10 |
| 💻 เทคโนโลยี | 10 |
| 🛍️ การช้อปปิ้ง | 10 |
| ⚽ กีฬา | 10 |
| 🏥 สุขภาพ | 10 |
| 🐾 สัตว์ | 10 |

---

## Stack

- **React 18** + **Vite**
- **Tailwind CSS**
- **localStorage** สำหรับบันทึกความคืบหน้า

---

## Quick Start

```bash
npm install
npm run dev
```

เปิด http://localhost:5173

---

## Build & Deploy

```bash
npm run build
# ได้ไฟล์ใน dist/ → deploy ขึ้น host ได้เลย
```

---

## โครงสร้างโปรเจกต์

```
src/
├── components/
│   ├── FlashCard.jsx      ← การ์ดพลิกดูคำแปล
│   ├── QuizMode.jsx       ← ทดสอบ 4 ตัวเลือก
│   ├── CategoryPicker.jsx ← เลือกหมวดคำศัพท์
│   └── StatsPanel.jsx     ← แสดงสถิติ
├── hooks/
│   └── useProgress.js     ← บันทึก/อ่าน progress จาก localStorage
├── data/
│   └── vocabulary.js      ← ข้อมูลคำศัพท์ 140 คำ
└── App.jsx                ← หน้าหลัก + routing ระหว่าง modes
```

---

## สถานะโปรเจกต์ (อัปเดต 2026-05-14)

- [x] Phase 1: โครงสร้างหลัก + Flashcard + Quiz + Stats
- [x] Phase 2: เพิ่มหมวด tech, shopping, sports, health, animals (รวม 140 คำ)
- [ ] Phase 3: เพิ่มเสียงออกเสียง (Text-to-Speech API)
- [ ] Phase 4: เพิ่มโหมด Spelling (พิมพ์คำตอบ)
- [ ] Phase 5: Deploy ขึ้น Netlify / Vercel
- [ ] Push to GitHub (ต้องการ gh auth login ก่อน)
