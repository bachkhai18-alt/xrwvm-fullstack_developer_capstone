public_users.get('/author/:author', async function (req, res) {
  const authorName = req.params.author; // Lấy tham số author từ request

  try {
    // Giả lập một Promise để truy xuất dữ liệu sách (hoặc dùng axios nếu gọi API ngoài)
    const getBooksByAuthor = new Promise((resolve, reject) => {
      const allBooks = Object.values(books); // Chuyển đổi object books thành mảng
      const filteredBooks = allBooks.filter(b => b.author.toLowerCase() === authorName.toLowerCase());
      
      if (filteredBooks.length > 0) {
        resolve(filteredBooks);
      } else {
        reject({ status: 404, message: "Không tìm thấy sách của tác giả này" });
      }
    });

    const result = await getBooksByAuthor;
    // Trường hợp thành công: Trả về danh sách sách đã lọc
    return res.status(200).json(result);

  } catch (error) {
    // Xử lý lỗi không tìm thấy (404) hoặc lỗi hệ thống (500)
    const statusCode = error.status || 500;
    return res.status(statusCode).json({ message: error.message || "Lỗi hệ thống khi truy xuất dữ liệu" });
  }
});
