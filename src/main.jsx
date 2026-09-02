import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const story = [
  ['Một lời chào', 'Có những cuộc gặp gỡ rất khẽ, rồi dần trở thành điều đẹp nhất trong những ngày bình thường.'],
  ['Một hành trình', 'Chúng mình đã cùng đi qua những mùa mưa nắng, giữ lại thật nhiều tiếng cười và cả những phút giây bình yên.'],
  ['Một lời hẹn', 'Tháng Mười Một này, chúng mình chọn nắm tay nhau để viết tiếp câu chuyện ấy — bằng một lời hứa trọn đời.'],
];

function App() {
  const [message, setMessage] = useState('');

  function submitRsvp(event) {
    event.preventDefault();
    const name = new FormData(event.currentTarget).get('name');
    setMessage(`Cảm ơn ${name}! Chúng mình đã nhận được lời hồi đáp của bạn.`);
    event.currentTarget.reset();
  }

  return (
    <main className="page" id="top">
      <div className="texture" aria-hidden="true" />
      <nav className="nav" aria-label="Điều hướng">
        <a href="#top" className="mark" aria-label="Nguyên Sa và Minh Quý">NS <i>×</i> MQ</a>
        <a href="#rsvp" className="nav-rsvp">Hồi âm <span>↓</span></a>
      </nav>

      <section className="opening" aria-labelledby="title">
        <p className="kicker">Trân trọng kính mời</p>
        <p className="parents">Gia đình nhà gái &nbsp;·&nbsp; Gia đình nhà trai</p>
        <div className="flower" aria-hidden="true"><i /><i /><i /><i /><i /></div>
        <h1 id="title"><span>Nguyên Sa</span><em>&amp;</em><span>Minh Quý</span></h1>
        <p className="opening-copy">Một lời hứa dịu dàng, một hành trình mới<br />và một ngày thật đẹp để sẻ chia cùng những người thương.</p>
        <a className="date" href="#event"><span>Thứ bảy</span><b>21</b><span>Tháng Mười Một · 2026</span></a>
      </section>

      <section className="story" aria-labelledby="story-heading">
        <header><p className="kicker">Câu chuyện của chúng mình</p><h2 id="story-heading">Từ những điều giản dị,<br /><em>một tình yêu lớn dần.</em></h2></header>
        <div className="chapters">
          {story.map(([chapter, text], index) => <article className="chapter" key={chapter}><span>0{index + 1}</span><h3>{chapter}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="event" id="event" aria-labelledby="event-heading">
        <div className="event-heading"><p className="kicker">Save the date</p><h2 id="event-heading">Ngày chúng mình<br />về chung một nhà.</h2><p>21 · 11 · 2026</p></div>
        <div className="schedule">
          <article><p className="kicker">Lễ thành hôn</p><b>09:00</b><p>Thứ bảy, 21 tháng 11 năm 2026</p><hr /><strong>Địa điểm sẽ được cập nhật</strong><small>Thông tin tư gia nhà gái</small></article>
          <article><p className="kicker">Tiệc mừng</p><b>18:00</b><p>Thứ bảy, 21 tháng 11 năm 2026</p><hr /><strong>Địa điểm sẽ được cập nhật</strong><small>Thông tin nhà hàng tiệc cưới</small></article>
        </div>
      </section>

      <section className="rsvp" id="rsvp" aria-labelledby="rsvp-heading">
        <div><p className="kicker">Thân mời</p><h2 id="rsvp-heading">Sự hiện diện của bạn<br />là món quà quý giá.</h2><p className="rsvp-intro">Vui lòng hồi âm trước ngày <b>01.11.2026</b> để chúng mình được đón tiếp chu đáo.</p></div>
        <form onSubmit={submitRsvp}>
          <label>Họ và tên<input name="name" placeholder="Nguyễn Văn A" required autoComplete="name" /></label>
          <label>Bạn sẽ tham dự chứ?<select name="attendance" required defaultValue=""><option value="" disabled>Chọn lời hồi đáp</option><option>Rất vui được tham dự</option><option>Xin phép gửi lời chúc mừng</option></select></label>
          <button type="submit">Gửi hồi âm <span>→</span></button>
          <p className="status" role="status">{message}</p>
        </form>
      </section>
      <footer>NGUYÊN SA <span>·</span> MINH QUÝ <span>·</span> 21.11.2026</footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
