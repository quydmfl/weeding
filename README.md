# Thiệp mời cưới Nguyên Sa & Minh Quý

Trang thiệp mời tĩnh, có thể mở trực tiếp bằng trình duyệt hoặc xuất bản miễn phí qua GitHub Pages.

## Xuất bản bằng GitHub Pages

Workflow tại [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) đưa trực tiếp thư mục tĩnh `site` lên GitHub Pages mỗi khi thay đổi được đẩy lên nhánh `main`. Vì không cần Node.js, React hay bước build trên GitHub, website tránh được lỗi bundle không tải.

1. Đẩy (push) nhánh hiện tại vào GitHub và tạo/merge pull request vào `main`.
2. Trong GitHub, vào **Settings → Pages** của repository.
3. Ở mục **Build and deployment**, chọn **Source: GitHub Actions**.
4. Vào tab **Actions**, mở workflow **Deploy wedding invitation to GitHub Pages** và chờ lần chạy hoàn tất.
5. Địa chỉ trang sẽ có dạng `https://<ten-tai-khoan>.github.io/<ten-repository>/`; GitHub cũng hiển thị đường dẫn chính xác trong phần **Settings → Pages** và trong kết quả workflow.

Sau lần xuất bản đầu tiên, mỗi thay đổi mới trên `main` sẽ tự động cập nhật thiệp mời. Nếu cần xuất bản lại mà không thay đổi mã nguồn, chạy workflow thủ công từ tab **Actions** bằng nút **Run workflow**.

### Không thấy đường dẫn website sau khi Action chạy?

1. Xác nhận job **Deploy to GitHub Pages** đã chạy thành công, đặc biệt là các bước **Upload static website** và **Deploy to GitHub Pages**.
2. Kiểm tra lại **Settings → Pages → Build and deployment → Source: GitHub Actions**. Đây phải là **GitHub Actions**, không phải **Deploy from a branch**, để GitHub phục vụ đúng thư mục `site` do workflow upload.
3. Mở trang kết quả của workflow: phần **Summary** sẽ có nút **Mở website** sau bước deploy. URL cũng xuất hiện trong environment `github-pages` ở bên phải workflow run.
4. Lần triển khai đầu tiên có thể cần vài phút để URL hoạt động. Nếu URL trả về 404 sau đó, kiểm tra workflow được chạy từ `main` và thử **Run workflow** một lần nữa.
5. Với repository tên `<ten-tai-khoan>.github.io`, website ở đường dẫn gốc; các repository khác dùng đường dẫn `/<ten-repository>/`.
6. Nếu trang vẫn chưa cập nhật sau một lần deploy thành công, chạy lại workflow thủ công từ **Actions**; website mới không phụ thuộc vào bundle React hay Node.js.

## Chỉnh sửa nội dung

* Sửa tên cô dâu/chú rể, câu chuyện, giờ và địa chỉ trong [`site/index.html`](site/index.html).
* Tùy chỉnh màu sắc, phông chữ và bố cục trong [`site/styles.css`](site/styles.css).
* RSVP hiện là phản hồi phía trình duyệt; cần kết nối dịch vụ biểu mẫu hoặc backend nếu muốn lưu câu trả lời thật.
* Xem [`WEDDING_INVITATION_CHECKLIST.md`](WEDDING_INVITATION_CHECKLIST.md) để biết các thông tin nên bổ sung trước khi gửi thiệp.

## Xem trên máy cá nhân

Mở trực tiếp [`site/index.html`](site/index.html) bằng trình duyệt, hoặc chạy `python3 -m http.server --directory site 4173` rồi truy cập `http://localhost:4173`. Không cần cài Node.js hay dependencies.
