// 고속버스 공공API을 fetch해서 목록 정리하는 함수 사용했으나
// 호출 제한 횟수, 로딩 시간 등 문제로 배열DB로 만들어서 작업 진행.

export const allDepTrmlList = [
  { terminalId: "NAEK200", terminalNm: "강릉" },
  { terminalId: "NAEK535", terminalNm: "강진" },
  { terminalId: "NAEK852", terminalNm: "경북도청" },
  { terminalId: "NAEK815", terminalNm: "경주" },
  { terminalId: "NAEK355", terminalNm: "고대조치원" },
  { terminalId: "NAEK116", terminalNm: "고양백석" },
  { terminalId: "NAEK115", terminalNm: "고양화정" },
  { terminalId: "NAEK635", terminalNm: "고창" },
  { terminalId: "NAEK540", terminalNm: "고흥" },
  { terminalId: "NAEK589", terminalNm: "곡성" },
  { terminalId: "NAEK320", terminalNm: "공주" },
  { terminalId: "NAEK125", terminalNm: "광명(KTX역)" },
  { terminalId: "NAEK126", terminalNm: "광명(철산역)" },
  { terminalId: "NAEK520", terminalNm: "광양" },
  { terminalId: "NAEK500", terminalNm: "광주(유·스퀘어)" },
  { terminalId: "NAEK503", terminalNm: "광주비아" },
  { terminalId: "NAEK519", terminalNm: "구례" },
  { terminalId: "NAEK169", terminalNm: "구리" },
  { terminalId: "NAEK810", terminalNm: "구미" },
  { terminalId: "NAEK610", terminalNm: "군산" },
  { terminalId: "NAEK330", terminalNm: "금산" },
  { terminalId: "NAEK620", terminalNm: "김제" },
  { terminalId: "NAEK820", terminalNm: "김천" },
  { terminalId: "NAEK821", terminalNm: "김천혁신" },
  { terminalId: "NAEK735", terminalNm: "김해" },
  { terminalId: "NAEK736", terminalNm: "김해장유" },
  { terminalId: "NAEK530", terminalNm: "나주" },
  { terminalId: "NAEK824", terminalNm: "낙동강(휴)상행" },
  { terminalId: "NAEK823", terminalNm: "낙동강(휴)하행" },
  { terminalId: "NAEK592", terminalNm: "남악" },
  { terminalId: "NAEK625", terminalNm: "남원" },
  { terminalId: "NAEK706", terminalNm: "내서" },
  { terminalId: "NAEK390", terminalNm: "내포" },
  { terminalId: "NAEK545", terminalNm: "녹동" },
  { terminalId: "NAEK370", terminalNm: "논산" },
  { terminalId: "NAEK587", terminalNm: "능주" },
  { terminalId: "NAEK582", terminalNm: "담양" },
  { terminalId: "NAEK312", terminalNm: "당진" },
  { terminalId: "NAEK388", terminalNm: "당진기지시" },
  { terminalId: "NAEK807", terminalNm: "대구용계" },
  { terminalId: "NAEK307", terminalNm: "대전도룡" },
  { terminalId: "NAEK300", terminalNm: "대전복합" },
  { terminalId: "NAEK305", terminalNm: "대전청사" },
  { terminalId: "NAEK626", terminalNm: "덕과" },
  { terminalId: "NAEK399", terminalNm: "덕산스파" },
  { terminalId: "NAEK525", terminalNm: "동광양" },
  { terminalId: "NAEK801", terminalNm: "동대구" },
  { terminalId: "NAEK032", terminalNm: "동서울" },
  { terminalId: "NAEK030", terminalNm: "동서울(030)" },
  { terminalId: "NAEK210", terminalNm: "동해" },
  { terminalId: "NAEK705", terminalNm: "마산" },
  { terminalId: "NAEK505", terminalNm: "목포" },
  { terminalId: "NAEK550", terminalNm: "무안" },
  { terminalId: "NAEK584", terminalNm: "문장" },
  { terminalId: "NAEK337", terminalNm: "배방정류소" },
  { terminalId: "NAEK555", terminalNm: "벌교" },
  { terminalId: "NAEK395", terminalNm: "보령" },
  { terminalId: "NAEK554", terminalNm: "보성" },
  { terminalId: "NAEK409", terminalNm: "보은" },
  { terminalId: "NAEK649", terminalNm: "봉동" },
  { terminalId: "NAEK700", terminalNm: "부산" },
  { terminalId: "NAEK640", terminalNm: "부안" },
  { terminalId: "NAEK101", terminalNm: "부천" },
  { terminalId: "NAEK406", terminalNm: "북부오창" },
  { terminalId: "NAEK405", terminalNm: "북청주" },
  { terminalId: "NAEK220", terminalNm: "삼척" },
  { terminalId: "NAEK040", terminalNm: "상봉" },
  { terminalId: "NAEK825", terminalNm: "상주" },
  { terminalId: "NAEK805", terminalNm: "서대구" },
  { terminalId: "NAEK703", terminalNm: "서부산(사상)" },
  { terminalId: "NAEK393", terminalNm: "서산" },
  { terminalId: "NAEK109", terminalNm: "서수원" },
  { terminalId: "NAEK010", terminalNm: "서울경부" },
  { terminalId: "NAEK421", terminalNm: "서충주" },
  { terminalId: "NAEK347", terminalNm: "선문대" },
  { terminalId: "NAEK813", terminalNm: "선산(휴)상행" },
  { terminalId: "NAEK812", terminalNm: "선산(휴)하행" },
  { terminalId: "NAEK529", terminalNm: "섬진강(휴)상행" },
  { terminalId: "NAEK528", terminalNm: "섬진강(휴)하행" },
  { terminalId: "NAEK120", terminalNm: "성남(분당)" },
  { terminalId: "NAEK361", terminalNm: "세종국무조정실" },
  { terminalId: "NAEK352", terminalNm: "세종시" },
  { terminalId: "NAEK362", terminalNm: "세종시청" },
  { terminalId: "NAEK351", terminalNm: "세종연구단지" },
  { terminalId: "NAEK353", terminalNm: "세종청사" },
  { terminalId: "NAEK020", terminalNm: "센트럴시티(서울)" },
  { terminalId: "NAEK408", terminalNm: "속리산" },
  { terminalId: "NAEK230", terminalNm: "속초" },
  { terminalId: "NAEK110", terminalNm: "수원" },
  { terminalId: "NAEK645", terminalNm: "순창" },
  { terminalId: "NAEK515", terminalNm: "순천" },
  { terminalId: "NAEK513", terminalNm: "순천신대지구" },
  { terminalId: "NAEK512", terminalNm: "순천신대지구CGV" },
  { terminalId: "NAEK195", terminalNm: "시흥(시화)" },
  { terminalId: "NAEK114", terminalNm: "신갈시외" },
  { terminalId: "NAEK119", terminalNm: "신갈영덕" },
  { terminalId: "NAEK147", terminalNm: "신철원" },
  { terminalId: "NAEK344", terminalNm: "아산둔포" },
  { terminalId: "NAEK341", terminalNm: "아산서부" },
  { terminalId: "NAEK340", terminalNm: "아산온양" },
  { terminalId: "NAEK342", terminalNm: "아산탕정" },
  { terminalId: "NAEK338", terminalNm: "아산테크노밸리" },
  { terminalId: "NAEK840", terminalNm: "안동" },
  { terminalId: "NAEK396", terminalNm: "안면도" },
  { terminalId: "NAEK190", terminalNm: "안산" },
  { terminalId: "NAEK130", terminalNm: "안성" },
  { terminalId: "NAEK133", terminalNm: "안성공도" },
  { terminalId: "NAEK137", terminalNm: "안성대림" },
  { terminalId: "NAEK131", terminalNm: "안성중대" },
  { terminalId: "NAEK132", terminalNm: "안성풍림" },
  { terminalId: "NAEK134", terminalNm: "안성한경" },
  { terminalId: "NAEK138", terminalNm: "안성회관" },
  { terminalId: "NAEK177", terminalNm: "안중" },
  { terminalId: "NAEK176", terminalNm: "안중오거리" },
  { terminalId: "NAEK619", terminalNm: "애통리" },
  { terminalId: "NAEK270", terminalNm: "양양" },
  { terminalId: "NAEK510", terminalNm: "여수" },
  { terminalId: "NAEK140", terminalNm: "여주" },
  { terminalId: "NAEK139", terminalNm: "여주대" },
  { terminalId: "NAEK509", terminalNm: "여천" },
  { terminalId: "NAEK380", terminalNm: "연무대" },
  { terminalId: "NAEK560", terminalNm: "영광" },
  { terminalId: "NAEK843", terminalNm: "영덕" },
  { terminalId: "NAEK565", terminalNm: "영산포" },
  { terminalId: "NAEK570", terminalNm: "영암" },
  { terminalId: "NAEK272", terminalNm: "영월" },
  { terminalId: "NAEK835", terminalNm: "영주" },
  { terminalId: "NAEK863", terminalNm: "영주꽃동산" },
  { terminalId: "NAEK862", terminalNm: "영주장수" },
  { terminalId: "NAEK845", terminalNm: "영천" },
  { terminalId: "NAEK846", terminalNm: "영천망정" },
  { terminalId: "NAEK112", terminalNm: "영통" },
  { terminalId: "NAEK398", terminalNm: "예산" },
  { terminalId: "NAEK851", terminalNm: "예천" },
  { terminalId: "NAEK127", terminalNm: "오산" },
  { terminalId: "NAEK588", terminalNm: "옥과" },
  { terminalId: "NAEK575", terminalNm: "완도" },
  { terminalId: "NAEK150", terminalNm: "용인" },
  { terminalId: "NAEK111", terminalNm: "용인신갈" },
  { terminalId: "NAEK149", terminalNm: "용인유림" },
  { terminalId: "NAEK186", terminalNm: "운천" },
  { terminalId: "NAEK715", terminalNm: "울산" },
  { terminalId: "NAEK716", terminalNm: "울산신복" },
  { terminalId: "NAEK578", terminalNm: "원동" },
  { terminalId: "NAEK240", terminalNm: "원주" },
  { terminalId: "NAEK246", terminalNm: "원주기업" },
  { terminalId: "NAEK245", terminalNm: "원주문막" },
  { terminalId: "NAEK244", terminalNm: "원주혁신" },
  { terminalId: "NAEK360", terminalNm: "유성" },
  { terminalId: "NAEK170", terminalNm: "의정부" },
  { terminalId: "NAEK173", terminalNm: "의정부" },
  { terminalId: "NAEK160", terminalNm: "이천" },
  { terminalId: "NAEK171", terminalNm: "이천마장" },
  { terminalId: "NAEK172", terminalNm: "이천부발(신하리)" },
  { terminalId: "NAEK615", terminalNm: "익산" },
  { terminalId: "NAEK616", terminalNm: "익산팔봉" },
  { terminalId: "NAEK325", terminalNm: "인삼랜드(휴)상행" },
  { terminalId: "NAEK324", terminalNm: "인삼랜드(휴)하행" },
  { terminalId: "NAEK100", terminalNm: "인천" },
  { terminalId: "NAEK105", terminalNm: "인천공항T1" },
  { terminalId: "NAEK117", terminalNm: "인천공항T2" },
  { terminalId: "NAEK593", terminalNm: "임자대광" },
  { terminalId: "NAEK594", terminalNm: "임자진리" },
  { terminalId: "NAEK622", terminalNm: "자치인재원" },
  { terminalId: "NAEK583", terminalNm: "장성" },
  { terminalId: "NAEK580", terminalNm: "장흥" },
  { terminalId: "NAEK644", terminalNm: "전북강진" },
  { terminalId: "NAEK621", terminalNm: "전북혁신" },
  { terminalId: "NAEK602", terminalNm: "전주" },
  { terminalId: "NAEK605", terminalNm: "전주호남제일문" },
  { terminalId: "NAEK850", terminalNm: "점촌" },
  { terminalId: "NAEK392", terminalNm: "정산" },
  { terminalId: "NAEK316", terminalNm: "정안(휴)상행" },
  { terminalId: "NAEK315", terminalNm: "정안(휴)하행" },
  { terminalId: "NAEK630", terminalNm: "정읍" },
  { terminalId: "NAEK450", terminalNm: "제천" },
  { terminalId: "NAEK449", terminalNm: "제천하소" },
  { terminalId: "NAEK350", terminalNm: "조치원" },
  { terminalId: "NAEK118", terminalNm: "죽전" },
  { terminalId: "NAEK477", terminalNm: "죽전보정" },
  { terminalId: "NAEK419", terminalNm: "중앙탑면" },
  { terminalId: "NAEK455", terminalNm: "증평" },
  { terminalId: "NAEK585", terminalNm: "지도" },
  { terminalId: "NAEK590", terminalNm: "진도" },
  { terminalId: "NAEK650", terminalNm: "진안" },
  { terminalId: "NAEK722", terminalNm: "진주" },
  { terminalId: "NAEK723", terminalNm: "진주개양" },
  { terminalId: "NAEK724", terminalNm: "진주혁신" },
  { terminalId: "NAEK704", terminalNm: "진해" },
  { terminalId: "NAEK397", terminalNm: "창기리" },
  { terminalId: "NAEK710", terminalNm: "창원" },
  { terminalId: "NAEK711", terminalNm: "창원역" },
  { terminalId: "NAEK310", terminalNm: "천안" },
  { terminalId: "NAEK346", terminalNm: "천안공단" },
  { terminalId: "NAEK343", terminalNm: "천안아산역" },
  { terminalId: "NAEK148", terminalNm: "철원" },
  { terminalId: "NAEK391", terminalNm: "청양" },
  { terminalId: "NAEK400", terminalNm: "청주(고속)" },
  { terminalId: "NAEK401", terminalNm: "청주(센트럴)" },
  { terminalId: "NAEK407", terminalNm: "청주공항" },
  { terminalId: "NAEK250", terminalNm: "춘천" },
  { terminalId: "NAEK420", terminalNm: "충주" },
  { terminalId: "NAEK349", terminalNm: "탕정삼성LCD" },
  { terminalId: "NAEK394", terminalNm: "태안" },
  { terminalId: "NAEK629", terminalNm: "태인" },
  { terminalId: "NAEK730", terminalNm: "통영" },
  { terminalId: "NAEK180", terminalNm: "평택" },
  { terminalId: "NAEK175", terminalNm: "평택대" },
  { terminalId: "NAEK174", terminalNm: "평택용이동" },
  { terminalId: "NAEK146", terminalNm: "포천" },
  { terminalId: "NAEK830", terminalNm: "포항" },
  { terminalId: "NAEK828", terminalNm: "포항시청" },
  { terminalId: "NAEK834", terminalNm: "풍기" },
  { terminalId: "NAEK581", terminalNm: "함평" },
  { terminalId: "NAEK595", terminalNm: "해남" },
  { terminalId: "NAEK552", terminalNm: "해제" },
  { terminalId: "NAEK354", terminalNm: "홍대조치원" },
  { terminalId: "NAEK389", terminalNm: "홍성" },
  { terminalId: "NAEK586", terminalNm: "화순" },
  { terminalId: "NAEK440", terminalNm: "황간" },
  { terminalId: "NAEK577", terminalNm: "회진" },
  { terminalId: "NAEK239", terminalNm: "횡성(휴)상행" },
  { terminalId: "NAEK238", terminalNm: "횡성(휴)하행" },
  { terminalId: "NAEK634", terminalNm: "흥덕" },
];

export const allGradeList = [
  { gradeId: 1, gradeNm: "우등" },
  { gradeId: 2, gradeNm: "고속" },
  { gradeId: 3, gradeNm: "심야우등" },
  { gradeId: 4, gradeNm: "심야고속" },
  { gradeId: 5, gradeNm: "일반" },
  { gradeId: 6, gradeNm: "일반심야" },
  { gradeId: 7, gradeNm: "프리미엄" },
  { gradeId: 8, gradeNm: "심야프리미엄" },
];
