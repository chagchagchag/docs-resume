(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[136],{5037:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/architecture-experience/consumer-thread-optimization",function(){return t(7036)}])},7036:function(e,r,t){"use strict";t.r(r),t.d(r,{__toc:function(){return a}});var i=t(5893),n=t(2673),o=t(373),c=t(8426);t(9128);var s=t(2643);let a=[{depth:2,value:"스레드 최적화",id:"스레드-최적화"},{depth:2,value:"아쉬운 점",id:"아쉬운-점"}];function _createMdxContent(e){let r=Object.assign({h2:"h2",p:"p",ul:"ul",li:"li",blockquote:"blockquote"},(0,s.a)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h2,{id:"스레드-최적화",children:"스레드 최적화"}),"\n",(0,i.jsxs)(r.p,{children:["흔히 트래픽이 높으면 스레드를 높여야 한다는 착각에 빠질 수 있습니다. 하지만 개발을 해보면서 느낀 점은 각각의 로직이 비동기적으로 논블로킹연산이 되도록 구현을 하면 스레드 개수가 그렇게 많을 필요가 없었다는 점이었습니다. ",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(r.p,{children:["이렇게 정의한 비동기 논블로킹 연산의 람다 바디 정의부는 캐시에 데이터를 쌓아두는 생산자와 캐시의 데이터를 일정 사이즈 만큼 읽어들여서 소비하는 소비자를 함께 구현해두면, 서로가 서로의 작업을 블로킹하지 않고 별도의 ExecutorService 내에서 Async 하게 동작하기 때문에 애플리케이션 레벨에서의 교착현상은 사라집니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(r.p,{children:"제 경우에는 스케쥴러 Executor 와 작업을 수행하는 workerExecutor, RabbitMQ 의 데이터를 receive 하는 listenerExecutor 로 분류해서 각각을 관리했습니다."}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"schedulerExecutor : 작업 조율 스레드"}),"\n",(0,i.jsx)(r.li,{children:"workerExecutor : 데이터 저장작업"}),"\n",(0,i.jsx)(r.li,{children:"pushExecutor : 데이터 Push 역할 담당"}),"\n",(0,i.jsx)(r.li,{children:"listenerExecutor : 데이터 수신 역할 담당"}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)(r.p,{children:["레피니티브의 고빈도 트래픽을 받기 위해서는 적어도 2~3 배수의 비동기 작업이 필요했는데, 이런 이유로 listenerExecutor 를 min =1, max =2 으로 두어서 스레드 풀을 설정했습니다. 데이터 수신의 경우 데이터 수신 외에는 별도의 IO 작업이 없었고 캐시에 데이터를 적재하는 역할만을 수행하는데, 캐시에 데이터가 적재되는 속도를 직접 체크해본 결과 최대 3ns 안에 이루어졌기에 실제로는 그렇게 큰 스레드 풀이 필요하지는 않았습니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(r.p,{children:["데이터를 수신한 후 캐시에 쌓아둔 작업 대기열의 소비 작업은 schedulerExecutor 가 workerExecutor, pushExecutor 중 하나를 선택해서 해당 스레드를 실행시키도록 했습니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(r.h2,{id:"아쉬운-점",children:"아쉬운 점"}),"\n",(0,i.jsxs)(r.p,{children:["최근 webflux, kotlin coroutine 스터디 문서를 작성하면서 ",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsx)(r.p,{children:'"자바의 스레드와 톰캣의 스레드 풀로 레피니티브의 고빈도 트래픽을 처리하는 건 정말 리소스를 비싸게 사용하는 것이었구나"'}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)(r.p,{children:["하는 생각을 했었습니다. 사실 그 당시 이 기능 개발 전 프로젝트 셋업 당시에 webflux 를 도입하려고 했지만 반대에 부딪혔었는데 만약 그 당시에 webflux 를 하겠다고 우기고 앞으로 나갔다면 지금은 어땠을까? 하고 생각해봤던 것 같습니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)(r.p,{children:['스레드 하나에 작업 하나를 부여해서 그 작업을 비동기 논블로킹으로 연산했던 것들은 지금에 와서 돌아보면 "IO작업 하나에 정말 너무 비싼 비용을 치룬 것이 아닌가" 하는 생각을 너무나 자주 합니다. 톰캣의 스레드 풀 보다는 Netty 기반의 AIO 네트워킹 기반의 WAS 서버에서 프로젝트가 진행되었다면 조금은 프로젝트가 빨라졌지 않을까 하는 생각도 해봤던 것 같습니다.',(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)("br",{})]})}let u={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:r}=Object.assign({},(0,s.a)(),e.components);return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/architecture-experience/consumer-thread-optimization.mdx",route:"/architecture-experience/consumer-thread-optimization",timestamp:1710848288e3,pageMap:[{kind:"Folder",name:"architecture-experience",route:"/architecture-experience",children:[{kind:"MdxPage",name:"consumer-thread-optimization",route:"/architecture-experience/consumer-thread-optimization"},{kind:"MdxPage",name:"if-project-again",route:"/architecture-experience/if-project-again"},{kind:"MdxPage",name:"intro",route:"/architecture-experience/intro"},{kind:"MdxPage",name:"message-queue-usage",route:"/architecture-experience/message-queue-usage"},{kind:"MdxPage",name:"test-case-experience",route:"/architecture-experience/test-case-experience"},{kind:"Meta",data:{intro:"Intro","message-queue-usage":"메시지 큐 기반 시스템 분해작업","consumer-thread-optimization":"스레드 최적화","test-case-experience":"테스트케이스 경험","if-project-again":"프로젝트를 다시 한다면"}}]},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"portfolio",route:"/portfolio",children:[{kind:"MdxPage",name:"portfolio",route:"/portfolio/portfolio"},{kind:"Meta",data:{portfolio:"portfolio"}}]},{kind:"Folder",name:"project-history",route:"/project-history",children:[{kind:"MdxPage",name:"problem-solving-histories",route:"/project-history/problem-solving-histories"},{kind:"MdxPage",name:"project-history",route:"/project-history/project-history"},{kind:"Meta",data:{"project-history":"프로젝트 수행 기록","problem-solving-histories":"경력기술서"}}]},{kind:"Folder",name:"work-history",route:"/work-history",children:[{kind:"MdxPage",name:"retire-reason",route:"/work-history/retire-reason"},{kind:"MdxPage",name:"work-history",route:"/work-history/work-history"},{kind:"Meta",data:{"work-history":"재직기록","retire-reason":"퇴직사유"}}]},{kind:"Meta",data:{index:"Introduction","work-history":"재직 기록","project-history":"프로젝트 기록",portfolio:"포트폴리오","architecture-experience":"시스템 설계 경험"}}],flexsearch:{codeblocks:!0},title:"Consumer Thread Optimization",headings:a},pageNextRoute:"/architecture-experience/consumer-thread-optimization",nextraLayout:o.ZP,themeConfig:c.Z};r.default=(0,n.j)(u)},8426:function(e,r,t){"use strict";var i=t(5893);t(7294);let n={logo:(0,i.jsx)("span",{children:"Docs Resume"}),project:{link:"https://github.com/chagchagchag/docs-resume"},docsRepositoryBase:"https://github.com/chagchagchag/docs-resume",footer:{text:"Nextra Docs Template"}};r.Z=n},5789:function(){}},function(e){e.O(0,[774,796,888,179],function(){return e(e.s=5037)}),_N_E=e.O()}]);