# Thiệp mời cưới Minh & An

Trang thiệp mời tĩnh, có thể mở trực tiếp bằng trình duyệt hoặc xuất bản miễn phí qua GitHub Pages.

## Xuất bản bằng GitHub Pages

Workflow tại [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) tự động đưa website lên GitHub Pages mỗi khi thay đổi được đẩy lên nhánh `main`.

1. Đẩy (push) nhánh hiện tại vào GitHub và tạo/merge pull request vào `main`.
2. Trong GitHub, vào **Settings → Pages** của repository.
3. Ở mục **Build and deployment**, chọn **Source: GitHub Actions**.
4. Vào tab **Actions**, mở workflow **Deploy wedding invitation to GitHub Pages** và chờ lần chạy hoàn tất.
5. Địa chỉ trang sẽ có dạng `https://<ten-tai-khoan>.github.io/<ten-repository>/`; GitHub cũng hiển thị đường dẫn chính xác trong phần **Settings → Pages** và trong kết quả workflow.

Sau lần xuất bản đầu tiên, mỗi thay đổi mới trên `main` sẽ tự động cập nhật thiệp mời. Nếu cần xuất bản lại mà không thay đổi mã nguồn, chạy workflow thủ công từ tab **Actions** bằng nút **Run workflow**.

## Chỉnh sửa nội dung

* Sửa tên cô dâu/chú rể, giờ và địa chỉ trong [`index.html`](index.html).
* Tùy chỉnh màu sắc, phông chữ và bố cục trong [`styles.css`](styles.css).
* RSVP hiện là phản hồi phía trình duyệt; cần kết nối dịch vụ biểu mẫu hoặc backend nếu muốn lưu câu trả lời thật.
