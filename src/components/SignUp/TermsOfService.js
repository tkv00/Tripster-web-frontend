import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme.js";
function TermsOfService({ isOpen, termId, onClose }) {
  if (!isOpen) return null;

  const termsContent = {
    termsOfService: {
      __html: `
        <h1>Tripster 이용약관</h1>
<h2>1. 서비스 소개</h2>
<p>Tripster는 사용자가 친구들과 함께 여행 계획을 공유하고 세울 수 있는 웹사이트입니다. 사용자는 이메일, 이름, 아이디, 비밀번호를 사용하여 회원가입할 수 있으며, 다양한 기능을 통해 여행 계획을 손쉽게 관리할 수 있습니다.</p>

<h2>2. 회원가입 및 정보 수집</h2>
<ul>
    <li>회원가입을 통해 사용자는 개인적인 여행 계획을 생성, 공유 및 관리할 수 있는 권한을 얻게 됩니다.</li>
    <li>Tripster는 서비스 제공을 위해 사용자의 이메일, 이름, 아이디, 비밀번호를 수집합니다.</li>
    <li>수집된 정보는 서비스 제공, 개선, 사용자 경험 향상, 보안 유지 등의 목적으로만 사용됩니다.</li>
</ul>

<h2>3. 서비스 이용</h2>
<ul>
    <li>사용자는 Tripster에서 제공하는 기능을 사용하여 여행 계획을 세우고, 친구들과 공유할 수 있습니다.</li>
    <li>모든 사용자는 타인의 권리를 존중하고, 법률 및 이용약관에 따라 서비스를 이용해야 합니다.</li>
    <li>불법적인 활동, 타인의 권리 침해, 서비스의 안정적인 운영을 방해하는 행위는 금지됩니다.</li>
</ul>

<h2>4. 콘텐츠 권리</h2>
<ul>
    <li>사용자가 Tripster에 게시하는 콘텐츠에 대한 권리는 사용자에게 있습니다.</li>
    <li>사용자는 Tripster에 콘텐츠를 게시함으로써, Tripster가 해당 콘텐츠를 서비스 내에서 사용, 배포, 전시할 수 있는 비독점적 권리를 부여합니다.</li>
</ul>

<h2>5. 개인정보 보호</h2>
<ul>
    <li>Tripster는 사용자의 개인정보 보호를 최우선으로 합니다.</li>
    <li>사용자는 언제든지 자신의 개인정보를 조회, 수정할 수 있으며, 회원 탈퇴 시 개인정보는 삭제됩니다.</li>
</ul>


<h2>6. 면책조항</h2>
<ul>
    <li>Tripster는 서비스에 대한 무중단 및 오류 없는 운영을 보장하지 않습니다.</li>
    <li>외부 링크로 연결된 서비스의 내용에 대해 Tripster는 책임을 지지 않습니다.</li>
    <li>사용자 간 또는 사용자와 제3자 간의 분쟁에 대해 Tripster는 책임을 지지 않습니다.</li>
</ul>
<h2>7. 약관의 변경</h2>
<ul>
    <li>Tripster는 필요시 언제든지 이용약관을 변경할 권리를 보유합니다.</li>
    <li>약관이 변경될 경우, 변경 사항은 웹사이트를 통해 공지됩니다.</li>
    <li>변경된 약관에 대한 사용자의 지속적인 서비스 이용은 변경 사항에 대한 동의로 간주됩니다.</li>
</ul>
        
        `,
    },
    privacyPolicy: {
      __html: `
        <h1>개인정보 수집 및 이용에 대한 동의</h1>

<h2>1. 개인정보 수집 항목</h2>
<p>Tripster는 회원가입, 원활한 고객상담, 서비스 제공을 위해 아래와 같은 개인정보를 수집하고 있습니다.</p>
<ul>
    <li>필수 수집 항목: 이메일, 이름, 아이디, 비밀번호</li>
    <li>선택 수집 항목: 프로필 사진, 연락처(선택 사항 입력 시)</li>
</ul>
<h2>2. 개인정보의 수집 및 이용 목적</h2>
<p>Tripster는 수집한 개인정보를 다음의 목적을 위해 활용합니다.</p>
<ul>
    <li>서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산</li>
    <li>회원 관리: 회원제 서비스 이용에 따른 본인확인, 개인식별, 불량회원의 부정 이용 방지와 비인가 사용 방지, 가입 의사 확인, 연령 확인, 불만처리 등 민원처리, 고지사항 전달</li>
    <li>마케팅 및 광고에 활용: 신규 서비스(제품) 개발 및 특화, 이벤트 및 광고성 정보 제공 및 참여기회 제공, 인구통계학적 특성에 따른 서비스 제공 및 광고 게재, 서비스의 유효성 확인, 접속 빈도 파악 또는 회원의 서비스 이용에 대한 통계</li>
</ul>

<h2>3. 개인정보의 보유 및 이용 기간</h2>
<ul>
    <li>Tripster는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.</li>
    <li>단, 다음의 정보에 대해서는 아래의 이유로 명시한 기간 동안 보존합니다.
        <li>보존 항목: 회원가입 정보(이메일, 이름, 아이디, 비밀번호)</li>
        <li>보존 근거: 서비스 이용의 혼선 방지, 법령의 의한 정보보호 사유에 따른 보존</li>
        <li>보존 기간: 회원 탈퇴 시까지</li>
    </li>
    <li>그 외 서비스 이용 과정에서 생성된 로그, 접속 추적 데이터는 내부 방침 및 관련 법령에 의해 일정 기간 저장 후 파기될 수 있습니다.</li>
</ul>

<h2>4. 동의 거부 권리 및 동의 거부 시 불이익</h2>
<ul>
    <li>귀하는 개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있습니다. 다만, 필수 수집 항목에 대한 동의를 거부할 경우 회원가입 및 Tripster가 제공하는 서비스의 일부 또는 전체를 이용할 수 없게 됩니다. 선택적으로 제공하는 정보의 경우, 해당 정보를 제공하지 않더라도 서비스 이용에 제한은 없으나, 일부 맞춤형 서비스 제공에 제한이 있을 수 있습니다.</li>
    <li>본 동의서는 서비스 제공과 직접적인 관련이 있는 최소한의 정보만을 수집하며, 이용자의 권리 보호와 개인정보의 안전한 처리를 위해 최선을 다하고 있습니다. 개인정보 수집 및 이용에 대한 동의는 이용자가 자유롭게 결정할 수 있는 사항이며, 동의 거부 시 받게 되는 구체적인 불이익 사항에 대해 충분히 이해하였다는 것을 의미합니다.</li>
    <li>동의 거부에 따른 구체적인 서비스 이용 제한 사항에 대해서는 Tripster 고객 지원 센터 또는 관련 안내 페이지를 통해 자세히 안내받을 수 있습니다.</li>
    <li>이용자는 언제든지 자신이 제공한 개인정보에 대한 동의를 철회할 수 있으며, 동의 철회 시 제공된 개인정보는 법령에 따른 경우를 제외하고는 즉시 파기됩니다. 개인정보의 철회는 서비스 이용에 필수적인 정보의 경우 서비스 이용에 제한을 받을 수 있음을 미리 알려드립니다.</li>
    <li>개인정보 수집 및 이용에 대한 동의는 Tripster를 이용하기 위한 필수적인 절차임을 다시 한번 알려드리며, 이용자 여러분의 명확한 이해와 협조를 부탁드립니다.</li>
</ul>

<h2>5. 개인정보의 파기 절차 및 방법</h2>
<p>Tripster는 개인정보의 수집 및 이용 목적이 달성된 후, 해당 정보를 지체 없이 파기합니다. 파기 절차 및 방법은 다음과 같습니다.</p>
<ul>
    <li>파기 절차: 사용자가 회원가입 등을 위해 입력한 정보는 목적이 달성된 후 별도의 DB로 옮겨져(종이의 경우 별도의 서류함) 내부 방침 및 기타 관련 법령에 따라 일정 기간 저장된 후 파기됩니다. 별도 DB로 옮겨진 개인정보는 법령에 의한 경우가 아니고서는 보관 목적으로만 이용됩니다.</li>
    <li>파기 방법: 전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다. 종이 문서에 기록된 개인정보는 분쇄기로 분쇄하거나 소각하여 파기합니다.</li>
</ul>

<h2>6. 개인정보 제공</h2>
<p>이용자는 언제든지 등록되어 있는 자신의 개인정보를 조회하거나 수정할 수 있으며, 가입 해지(동의 철회)를 요청할 수도 있습니다. 개인정보의 조회, 수정을 위해서는 "개인정보변경"(또는 "회원정보수정" 등)을, 가입 해지(동의 철회)를 위해서는 "회원탈퇴"를 클릭하여 본인 확인 절차를 거친 후 직접 처리할 수 있습니다. 혹은 개인정보 관리책임자에게 서면, 전화 또는 이메일로 연락하시면 지체 없이 조치하겠습니다.</p>

<h2>7. 이용자 및 법정대리인의 권리와 그 행사방법</h2>
<p>이용자는 언제든지 등록되어 있는 자신의 개인정보를 조회하거나 수정할 수 있으며, 가입 해지(동의 철회)를 요청할 수도 있습니다. 개인정보의 조회, 수정을 위해서는 "개인정보변경"(또는 "회원정보수정" 등)을, 가입 해지(동의 철회)를 위해서는 "회원탈퇴"를 클릭하여 본인 확인 절차를 거친 후 직접 처리할 수 있습니다. 혹은 개인정보 관리책임자에게 서면, 전화 또는 이메일로 연락하시면 지체 없이 조치하겠습니다.

</p>
<h2>8. 개인정보 자동 수집 장치의 설치•운영 및 그 거부에 관한 사항</h2>
<p>Tripster는 이용자의 정보를 수시로 저장하고 찾아내는 ‘쿠키(cookie)’ 등을 사용하지 않습니다.</p>

<h2>9. 개인정보 보호책임자</h2>
<p>귀하의 개인정보를 보호하며, 개인정보와 관련한 불만을 처리하기 위하여 Tripster는 개인정보 보호책임자를 두고 있습니다. 이용자는 Tripster의 서비스를 이용하시면서 발생하는 모든 개인정보 보호 관련 문의, 불만, 조치 요구 사항을 개인정보 보호책임자에게 신고하실 수 있습니다.</p>
<ul>
    <li>개인정보 보호책임자 성명: [성명]</li>
    <li> [이메일]</li>
</ul>

<p>본 개인정보 처리방침은 [2024]년 [2]월 [18]부터 시행됩니다. 변경되는 사항이 있는 경우 웹사이트를 통해 사전에 공지할 것입니다.</p>`,
    },
    locationServices: {
      __html: `
        <h1>위치기반 서비스 이용약관</h1>

<h2>1. 서비스 소개</h2>
<p> Tripster의 위치기반 서비스는 사용자가 친구들과 함께 여행 계획을 공유하고 세울 때, 사용자의 위치 정보를 기반으로 한 맞춤형 정보를 제공합니다. 이 서비스를 통해 사용자는 주변의 관심 장소, 추천 여행지, 친구의 위치 등의 정보를 얻을 수 있습니다.</p>
<ul>
    <li>필수 수집 항목: 이메일, 이름, 아이디, 비밀번호</li>
    <li>선택 수집 항목: 프로필 사진, 연락처(선택 사항 입력 시)</li>
</ul>
<h2>2. 위치 정보의 수집 및 이용</h2>
<ul>
    <li>수집 항목: 사용자의 실시간 위치 정보(모바일 장치의 GPS, Wi-Fi, 통신사 네트워크 등을 통해 수집)</li>
    <li>이용 목적: 위치 기반 서비스 제공, 맞춤형 정보 제공, 서비스 개선 및 사용자 경험 향상</li>
    <li>보유 및 이용 기간: 서비스 제공 기간 동안 또는 사용자가 위치 정보 제공에 대한 동의를 철회할 때까지
    </li>
</ul>

<h2>3. 위치 정보의 제3자 제공</h2>
<ul>
    <li>Tripster는 사용자의 동의 없이 위치 정보를 제3자에게 제공하지 않습니다.</li>
    <li>법령에 근거한 요구가 있을 경우를 제외하고는, 사용자의 명시적인 동의 없이 위치 정보를 외부에 공개하거나 제3자에게 제공하지 않습니다.</li>
</ul>
<h2>4. 위치 정보의 파기</h2>
<ul>
    <li>사용자가 위치 정보 제공 동의를 철회하거나 서비스 이용 계약을 해지하는 경우, 수집된 위치 정보는 즉시 파기됩니다.</li>
    <li>전자적 파일 형태로 저장된 위치 정보는 기술적 방법을 사용하여 복원이 불가능하게 삭제하며, 종이 문서에 기록된 위치 정보는 분쇄기로 분쇄하거나 소각하여 파기합니다.
    </li>
</ul>

<h2>5. 사용자의 권리와 그 행사 방법</h2>
<ul>
    <li>사용자는 언제든지 위치 정보의 수집, 이용, 제공에 대한 동의를 철회할 수 있습니다.</li>
    <li>동의 철회는 Tripster 애플리케이션 설정에서 직접 수행할 수 있으며, 철회 요청 시 즉시 위치 정보 수집이 중단됩니다.</li>
    <li>위치 정보 동의 철회 후에는 위치 기반 서비스 제공이 제한될 수 있습니다.</li>
</ul>

<h2>6. 약관의 변경</h2>
<ul>
    <li>Tripster는 법률이나 서비스의 변경 사항을 반영하기 위하여 위치기반 서비스 이용약관을 변경할 수 있습니다.</li>
    <li>약관 변경 시 변경된 약관 및 적용 일자를 사전에 공지하며, 변경된 약관의 적용 일자 이후 계속 서비스를 이용할 경우 변경된 약관에 동의한 것으로 간주합니다.
    </li>
</ul>

<p>본 이용약관은 [2024년 2월 18일]부터 시행됩니다.

</p>

        `,
    },
    additionalPrivacy: {
      __html: `
        <h1>마케팅 및 광고 목적을 위한 개인정보 처리(수집 및 이용) 동의서</h1>

<h2>1. 개인정보 수집 및 이용 목적</h2>
<p> Tripster는 다음과 같은 목적을 위해 개인정보를 수집 및 이용합니다.

</p>
<ul>
    <li>맞춤형 광고 제공 및 마케팅 캠페인 분석</li>
    <li>고객 선호도 및 관심사 분석을 통한 서비스 개선 및 맞춤 서비스 제공</li>
</ul>
<h2>2. 수집하는 개인정보 항목</h2>
<ul>
    <li>이름, 연락처(전화번호, 이메일 주소), 관심 분야</li>
    <li>서비스 이용 기록, 접속 로그, 쿠키, 접속 IP 정보</li>
    <li>이벤트, 프로모션 참여 기록
    </li>
</ul>

<h2>3. 개인정보의 보유 및 이용 기간</h2>
<ul>
    <li>위 목적을 달성하기 위해 수집된 개인정보는 목적 달성 후 즉시 파기합니다.</li>
    <li>다만, 관련 법령에 의해 보존할 필요성이 있는 경우에는 해당 법령에 따른 기간 동안 보유합니다.</li>
</ul>
<h2>4. 동의 거부권 및 거부 시 불이익</h2>
<ul>
    <li>귀하는 마케팅 및 광고 목적을 위한 개인정보 처리에 대한 동의를 거부할 권리가 있습니다.</li>
    <li>동의를 거부하는 경우에도 Tripster 서비스의 기본적인 기능은 이용 가능합니다. 다만, 맞춤형 광고 및 마케팅 정보를 받을 수 없습니다.
    </li>
</ul>

<h2>5. 동의 철회 방법</h2>
<ul>
    <li>사용자는 언제든지 서면, 전화, 이메일 등을 통해 마케팅 및 광고 목적의 개인정보 처리에 대한 동의를 철회할 수 있습니다.</li>
    <li>동의를 철회하시면 마케팅 및 광고 목적의 개인정보 처리는 즉시 중단되며, 관련 정보는 안전하게 파기됩니다.</li>
</ul>

<p>본 이용약관은 [2024년 2월 18일]부터 시행됩니다.

</p>
`,
    },
  };

  // termId에 해당하는 약관 내용을 가져옵니다.
  const content = termsContent[termId] || {
    __html: "<p>약관 내용을 찾을 수 없습니다.</p>",
  };

  return (
    <ModalContainer>
      <ModalContent style={{ position: "relative" }}>
        <Content dangerouslySetInnerHTML={content}></Content>
        <Button onClick={onClose}></Button>
      </ModalContent>
    </ModalContainer>
  );
}
const Content = styled.div`
  font-family: "Pretendard-Black";
`;
const Button = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  font-size: 22px;
  font-weight: 800;
  display: inline-block;
  &::after {
    content: "\\2715";
  }
`;
const ModalContainer = styled.dialog`
  position: fixed;
  font-family: "Times New Roman", Times, serif;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4); /* 뒷배경을 불투명하게 설정 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;
  text-align: left;
`;

const ModalContent = styled.div`
  position: relative;
  width: 800px;
  background-color: white;
  max-height: 80%; /* 최대 높이 설정 */
  padding: 20px;
  overflow-y: auto; /* 내용이 초과할 경우 스크롤바 표시 */
  border-radius: 15px;
  border: 2px #c2c2c2 solid;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;
export default TermsOfService;
