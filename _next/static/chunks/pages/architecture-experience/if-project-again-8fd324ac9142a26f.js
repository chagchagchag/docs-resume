(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[159],{9755:function(e,r,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/architecture-experience/if-project-again",function(){return i(6155)}])},8761:function(e,r){"use strict";r.Z={src:"/docs-resume/_next/static/media/instance.d64b5431.png",height:145,width:498,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAIAAADq9gq6AAAANUlEQVR42hXJsQkAMAgEwOw/piCvIKJYRLQJufYOM7v77fbMrJpZVQVwiMjMZjeq4seICIAHX9YsyIluLZwAAAAASUVORK5CYII=",blurWidth:8,blurHeight:2}},6155:function(e,r,i){"use strict";i.r(r),i.d(r,{__toc:function(){return d}});var n=i(5893),t=i(2673),a=i(373),s=i(8426);i(9128);var o=i(2643),c=i(8761);let d=[{depth:2,value:"프로젝트를 다시 한다면",id:"프로젝트를-다시-한다면"},{depth:2,value:"상태없는 연산이 필요한 인스턴스에는 k8s 애플리케이션으로 전환",id:"상태없는-연산이-필요한-인스턴스에는-k8s-애플리케이션으로-전환"},{depth:3,value:"작업대기열 방식을 EDA로 전환",id:"작업대기열-방식을-eda로-전환"},{depth:2,value:"비동기 논블로킹 지원 네트워크 프로그램으로 전환",id:"비동기-논블로킹-지원-네트워크-프로그램으로-전환"},{depth:2,value:"필드매핑 정합성 검증 서비스 개발",id:"필드매핑-정합성-검증-서비스-개발"},{depth:2,value:"Kafka, Spring Cloud Function",id:"kafka-spring-cloud-function"}];function _createMdxContent(e){let r=Object.assign({h2:"h2",ul:"ul",li:"li",p:"p",h3:"h3",a:"a",img:"img",code:"code"},(0,o.a)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"프로젝트를-다시-한다면",children:"프로젝트를 다시 한다면"}),"\n",(0,n.jsx)(r.h2,{id:"상태없는-연산이-필요한-인스턴스에는-k8s-애플리케이션으로-전환",children:"상태없는 연산이 필요한 인스턴스에는 k8s 애플리케이션으로 전환"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"waiker-data-live"}),"\n",(0,n.jsx)(r.li,{children:"waiker-data-websocket"}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["waiker-data-live, waiker-data-websocket 은 데이터를 Serving 하는 역할을 수행합니다. 각각의 데이터가 상태가 없이 개별 데이터 건을 전달하기만 하면 되는 역할을 갖고 있기 때문에 EKS 구축과 동시에 k8s 네이티브 애플리케이션으로 전환했을 것 같습니다. ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(r.h3,{id:"작업대기열-방식을-eda로-전환",children:"작업대기열 방식을 EDA로 전환"}),"\n",(0,n.jsxs)(r.p,{children:["그 당시 인스턴스 각각은 Producer, Consumer, Queue 로 구성했습니다. 여기서 Queue 는 Hazelcast 를 활용했고 ",(0,n.jsx)(r.a,{href:"https://github.com/hazelcast/spring-data-hazelcast",children:"spring-data-hazelcast"})," 를 통해서 각 요청을 Set, Map<String, List<T>> 을 통해서 FIFO Queue 를 흉내낸 Write-Back 캐싱전략을 구현했습니다."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{placeholder:"blur",src:c.Z})}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsxs)(r.p,{children:["이렇게 하는 것은 요청의 id와 id 에 해당하는 데이터들을 작업 대기열로 기록하는 방식이고 누구나 떠올릴 수 있는 작업대기열 소비 방식이라고 생각합니다. 그리고 주식 데이터의 특성상 초/분/시/일 구간 대에 이미 들어온 현재가 데이터가 있다면 현재가를 업데이트하고, 고가,저가, 종가가 수시로 바뀌기 때문에 MVCC 이슈가 생깁니다. 데이터의 insert 보다 수정이 더 많을 경우 PostgreSQL 의 경우 잦은 MVCC 수행 시에 Dead Tuple 이 발생하는데, 이 Dead Tuple 이 트리구조여서 최악의 경우 ",(0,n.jsx)(r.code,{children:"N^M"})," 정도의 디스크 소모가 발생합니다.",(0,n.jsx)("br",{})]}),"\n",(0,n.jsxs)(r.p,{children:["만약 프로젝트를 조금 더 발전시킨다면 위와 같이 작업대기열에 작업을 쌓아두는 대신, 개별 데이터 한건 하나 하나를 독립적인 개별 이벤트로 처리하고, 메시징 ID를  SAGA ID 로 취급해서 함께 Outbox 데이터베이스에 insert 하는 방식을 선택할 것 같습니다.",(0,n.jsx)("br",{})]}),"\n",(0,n.jsxs)(r.p,{children:["이렇게 개별적으로 쌓인 이벤트들을 특정 주기마다 스케쥴링 방식으로 특정 사이즈만큼의 데이터를 읽어들여서 일정크기의 소규모 단위 배치 작업을 변화를 한다면 MVCC 이슈는 피하면서 개별 데이터의 배치 처리가 가능해집니다. 이렇게 Event 단위의 데이터 처리는 하드코딩으로도 개발할 수도 있지만 axon framework의 힘을 어느 정도는 빌려서 범용성을 높인다면 좋을 것 같습니다.",(0,n.jsx)("br",{})]}),"\n",(0,n.jsxs)(r.p,{children:["이렇게 개별 작업 대기열 방식 대신 독립된 이벤트로 저장하는 방식은 이벤트를 기록할수 있고, 원자적으로 처리할 수 있고, 무결성제약조건을 만족시키며, 다른 이벤트와 독립된 방식으로 저장될 수 있기에 개별 이벤트를 트랜잭션 단위로 처리할 수 있는 조건을 만족시킬 수 있다는 장점이 생깁니다. 그리고 MVCC 이슈를 피해서 데이터의 배치 저장이 가능하게 한다는 점 역시 만족시키게 됩니다.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(r.h2,{id:"비동기-논블로킹-지원-네트워크-프로그램으로-전환",children:"비동기 논블로킹 지원 네트워크 프로그램으로 전환"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Netty 기반의 웹 애플리케이션으로 전환"}),"\n",(0,n.jsx)(r.li,{children:"Kotlin, Webflux 기반으로 전환"}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:['스레드 하나에 작업 하나를 부여해서 그 작업을 비동기 논블로킹으로 연산했던 것들은 지금에 와서 돌아보면 "IO작업 하나에 정말 너무 비싼 비용을 치룬 것이 아닌가" 하는 생각을 너무나 자주 합니다. 톰캣의 스레드 풀 보다는 Netty 기반의 AIO 네트워킹 기반의 WAS 서버에서 프로젝트가 진행되었다면 조금은 프로젝트가 빨라졌지 않을까 하는 생각도 해봤던 것 같습니다.',(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(r.h2,{id:"필드매핑-정합성-검증-서비스-개발",children:"필드매핑 정합성 검증 서비스 개발"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"당일 트래픽들을 카프카 토픽 컨슈머로 수집"}),"\n",(0,n.jsx)(r.li,{children:"로그 적재 시스템 구축"}),"\n",(0,n.jsx)(r.li,{children:"로그 데이터를 읽어들여서 시계열 데이터베이스에 배치 기반으로 데이터 적재"}),"\n",(0,n.jsx)(r.li,{children:"장 마감 후 일괄 배치 작업을 통한 데이터 보정 작업 및 에러율 검출"}),"\n",(0,n.jsx)(r.li,{children:"(in-house) 크롤링을 통한 타사 플랫폼 집계 수집 & 데이터와 비교했을 때 데이터 에러 구간 검출"}),"\n"]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsxs)(r.p,{children:["개발 기한과 개발 인력이 부족했기에 로그를 추출해서 이것을 기반으로 서비스가 과거에 잘 돌아갔었는지 시세 데이터의 정합성이 어느 정도인지 추측할 수 있는 in-house 툴을 개발할 필요가 있었습니다. 당시에는 1인 개발 체제여서 테스트 코드로만 남겨두었지만, 별도의 프로젝트를 개발할 인력이 있었다면 이렇게 로그 처리 시스템을 구축했을 듯 합니다.",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(r.h2,{id:"kafka-spring-cloud-function",children:"Kafka, Spring Cloud Function"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"카프카 기반의 메시지 큐로 전환"}),"\n"]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsxs)(r.p,{children:["개발 당시에 카프카 기반의 개발을 하겠다는 입장을 취했지만, 랩장님의 반대가 있었고 카프카를 운영환경에서 고도화 시킬만한 인프라팀의 데브옵스 엔지니어도 부족했습니다. 이런 이유로 클러스터링 기반의 레빗엠큐를 선택했습니다. 레빗엠큐가 성능 적으로 전혀 부족한 면이 있는 것은 아니었지만, 카프카의 회복탄력성, 파티셔닝을 통한 확장성, 주키퍼와 브로커들간의 통신을 통해 통신의 신뢰성을 확보하는 등 여러가지 장점을 가지고 있기에 Kafka 기반의 메시징 시스템으로 전환했을 듯 합니다.",(0,n.jsx)("br",{})]})]})}let h={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:r}=Object.assign({},(0,o.a)(),e.components);return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/architecture-experience/if-project-again.mdx",route:"/architecture-experience/if-project-again",timestamp:1710857652e3,pageMap:[{kind:"Folder",name:"architecture-experience",route:"/architecture-experience",children:[{kind:"MdxPage",name:"consumer-thread-optimization",route:"/architecture-experience/consumer-thread-optimization"},{kind:"MdxPage",name:"if-project-again",route:"/architecture-experience/if-project-again"},{kind:"MdxPage",name:"intro",route:"/architecture-experience/intro"},{kind:"MdxPage",name:"message-queue-usage",route:"/architecture-experience/message-queue-usage"},{kind:"MdxPage",name:"test-case-experience",route:"/architecture-experience/test-case-experience"},{kind:"Meta",data:{intro:"Intro","message-queue-usage":"메시지 큐 기반 시스템 분해작업","consumer-thread-optimization":"스레드 최적화","test-case-experience":"테스트케이스 경험","if-project-again":"프로젝트를 다시 한다면"}}]},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"portfolio",route:"/portfolio",children:[{kind:"MdxPage",name:"portfolio",route:"/portfolio/portfolio"},{kind:"Meta",data:{portfolio:"portfolio"}}]},{kind:"Folder",name:"project-history",route:"/project-history",children:[{kind:"MdxPage",name:"problem-solving-histories",route:"/project-history/problem-solving-histories"},{kind:"MdxPage",name:"project-history",route:"/project-history/project-history"},{kind:"Meta",data:{"project-history":"프로젝트 수행 기록","problem-solving-histories":"경력기술서"}}]},{kind:"Folder",name:"work-history",route:"/work-history",children:[{kind:"MdxPage",name:"retire-reason",route:"/work-history/retire-reason"},{kind:"MdxPage",name:"work-history",route:"/work-history/work-history"},{kind:"Meta",data:{"work-history":"재직기록","retire-reason":"퇴직사유"}}]},{kind:"Meta",data:{index:"Introduction","work-history":"재직 기록","project-history":"프로젝트 기록",portfolio:"포트폴리오","architecture-experience":"시스템 설계 경험"}}],flexsearch:{codeblocks:!0},title:"If Project Again",headings:d},pageNextRoute:"/architecture-experience/if-project-again",nextraLayout:a.ZP,themeConfig:s.Z};r.default=(0,t.j)(h)},8426:function(e,r,i){"use strict";var n=i(5893);i(7294);let t={logo:(0,n.jsx)("span",{children:"Docs Resume"}),project:{link:"https://github.com/chagchagchag/docs-resume"},docsRepositoryBase:"https://github.com/chagchagchag/docs-resume",footer:{text:"Nextra Docs Template"}};r.Z=t},5789:function(){}},function(e){e.O(0,[774,796,888,179],function(){return e(e.s=9755)}),_N_E=e.O()}]);