export default function Footer() {
  return (
    <footer className="bg-purple-900 text-center py-6 px-4 mt-8">
      <div className="max-w-sm mx-auto">
        <p className="text-purple-200 text-sm font-semibold">พัฒนาโดย UP-Thawatchai</p>
        <p className="text-purple-400 text-xs mt-1 mb-4">
          ถ้าเห็นว่ามีประโยชน์ต่อท่าน สามารถเลี้ยงกาแฟผมได้ที่ QR Code นี้ ☕
        </p>
        <img
          src="/qrcode.png"
          alt="QR Code เลี้ยงกาแฟ"
          className="w-32 h-auto rounded-xl border-2 border-purple-500 mx-auto shadow-lg"
        />
      </div>
    </footer>
  )
}
