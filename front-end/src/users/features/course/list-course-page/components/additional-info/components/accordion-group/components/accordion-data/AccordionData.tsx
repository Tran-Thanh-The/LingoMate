import React from 'react';
import { Box, Typography } from '@mui/material';

const AccordionData = [
  {
    type: 'custom',
    title: 'Thời gian sở hữu lộ trình học',
    content: (
      <Box>
        <Box color={'#23242d'}>
          <Typography component="li" variant='caption'>
            Mỗi Chặng học TOEIC 2 kỹ năng Listening + Reading hoặc Speaking + Writing bạn được sở hữu lên tới{' '}
            <span style={{ color:'#4d99e6' }}>9 tháng</span>{' '} kể từ ngày hoàn thành đăng ký học.
          </Typography>
          <Typography component="li" variant='caption'>
            Mỗi Chặng học TOEIC 4 kỹ năng Listening + Reading + Speaking + Writing bạn được sở hữu lên tới{' '}
            <span style={{ color:'#4d99e6' }}>18 tháng</span>{' '} kể từ ngày hoàn thành đăng ký học. Thời gian sở hữu Lộ Trình TOEIC của bạn bằng tổng thời gian của từng Chặng.
          </Typography>
        </Box>
        <Box>
          <Typography variant='caption'>
            <span style={{ fontWeight: 'bold' }}>Ví dụ:</span>{' '}
            <i>Lộ trình bạn chọn là TOEIC LR gồm có 3 chặng </i>
            <span>➡</span>
            <i> Tổng thời gian cả Lộ trình bạn được sở hữu lên tới 27 tháng.</i>
          </Typography>
          <Typography variant='caption'>
            <span>➡</span>{' '}
            Bắt đầu học ngay để đạt mục tiêu sớm. Đã quyết tâm Đăng Ký, Hãy quyết tâm Học liền!
          </Typography>
        </Box>
      </Box>
    )
  },
  {
    type: 'standard',
    title: 'Quy định về việc sử dụng tài khoản',
    faqItems: [
      {
        question: "1. Có hạn chế số thiết bị đăng nhập tài khoản Lingomate?",
        answer: "Có!\n\nNhằm giúp bạn học có thể tiện lợi học mọi lúc, mọi nơi, Lingomate hỗ trợ bạn đăng nhập và sử dụng tài khoản trên tối đa 3 thiết bị.\n\nĐể đảm bảo an toàn và bảo mật tài khoản cho bạn, nếu Lingomate phát hiện tài khoản đăng nhập quá số thiết bị hỗ trợ, hệ thống sẽ nhắc nhở và sau đó sẽ tự động khóa tài khoản nếu tiếp tục phát hiện hành vi cố tình vi phạm.\n\nBạn dùng lưu ý giữ bảo mật tài khoản học của chính mình để bảo toàn mọi quyền lợi. Tuân thủ Điều kiện, điều khoản giao dịch đã công bố trên Website Lingomate.edu.com."
      },
      {
        question: "2. Dùng chung tài khoản Lingomate có ảnh hưởng gì?",
        answer: "- Theo Điều kiện và điều khoản giao dịch được công bố trên Website, Lingomate nghiêm cấm mọi hành vi liên quan đến sang nhượng, dùng chung tài khoản học.\n\n- Những tài khoản dùng chung, sang nhượng sẽ được hệ thống tự động khóa. Vì vậy, để đảm bảo quyền lợi của chính mình, các bạn hãy giữ bảo mật thông tin tài khoản khi hệ thống nhắc nhở việc phát hiện thông tin đăng nhập trên nhiều thiết bị.\n\n- Ngoài việc khóa tài khoản dùng chung, toàn bộ quyền lợi đặc biệt như chấm chữa Writing, Speaking và trao đổi với giáo viên các bạn sẽ không thể sử dụng lại. Một tài khoản chỉ có thể cá nhân hóa với một người học duy nhất, theo sát tiến độ học và phân tích sự tiến bộ của một người học duy nhất.\n\n- Các bạn hãy cảnh giác với những hình thức mua bán, sang nhượng, dùng chung tài khoản để đảm bảo được hưởng trọn vẹn quyền lợi học tập tốt nhất mà Lingomate mang tới.\n\n- Nếu bạn là nạn nhân của việc mua chung tài khoản khi chưa nắm được những tác hại này, hãy liên hệ Lingomate để được hỗ trợ: 0931 42 8899."
      }
    ]
  },
  {
    type: 'standard',
    title: 'Hướng dẫn học hiệu quả',
    faqItems: [
      {
        question: "1. Điều kiện lý tưởng để học Lingomate là gì?",
        answer: "Để có thể đảm bảo chất lượng học tập và chữa bài khi học các khóa học phát âm, Lingomate khuyến khích học viên học trong điều kiện ít tiếng ồn, chất lượng Internet/ Wifi ổn định, và nên đeo tai nghe (nếu cần).\n\nNếu bạn học trực tiếp trên web Lingomate.edu.com, bạn nên sử dụng trình duyệt Chrome, trên Windows 10 trở lên hoặc MacOS.\n\nNếu bạn học trên điện thoại/ máy tính bảng, bạn vui lòng download bản mới nhất của app Lingomate trên iOS hoặc Android."
      },
      {
        question: "2. Tôi có thể học Lingomate trên những thiết bị nào?",
        answer: "Lingomate cung cấp các khóa học trực tuyến trên nền tảng Website Lingomate.edu.com và ứng dụng trên điện thoại thông minh tại App Store/ Google Play.\n\nVới nền tảng trên Website, Lingomate đề xuất học viên học trên trình duyệt Google Chrome phiên bản mới nhất, trên hệ điều hành Windows 10 trở lên hoặc MacOS để có trải nghiệm sản phẩm hiệu quả."
      },
      {
        question: "3. Ai sẽ giải quyết thắc mắc trong quá trình học cho tôi?",
        answer: "Học viên có thể liên hệ bộ phận Customer Support - Chăm sóc Khách hàng của Lingomate để được hỗ trợ, giải đáp mọi thắc mắc trong quá trình học qua các kênh sau:\n\nHotline: 0907 04 88 99\nFanpage: https://www.facebook.com/phadaotoeic990Lingomate\nEmail: support@Lingomate.edu.com"
      },
      {
        question: "4. Tôi có thể cập nhật những thông tin mới nhất và các ưu đãi của Lingomate qua kênh nào?",
        answer: "Các thông tin và ưu đãi của Lingomate sẽ được cập nhật thường xuyên qua Fanpage Lingomate for TOEIC và website Lingomate.edu.com hoặc được gửi tới học viên qua email từ bộ phận Chăm sóc khách hàng của Lingomate."
      },
      {
        question: "5. Làm sao để thấy được tiến bộ trong quá trình học của tôi với Lingomate?",
        answer: "Để theo dõi sự tiến bộ của bản thân trong quá trình học tập tại Lingomate, học viên có thể xem lại phần trăm số điểm mình hoàn thành ở mỗi bài test trong 1 khóa học và so sánh lại với các lần kiểm tra trước.\n\nĐồng thời, với tính năng chấm bài Speaking & Writing trực tiếp trên hệ thống, học viên có thể dễ dàng xem lại được \"lịch sử bài làm\" và điểm số của mình mà không gặp tình trạng bỏ lỡ bài hay khó theo dõi tiến bộ khi nhận bài chấm qua gmail thông thường."
      }
    ]
  },
  {
    type: 'standard',
    title: 'Thông tin thanh toán',
    faqItems: [
      {
        question: "1. Thông tin của tôi có được bảo mật khi thanh toán online không?",
        answer: "Toàn bộ thông tin giao dịch, bao gồm thông tin thẻ ATM của bạn được bảo mật tuyệt đối bởi trung gian thanh toán online được Ngân hàng Nhà nước Việt Nam cấp phép."
      },
      {
        question: "2. Tôi có thể thanh toán qua chuyển khoản ngân hàng không?",
        answer: "Prep chấp nhận hình thức Chuyển khoản qua cổng thanh toán 9Pay, bạn chỉ cần làm theo các hướng dẫn chuyển khoản khi chọn hình thức thanh toán này. Nếu bạn chuyển khoản thành công qua cổng thanh toán 9Pay, chương trình sẽ được tự động thêm vào tài khoản của bạn.\n\nNếu gặp khó khăn trong thanh toán, bạn vui lòng liên hệ ngay với bộ phận chăm sóc khách hàng qua:\n\nHotline: 0907 04 88 99\nEmail: support@lingoedu.com"
      },
      {
        question: "3. Cách thanh toán qua ATM Internet Banking/ thẻ VISA/ MasterCard/ Paypal?",
        answer: "Với các hình thức Internet Banking, Visa, Master, bạn vui lòng chọn cổng thanh toán OnePay khi thanh toán.\n\nTất cả các thông tin thẻ của bạn được bảo mật tuyệt đối bởi OnePay - Trung gian giao dịch do Ngân hàng nhà nước cấp phép.\n\nNếu bạn muốn thanh toán bằng PayPal, vui lòng liên hệ với bộ phận chăm sóc khách hàng qua:\n\nHotline: 0907 04 88 99\nEmail: support@lingoedu.com"
      },
      {
        question: "4. Cách thanh toán qua QR pay?",
        answer: "Quý khách có thể sử dụng ứng dụng Mobile Banking của gần 30 ngân hàng khác nhau hoặc các ứng dụng khác như VinID, VNPay, mPay để quét mã QR và tiến hành thanh toán nhanh chóng."
      },
      {
        question: "5. Tôi có nhận được xác nhận thanh toán thành công không?",
        answer: "Sau khi thực hiện việc thanh toán, học viên sẽ nhận được thông báo thanh toán thành công và khóa học được đăng ký sẽ tự động mở khóa trên tài khoản tại Lingomate.edu.com."
      }
    ]
  }
];

export default AccordionData;
