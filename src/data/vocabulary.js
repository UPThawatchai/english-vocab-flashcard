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
