export const categories = [
  { id: 'all', label: 'ทั้งหมด', emoji: '📚' },
  { id: 'daily', label: 'ชีวิตประจำวัน', emoji: '🏠' },
  { id: 'food', label: 'อาหาร', emoji: '🍜' },
  { id: 'travel', label: 'การเดินทาง', emoji: '✈️' },
  { id: 'work', label: 'การทำงาน', emoji: '💼' },
  { id: 'nature', label: 'ธรรมชาติ', emoji: '🌿' },
  { id: 'body', label: 'ร่างกาย', emoji: '💪' },
  { id: 'emotion', label: 'อารมณ์ความรู้สึก', emoji: '😊' },
  { id: 'color', label: 'สี', emoji: '🎨' },
  { id: 'number', label: 'ตัวเลข', emoji: '🔢' },
  { id: 'tech', label: 'เทคโนโลยี', emoji: '💻' },
  { id: 'shopping', label: 'การช้อปปิ้ง', emoji: '🛍️' },
  { id: 'sports', label: 'กีฬา', emoji: '⚽' },
  { id: 'health', label: 'สุขภาพ', emoji: '🏥' },
  { id: 'animals', label: 'สัตว์', emoji: '🐾' },
]

export const vocabulary = [
  // ชีวิตประจำวัน
  { id: 1, english: 'house', thai: 'บ้าน', pronunciation: '/haʊs/', example: 'I live in a house.', category: 'daily', difficulty: 1 },
  { id: 2, english: 'family', thai: 'ครอบครัว', pronunciation: '/ˈfæmɪli/', example: 'My family is big.', category: 'daily', difficulty: 1 },
  { id: 3, english: 'morning', thai: 'เช้า', pronunciation: '/ˈmɔːrnɪŋ/', example: 'Good morning!', category: 'daily', difficulty: 1 },
  { id: 4, english: 'evening', thai: 'เย็น / ตอนเย็น', pronunciation: '/ˈiːvnɪŋ/', example: 'Good evening!', category: 'daily', difficulty: 1 },
  { id: 5, english: 'sleep', thai: 'นอนหลับ', pronunciation: '/sliːp/', example: 'I sleep 8 hours a day.', category: 'daily', difficulty: 1 },
  { id: 6, english: 'wake up', thai: 'ตื่นนอน', pronunciation: '/weɪk ʌp/', example: 'I wake up at 6 am.', category: 'daily', difficulty: 1 },
  { id: 7, english: 'shower', thai: 'อาบน้ำ', pronunciation: '/ˈʃaʊər/', example: 'I take a shower every day.', category: 'daily', difficulty: 1 },
  { id: 8, english: 'clothes', thai: 'เสื้อผ้า', pronunciation: '/kloʊðz/', example: 'I wear clean clothes.', category: 'daily', difficulty: 1 },
  { id: 9, english: 'school', thai: 'โรงเรียน', pronunciation: '/skuːl/', example: 'The school is near my house.', category: 'daily', difficulty: 1 },
  { id: 10, english: 'friend', thai: 'เพื่อน', pronunciation: '/frend/', example: 'She is my best friend.', category: 'daily', difficulty: 1 },

  // อาหาร
  { id: 11, english: 'rice', thai: 'ข้าว', pronunciation: '/raɪs/', example: 'Thai people eat rice every day.', category: 'food', difficulty: 1 },
  { id: 12, english: 'water', thai: 'น้ำ', pronunciation: '/ˈwɔːtər/', example: 'Drink more water.', category: 'food', difficulty: 1 },
  { id: 13, english: 'spicy', thai: 'เผ็ด', pronunciation: '/ˈspaɪsi/', example: 'Thai food is very spicy.', category: 'food', difficulty: 2 },
  { id: 14, english: 'delicious', thai: 'อร่อย', pronunciation: '/dɪˈlɪʃəs/', example: 'This food is delicious!', category: 'food', difficulty: 2 },
  { id: 15, english: 'hungry', thai: 'หิว', pronunciation: '/ˈhʌŋɡri/', example: 'I am very hungry.', category: 'food', difficulty: 1 },
  { id: 16, english: 'full', thai: 'อิ่ม', pronunciation: '/fʊl/', example: 'I am full, thank you.', category: 'food', difficulty: 1 },
  { id: 17, english: 'breakfast', thai: 'อาหารเช้า', pronunciation: '/ˈbrekfəst/', example: 'I eat breakfast at 7 am.', category: 'food', difficulty: 2 },
  { id: 18, english: 'lunch', thai: 'อาหารกลางวัน', pronunciation: '/lʌntʃ/', example: 'What do you have for lunch?', category: 'food', difficulty: 1 },
  { id: 19, english: 'dinner', thai: 'อาหารเย็น', pronunciation: '/ˈdɪnər/', example: 'We have dinner at 6 pm.', category: 'food', difficulty: 1 },
  { id: 20, english: 'cook', thai: 'ทำอาหาร / ปรุงอาหาร', pronunciation: '/kʊk/', example: 'I love to cook.', category: 'food', difficulty: 1 },

  // การเดินทาง
  { id: 21, english: 'airport', thai: 'สนามบิน', pronunciation: '/ˈɛrpɔːrt/', example: 'The airport is far away.', category: 'travel', difficulty: 2 },
  { id: 22, english: 'ticket', thai: 'ตั๋ว', pronunciation: '/ˈtɪkɪt/', example: 'I bought a ticket online.', category: 'travel', difficulty: 1 },
  { id: 23, english: 'passport', thai: 'หนังสือเดินทาง', pronunciation: '/ˈpæspɔːrt/', example: 'Don\'t forget your passport.', category: 'travel', difficulty: 2 },
  { id: 24, english: 'hotel', thai: 'โรงแรม', pronunciation: '/hoʊˈtɛl/', example: 'The hotel is very nice.', category: 'travel', difficulty: 1 },
  { id: 25, english: 'map', thai: 'แผนที่', pronunciation: '/mæp/', example: 'I need a map.', category: 'travel', difficulty: 1 },
  { id: 26, english: 'taxi', thai: 'แท็กซี่', pronunciation: '/ˈtæksi/', example: 'Let\'s take a taxi.', category: 'travel', difficulty: 1 },
  { id: 27, english: 'train', thai: 'รถไฟ', pronunciation: '/treɪn/', example: 'The train is on time.', category: 'travel', difficulty: 1 },
  { id: 28, english: 'bus', thai: 'รถบัส', pronunciation: '/bʌs/', example: 'I take the bus to work.', category: 'travel', difficulty: 1 },
  { id: 29, english: 'baggage', thai: 'กระเป๋าเดินทาง', pronunciation: '/ˈbæɡɪdʒ/', example: 'My baggage is heavy.', category: 'travel', difficulty: 2 },
  { id: 30, english: 'destination', thai: 'จุดหมายปลายทาง', pronunciation: '/ˌdɛstɪˈneɪʃən/', example: 'What is your destination?', category: 'travel', difficulty: 3 },

  // การทำงาน
  { id: 31, english: 'meeting', thai: 'การประชุม', pronunciation: '/ˈmiːtɪŋ/', example: 'I have a meeting at 9 am.', category: 'work', difficulty: 2 },
  { id: 32, english: 'deadline', thai: 'กำหนดส่งงาน', pronunciation: '/ˈdɛdlaɪn/', example: 'The deadline is tomorrow.', category: 'work', difficulty: 2 },
  { id: 33, english: 'project', thai: 'โครงการ / โปรเจกต์', pronunciation: '/ˈprɒdʒɛkt/', example: 'Our project is finished.', category: 'work', difficulty: 2 },
  { id: 34, english: 'salary', thai: 'เงินเดือน', pronunciation: '/ˈsæləri/', example: 'He got a salary raise.', category: 'work', difficulty: 2 },
  { id: 35, english: 'boss', thai: 'เจ้านาย', pronunciation: '/bɔːs/', example: 'My boss is strict.', category: 'work', difficulty: 1 },
  { id: 36, english: 'colleague', thai: 'เพื่อนร่วมงาน', pronunciation: '/ˈkɒliːɡ/', example: 'My colleagues are friendly.', category: 'work', difficulty: 3 },
  { id: 37, english: 'report', thai: 'รายงาน', pronunciation: '/rɪˈpɔːrt/', example: 'I wrote a report.', category: 'work', difficulty: 2 },
  { id: 38, english: 'email', thai: 'อีเมล', pronunciation: '/ˈiːmeɪl/', example: 'Please send me an email.', category: 'work', difficulty: 1 },
  { id: 39, english: 'office', thai: 'สำนักงาน', pronunciation: '/ˈɒfɪs/', example: 'I work in an office.', category: 'work', difficulty: 1 },
  { id: 40, english: 'interview', thai: 'สัมภาษณ์', pronunciation: '/ˈɪntərvjuː/', example: 'I have a job interview.', category: 'work', difficulty: 2 },

  // ธรรมชาติ
  { id: 41, english: 'sun', thai: 'ดวงอาทิตย์', pronunciation: '/sʌn/', example: 'The sun is shining.', category: 'nature', difficulty: 1 },
  { id: 42, english: 'moon', thai: 'ดวงจันทร์', pronunciation: '/muːn/', example: 'The moon is beautiful tonight.', category: 'nature', difficulty: 1 },
  { id: 43, english: 'rain', thai: 'ฝน', pronunciation: '/reɪn/', example: 'It rains a lot in Thailand.', category: 'nature', difficulty: 1 },
  { id: 44, english: 'wind', thai: 'ลม', pronunciation: '/wɪnd/', example: 'The wind is strong today.', category: 'nature', difficulty: 1 },
  { id: 45, english: 'tree', thai: 'ต้นไม้', pronunciation: '/triː/', example: 'There are many trees here.', category: 'nature', difficulty: 1 },
  { id: 46, english: 'flower', thai: 'ดอกไม้', pronunciation: '/ˈflaʊər/', example: 'She loves flowers.', category: 'nature', difficulty: 1 },
  { id: 47, english: 'river', thai: 'แม่น้ำ', pronunciation: '/ˈrɪvər/', example: 'The river is clean.', category: 'nature', difficulty: 1 },
  { id: 48, english: 'mountain', thai: 'ภูเขา', pronunciation: '/ˈmaʊntən/', example: 'The mountain is very high.', category: 'nature', difficulty: 2 },
  { id: 49, english: 'ocean', thai: 'มหาสมุทร', pronunciation: '/ˈoʊʃən/', example: 'The ocean is blue.', category: 'nature', difficulty: 2 },
  { id: 50, english: 'forest', thai: 'ป่า', pronunciation: '/ˈfɒrɪst/', example: 'The forest is dark.', category: 'nature', difficulty: 1 },

  // ร่างกาย
  { id: 51, english: 'head', thai: 'หัว', pronunciation: '/hɛd/', example: 'My head hurts.', category: 'body', difficulty: 1 },
  { id: 52, english: 'eyes', thai: 'ตา', pronunciation: '/aɪz/', example: 'She has beautiful eyes.', category: 'body', difficulty: 1 },
  { id: 53, english: 'nose', thai: 'จมูก', pronunciation: '/noʊz/', example: 'My nose is runny.', category: 'body', difficulty: 1 },
  { id: 54, english: 'mouth', thai: 'ปาก', pronunciation: '/maʊθ/', example: 'Open your mouth.', category: 'body', difficulty: 1 },
  { id: 55, english: 'hand', thai: 'มือ', pronunciation: '/hænd/', example: 'Wash your hands.', category: 'body', difficulty: 1 },
  { id: 56, english: 'leg', thai: 'ขา', pronunciation: '/lɛɡ/', example: 'My leg is tired.', category: 'body', difficulty: 1 },
  { id: 57, english: 'heart', thai: 'หัวใจ', pronunciation: '/hɑːrt/', example: 'My heart is beating fast.', category: 'body', difficulty: 1 },
  { id: 58, english: 'stomach', thai: 'ท้อง', pronunciation: '/ˈstʌmək/', example: 'My stomach hurts.', category: 'body', difficulty: 2 },
  { id: 59, english: 'shoulder', thai: 'ไหล่', pronunciation: '/ˈʃoʊldər/', example: 'My shoulder is sore.', category: 'body', difficulty: 2 },
  { id: 60, english: 'back', thai: 'หลัง', pronunciation: '/bæk/', example: 'My back is aching.', category: 'body', difficulty: 1 },

  // อารมณ์ความรู้สึก
  { id: 61, english: 'happy', thai: 'มีความสุข / ดีใจ', pronunciation: '/ˈhæpi/', example: 'I am very happy today.', category: 'emotion', difficulty: 1 },
  { id: 62, english: 'sad', thai: 'เศร้า', pronunciation: '/sæd/', example: 'Why are you sad?', category: 'emotion', difficulty: 1 },
  { id: 63, english: 'angry', thai: 'โกรธ', pronunciation: '/ˈæŋɡri/', example: 'Don\'t be angry.', category: 'emotion', difficulty: 1 },
  { id: 64, english: 'excited', thai: 'ตื่นเต้น', pronunciation: '/ɪkˈsaɪtɪd/', example: 'I am excited about the trip.', category: 'emotion', difficulty: 2 },
  { id: 65, english: 'tired', thai: 'เหนื่อย', pronunciation: '/ˈtaɪərd/', example: 'I am very tired.', category: 'emotion', difficulty: 1 },
  { id: 66, english: 'nervous', thai: 'กังวล / ประหม่า', pronunciation: '/ˈnɜːrvəs/', example: 'I feel nervous.', category: 'emotion', difficulty: 2 },
  { id: 67, english: 'proud', thai: 'ภูมิใจ', pronunciation: '/praʊd/', example: 'I am proud of you.', category: 'emotion', difficulty: 2 },
  { id: 68, english: 'scared', thai: 'กลัว', pronunciation: '/skɛrd/', example: 'I am scared of dogs.', category: 'emotion', difficulty: 2 },
  { id: 69, english: 'bored', thai: 'เบื่อ', pronunciation: '/bɔːrd/', example: 'I am so bored.', category: 'emotion', difficulty: 1 },
  { id: 70, english: 'surprised', thai: 'ประหลาดใจ', pronunciation: '/sərˈpraɪzd/', example: 'I am surprised!', category: 'emotion', difficulty: 2 },

  // สี
  { id: 71, english: 'red', thai: 'สีแดง', pronunciation: '/rɛd/', example: 'The rose is red.', category: 'color', difficulty: 1 },
  { id: 72, english: 'blue', thai: 'สีน้ำเงิน / สีฟ้า', pronunciation: '/bluː/', example: 'The sky is blue.', category: 'color', difficulty: 1 },
  { id: 73, english: 'green', thai: 'สีเขียว', pronunciation: '/ɡriːn/', example: 'Grass is green.', category: 'color', difficulty: 1 },
  { id: 74, english: 'yellow', thai: 'สีเหลือง', pronunciation: '/ˈjɛloʊ/', example: 'Bananas are yellow.', category: 'color', difficulty: 1 },
  { id: 75, english: 'purple', thai: 'สีม่วง', pronunciation: '/ˈpɜːrpəl/', example: 'She likes purple.', category: 'color', difficulty: 1 },
  { id: 76, english: 'orange', thai: 'สีส้ม', pronunciation: '/ˈɒrɪndʒ/', example: 'Oranges are orange.', category: 'color', difficulty: 1 },
  { id: 77, english: 'black', thai: 'สีดำ', pronunciation: '/blæk/', example: 'The cat is black.', category: 'color', difficulty: 1 },
  { id: 78, english: 'white', thai: 'สีขาว', pronunciation: '/waɪt/', example: 'Snow is white.', category: 'color', difficulty: 1 },
  { id: 79, english: 'pink', thai: 'สีชมพู', pronunciation: '/pɪŋk/', example: 'The flower is pink.', category: 'color', difficulty: 1 },
  { id: 80, english: 'brown', thai: 'สีน้ำตาล', pronunciation: '/braʊn/', example: 'Chocolate is brown.', category: 'color', difficulty: 1 },

  // ตัวเลข/จำนวน
  { id: 81, english: 'one', thai: 'หนึ่ง (1)', pronunciation: '/wʌn/', example: 'I have one cat.', category: 'number', difficulty: 1 },
  { id: 82, english: 'ten', thai: 'สิบ (10)', pronunciation: '/tɛn/', example: 'There are ten people.', category: 'number', difficulty: 1 },
  { id: 83, english: 'hundred', thai: 'ร้อย (100)', pronunciation: '/ˈhʌndrəd/', example: 'A hundred dollars.', category: 'number', difficulty: 1 },
  { id: 84, english: 'thousand', thai: 'พัน (1,000)', pronunciation: '/ˈθaʊzənd/', example: 'A thousand baht.', category: 'number', difficulty: 2 },
  { id: 85, english: 'million', thai: 'ล้าน (1,000,000)', pronunciation: '/ˈmɪljən/', example: 'A million people.', category: 'number', difficulty: 2 },
  { id: 86, english: 'first', thai: 'แรก / ที่หนึ่ง', pronunciation: '/fɜːrst/', example: 'I finished first.', category: 'number', difficulty: 1 },
  { id: 87, english: 'last', thai: 'สุดท้าย', pronunciation: '/læst/', example: 'He was the last one.', category: 'number', difficulty: 1 },
  { id: 88, english: 'double', thai: 'สองเท่า / คู่', pronunciation: '/ˈdʌbəl/', example: 'Double the recipe.', category: 'number', difficulty: 2 },
  { id: 89, english: 'half', thai: 'ครึ่ง', pronunciation: '/hæf/', example: 'Give me half.', category: 'number', difficulty: 1 },
  { id: 90, english: 'quarter', thai: 'หนึ่งในสี่', pronunciation: '/ˈkwɔːrtər/', example: 'A quarter of the pie.', category: 'number', difficulty: 2 },

  // เทคโนโลยี
  { id: 91, english: 'phone', thai: 'โทรศัพท์', pronunciation: '/foʊn/', example: 'I lost my phone.', category: 'tech', difficulty: 1 },
  { id: 92, english: 'computer', thai: 'คอมพิวเตอร์', pronunciation: '/kəmˈpjuːtər/', example: 'I use a computer at work.', category: 'tech', difficulty: 1 },
  { id: 93, english: 'internet', thai: 'อินเทอร์เน็ต', pronunciation: '/ˈɪntərnet/', example: 'The internet is slow today.', category: 'tech', difficulty: 1 },
  { id: 94, english: 'password', thai: 'รหัสผ่าน', pronunciation: '/ˈpæswɜːrd/', example: 'Don\'t share your password.', category: 'tech', difficulty: 2 },
  { id: 95, english: 'download', thai: 'ดาวน์โหลด', pronunciation: '/ˈdaʊnloʊd/', example: 'Download the app now.', category: 'tech', difficulty: 2 },
  { id: 96, english: 'upload', thai: 'อัปโหลด', pronunciation: '/ˈʌploʊd/', example: 'Upload the file to the cloud.', category: 'tech', difficulty: 2 },
  { id: 97, english: 'keyboard', thai: 'แป้นพิมพ์', pronunciation: '/ˈkiːbɔːrd/', example: 'My keyboard is broken.', category: 'tech', difficulty: 2 },
  { id: 98, english: 'screen', thai: 'หน้าจอ', pronunciation: '/skriːn/', example: 'The screen is cracked.', category: 'tech', difficulty: 1 },
  { id: 99, english: 'battery', thai: 'แบตเตอรี่', pronunciation: '/ˈbætəri/', example: 'My battery is low.', category: 'tech', difficulty: 1 },
  { id: 100, english: 'charger', thai: 'ที่ชาร์จ', pronunciation: '/ˈtʃɑːrdʒər/', example: 'I forgot my charger.', category: 'tech', difficulty: 2 },

  // การช้อปปิ้ง
  { id: 101, english: 'price', thai: 'ราคา', pronunciation: '/praɪs/', example: 'What is the price?', category: 'shopping', difficulty: 1 },
  { id: 102, english: 'discount', thai: 'ส่วนลด', pronunciation: '/ˈdɪskaʊnt/', example: 'There is a 50% discount today.', category: 'shopping', difficulty: 2 },
  { id: 103, english: 'receipt', thai: 'ใบเสร็จ', pronunciation: '/rɪˈsiːt/', example: 'Can I have a receipt?', category: 'shopping', difficulty: 2 },
  { id: 104, english: 'cashier', thai: 'แคชเชียร์', pronunciation: '/kæˈʃɪər/', example: 'Pay at the cashier.', category: 'shopping', difficulty: 2 },
  { id: 105, english: 'wallet', thai: 'กระเป๋าสตางค์', pronunciation: '/ˈwɒlɪt/', example: 'I left my wallet at home.', category: 'shopping', difficulty: 1 },
  { id: 106, english: 'change', thai: 'เงินทอน', pronunciation: '/tʃeɪndʒ/', example: 'Keep the change.', category: 'shopping', difficulty: 1 },
  { id: 107, english: 'sale', thai: 'ลดราคา / ขาย', pronunciation: '/seɪl/', example: 'Everything is on sale.', category: 'shopping', difficulty: 1 },
  { id: 108, english: 'refund', thai: 'คืนเงิน', pronunciation: '/ˈriːfʌnd/', example: 'I want a refund.', category: 'shopping', difficulty: 2 },
  { id: 109, english: 'cart', thai: 'รถเข็น', pronunciation: '/kɑːrt/', example: 'Put it in the cart.', category: 'shopping', difficulty: 1 },
  { id: 110, english: 'checkout', thai: 'ชำระเงิน', pronunciation: '/ˈtʃekaʊt/', example: 'Go to checkout.', category: 'shopping', difficulty: 2 },

  // กีฬา
  { id: 111, english: 'run', thai: 'วิ่ง', pronunciation: '/rʌn/', example: 'I run every morning.', category: 'sports', difficulty: 1 },
  { id: 112, english: 'swim', thai: 'ว่ายน้ำ', pronunciation: '/swɪm/', example: 'She can swim very fast.', category: 'sports', difficulty: 1 },
  { id: 113, english: 'team', thai: 'ทีม', pronunciation: '/tiːm/', example: 'Our team won the game.', category: 'sports', difficulty: 1 },
  { id: 114, english: 'score', thai: 'คะแนน', pronunciation: '/skɔːr/', example: 'The score is 3-1.', category: 'sports', difficulty: 1 },
  { id: 115, english: 'coach', thai: 'โค้ช', pronunciation: '/koʊtʃ/', example: 'The coach is strict.', category: 'sports', difficulty: 1 },
  { id: 116, english: 'match', thai: 'การแข่งขัน', pronunciation: '/mætʃ/', example: 'The match starts at 8 pm.', category: 'sports', difficulty: 1 },
  { id: 117, english: 'champion', thai: 'แชมป์ / ผู้ชนะเลิศ', pronunciation: '/ˈtʃæmpiən/', example: 'She is the world champion.', category: 'sports', difficulty: 2 },
  { id: 118, english: 'exercise', thai: 'ออกกำลังกาย', pronunciation: '/ˈeksərsaɪz/', example: 'Exercise every day.', category: 'sports', difficulty: 2 },
  { id: 119, english: 'stadium', thai: 'สนามกีฬา', pronunciation: '/ˈsteɪdiəm/', example: 'The stadium is full.', category: 'sports', difficulty: 2 },
  { id: 120, english: 'trophy', thai: 'ถ้วยรางวัล', pronunciation: '/ˈtroʊfi/', example: 'They won a trophy.', category: 'sports', difficulty: 2 },

  // สุขภาพ
  { id: 121, english: 'doctor', thai: 'หมอ / แพทย์', pronunciation: '/ˈdɒktər/', example: 'I need to see a doctor.', category: 'health', difficulty: 1 },
  { id: 122, english: 'hospital', thai: 'โรงพยาบาล', pronunciation: '/ˈhɒspɪtəl/', example: 'Take him to the hospital.', category: 'health', difficulty: 1 },
  { id: 123, english: 'medicine', thai: 'ยา', pronunciation: '/ˈmedɪsɪn/', example: 'Take the medicine twice a day.', category: 'health', difficulty: 2 },
  { id: 124, english: 'fever', thai: 'ไข้', pronunciation: '/ˈfiːvər/', example: 'I have a fever.', category: 'health', difficulty: 1 },
  { id: 125, english: 'cough', thai: 'ไอ', pronunciation: '/kɒf/', example: 'I have a bad cough.', category: 'health', difficulty: 1 },
  { id: 126, english: 'allergy', thai: 'ภูมิแพ้', pronunciation: '/ˈælərdʒi/', example: 'I have a food allergy.', category: 'health', difficulty: 3 },
  { id: 127, english: 'healthy', thai: 'มีสุขภาพดี', pronunciation: '/ˈhelθi/', example: 'Eat healthy food.', category: 'health', difficulty: 1 },
  { id: 128, english: 'nurse', thai: 'พยาบาล', pronunciation: '/nɜːrs/', example: 'The nurse is kind.', category: 'health', difficulty: 1 },
  { id: 129, english: 'injection', thai: 'การฉีดยา', pronunciation: '/ɪnˈdʒekʃən/', example: 'I got an injection today.', category: 'health', difficulty: 3 },
  { id: 130, english: 'vitamin', thai: 'วิตามิน', pronunciation: '/ˈvaɪtəmɪn/', example: 'Take your vitamins daily.', category: 'health', difficulty: 2 },

  // สัตว์
  { id: 131, english: 'cat', thai: 'แมว', pronunciation: '/kæt/', example: 'The cat is sleeping.', category: 'animals', difficulty: 1 },
  { id: 132, english: 'dog', thai: 'สุนัข', pronunciation: '/dɒɡ/', example: 'My dog is very playful.', category: 'animals', difficulty: 1 },
  { id: 133, english: 'elephant', thai: 'ช้าง', pronunciation: '/ˈelɪfənt/', example: 'The elephant is huge.', category: 'animals', difficulty: 2 },
  { id: 134, english: 'bird', thai: 'นก', pronunciation: '/bɜːrd/', example: 'The bird is singing.', category: 'animals', difficulty: 1 },
  { id: 135, english: 'fish', thai: 'ปลา', pronunciation: '/fɪʃ/', example: 'I caught a big fish.', category: 'animals', difficulty: 1 },
  { id: 136, english: 'tiger', thai: 'เสือ', pronunciation: '/ˈtaɪɡər/', example: 'The tiger is dangerous.', category: 'animals', difficulty: 1 },
  { id: 137, english: 'monkey', thai: 'ลิง', pronunciation: '/ˈmʌŋki/', example: 'The monkey is climbing.', category: 'animals', difficulty: 1 },
  { id: 138, english: 'snake', thai: 'งู', pronunciation: '/sneɪk/', example: 'There is a snake in the garden.', category: 'animals', difficulty: 1 },
  { id: 139, english: 'butterfly', thai: 'ผีเสื้อ', pronunciation: '/ˈbʌtərflaɪ/', example: 'A butterfly landed on the flower.', category: 'animals', difficulty: 2 },
  { id: 140, english: 'crocodile', thai: 'จระเข้', pronunciation: '/ˈkrɒkədaɪl/', example: 'Don\'t swim near crocodiles.', category: 'animals', difficulty: 3 },
]

export function getByCategory(categoryId) {
  if (categoryId === 'all') return vocabulary
  return vocabulary.filter(v => v.category === categoryId)
}

export function shuffleArray(arr) {
  const shuffled = [...arr]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}
