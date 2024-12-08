"use strict";(self.webpackChunkUCSD_ECEMAE_148=self.webpackChunkUCSD_ECEMAE_148||[]).push([[360],{8836:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var o=t(7624),s=t(4552);const a={id:"human-pose",title:"Human Pose Estimation",tags:["DepthAI","OAKD-Lite","DepthAI"],sidebar_position:8,last_update:{date:"12/4/2024",author:"Kevin Shin"}},i="Human Pose Estimation with OAKD-Lite and DepthAI",r={id:"human-pose/human-pose",title:"Human Pose Estimation",description:"We used our class docker image to develop our initial Roboflow code.",source:"@site/docs/human-pose/index.mdx",sourceDirName:"human-pose",slug:"/human-pose/",permalink:"/fall-2024-final-project-team-2/docs/human-pose/",draft:!1,unlisted:!1,tags:[{label:"DepthAI",permalink:"/fall-2024-final-project-team-2/docs/tags/depth-ai"},{label:"OAKD-Lite",permalink:"/fall-2024-final-project-team-2/docs/tags/oakd-lite"}],version:"current",lastUpdatedBy:"Kevin Shin",lastUpdatedAt:1733299200,formattedLastUpdatedAt:"Dec 4, 2024",sidebarPosition:8,frontMatter:{id:"human-pose",title:"Human Pose Estimation",tags:["DepthAI","OAKD-Lite","DepthAI"],sidebar_position:8,last_update:{date:"12/4/2024",author:"Kevin Shin"}},sidebar:"noteSidebar",previous:{title:"Retrieval-augmented Memory for Embodied Robots",permalink:"/fall-2024-final-project-team-2/docs/remember/"}},d={},c=[];function l(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"human-pose-estimation-with-oakd-lite-and-depthai",children:"Human Pose Estimation with OAKD-Lite and DepthAI"}),"\n",(0,o.jsx)(n.p,{children:"We used our class docker image to develop our initial Roboflow code."}),"\n",(0,o.jsx)(n.p,{children:"Within our docker container, we have to ensure the X11 forwarding is set up. Once set up, we can proceed to give permissions to the OAKD-lite camera.\r\nThis can be done by running these commands within both Jetson Nano and inside our docker container."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'export OPENBLAS_CORETYPE=ARMV8" >> ~/.bashrc\r\necho \'SUBSYSTEM=="usb", ATTRS{idVendor}=="03e7", MODE="0666"\' | sudo tee /etc/udev/rules.d/80-movidius.rules\n'})}),"\n",(0,o.jsx)(n.p,{children:"We can then install depthai with the following commands below."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"RUN git clone https://github.com/luxonis/depthai.git && \\\r\n    git clone https://github.com/luxonis/depthai-python.git && \\\r\n    cd depthai && \\\r\n    source ${VIRTUAL_ENV}/donkey/bin/activate && \\\r\n    curl -fL https://docs.luxonis.com/install_dependencies.sh | bash && \\\r\n    python3 install_requirements.py && \\\r\n    cd ../depthai-python/examples && \\\r\n    python3 install_requirements.py \n"})}),"\n",(0,o.jsxs)(n.p,{children:["Once done, we can simply run the test model within ",(0,o.jsx)(n.code,{children:"/depthai-python/examples"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"python3 human_pose.py\n"})}),"\n",(0,o.jsx)(n.p,{children:"The source code is only 6 lines of code."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"from depthai_sdk import OakCamera\r\n\r\nwith OakCamera() as oak:\r\n  color = oak.create_camera('color')\r\n  # List of models that are supported out-of-the-box by the SDK:\r\n  # https://docs.luxonis.com/projects/sdk/en/latest/features/ai_models/#sdk-supported-models\r\n  human_pose_nn = oak.create_nn('human-pose-estimation-0001', color)\r\n\r\n  oak.visualize(human_pose_nn)\r\n  oak.start(blocking=True)\n"})}),"\n",(0,o.jsx)(n.p,{children:"We can then get this demo."}),"\n",(0,o.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,o.jsx)("img",{src:"https://docs-old.luxonis.com/projects/sdk/en/latest/_images/sdk_human_pose.gif",alt:"Raccoon Dancing"})})]})}function p(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>r,M:()=>i});var o=t(1504);const s={},a=o.createContext(s);function i(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);