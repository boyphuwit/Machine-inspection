# 🔧 Machine Inspection — QR Checklist + Line Notify

ระบบตรวจสอบเครื่องจักรผ่าน QR Code + แจ้งเตือน Line Notify  
รันบน GitHub Pages ฟรี ไม่ต้องมี server

---

## 📁 โครงสร้างไฟล์

```
machine-inspection/
├── index.html              ← หน้า dashboard / รายการจุดตรวจ
├── inspect.html            ← ฟอร์มตรวจสอบ (เปิดจาก QR)
├── js/
│   └── config.js           ← ⭐ แก้ไขที่นี่: Line Token + เครื่องจักร
└── qr-generator/
    └── index.html          ← สร้าง QR Code พร้อมพิมพ์
```

---

## 🚀 วิธีติดตั้ง (5 ขั้นตอน)

### 1. Fork / Upload ขึ้น GitHub
- สร้าง repo ใหม่บน GitHub (public)
- อัปโหลดทุกไฟล์ขึ้นไป

### 2. เปิด GitHub Pages
- ไปที่ Settings → Pages
- Source: **Deploy from branch** → branch `main` → folder `/root`
- รอ 1–2 นาที จะได้ URL เช่น `https://yourname.github.io/machine-inspection`

### 3. ขอ Line Notify Token
- ไปที่ https://notify-bot.line.me/th/
- เข้าสู่ระบบ → My page → Generate token
- ตั้งชื่อ token และเลือก group Line ที่ต้องการรับการแจ้งเตือน
- Copy token

### 4. แก้ไข js/config.js
```javascript
const LINE_TOKEN = 'ใส่ token ที่ได้จาก Line Notify';

const MACHINES = [
  {
    id: 'CBP-WP-001',          // รหัสจุดตรวจ (ห้ามซ้ำ)
    name: 'ปั๊มน้ำหลัก A',    // ชื่อเครื่องจักร
    location: 'โรงงาน สาย 1', // ตำแหน่ง
    zone: 'Zone A',            // โซน
    checks: [
      { label: 'ชื่อรายการ', desc: 'คำแนะนำ/วิธีตรวจ' },
      'รายการแบบไม่มี desc ก็ได้',
    ]
  },
  // เพิ่มเครื่องจักรได้เรื่อยๆ...
];
```

### 5. สร้างและพิมพ์ QR Code
- เปิด `https://yourname.github.io/machine-inspection/qr-generator/index.html`
- ระบบจะสร้าง QR ให้อัตโนมัติ
- กด **Print** → พิมพ์และติดที่จุดตรวจแต่ละจุด

---

## 📱 วิธีใช้งาน (ช่าง)

1. สแกน QR Code ที่จุดตรวจ
2. ตรวจแต่ละรายการ กด ✓ (ผ่าน) หรือ ✗ (ไม่ผ่าน)
3. ถ่ายรูปจุดที่มีปัญหา (ไม่เกิน 3 รูป)
4. ใส่หมายเหตุ (ถ้ามี)
5. กด **ส่งผลการตรวจและแจ้ง Line**

Line group จะได้รับรายงานทันที รวมถึงรูปถ่าย

---

## 💡 หมายเหตุ

- ใช้งานได้บนมือถือทุกรุ่น (iOS/Android) ผ่านเบราว์เซอร์
- ไม่ต้องติดตั้ง app ใดๆ
- รูปถ่ายถูก compress อัตโนมัติ (max 800px, quality 70%)
- ข้อมูลไม่ถูกเก็บที่ server ใดๆ — ส่งตรงถึง Line Notify เท่านั้น
- รองรับการทำงาน offline บางส่วน (ยกเว้นการส่ง Line)
