# Thiệp mời cưới Nguyên Sa & Minh Quý

Trang thiệp mời React/Vite, có thể chạy trên máy cá nhân hoặc xuất bản miễn phí qua GitHub Pages.

## Xuất bản bằng GitHub Pages

Workflow tại [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) tự động build React/Vite và đưa thư mục `dist` lên GitHub Pages mỗi khi thay đổi được đẩy lên nhánh `main`.

1. Đẩy (push) nhánh hiện tại vào GitHub và tạo/merge pull request vào `main`.
2. Trong GitHub, vào **Settings → Pages** của repository.
3. Ở mục **Build and deployment**, chọn **Source: GitHub Actions**.
4. Vào tab **Actions**, mở workflow **Deploy wedding invitation to GitHub Pages** và chờ lần chạy hoàn tất.
5. Địa chỉ trang sẽ có dạng `https://<ten-tai-khoan>.github.io/<ten-repository>/`; GitHub cũng hiển thị đường dẫn chính xác trong phần **Settings → Pages** và trong kết quả workflow.

Sau lần xuất bản đầu tiên, mỗi thay đổi mới trên `main` sẽ tự động cập nhật thiệp mời. Nếu cần xuất bản lại mà không thay đổi mã nguồn, chạy workflow thủ công từ tab **Actions** bằng nút **Run workflow**.

### Không thấy đường dẫn website sau khi Action chạy?

1. Xác nhận job **Deploy to GitHub Pages** đã chạy thành công, không chỉ riêng bước build.
2. Kiểm tra lại **Settings → Pages → Build and deployment → Source: GitHub Actions**. Lựa chọn này cần được bật một lần cho repository; nếu màn hình Pages báo chưa có website, mở workflow đó và chạy lại bằng **Run workflow**.
3. Mở trang kết quả của workflow: phần **Summary** sẽ có nút **Mở website** sau bước deploy. URL cũng xuất hiện trong environment `github-pages` ở bên phải workflow run.
4. Lần triển khai đầu tiên có thể cần vài phút để URL hoạt động. Nếu URL trả về 404 sau đó, kiểm tra workflow được chạy từ `main` và thử **Run workflow** một lần nữa.
5. Với repository tên `<ten-tai-khoan>.github.io`, website ở đường dẫn gốc; các repository khác dùng đường dẫn `/<ten-repository>/`.

## Chỉnh sửa nội dung

* Sửa tên cô dâu/chú rể, câu chuyện, giờ và địa chỉ trong [`src/main.jsx`](src/main.jsx).
* Tùy chỉnh màu sắc, phông chữ và bố cục trong [`src/styles.css`](src/styles.css).
* RSVP hiện là phản hồi phía trình duyệt; cần kết nối dịch vụ biểu mẫu hoặc backend nếu muốn lưu câu trả lời thật.
* Xem [`WEDDING_INVITATION_CHECKLIST.md`](WEDDING_INVITATION_CHECKLIST.md) để biết các thông tin nên bổ sung trước khi gửi thiệp.

## Chạy trên máy cá nhân

Yêu cầu Node.js 22 trở lên. Sau khi cài dependencies bằng `npm install`, chạy `npm run dev` để xem bản phát triển; dùng `npm run build` để tạo bản xuất bản trong thư mục `dist`.
