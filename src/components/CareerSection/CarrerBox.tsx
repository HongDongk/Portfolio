import { useState, useEffect } from 'react';
import styled from 'styled-components';

interface CareerBoxProps {
  company: string;
}
interface TaskProps {
  taskTitle: string;
  taskDuration: string;
  taskDetail: string[];
}
interface CompanyData {
  name: string;
  info: string;
  imgsrc: string;
  companyInfo: string;
  taskInfo: TaskProps[];
}

const companyData = [
  {
    name: '(주) 온품',
    info: '2024.04 -',
    imgsrc: '../../images/onpoom.png',
    companyInfo:
      '(주) 온품은 <b>3D 시뮬레이션 기반의 디지털 트윈 서비스</b>를 제공하는 회사입니다. 웹 상에서 실시간 3D 환경을 구축하여 사고 예방, 비용 절감 및 운영 효율성 향상을 돕는 혁신적인 솔루션을 제공하고있습니다. /n 기본적으로 프런트엔드 포지션으로 <b>3D 기능 고도화, 전체 서비스의 신규 개발 및 유지보수</b>을 담당하고 있습니다.',
    taskInfo: [
      {
        taskTitle: '디지털트윈 웹 솔루션 기능 개발',
        taskDuration: '2024.07 - ',
        taskDetail: [
          'React의 Cesium라이브러리를 사용하여 3D환경을 구축하고 신규 시뮬레이션 기능 개발',
        ],
      },
      {
        taskTitle: '마이크로프런트엔드 아키텍쳐 도입',
        taskDuration: '2024.04 - ',
        taskDetail: [
          '기존의 솔루션 코드는 UmiJs, Dva 등 외국 라이브러리 사용과 수백개의 기능들이 모노레포 형식으로 묶여있어 유지보수에 한계가 있었음 ',
          '마이크로프런트엔드 전환 작업을 담당하여 각 서브앱에서 최신 라이브러리를 독립적으로 적용 및 전체 서비스 기능별 분리',
        ],
      },
    ],
  },
  {
    name: '(주) 윈스',
    info: '2023.07 - 2023.12',
    imgsrc: '../../images/wins.png',
    companyInfo:
      '(주) 윈스는 <b>네트워크 보안 솔루션을 개발 공급하고있는 회사</b>입니다. /n <b>6개월 동안 인턴활동</b>을 진행하며, 기본적으로 풀스택 포지션으로 <b>보안 솔루션 신규 기능개발과 운영</b>을 담당하였습니다. ',
    taskInfo: [
      {
        taskTitle: 'AI 보안 자동화 기능 웹 개발',
        taskDuration: '2023.07 - 2023.12',
        taskDetail: [
          '보안운영 자동화 서비스에 필요한 AI설정 파일은 가독성이 낮아 파일 수정에 어려움이 있었음',
          'Angular와 NodeJS를 통해, 사용자가 웹 상에서 쉽게 데이터 수정을 할 수 있도록 다양한 시각적 UI 툴 구현',
        ],
      },
    ],
  },
  {
    name: '한국외국어대학교',
    info: '2017.03 - 2023.08',
    imgsrc: '../../images/university.svg',
    companyInfo: '<b>한국외국어대학교 정보통신공학과</b> 졸업',
    taskInfo: [],
  },
];

export default function CareerBox({ company }: CareerBoxProps) {
  const [data, setData] = useState<CompanyData | null>(null);

  useEffect(() => {
    switch (company) {
      case '온품':
        setData(companyData[0]);
        break;
      case '윈스':
        setData(companyData[1]);
        break;
      case '한국외국어대학교':
        setData(companyData[2]);
        break;
      default:
        setData(null);
    }
  }, [company]);

  if (!data) return null;

  return (
    <Content>
      <LeftBox>
        <CompanyIcon>
          <img src={data.imgsrc} alt={data.imgsrc} width="190" />
        </CompanyIcon>
      </LeftBox>
      <RightBox>
        <Name>{data.name}</Name>
        <Date>{data.info}</Date>
        <CompanyInfo>
          {data.companyInfo.split('/n').map((a, index) => {
            return (
              <CompanyInfoDetatil key={index}>
                {a.split(/(<b>.*?<\/b>)/g).map((b, index) => {
                  if (b.startsWith('<b>') && b.endsWith('</b>')) {
                    return (
                      <CompanyInfoDetatilBold key={index}>
                        {b.slice(3, -4)}
                      </CompanyInfoDetatilBold>
                    );
                  }
                  return b;
                })}
              </CompanyInfoDetatil>
            );
          })}
        </CompanyInfo>
        {data.taskInfo.map((a, index) => {
          return (
            <TaskInfo key={index}>
              <TaskTitle>{a.taskTitle}</TaskTitle>
              <TaskDuration>{a.taskDuration}</TaskDuration>
              <TaskDetail>
                {a.taskDetail?.map((b, index2) => {
                  return <Detail key={index2}>{b}</Detail>;
                })}
              </TaskDetail>
            </TaskInfo>
          );
        })}
      </RightBox>
    </Content>
  );
}

const Content = styled.div`
  width: 65%;
  display: flex;
  margin-top: 80px;
`;

const LeftBox = styled.div`
  width: 28%;
  min-width: 300px;
  border-right: 2px solid #ccc;
`;

const CompanyIcon = styled.div`
  width: 230px;
  height: 230px;
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RightBox = styled.div`
  width: 70%;
  padding-left: 40px;
`;

const Name = styled.div`
  width: 100%;
  color: #000000;
  font-size: 25px;
  font-weight: bold;
`;

const Date = styled.div`
  margin-top: 15px;
  width: 100%;
  color: #6c757d;
  font-size: 17px;
`;

const CompanyInfo = styled.div`
  margin-top: 15px;
  width: 100%;
  border-bottom: 1.5px solid #ccc;
  padding-bottom: 15px;
`;

const CompanyInfoDetatil = styled.div`
  margin-top: 20px;
  width: 100%;
  font-size: 16px;
  line-height: 1.5;
`;

const CompanyInfoDetatilBold = styled.span`
  font-weight: bold;
`;

const TaskInfo = styled.div`
  margin-top: 20px;
  margin-bottom: 50px;
  width: 100%;
`;

const TaskTitle = styled.div`
  width: 100%;
  height: 20px;
  line-height: 20px;
  border-left: 5px solid black;
  padding-left: 14px;
  font-weight: bold;
  font-size: 17px;
`;

const TaskDuration = styled.div`
  margin-top: 12px;
  width: 100%;
  color: #6c757d;
  font-size: 15px;
`;

const TaskDetail = styled.ul`
  margin-top: 20px;
  margin-left: 20px;
  width: 100%;
  font-size: 15px;
  list-style-type: disc;
`;

const Detail = styled.li`
  margin-top: 12px;
  line-height: 1.6;
`;
