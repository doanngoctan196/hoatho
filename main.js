(function () {
  'use strict';

  var EMAIL = 'phuninhhoatho@gmail.com';
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var clamp = function (v, a, b) { return Math.min(b === undefined ? 1 : b, Math.max(a === undefined ? 0 : a, v)); };

  /* ================= i18n (EN / VI) ================= */
  var D = {
    en: {
      hp1k: '1962',
      hp1v: 'Hoa Tho group roots',
      hp2k: 'Vinatex',
      hp2v: 'Group member',
      hp3k: 'EU · US · JP',
      hp3v: 'Export markets',
      hero_photo_alt: 'Central aisle of the sewing hall with production lines on both sides',
      ab_k: 'About us',
      ab_h: 'Six decades of textile know-how, focused on one garment.',
      ab_lead: 'Hoa Tho - Phu Ninh Garment JSC is a trouser specialist backed by one of Vietnam’s best-known textile and garment groups.',
      ab_p1: 'Hòa Thọ began in 1962 as a weaving mill in Da Nang and grew into one of the largest garment groups in Vietnam, a member of Vinatex. In 2012 the group opened Hoa Tho - Phu Ninh Garment JSC, with a factory in the Chợ Lò Industrial Cluster, Phú Ninh, to sew trousers for export.',
      ab_p2: 'Our focus is trousers. One product, made again and again and made well, is how we keep fit, finish and delivery consistent for buyers in the EU, the US and Japan.',
      ab_s1: 'Years of group heritage, since 1962',
      ab_s2: 'Hoa Tho - Phu Ninh founded',
      ab_s3: 'Core markets: EU, US, Japan',
      ab_s4: 'Product focus: trousers',
      ab_wh: 'Why buyers work with us',
      ab_w1t: 'One product, done well',
      ab_w1p: 'Trousers are all we make, so our lines, checks and people are set up around a single garment. Fit, finish and size sets stay consistent from the first carton to the last.',
      ab_w2t: 'The strength of a group',
      ab_w2p: 'We sit inside the Hoa Tho group and the Vinatex network, with ISO 9001 and ISO 14001 systems at group level and decades of export experience.',
      ab_w3t: 'Ready for export buyers',
      ab_w3p: 'We plan each order around your delivery window, compliance requirements and packing instructions for the EU, the US or Japan.',
      n_factory: 'Factory',
      fx_h: 'Inside our sewing floor.', fx_lead: 'One roof, one product: trousers cut, sewn, pressed, checked and packed in the same factory.',
      fx_p1: 'Our factory in the Chợ Lò Industrial Cluster runs long, open sewing halls where operators work in lines, each station handling one operation such as waistband, fly, pockets, side seams or hem. Work moves from station to station in baskets and on racks, so every garment is easy to track.',
      fx_p2: 'After sewing, trousers go to pressing and finishing, then to inspection. Passed pieces and pieces that need rework are kept on separate, clearly labelled racks, and only approved garments move on to packing and the warehouse.',
      fx1_t: 'Sewing lines', fx1_p: 'Line-based production with clear stations and visible quality and productivity boards.',
      fx2_t: 'Pressing and finishing', fx2_p: 'Dedicated pressing machines and finishing stations at the end of each line.',
      fx3_t: 'Inspection', fx3_p: 'Passed goods and rework goods are separated before anything is packed.',
      fx4_t: 'Packing and storage', fx4_p: 'Cartons are packed to buyer instructions and staged on pallets for shipping.',
      fx_cap1: 'The main aisle of a sewing hall, with lines on both sides.', fx_cap2: 'Operators sewing trousers along a production line.', fx_cap3: 'Two views of the sewing floor: workstations and fabric bundles.', fx_cap4: 'Pressing and inspection at the end of the line, with separate racks for passed and rework goods.', fx_cap5: 'Finished goods packed in cartons and staged on pallets.',
      fx_alt1: 'Central aisle of the garment factory with sewing lines on both sides', fx_alt2: 'Rows of operators in blue uniforms sewing trousers on a production line', fx_alt3: 'Two panoramic views of the sewing floor with workstations and fabric bundles', fx_alt4: 'Pressing machines and racks of finished trousers sorted into passed and rework', fx_alt5: 'Workers at sewing tables beside stacked cartons and pallets in the warehouse',
      title: 'Hoa Tho - Phu Ninh Garment JSC | Trouser manufacturer, Vietnam',
      desc: 'Hoa Tho - Phu Ninh Garment JSC sews trousers for buyers in the EU, the US and Japan. Part of the Hoa Tho group, whose roots go back to 1962.',
      brand: 'Hoa Tho - Phu Ninh', n_about: 'About', n_products: 'Trousers', n_markets: 'Markets', n_process: 'Process', n_contact: 'Contact',
      hdr_cta: 'Request a quote',
      hero_co: 'Hoa Tho - Phu Ninh Garment JSC',
      hero_h: 'Export-grade trousers, sewn in central Vietnam.',
      hero_lead: 'A trouser specialist for buyers in the EU, the US and Japan, backed by the Hoa Tho group and six decades of textile experience.',
      hero_cta1: 'Request a quote', hero_cta2: 'Explore our factory', hero_hint: 'Scroll to explore',
      hero_art: 'Trousers with orange topstitching',
      fk_reg: 'Registered name', fk_en: 'English name', fk_est: 'Registered', fv_est: '15 March 2012',
      fk_grp: 'Group', fv_grp: 'Hoa Tho Textile-Garment Corporation, a member of Vinatex',
      fk_loc: 'Factory', fv_loc: 'Chợ Lò Industrial Cluster, Chiên Đàn Commune, Da Nang City, Vietnam', fk_tax: 'Tax code',
      tl1_t: 'Hòa Thọ weaving mill opens in Da Nang', tl1_p: 'The mill that would grow into the Hoa Tho textile and garment group.',
      tl2_t: 'The group becomes a joint-stock corporation', tl2_p: 'Hoa Tho Textile-Garment Corporation officially begins operating in February 2007.',
      tl3_t: 'Hoa Tho - Phu Ninh is founded', tl3_p: 'Business registered on 15 March, with operations starting on 1 July.',
      tl4_k: 'Today', tl4_t: 'Trousers for buyers in the EU, US and Japan', tl4_p: 'One focused factory, backed by a group with decades of export experience.',
      pr_h: 'Trousers are what we make.', pr_lead: 'The trouser types we are set up to sew.', car_label: 'Trouser types', car_prev: 'Previous trouser type', car_next: 'Next trouser type', car_hint: 'Drag or scroll',
      c1_t: 'Dress and smart-casual trousers', c1_p: 'Woven trousers with clean waistbands, crisp creases and even topstitching, sewn in size sets that stay consistent from the first carton to the last.', c1_tags: 'Woven|Flat-front|Pleated',
      c2_t: 'Workwear trousers', c2_p: 'Made for daily wear: reinforced stress points, bar-tacks, utility pockets and durable stitching that holds up after many washes.', c2_tags: 'Reinforced seams|Utility pockets|Heavy fabrics',
      c3_t: 'Wrinkle-free trousers', c3_p: 'Easy-care fabrics, pressed and finished so they ship flat and look right out of the bag.', c3_tags: 'Easy care|Pressed finish|Travel-ready',
      c4_t: 'Sewn to your tech pack', c4_p: 'Send us your patterns, spec sheet and trims. We sew to your specification, or help develop the pattern and samples with you.', c4_tags: 'Cut and sew|Sampling|Repeat orders',
      mk_h: 'Built around three buyer standards.', mk_lead: 'The Hoa Tho group exports to the US, the EU, Japan and other markets.',
      mk_eu_t: 'European Union', mk_eu_p: 'Buyers ask about chemicals, sustainability and traceability. Share your restricted-substance list and compliance requirements up front, and we plan the order around them.',
      mk_us_t: 'United States', mk_us_p: 'Large programs, firm delivery windows and retailer audits. We plan lines around your ship dates and keep size sets consistent across repeat orders.',
      mk_jp_t: 'Japan', mk_jp_p: 'Buyers inspect closely: straight stitching, clean finishing and careful packing. We sew and check to that standard.',
      st_h: 'Backed by the Hoa Tho group.',
      st1_t: 'Member of Vinatex', st1_p: 'The group belongs to the Vietnam National Textile and Garment Group.',
      st2_t: 'ISO 9001 and ISO 14001', st2_p: 'Quality and environmental management systems run at group level.',
      st3_t: 'Brand experience', st3_p: 'The group has sewn for brands such as Snickers, Haggar, Calvin Klein and Burton.',
      st_note: 'Group-level information from public sources. Ask us which standards apply to your order.',
      pc_h: 'From tech pack to the container.', pc_lead: 'Six steps, each with a check before the next one starts.',
      pc1_t: 'Review the tech pack', pc1_p: 'We read your tech pack, spec sheet and size set before we quote.',
      pc2_t: 'Pattern and sample', pc2_p: 'Patterns are made, a sample is sewn, and it is fitted and approved before bulk.',
      pc3_t: 'Fabric and cutting', pc3_p: 'Fabric is inspected and cut by marker plan to keep waste low.',
      pc4_t: 'Sewing lines', pc4_p: 'Operators sew in lines, with checks at key operations: waistband, fly, pockets and hem.',
      pc5_t: 'Finishing and inspection', pc5_p: 'Pressing, thread trimming, measurement and final inspection.',
      pc6_t: 'Packing and shipping', pc6_p: 'Packed to your instructions and shipped on schedule to the EU, the US or Japan.',
      ct_h: 'Send us your tech pack.', ct_p: 'Tell us the style, quantity and destination. We reply by email.',
      ct_email: 'Email', ct_phone: 'Phone', ct_addr: 'Factory',
      lb_name: 'Your name', lb_email: 'Your email', lb_co: 'Company', lb_mk: 'Destination market', lb_msg: 'Message',
      o_eu: 'European Union', o_us: 'United States', o_jp: 'Japan', o_ot: 'Other',
      map_title: 'Map showing the Hoa Tho - Phu Ninh factory location', map_tap: 'Click or tap to use the map', map_open: 'Open in Google Maps', map_dir: 'Get directions',
      err: 'Please enter your name and a message.', btn_send: 'Open email app to send',
      sent_t: 'Email did not open? Use one of these:', sent_app: 'Open email app', sent_gmail: 'Open in Gmail', sent_copy: 'Copy message', copied: 'Copied. Paste it into an email to phuninhhoatho@gmail.com.',
      ft_tax: 'Tax code', ft_rights: 'All rights reserved.',
      langLabel: 'Chuyển sang tiếng Việt', langBtn: 'VI', skip: 'Skip to content',
      mailSubject: 'Inquiry from ', mailName: 'Name', mailEmail: 'Email', mailCo: 'Company', mailMk: 'Destination market'
    },
    vi: {
      hp1k: '1962',
      hp1v: 'Từ tập đoàn Hòa Thọ',
      hp2k: 'Vinatex',
      hp2v: 'Thành viên tập đoàn',
      hp3k: 'EU · Mỹ · Nhật',
      hp3v: 'Thị trường xuất khẩu',
      hero_photo_alt: 'Lối đi giữa xưởng may với các chuyền sản xuất ở hai bên',
      ab_k: 'Giới thiệu',
      ab_h: 'Hơn sáu thập kỷ dệt may, tập trung vào một sản phẩm: chiếc quần.',
      ab_lead: 'Công ty Cổ phần May Hòa Thọ - Phú Ninh chuyên sản xuất quần, với nền tảng vững chắc từ một trong những tập đoàn dệt may có uy tín hàng đầu Việt Nam.',
      ab_p1: 'Hòa Thọ khởi đầu từ năm 1962 với nhà máy dệt tại Đà Nẵng, từng bước phát triển thành một trong những tập đoàn may mặc lớn của Việt Nam, thành viên của Vinatex. Năm 2012, Công ty Cổ phần May Hòa Thọ - Phú Ninh được thành lập, với nhà máy đặt tại Cụm công nghiệp Chợ Lò, Phú Ninh, chuyên may quần xuất khẩu.',
      ab_p2: 'Chúng tôi tập trung vào quần. Làm một sản phẩm lặp đi lặp lại và làm thật tốt là cách chúng tôi giữ form dáng, đường may và tiến độ giao hàng ổn định cho khách hàng tại EU, Mỹ và Nhật Bản.',
      ab_s1: 'Năm kế thừa truyền thống tập đoàn, từ 1962',
      ab_s2: 'Hòa Thọ - Phú Ninh thành lập',
      ab_s3: 'Thị trường chính: EU, Mỹ, Nhật',
      ab_s4: 'Sản phẩm trọng tâm: quần',
      ab_wh: 'Vì sao khách hàng chọn chúng tôi',
      ab_w1t: 'Một sản phẩm, làm thật tốt',
      ab_w1p: 'Chúng tôi chỉ sản xuất quần, nên chuyền may, khâu kiểm tra và đội ngũ đều được tổ chức quanh một loại sản phẩm. Form dáng, đường may và bảng size đồng nhất từ thùng đầu tiên đến thùng cuối cùng.',
      ab_w2t: 'Sức mạnh của tập đoàn',
      ab_w2p: 'Chúng tôi thuộc tập đoàn Hòa Thọ và hệ thống Vinatex, với hệ thống ISO 9001 và ISO 14001 ở cấp tập đoàn cùng nhiều thập kỷ kinh nghiệm xuất khẩu.',
      ab_w3t: 'Sẵn sàng cho khách hàng xuất khẩu',
      ab_w3p: 'Mỗi đơn hàng được lên kế hoạch theo thời hạn giao hàng, yêu cầu tuân thủ và hướng dẫn đóng gói của khách hàng tại EU, Mỹ hoặc Nhật Bản.',
      n_factory: 'Nhà máy',
      fx_h: 'Bên trong xưởng may của chúng tôi.', fx_lead: 'Một nhà máy, một sản phẩm: quần được cắt, may, ủi, kiểm tra và đóng gói ngay trong cùng một cơ sở.',
      fx_p1: 'Nhà máy tại Cụm công nghiệp Chợ Lò vận hành các xưởng may rộng, thông thoáng, nơi công nhân làm việc theo chuyền, mỗi vị trí đảm nhận một công đoạn như cạp quần, đáy quần, túi, đường sườn hoặc lai quần. Bán thành phẩm di chuyển giữa các vị trí bằng rổ và giá treo, giúp việc theo dõi từng sản phẩm dễ dàng.',
      fx_p2: 'Sau khi may, quần được chuyển sang ủi và hoàn thiện, rồi đến khâu kiểm tra. Hàng đạt và hàng cần sửa được để riêng trên các giá có dán nhãn rõ ràng; chỉ hàng đã được duyệt mới chuyển sang đóng gói và vào kho.',
      fx1_t: 'Chuyền may', fx1_p: 'Sản xuất theo chuyền với các vị trí rõ ràng, có bảng chất lượng và năng suất đặt ngay tại xưởng.',
      fx2_t: 'Ủi và hoàn thiện', fx2_p: 'Máy ủi chuyên dụng và khu hoàn thiện ở cuối mỗi chuyền.',
      fx3_t: 'Kiểm tra', fx3_p: 'Hàng đạt và hàng cần sửa được tách riêng trước khi đóng gói.',
      fx4_t: 'Đóng gói và lưu kho', fx4_p: 'Thùng carton được đóng theo hướng dẫn của khách hàng và xếp trên pallet để chuẩn bị xuất hàng.',
      fx_cap1: 'Lối đi chính của xưởng may, chuyền may ở hai bên.', fx_cap2: 'Công nhân may quần trên chuyền sản xuất.', fx_cap3: 'Hai góc nhìn toàn cảnh xưởng may: vị trí làm việc và các bó vải.', fx_cap4: 'Khu ủi và kiểm tra cuối chuyền, có giá riêng cho hàng đạt và hàng cần sửa.', fx_cap5: 'Thành phẩm đóng thùng carton và xếp trên pallet.',
      fx_alt1: 'Lối đi giữa xưởng may với các chuyền may ở hai bên', fx_alt2: 'Công nhân mặc đồng phục xanh may quần trên chuyền sản xuất', fx_alt3: 'Hai góc nhìn toàn cảnh xưởng may với các vị trí làm việc và bó vải', fx_alt4: 'Máy ủi và giá treo quần thành phẩm phân loại hàng đạt, hàng cần sửa', fx_alt5: 'Công nhân tại bàn may cạnh các thùng carton xếp trên pallet trong kho',
      title: 'Công Ty Cổ Phần May Hòa Thọ - Phú Ninh | Sản xuất quần xuất khẩu',
      desc: 'Công Ty Cổ Phần May Hòa Thọ - Phú Ninh may quần cho khách hàng tại EU, Mỹ và Nhật Bản. Thuộc hệ thống Hòa Thọ, với gốc rễ từ năm 1962.',
      brand: 'Hòa Thọ - Phú Ninh', n_about: 'Giới thiệu', n_products: 'Sản phẩm', n_markets: 'Thị trường', n_process: 'Quy trình', n_contact: 'Liên hệ',
      hdr_cta: 'Yêu cầu báo giá',
      hero_co: 'Công Ty Cổ Phần May Hòa Thọ - Phú Ninh',
      hero_h: 'Quần xuất khẩu chuẩn mực, may tại miền Trung Việt Nam.',
      hero_lead: 'Chuyên sản xuất quần cho khách hàng tại EU, Mỹ và Nhật Bản, với nền tảng từ tập đoàn Hòa Thọ và hơn sáu thập kỷ kinh nghiệm dệt may.',
      hero_cta1: 'Yêu cầu báo giá', hero_cta2: 'Xem nhà máy', hero_hint: 'Cuộn để khám phá',
      hero_art: 'Chiếc quần với đường chỉ diễu màu cam',
      fk_reg: 'Tên đăng ký', fk_en: 'Tên quốc tế', fk_est: 'Đăng ký kinh doanh', fv_est: '15/03/2012',
      fk_grp: 'Hệ thống', fv_grp: 'Tổng công ty CP Dệt May Hòa Thọ, thành viên của Vinatex',
      fk_loc: 'Nhà máy', fv_loc: 'Cụm công nghiệp Chợ Lò, xã Chiên Đàn, TP. Đà Nẵng, Việt Nam', fk_tax: 'Mã số thuế',
      tl1_t: 'Nhà máy Dệt Hòa Thọ ra đời tại Đà Nẵng', tl1_p: 'Tiền thân của Tổng công ty Dệt May Hòa Thọ.',
      tl2_t: 'Chuyển thành Tổng công ty cổ phần', tl2_p: 'Tổng công ty CP Dệt May Hòa Thọ chính thức đi vào hoạt động từ tháng 2/2007.',
      tl3_t: 'Thành lập May Hòa Thọ - Phú Ninh', tl3_p: 'Đăng ký kinh doanh ngày 15/3, bắt đầu hoạt động từ ngày 1/7.',
      tl4_k: 'Hôm nay', tl4_t: 'Quần cho khách hàng tại EU, Mỹ và Nhật', tl4_p: 'Một nhà máy tập trung vào quần, được hỗ trợ bởi hệ thống có nhiều thập kỷ kinh nghiệm xuất khẩu.',
      pr_h: 'Chúng tôi chuyên may quần.', pr_lead: 'Các dòng quần chúng tôi sẵn sàng sản xuất.', car_label: 'Các dòng quần', car_prev: 'Dòng quần trước', car_next: 'Dòng quần tiếp theo', car_hint: 'Kéo hoặc scroll',
      c1_t: 'Quần tây và smart-casual', c1_p: 'Quần dệt thoi với cạp gọn, ly quần sắc nét và đường diễu đều, may theo bộ size ổn định từ thùng hàng đầu đến thùng cuối.', c1_tags: 'Dệt thoi|Ly trơn|Có ly',
      c2_t: 'Quần workwear', c2_p: 'Dành cho mặc hằng ngày: gia cố các điểm chịu lực, bọ, túi tiện ích và đường may bền sau nhiều lần giặt.', c2_tags: 'Gia cố đường may|Túi tiện ích|Vải dày',
      c3_t: 'Quần chống nhăn', c3_p: 'Vải dễ chăm sóc, được ủi và hoàn thiện để hàng phẳng phiu khi giao và đẹp ngay khi mở túi.', c3_tags: 'Dễ chăm sóc|Ủi hoàn thiện|Tiện đi lại',
      c4_t: 'May theo tech pack của bạn', c4_p: 'Gửi rập, bảng thông số và phụ liệu cho chúng tôi. Chúng tôi may đúng thông số, hoặc cùng bạn phát triển rập và hàng mẫu.', c4_tags: 'Gia công cắt may|Làm mẫu|Đơn hàng lặp lại',
      mk_h: 'Xây dựng theo chuẩn của ba thị trường.', mk_lead: 'Tổng công ty Hòa Thọ xuất khẩu sang Mỹ, EU, Nhật Bản và nhiều thị trường khác.',
      mk_eu_t: 'Liên minh châu Âu', mk_eu_p: 'Khách hàng quan tâm đến hóa chất, tính bền vững và truy xuất nguồn gốc. Hãy gửi sớm danh mục chất hạn chế và yêu cầu tuân thủ, chúng tôi sẽ lên kế hoạch đơn hàng theo đó.',
      mk_us_t: 'Hoa Kỳ', mk_us_p: 'Đơn hàng lớn, thời gian giao nghiêm ngặt và các đợt đánh giá của nhà bán lẻ. Chúng tôi sắp xếp chuyền theo ngày giao hàng và giữ bộ size nhất quán giữa các đơn lặp lại.',
      mk_jp_t: 'Nhật Bản', mk_jp_p: 'Khách hàng kiểm tra rất kỹ: đường may thẳng, hoàn thiện sạch và đóng gói cẩn thận. Chúng tôi may và kiểm tra theo chuẩn đó.',
      st_h: 'Có hệ thống Hòa Thọ phía sau.',
      st1_t: 'Thành viên của Vinatex', st1_p: 'Tổng công ty thuộc Tập đoàn Dệt May Việt Nam.',
      st2_t: 'ISO 9001 và ISO 14001', st2_p: 'Hệ thống quản lý chất lượng và môi trường được vận hành ở cấp tổng công ty.',
      st3_t: 'Kinh nghiệm với thương hiệu', st3_p: 'Tổng công ty đã sản xuất cho các nhãn hiệu như Snickers, Haggar, Calvin Klein và Burton.',
      st_note: 'Thông tin cấp tổng công ty từ nguồn công khai. Hãy hỏi chúng tôi về tiêu chuẩn áp dụng cho đơn hàng của bạn.',
      pc_h: 'Từ tech pack đến container.', pc_lead: 'Sáu bước, mỗi bước đều có kiểm tra trước khi sang bước tiếp theo.',
      pc1_t: 'Xem xét tech pack', pc1_p: 'Chúng tôi đọc tech pack, bảng thông số và bộ size trước khi báo giá.',
      pc2_t: 'Rập và hàng mẫu', pc2_p: 'Làm rập, may mẫu, thử form và được duyệt trước khi sản xuất hàng loạt.',
      pc3_t: 'Vải và cắt', pc3_p: 'Vải được kiểm tra và cắt theo sơ đồ để giảm hao hụt.',
      pc4_t: 'Chuyền may', pc4_p: 'Công nhân may theo chuyền, có kiểm tra tại các công đoạn chính: cạp, cửa quần, túi và gấu.',
      pc5_t: 'Hoàn thiện và kiểm tra', pc5_p: 'Ủi, cắt chỉ, đo thông số và kiểm tra cuối.',
      pc6_t: 'Đóng gói và giao hàng', pc6_p: 'Đóng gói theo hướng dẫn của bạn và giao đúng hẹn đến EU, Mỹ hoặc Nhật.',
      ct_h: 'Gửi tech pack cho chúng tôi.', ct_p: 'Cho chúng tôi biết mã hàng, số lượng và nơi nhận. Chúng tôi sẽ phản hồi qua email.',
      ct_email: 'Email', ct_phone: 'Điện thoại', ct_addr: 'Nhà máy',
      lb_name: 'Tên của bạn', lb_email: 'Email của bạn', lb_co: 'Công ty', lb_mk: 'Thị trường đến', lb_msg: 'Nội dung',
      o_eu: 'Liên minh châu Âu', o_us: 'Hoa Kỳ', o_jp: 'Nhật Bản', o_ot: 'Khác',
      map_title: 'Bản đồ vị trí nhà máy May Hòa Thọ - Phú Ninh', map_tap: 'Chạm hoặc nhấp để dùng bản đồ', map_open: 'Mở trong Google Maps', map_dir: 'Chỉ đường',
      err: 'Vui lòng nhập tên và nội dung.', btn_send: 'Mở ứng dụng email để gửi',
      sent_t: 'Email chưa mở? Hãy dùng một trong các cách sau:', sent_app: 'Mở ứng dụng email', sent_gmail: 'Mở bằng Gmail', sent_copy: 'Sao chép nội dung', copied: 'Đã sao chép. Hãy dán vào email gửi tới phuninhhoatho@gmail.com.',
      ft_tax: 'Mã số thuế', ft_rights: 'Bảo lưu mọi quyền.',
      langLabel: 'Switch to English', langBtn: 'EN', skip: 'Chuyển đến nội dung',
      mailSubject: 'Yêu cầu từ ', mailName: 'Họ tên', mailEmail: 'Email', mailCo: 'Công ty', mailMk: 'Thị trường đến'
    }
  };
  var lang = 'en';
  function applyLang(l) {
    var t = D[l] || D.en; lang = D[l] ? l : 'en';
    document.documentElement.lang = lang;
    document.title = t.title;
    var md = $('meta[name="description"]'); if (md) md.setAttribute('content', t.desc);
    $$('[data-i18n]').forEach(function (el) { var k = el.getAttribute('data-i18n'); if (t[k] != null) el.textContent = t[k]; });
    $$('[data-i18n-aria]').forEach(function (el) { var k = el.getAttribute('data-i18n-aria'); if (t[k] != null) el.setAttribute('aria-label', t[k]); });
    $$('[data-i18n-alt]').forEach(function (el) { var k = el.getAttribute('data-i18n-alt'); if (t[k] != null) el.setAttribute('alt', t[k]); });
    $$('[data-i18n-title]').forEach(function (el) { var k = el.getAttribute('data-i18n-title'); if (t[k] != null) el.setAttribute('title', t[k]); });
    var mf = $('#mapFrame');
    if (mf) { var mu = mf.getAttribute('data-src-base') + '&hl=' + lang; if (mf.getAttribute('src') !== mu) mf.setAttribute('src', mu); }
    $$('[data-i18n-list]').forEach(function (ul) {
      var k = ul.getAttribute('data-i18n-list'); if (t[k] == null) return;
      ul.textContent = '';
      t[k].split('|').forEach(function (s) { var li = document.createElement('li'); li.textContent = s; ul.appendChild(li); });
    });
    var b = $('#lang'); b.textContent = t.langBtn; b.setAttribute('aria-label', t.langLabel);
    var sk = $('.skip'); if (sk) sk.textContent = t.skip;
    try { localStorage.setItem('htpn-lang', lang); } catch (e) {}
  }
  var saved = null; try { saved = localStorage.getItem('htpn-lang'); } catch (e) {}
  var initial = saved && D[saved] ? saved : ((navigator.language || '').toLowerCase().indexOf('vi') === 0 ? 'vi' : 'en');
  if (initial !== 'en') applyLang(initial);
  $('#lang').addEventListener('click', function () { applyLang(lang === 'en' ? 'vi' : 'en'); });
  $('#yr').textContent = new Date().getFullYear();

  /* ================= smooth scroll (desktop pointers only; touch stays native) ================= */
  var lenis = null;
  try {
    if (!reduce && window.Lenis && window.matchMedia('(pointer: fine)').matches) {
      lenis = new window.Lenis({ autoRaf: true, lerp: 0.09, smoothWheel: true });
    }
  } catch (e) { lenis = null; }
  var HDR = 60;
  $$('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href') || ''; if (id.charAt(0) !== '#' || id.length < 2) return;
      var target = null; try { target = $(id); } catch (er) { return; }
      if (!target) return;
      e.preventDefault();
      if (lenis) lenis.scrollTo(target, { offset: id === '#top' ? 0 : -HDR, duration: 1.4 });
      else target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
      if (history.replaceState) { try { history.replaceState(null, '', id); } catch (er) {} }
    });
  });

  /* ================= scrub engine: values follow scroll with easing ================= */
  var scrubs = [];
  var running = false;
  function addScrub(target, apply, k) {
    var s = { target: target, apply: apply, k: k || 0.14, cur: 0, last: -1 };
    s.cur = reduce ? 1 : target(); scrubs.push(s); apply(s.cur); s.last = s.cur; return s;
  }
  function frame() {
    var moving = false;
    for (var i = 0; i < scrubs.length; i++) {
      var s = scrubs[i], t = reduce ? 1 : s.target(), d = t - s.cur;
      if (Math.abs(d) > 0.0005) { s.cur += d * s.k; moving = true; } else { s.cur = t; }
      if (s.cur !== s.last) { s.apply(s.cur); s.last = s.cur; }
    }
    if (moving) requestAnimationFrame(frame); else running = false;
  }
  function kick() { if (!running) { running = true; requestAnimationFrame(frame); } }
  window.addEventListener('scroll', kick, { passive: true });
  var lastW = window.innerWidth;
  window.addEventListener('resize', function () { if (window.innerWidth !== lastW) { lastW = window.innerWidth; measure(); } kick(); });
  window.addEventListener('orientationchange', function () { setTimeout(function () { measure(); kick(); }, 250); });

  /* header background */
  var hdr = $('#hdr');
  function hdrState() { hdr.classList.toggle('sc', (window.pageYOffset || 0) > 12); }
  window.addEventListener('scroll', hdrState, { passive: true }); hdrState();

  /* ---- scroll hint fades out once the page moves ---- */
  var hint = $('#heroHint');
  function updateHint() { if (hint) hint.style.opacity = clamp(1 - (window.pageYOffset || 0) / 140).toFixed(2); }
  function updatePull() { updateHint(); }
  function queuePull() { updateHint(); }
  window.addEventListener('scroll', updateHint, { passive: true });
  updateHint();

  /* ---- thread timelines (about + process) ---- */
  var threads = [];
  function initThread(sel, headAt) {
    var ol = $(sel); if (!ol) return;
    var items = $$('li', ol);
    var th = { ol: ol, items: items, fr: [] };
    threads.push(th);
    addScrub(function () {
      var r = ol.getBoundingClientRect();
      return clamp((window.innerHeight * headAt - r.top) / r.height);
    }, function (v) {
      ol.style.setProperty('--p', v.toFixed(4));
      for (var i = 0; i < items.length; i++) items[i].classList.toggle('on', v >= (th.fr[i] || 0) - 0.001);
    }, 0.14);
  }
  function measure() {
    threads.forEach(function (th) {
      var h = th.ol.offsetHeight || 1;
      th.fr = th.items.map(function (li) { return clamp((li.offsetTop + 14) / h); });
    });
    scrubs.forEach(function (s) { s.last = -1; });
  }
  initThread('#tl', 0.62);
  initThread('#pc', 0.62);
  measure(); kick();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { measure(); kick(); });
  window.addEventListener('load', function () { measure(); kick(); queuePull(); });

  /* ---- products carousel: auto-scroll + native scroll + mouse/touch drag ---- */
  (function initCarousel() {
    var track = $('#car'); if (!track) return;
    var slides = $$('.card', track), n = slides.length;
    var cnt = $('#carCount'), bar = $('#carBar');
    var queued = false, cur = -1;
    var timer = null, resumeTimer = null;
    var AUTO_DELAY = 2000;
    var RESUME_DELAY = 1800;
    var userInteracting = false;

    function padL() { return parseFloat(getComputedStyle(track).paddingLeft) || 0; }
    function leftOf(i) { return slides[i].offsetLeft - padL(); }
    function maxScroll() { return Math.max(0, track.scrollWidth - track.clientWidth); }

    function nearest() {
      var x = track.scrollLeft, best = 0, bd = Infinity, m = maxScroll();
      if (x >= m - 2) return n - 1;
      for (var i = 0; i < n; i++) {
        var d = Math.abs(leftOf(i) - x);
        if (d < bd) { bd = d; best = i; }
      }
      return best;
    }

    function update() {
      queued = false;
      var i = nearest(), m = maxScroll();
      if (i !== cur) {
        cur = i;
        slides.forEach(function (sl, k) { sl.classList.toggle('on', k === i); });
        if (cnt) cnt.textContent = '0' + (i + 1) + ' / 0' + n;
      }
      if (bar) {
        var f = m > 0 ? clamp(track.scrollLeft / m) : 1;
        bar.style.setProperty('--p', (1 / n + f * (1 - 1 / n)).toFixed(4));
      }
    }

    function queue() {
      if (!queued) {
        queued = true;
        requestAnimationFrame(update);
      }
    }

    function goTo(i, instant) {
      i = Math.max(0, Math.min(n - 1, i));
      track.scrollTo({
        left: Math.min(leftOf(i), maxScroll()),
        behavior: (reduce || instant) ? 'auto' : 'smooth'
      });
    }

    function stopAuto() {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    }

    function scheduleAuto() {
      stopAuto();
      if (reduce || n < 2) return;
      timer = setInterval(function () {
        if (document.hidden || userInteracting) return;
        var i = nearest();
        if (i >= n - 1) {
          track.scrollTo({ left: 0, behavior: 'auto' });
        } else {
          goTo(i + 1);
        }
      }, AUTO_DELAY);
    }

    function pauseAndResume() {
      stopAuto();
      clearTimeout(resumeTimer);
      resumeTimer = setTimeout(function () {
        userInteracting = false;
        scheduleAuto();
      }, RESUME_DELAY);
    }

    track.addEventListener('scroll', queue, { passive: true });
    window.addEventListener('resize', queue);

    /* Pause while the user is hovering/focusing/dragging/scrolling manually. */
    track.addEventListener('mouseenter', function () {
      userInteracting = true;
      stopAuto();
    });
    track.addEventListener('mouseleave', function () {
      userInteracting = false;
      scheduleAuto();
    });
    track.addEventListener('focusin', function () {
      userInteracting = true;
      stopAuto();
    });
    track.addEventListener('focusout', function () {
      userInteracting = false;
      scheduleAuto();
    });
    track.addEventListener('wheel', pauseAndResume, { passive: true });
    track.addEventListener('touchstart', function () {
      userInteracting = true;
      stopAuto();
    }, { passive: true });
    track.addEventListener('touchend', function () {
      pauseAndResume();
    }, { passive: true });

    /* Mouse drag; touch/pen keep native horizontal scrolling. */
    var drag = null;
    track.addEventListener('pointerdown', function (e) {
      if (e.pointerType !== 'mouse' || e.button !== 0) return;
      userInteracting = true;
      stopAuto();
      drag = {
        x: e.clientX,
        left: track.scrollLeft,
        idx: nearest(),
        moved: false,
        id: e.pointerId
      };
    });

    track.addEventListener('pointermove', function (e) {
      if (!drag || e.pointerId !== drag.id) return;
      var dx = e.clientX - drag.x;
      if (!drag.moved && Math.abs(dx) < 6) return;
      if (!drag.moved) {
        drag.moved = true;
        track.classList.add('drag');
        try { track.setPointerCapture(e.pointerId); } catch (er) {}
      }
      track.scrollLeft = drag.left - dx;
    });

    function endDrag(e) {
      if (!drag) return;
      var d = drag;
      drag = null;
      track.classList.remove('drag');
      if (d.moved) {
        var dx = e.clientX - d.x;
        goTo(Math.abs(dx) > 50 ? d.idx + (dx < 0 ? 1 : -1) : d.idx);
      }
      pauseAndResume();
    }

    track.addEventListener('pointerup', endDrag);
    track.addEventListener('pointercancel', endDrag);
    track.addEventListener('dragstart', function (e) { e.preventDefault(); });

    document.addEventListener('visibilitychange', function () {
      if (document.hidden) stopAuto();
      else if (!userInteracting) scheduleAuto();
    });

    update();
    scheduleAuto();
  })();

  /* ---- wipe reveals: measured on scroll (IntersectionObserver ignores clipped targets) ---- */
  var pending = $$('[data-rv]');
  function checkReveals() {
    if (!pending.length) return;
    var line = window.innerHeight * 0.92;
    pending = pending.filter(function (el) {
      if (reduce || el.getBoundingClientRect().top < line) { el.classList.add('in'); return false; }
      return true;
    });
  }
  window.addEventListener('scroll', checkReveals, { passive: true });
  window.addEventListener('resize', checkReveals);
  checkReveals();


  /* ---- scroll polish: progress thread, hero depth, image parallax, count-up ---- */
  (function () {
    if (reduce) return;
    var prog = $('#prog'), heroGrid = $('.hero-grid');
    addScrub(function () {
      var m = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      return clamp((window.pageYOffset || 0) / m);
    }, function (v) { if (prog) prog.style.setProperty('--p', v.toFixed(4)); }, 0.2);
    if (heroGrid) addScrub(function () {
      return clamp((window.pageYOffset || 0) / Math.max(1, window.innerHeight));
    }, function (v) { heroGrid.style.setProperty('--hp', v.toFixed(4)); }, 0.12);

    $$('.fx-fig img').forEach(function (img) {
      var ph = document.createElement('div'); ph.className = 'fx-ph';
      img.parentNode.insertBefore(ph, img); ph.appendChild(img);
      addScrub(function () {
        var r = ph.getBoundingClientRect(), vh = window.innerHeight;
        return clamp((vh - r.top) / (vh + r.height));
      }, function (v) { img.style.setProperty('--py', ((v - 0.5) * 10).toFixed(2)); }, 0.12);
    });

    var stats = $('.ab-stats');
    if (stats) {
      var nums = $$('strong', stats).map(function (el) {
        var m = /^(\d+)(.*)$/.exec(el.textContent.trim()); if (!m) return null;
        var end = parseInt(m[1], 10);
        return { el: el, end: end, suf: m[2], from: end > 1000 ? end - 50 : 0 };
      }).filter(Boolean);
      nums.forEach(function (n) { n.el.textContent = n.from + n.suf; });
      var started = false;
      var run = function () {
        var t0 = null;
        (function step(ts) {
          if (t0 === null) t0 = ts;
          var p = Math.min(1, (ts - t0) / 1500), e = 1 - Math.pow(1 - p, 3);
          nums.forEach(function (n) { n.el.textContent = Math.round(n.from + (n.end - n.from) * e) + n.suf; });
          if (p < 1) requestAnimationFrame(step);
        })(performance.now());
      };
      var chk = function () {
        if (started) return;
        if (stats.getBoundingClientRect().top < window.innerHeight * 0.85) { started = true; setTimeout(run, 250); }
      };
      window.addEventListener('scroll', chk, { passive: true }); chk();
    }
    kick();
  })();


  /* ---- falling thread spools: a few drop down the screen whenever the page scrolls ---- */
  (function () {
    if (reduce) return;
    var box = document.createElement('div'); box.className = 'fall'; box.setAttribute('aria-hidden', 'true');
    document.body.appendChild(box);
    var COLORS = ['#E4631F', '#1F3A5F', '#2E5283', '#B3450E', '#CDB98A'];
    var parts = [], raf = 0, last = 0, lastY = window.pageYOffset || 0, acc = 0, lastSpawn = 0;
    var small = window.matchMedia('(max-width: 700px)').matches;
    var MAX = small ? 5 : 7;
    function spoolSvg(c) {
      return '<svg width="26" height="32" viewBox="0 0 24 30" xmlns="http://www.w3.org/2000/svg">' +
        '<rect x="5" y="5" width="14" height="20" fill="' + c + '" stroke="#101B33" stroke-width="1"/>' +
        '<path d="M5 9h14M5 13h14M5 17h14M5 21h14" stroke="rgba(255,255,255,.38)" stroke-width="1"/>' +
        '<rect x="2" y="1" width="20" height="4.5" rx="1.5" fill="#E3D3A6" stroke="#101B33" stroke-width="1"/>' +
        '<rect x="2" y="24.5" width="20" height="4.5" rx="1.5" fill="#E3D3A6" stroke="#101B33" stroke-width="1"/></svg>';
    }
    function spawn() {
      if (parts.length >= MAX) return;
      var c = COLORS[Math.floor(Math.random() * COLORS.length)];
      var el = document.createElement('div'); el.className = 'sp'; el.style.setProperty('--c', c);
      var s = 0.7 + Math.random() * 0.55;
      el.innerHTML = '<span class="tail"></span><span class="rot">' + spoolSvg(c) + '</span>';
      box.appendChild(el);
      parts.push({
        el: el, rot: el.querySelector('.rot'), s: s,
        x: 12 + Math.random() * (window.innerWidth - 40), y: -50,
        vy: 90 + Math.random() * 120, sway: 6 + Math.random() * 16, ph: Math.random() * 6.28,
        r: Math.random() * 360, vr: (Math.random() - 0.5) * 260, t: 0
      });
      if (!raf) { last = performance.now(); raf = requestAnimationFrame(tick); }
    }
    function tick(now) {
      var dt = Math.min(0.05, (now - last) / 1000); last = now;
      var vh = window.innerHeight;
      for (var i = parts.length - 1; i >= 0; i--) {
        var p = parts[i];
        p.t += dt; p.vy += 760 * dt; p.y += p.vy * dt; p.r += p.vr * dt;
        var x = p.x + Math.sin(p.t * 3 + p.ph) * p.sway;
        p.el.style.transform = 'translate3d(' + x.toFixed(1) + 'px,' + p.y.toFixed(1) + 'px,0) scale(' + p.s.toFixed(2) + ')';
        p.rot.style.transform = 'rotate(' + p.r.toFixed(0) + 'deg)';
        p.el.style.opacity = Math.min(0.95, p.t * 6).toFixed(2);
        p.el.firstChild.style.height = Math.min(110, 18 + p.vy * 0.12).toFixed(0) + 'px';
        if (p.y > vh + 60) { box.removeChild(p.el); parts.splice(i, 1); }
      }
      raf = parts.length ? requestAnimationFrame(tick) : 0;
    }
    window.addEventListener('scroll', function () {
      var y = window.pageYOffset || 0; acc += Math.abs(y - lastY); lastY = y;
      var now = performance.now();
      if (acc > 170 && now - lastSpawn > 110) { acc = 0; lastSpawn = now; spawn(); if (Math.random() < 0.35) spawn(); }
    }, { passive: true });
  })();

  /* ================= contact form -> opens the visitor's email app ================= */
  var form = $('#form'), err = $('#err'), sent = $('#sent'), copied = $('#copied');
  var lastBody = '', lastSubject = '';
  function copyText(txt) {
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(txt);
    return new Promise(function (ok, no) {
      var ta = document.createElement('textarea'); ta.value = txt; ta.setAttribute('readonly', '');
      ta.style.cssText = 'position:fixed;left:-9999px;top:0;font-size:16px';
      document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy') ? ok() : no(); } catch (e) { no(e); }
      document.body.removeChild(ta);
    });
  }
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var f = new FormData(form), t = D[lang];
    var name = String(f.get('name') || '').trim(), msg = String(f.get('message') || '').trim();
    var mail = String(f.get('email') || '').trim(), co = String(f.get('company') || '').trim();
    var mk = $('#f-mk'); var mkText = mk.options[mk.selectedIndex].textContent;
    if (!name || !msg) { err.hidden = false; (name ? $('#f-msg') : $('#f-name')).focus(); return; }
    err.hidden = true; copied.textContent = '';
    lastBody = msg + '\n\n---\n' + t.mailName + ': ' + name + (mail ? '\n' + t.mailEmail + ': ' + mail : '') + (co ? '\n' + t.mailCo + ': ' + co : '') + '\n' + t.mailMk + ': ' + mkText;
    lastSubject = t.mailSubject + name + (co ? ' (' + co + ')' : '');
    var q = 'subject=' + encodeURIComponent(lastSubject) + '&body=' + encodeURIComponent(lastBody);
    var mailto = 'mailto:' + EMAIL + '?' + q;
    var gmail = 'https://mail.google.com/mail/?view=cm&fs=1&to=' + encodeURIComponent(EMAIL) + '&' + q;
    $('#aApp').setAttribute('href', mailto);
    $('#aGmail').setAttribute('href', gmail);
    sent.hidden = false;
    window.__ht.lastMailto = mailto; window.__ht.lastGmail = gmail;
    /* try the email app right away (a real anchor click is the most reliable way across browsers) */
    var a = document.createElement('a'); a.href = mailto; a.style.display = 'none';
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
  });
  $('#bCopy').addEventListener('click', function () {
    var txt = 'To: ' + EMAIL + '\nSubject: ' + lastSubject + '\n\n' + lastBody;
    copyText(txt).then(function () { copied.textContent = D[lang].copied; }, function () { copied.textContent = txt; });
  });

  /* ---- map: opt-in interaction so it never traps page scrolling ---- */
  (function initMap() {
    var box = $('#map'), shield = $('#mapShield'), frame = $('#mapFrame');
    if (!box || !shield) return;
    function on() { box.classList.add('live'); }
    function off() { box.classList.remove('live'); }
    shield.addEventListener('click', on);
    document.addEventListener('pointerdown', function (e) { if (box.classList.contains('live') && !box.contains(e.target)) off(); }, true);
    box.addEventListener('mouseleave', function () { off(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') off(); });
  })();

  window.__ht = { applyLang: applyLang, D: D, kick: kick, updatePull: updatePull, hasLenis: function () { return !!lenis; } };
})();
