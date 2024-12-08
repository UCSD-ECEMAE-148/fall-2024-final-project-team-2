(self.webpackChunkUCSD_ECEMAE_148=self.webpackChunkUCSD_ECEMAE_148||[]).push([[242],{7620:(e,t,n)=>{e.exports={src:{srcSet:n.p+"assets/ideal-img/createcar.cdb4b8f.500.png 500w,"+n.p+"assets/ideal-img/createcar.d8223bc.788.png 788w",images:[{path:n.p+"assets/ideal-img/createcar.cdb4b8f.500.png",width:500,height:154},{path:n.p+"assets/ideal-img/createcar.d8223bc.788.png",width:788,height:242}],src:n.p+"assets/ideal-img/createcar.cdb4b8f.500.png",toString:function(){return n.p+"assets/ideal-img/createcar.cdb4b8f.500.png"},placeholder:void 0,width:500,height:154},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAADCAYAAACqPZ51AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAWklEQVR4nGMwKrD4b5hv/h9E6+eZ/TfIM/uvlW3yXz3T6L9qhuF/lXQIZgBJGhZY/DfIN/+vmWX8XyfHFEwjKwIr9Kxz/u9S7fDfsdL+v0WJFdgk5TRURSCFANyoNffc4beIAAAAAElFTkSuQmCC"}},1212:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>f,frontMatter:()=>c,metadata:()=>u,toc:()=>p});var r=n(7624),a=n(4552),o=n(6936),i=n(184),l=n(7620),s=n.n(l);const c={id:"deep-learning",title:"Deep Learning with DonkeyCar",tags:["Deep Learning","DonkeyCar"],sidebar_position:3,last_update:{date:"12/7/2024",author:"Kevin Shin"}},d="Deep Learning with DonkeyCar",u={id:"deep-learning/deep-learning",title:"Deep Learning with DonkeyCar",description:"Virtual Machine",source:"@site/docs/deep-learning/index.mdx",sourceDirName:"deep-learning",slug:"/deep-learning/",permalink:"/fall-2024-final-project-team-2/docs/deep-learning/",draft:!1,unlisted:!1,tags:[{label:"Deep Learning",permalink:"/fall-2024-final-project-team-2/docs/tags/deep-learning"},{label:"DonkeyCar",permalink:"/fall-2024-final-project-team-2/docs/tags/donkey-car"}],version:"current",lastUpdatedBy:"Kevin Shin",lastUpdatedAt:1733558400,formattedLastUpdatedAt:"Dec 7, 2024",sidebarPosition:3,frontMatter:{id:"deep-learning",title:"Deep Learning with DonkeyCar",tags:["Deep Learning","DonkeyCar"],sidebar_position:3,last_update:{date:"12/7/2024",author:"Kevin Shin"}},sidebar:"noteSidebar",previous:{title:"Mechanics and Electronics",permalink:"/fall-2024-final-project-team-2/docs/setup/"},next:{title:"GPS with PointOneNav and DonkeyCar",permalink:"/fall-2024-final-project-team-2/docs/gps/"}},h={},p=[{value:"Virtual Machine",id:"virtual-machine",level:2},{value:"DonkeyCar",id:"donkeycar",level:2}];function m(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,a.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"deep-learning-with-donkeycar",children:"Deep Learning with DonkeyCar"}),"\n",(0,r.jsx)(t.h2,{id:"virtual-machine",children:"Virtual Machine"}),"\n",(0,r.jsx)(t.p,{children:"To work on this assignment, we needed to run a virtual machine that had an Ubuntu 18.04 64-bit image on it. Looking back, we could have used a dockerized container but this was beyond our level of understanding."}),"\n",(0,r.jsx)(t.p,{children:"We ran the virtual machine on VMWare Workstation. In addition, we created a virtual environment to isolate all the dependencies. In fact, it's recommended to do so even if we had a virtual machine as other assignments needed different dependency versions and compatability."}),"\n",(0,r.jsx)(t.h2,{id:"donkeycar",children:"DonkeyCar"}),"\n",(0,r.jsxs)(t.p,{children:["The virtual machine had all the necessary software on it, including the DonkeyCar framework. If ever interested, you can find the framework ",(0,r.jsx)(t.a,{href:"https://docs.donkeycar.com/",children:"here"}),". The DonkeyCar framework allows us to train a machine learning model and deploy it both virtually and physically."]}),"\n",(0,r.jsxs)(o.c,{children:[(0,r.jsxs)(i.c,{value:"local",label:"Locally",children:[(0,r.jsx)(t.p,{children:"To run the framework locally, we only had to navigate to the DonkeyCar directory for our Ubuntu environment. Before running the simulator, we had to modify the configuration file for our simulator."}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-py",children:'DONKEY_GYM = True\r\nDONKEY_SIM_PATH = "/home/ucsd/projects/DonkeySimLinux/donkey_sim.x86_64" ## path to your simulator\r\nDONKEY_GYM_ENV_NAME = "donkey-warren-track-v0" # donkey-circuit-launch-track-v0, donkey-warren-track-v0, donkey-mountain-track-v0\r\nGYM_CONF = { "body_style" : "car01", "body_rgb" : (255, 205, 0), "car_name" : "Pororo", "font_size" : 30}\r\nGYM_CONF["racer_name"] = "Pororo"\r\nGYM_CONF["country"] = "South Korea"\r\nGYM_CONF["bio] = "Hi!"\r\n\r\nSIM_ARTIFICIAL_LATENCY = 0\r\nSIM_HOST = "127.0.0.1"\r\n\r\nUSE_JOYSTICK_AS_DEFAULT = True      # when starting the manage.py, when True, will not require a --js option to use the joystick\r\nJOYSTICK_MAX_THROTTLE = 1.0         # this scalar is multiplied with the -1 to 1 throttle value to limit the maximum throttle. This can help if you drop the controller or just don\'t need the full speed available.\r\nJOYSTICK_STEERING_SCALE = 0.8       # some people want a steering that is less sensitve. This scalar is multiplied with the steering -1 to 1. It can be negative to reverse dir.\r\nAUTO_RECORD_ON_THROTTLE = True      # if true, we will record whenever throttle is not zero. if false, you must manually toggle recording with some other trigger. Usually circle button on joystick.\r\nJOYSTICK_DEADZONE = 0.2             # when non zero, this is the smallest throttle before recording triggered.\r\n#\n'})}),(0,r.jsx)(t.p,{children:"If everything was set correctly, we could now run this command in our terminal which would show our simulator running locally on port 8887."}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"python manage.py drive\n"})}),(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://docs.donkeycar.com/assets/sim_screen_shot.png",alt:""})}),(0,r.jsxs)(t.p,{children:["The simulator allows for different controls, but as we configured our Logitech F710 controller, it was easy to collect data. The recommended number of laps was 20 to train our model. The simulator autocollects data in the root directory of our DonkeyCar framework in ",(0,r.jsx)(t.code,{children:"d4_sim/data"})]}),(0,r.jsx)(t.p,{children:"Once we had our data, all we had to do was run another command in the terminal to start training a model."}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"python train.py --model=models/model_name.h5 --type=linear --tubs=data/\n"})}),(0,r.jsx)(t.p,{children:"To test our model, we ran:"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"python manage.py drive --model=models/model_name.h5 --type=linear\n"})}),(0,r.jsx)(t.p,{children:"If everything worked, you would get this."}),(0,r.jsx)("iframe",{width:"960",height:"520",src:"https://www.youtube.com/embed/iMfT0nNbMa0",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0,title:"Local Simulator"})]}),(0,r.jsxs)(i.c,{value:"remote",label:"Remote",children:[(0,r.jsx)(t.p,{children:"To run our framework remotely, meaning on another machine or domain other than our own computer, we only have to change one line in the configuration file."}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-py",children:'SIM_ARTIFICIAL_LATENCY = 0\r\nSIM_HOST = "donkey-sim.roboticist.dev"\n'})}),(0,r.jsx)(t.p,{children:"The artifical latency is there to mimic real-world latency for testing on local, which is not needed in this situation since we'll have latency by default trying to connect to a remote domain."}),(0,r.jsx)(t.p,{children:"The commands for running it are the same as local."}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"python manage.py drive # for manual\r\npython manage.py drive --model=models/model_name.h5 --type=linear # for model\n"})}),(0,r.jsxs)(t.p,{children:["To view the car show up, navigate to ",(0,r.jsx)(t.a,{href:"https://www.twitch.tv/roboticists",children:"https://www.twitch.tv/roboticists"})," or ",(0,r.jsx)(t.a,{href:"https://www.twitch.tv/roboticists2",children:"https://www.twitch.tv/roboticists2"}),"."]}),(0,r.jsx)(t.p,{children:"If everything worked, you would get this."}),(0,r.jsx)("iframe",{width:"960",height:"520",src:"https://www.youtube.com/embed/imwfRf-BGR8",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0,title:"Remote Simulator"})]}),(0,r.jsxs)(i.c,{value:"physical",label:"Physical",children:[(0,r.jsx)(t.p,{children:"To run it physically, all the steps are the same except that we need to replicate this on the Jetson Nano."}),(0,r.jsx)(t.p,{children:"The following commands below ensure the installation of donkeycar and their dependencies on the Jetson Nano."}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"git clone https://github.com/autorope/donkeycar\r\ncd donkeycar\r\ngit fetch --all --tags -f\r\ngit checkout 4.5.1\r\npip install -e .[nano]\r\n\r\nsudo apt-get install python3-dev python3-numpy python-dev libsdl-dev libsdl1.2-dev libsdl-image1.2-dev libsdl-mixer1.2-dev libsdl-ttf2.0-dev libsdl1.2-dev libsmpeg-dev python-numpy subversion libportmidi-dev ffmpeg libswscale-dev libavformat-dev libavcodec-dev libfreetype6-dev libswscale-dev libjpeg-dev libfreetype6-dev\r\nsudo apt-get install rsync\r\n\r\npip install numpy --upgrade\r\npip3 install -e .[nano]\n"})}),(0,r.jsx)(t.p,{children:"To create a car, we would run one simple bash command within our donkeycar folder."}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"donkey createcar --path ~/<name>\n"})}),(0,r.jsx)(t.admonition,{type:"caution",children:(0,r.jsx)(t.p,{children:"The latest version of DonkeyCar (5.x) does not support the Jetson Nano yet, so the DonkeyCar version must be 4.5.1."})}),(0,r.jsx)("img",{src:s().src,width:"960",height:"240",alt:"DonkeyCar Create Car"}),(0,r.jsx)(t.p,{children:"The configuration file generally stays the same except we're now adding in configurations for our VESC."}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'CONTROLLER_TYPE=\'F710\'\r\n\r\nCAMERA_TYPE = "OAKD" \r\nCAMERA_INDEX = 0\r\n\r\nDRIVE_TRAIN_TYPE = "VESC" \r\nVESC_MAX_SPEED_PERCENT =.2 ## Max speed as a percent of actual max speed \r\nVESC_SERIAL_PORT= "/dev/ttyACM0" ## check this val with ls /dev/tty* \r\nVESC_HAS_SENSOR= True \r\nVESC_START_HEARTBEAT= True \r\nVESC_BAUDRATE= 115200 \r\nVESC_TIMEOUT= 0.05 \r\nVESC_STEERING_SCALE = .5\r\nVESC_STEERING_OFFSET = .5\r\nDONKEY_GYM = False\n'})}),(0,r.jsx)(t.p,{children:"In addition, we had to replace several donkeycar files with our classes internal custom files to ensure compatibility. After all is set and done, we should be able to drive our car."}),(0,r.jsx)("iframe",{width:"960",height:"520",src:"https://www.youtube.com/embed/9mneIrBTd0A",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0,title:"Physical DonkeyCar"})]})]})]})}function f(e={}){const{wrapper:t}={...(0,a.M)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},184:(e,t,n)=>{"use strict";n.d(t,{c:()=>i});n(1504);var r=n(5456);const a={tabItem:"tabItem__kUE"};var o=n(7624);function i(e){let{children:t,hidden:n,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.c)(a.tabItem,i),hidden:n,children:t})}},6936:(e,t,n)=>{"use strict";n.d(t,{c:()=>k});var r=n(1504),a=n(5456),o=n(7288),i=n(5592),l=n(3472),s=n(5068),c=n(604),d=n(6432);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,c.w)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.Uz)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._M)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=h(e),[i,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[c,u]=m({queryString:n,groupId:a}),[f,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,d.IN)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),y=(()=>{const e=c??f;return p({value:e,tabValues:o})?e:null})();(0,l.c)((()=>{y&&s(y)}),[y]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),g(e)}),[u,g,o]),tabValues:o}}var g=n(9788);const y={tabList:"tabList_fbd4",tabItem:"tabItem_v5XY"};var b=n(7624);function w(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:l}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.MV)(),d=e=>{const t=e.currentTarget,n=s.indexOf(t),a=l[n].value;a!==r&&(c(t),i(a))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;t=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;t=s[n]??s[s.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.c)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>s.push(e),onKeyDown:u,onClick:d,...o,className:(0,a.c)("tabs__item",y.tabItem,o?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function x(e){const t=f(e);return(0,b.jsxs)("div",{className:(0,a.c)("tabs-container",y.tabList),children:[(0,b.jsx)(w,{...e,...t}),(0,b.jsx)(v,{...e,...t})]})}function k(e){const t=(0,g.c)();return(0,b.jsx)(x,{...e,children:u(e.children)},String(t))}},4552:(e,t,n)=>{"use strict";n.d(t,{I:()=>l,M:()=>i});var r=n(1504);const a={},o=r.createContext(a);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);