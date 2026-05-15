# English Vocab Flashcard — เรียนคำศัพท์ภาษาอังกฤษ

แอปฝึกคำศัพท์ภาษาอังกฤษแบบ Flashcard และ Quiz ออกแบบสำหรับผู้ใช้ภาษาไทย

---

## Features

- **Flashcard Mode** — กลับการ์ดดูคำแปล กดรู้แล้ว / ยังไม่รู้ + ปุ่ม 🔊 ฟังการออกเสียง
- **Quiz Mode (4 ตัวเลือก)** — ทดสอบแบบ multiple choice เลือกไทย→อังกฤษ หรือ อังกฤษ→ไทย + ปุ่ม 🔊
- **Spelling Mode** — ดูคำไทย แล้วพิมพ์คำอังกฤษ มีระบบใบ้และฟังเสียงตอนตอบถูก
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
npm run build   # ได้ไฟล์ใน dist/
```

GitHub Actions deploy อัตโนมัติเมื่อ push ไป main

**Live URL:** https://upthawatchai.github.io/english-vocab-flashcard/

---

## Progress Log

| วันที่ | Phase | ทำอะไร |
|--------|-------|---------|
| 2026-05-14 | 1 | Flashcard, Quiz mode, 90 คำ, Stats, localStorage |
| 2026-05-14 | 2 | +50 คำ ใน 5 หมวดใหม่ → รวม 140 คำ / 14 หมวด |
| 2026-05-15 | 3 | Text-to-Speech (Web Speech API) ปุ่ม 🔊 ทุก mode |
| 2026-05-15 | 4 | Spelling Mode — พิมพ์คำอังกฤษจากคำไทย + ใบ้ + เสียง |
| 2026-05-15 | 5 | GitHub Pages deploy via GitHub Actions |

**Deadline:** 2026-05-28

---

## โครงสร้างโปรเจกต์

```
src/
├── components/
│   ├── FlashCard.jsx      ← การ์ดพลิกดูคำแปล + เสียงออกเสียง
│   ├── QuizMode.jsx       ← ทดสอบ 4 ตัวเลือก + เสียงออกเสียง
│   ├── SpellingMode.jsx   ← พิมพ์คำอังกฤษจากคำไทย
│   ├── CategoryPicker.jsx ← เลือกหมวดคำศัพท์
│   └── StatsPanel.jsx     ← แสดงสถิติ
├── hooks/
│   ├── useProgress.js     ← บันทึก/อ่าน progress จาก localStorage
│   └── useSpeech.js       ← Web Speech API (Text-to-Speech)
├── data/
│   └── vocabulary.js      ← ข้อมูลคำศัพท์ 140 คำ
└── App.jsx                ← หน้าหลัก + routing ระหว่าง modes
```

---

## สถานะโปรเจกต์ (อัปเดต 2026-05-15)

- [x] Phase 1: โครงสร้างหลัก + Flashcard + Quiz + Stats
- [x] Phase 2: เพิ่มหมวด tech, shopping, sports, health, animals (รวม 140 คำ)
- [x] Phase 3: เพิ่มเสียงออกเสียง (Web Speech API — ปุ่ม 🔊 ใน Flashcard & Quiz)
- [x] Phase 4: เพิ่มโหมด Spelling — ดูคำไทย พิมพ์คำอังกฤษ + ใบ้ + ฟังเสียงตอนตอบถูก
- [ ] Phase 5: Deploy ขึ้น Netlify / Vercel
- [ ] Push to GitHub (ต้องการ gh auth login ก่อน)
