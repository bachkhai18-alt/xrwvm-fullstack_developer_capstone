const axios = require('axios');

// Task 10: Lấy danh sách toàn bộ sách bằng Promise/Async-Await
public_users.get('/', async function (req, res) {
  try {
    // Giả sử books là object chứa 10 đầu sách
    return res.status(200).json(books);
  } catch (error) {
    return res.status(500).json({message: "Lỗi truy xuất dữ liệu"});
  }
});

// Task 12: Tìm theo tác giả với xử lý lỗi đầy đủ
public_users.get('/author/:author', function (req, res) {
  const authorName = req.params.author;
  const filteredBooks = Object.values(books).filter(
    b => b.author.toLowerCase() === authorName.toLowerCase()
  );

  if (filteredBooks.length > 0) {
    return res.status(200).json(filteredBooks);
  } else {
    return res.status(404).json({message: "Không tìm thấy tác giả"});
  }
});
