// ════════════════════════════════════════════════════
//  config.js  —  ตั้งค่า Line Notify Token + เครื่องจักร
// ════════════════════════════════════════════════════

// 1) ใส่ Line Notify Token ที่นี่
//    ขอ token ได้ที่ https://notify-bot.line.me/th/
const LINE_TOKEN = 'HvYs2NcqP1qm2XyPxm1dDaTA6nKmpCtJkLv+Gnp5ifUZEGF4g3JxwTjiLdU7NmO0h9tfv6jO4Czuew/HEWK1bdl94xlH0/3ShFWctWy25yh0PqclF6pQrYh1mr9PdPyBlGNfiDUL8DK1qfDg7HzLiwdB04t89/1O/w1cDnyilFU=';

// 2) รายการเครื่องจักร/จุดตรวจ
//    id     = รหัสจุดตรวจ (ใช้ใน URL ?id=...)
//    name   = ชื่อเครื่องจักร
//    location = ตำแหน่ง/โรงงาน
//    zone   = โซน (แสดงบน header)
//    checks = รายการตรวจสอบ (string หรือ { label, desc })
const MACHINES = [
  {
    id: 'CBP-WP-001',
    name: 'ปั๊มน้ำหลัก A',
    location: 'โรงงานผสมคอนกรีต สาย 1',
    zone: 'Zone A',
    checks: [
      { label: 'แรงดันน้ำปกติ (3–5 bar)',      desc: 'ตรวจ pressure gauge หน้าปั๊ม' },
      { label: 'ไม่มีเสียงผิดปกติ',              desc: 'ฟังเสียงการทำงานอย่างน้อย 30 วินาที' },
      { label: 'ไม่มีน้ำรั่วซึม',                desc: 'ตรวจ seal, ข้อต่อ และฝักบัว' },
      { label: 'อุณหภูมิมอเตอร์ปกติ (<60°C)',   desc: 'ใช้ infrared thermometer' },
      { label: 'สายไฟและ junction box สมบูรณ์', desc: 'ตรวจรอยไหม้, รอยเปียก' },
    ]
  },
  {
    id: 'CBP-AGG-001',
    name: 'สายพานลำเลียงหิน A',
    location: 'โรงงานผสมคอนกรีต สาย 1',
    zone: 'Zone A',
    checks: [
      { label: 'สายพานตึงพอดี ไม่หย่อน',         desc: 'ตรวจสายพานขณะวิ่ง' },
      { label: 'ไม่มีหินหรือวัสดุหลุดตกข้าง',    desc: 'ตรวจ skirt และ guide' },
      { label: 'มอเตอร์ไม่ร้อนเกิน',             desc: 'สัมผัสเบาๆ หรือใช้ thermometer' },
      { label: 'Roller ทุกตัวหมุนได้ปกติ',        desc: 'ฟังเสียงและสังเกตการหมุน' },
      { label: 'E-Stop ทำงานได้ปกติ',            desc: 'ทดสอบกด Emergency Stop' },
    ]
  },
  {
    id: 'CBP-MIX-001',
    name: 'เครื่องผสมคอนกรีต',
    location: 'โรงงานผสมคอนกรีต สาย 1',
    zone: 'Mixer',
    checks: [
      { label: 'ใบพัดไม่มีการสึกหรอผิดปกติ',     desc: 'ตรวจก่อนเปิดใช้งาน' },
      { label: 'ประตูปิดสนิท ล็อคแน่น',           desc: 'ตรวจ latch และ seal' },
      { label: 'น้ำมันเกียร์อยู่ในระดับปกติ',      desc: 'ดูที่ sight glass' },
      { label: 'ไม่มีเสียงกระแทก/ดัง',            desc: 'ฟังขณะวิ่งเปล่า 1 นาที' },
      { label: 'Sensor เปิด-ปิดประตูทำงานได้',   desc: 'ทดสอบเปิด-ปิดประตู' },
    ]
  },
  {
    id: 'CBP-CEM-001',
    name: 'ไซโลซีเมนต์',
    location: 'โรงงานผสมคอนกรีต สาย 1',
    zone: 'Silo',
    checks: [
      { label: 'Filter bag ไม่อุดตัน',            desc: 'ตรวจ manometer ดู pressure drop' },
      { label: 'Aeration ทำงานปกติ',             desc: 'ฟังเสียงลมออก' },
      { label: 'ไม่มีซีเมนต์รั่วที่ flange',       desc: 'ตรวจข้อต่อรอบไซโล' },
      { label: 'Level sensor แสดงค่าถูกต้อง',    desc: 'เทียบกับค่าจริง' },
      { label: 'โครงสร้างไม่มีร้าวหรือผุกร่อน',   desc: 'สำรวจรอบไซโล' },
    ]
  }
];
