"use strict";(self.webpackChunkUCSD_ECEMAE_148=self.webpackChunkUCSD_ECEMAE_148||[]).push([[356],{5108:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=r(7624),a=r(4552);r(6936),r(184);const i={id:"lane-tracking",title:"Lane Tracking with ROS2 and OpenCV2",tags:["ROS2","OpenCV2","Nav2","Docker"],sidebar_position:5,last_update:{date:"12/7/2024",author:"Kevin Shin"}},o=void 0,l={id:"lane-tracking/lane-tracking",title:"Lane Tracking with ROS2 and OpenCV2",description:"This assignment was perhaps one of the easier ones",source:"@site/docs/lane-tracking/index.mdx",sourceDirName:"lane-tracking",slug:"/lane-tracking/",permalink:"/fall-2024-final-project-team-2/docs/lane-tracking/",draft:!1,unlisted:!1,tags:[{label:"ROS2",permalink:"/fall-2024-final-project-team-2/docs/tags/ros-2"},{label:"OpenCV2",permalink:"/fall-2024-final-project-team-2/docs/tags/open-cv-2"},{label:"Nav2",permalink:"/fall-2024-final-project-team-2/docs/tags/nav-2"},{label:"Docker",permalink:"/fall-2024-final-project-team-2/docs/tags/docker"}],version:"current",lastUpdatedBy:"Kevin Shin",lastUpdatedAt:1733558400,formattedLastUpdatedAt:"Dec 7, 2024",sidebarPosition:5,frontMatter:{id:"lane-tracking",title:"Lane Tracking with ROS2 and OpenCV2",tags:["ROS2","OpenCV2","Nav2","Docker"],sidebar_position:5,last_update:{date:"12/7/2024",author:"Kevin Shin"}},sidebar:"noteSidebar",previous:{title:"GPS with PointOneNav and DonkeyCar",permalink:"/fall-2024-final-project-team-2/docs/gps/"},next:{title:"Roboflow with OAKD-Lite",permalink:"/fall-2024-final-project-team-2/docs/roboflow/"}},s={},c=[{value:"Configuration",id:"configuration",level:2},{value:"Hardware Configuration",id:"hardware-configuration",level:3},{value:"Software Configuration",id:"software-configuration",level:3}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"This assignment was perhaps one of the easier ones"}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(n.p,{children:"We used a built docker image provided by our class that had all the files and dependencies. The configurations that were necessary was setting up the X11 server for GUI forwarding and giving access to all the jetson's hardware.\r\nWith our provided docker image, we would run this command."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Much thanks to ",(0,t.jsx)(n.a,{href:"https://www.linkedin.com/in/winston-wei-han-chou-a02214249/",children:"Winston"})," for providing this."]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker run \\\r\n    --name <Container Name> \\\r\n    -it \\\r\n    --privileged \\\r\n    --net=host \\\r\n    -e DISPLAY=$DISPLAY \\\r\n    -v /dev/bus/usb:/dev/bus/usb \\\r\n    --device /dev/video0 \\\r\n    -v  <your Xauthority file>:/root/.Xauthority:rw \\\r\n    djnighti/ucsd_robocar:devel\n"})}),"\n",(0,t.jsx)(n.h3,{id:"hardware-configuration",children:"Hardware Configuration"}),"\n",(0,t.jsx)(n.p,{children:"Next, we had to change the car configuration yaml file that told the ROS2 which hardware we were using."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"sick: 0\r\nlivox: 0\r\nbpearl: 0\r\nrp_lidar: 0\r\nld06: 0\r\nwebcam: 0\r\nintel: 0\r\noakd: 1 ## Camera\r\nzed: 0\r\nartemis: 0\r\nublox: 0\r\nnmea: 0\r\nvesc_with_odom: 0\r\nvesc_without_odom: 1 ## Vesc\r\nadafruit: 0\r\nadafruit_servo: 0\r\nadafruit_continuous_servo: 0\r\nesp32: 0\r\nstm32: 0\r\nbldc_sensor: 0\r\nbldc_no_sensor: 0\n"})}),"\n",(0,t.jsx)(n.h3,{id:"software-configuration",children:"Software Configuration"}),"\n",(0,t.jsx)(n.p,{children:"In order for the lane detection to work, we had to tune our filter mask such that it picked up only yellow lines. This was first done using the camera_nav_calibration package. The nodes could be toggled via yaml."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"# \r\n# param: 1-on, 0-off\r\n#\r\n# sensors/hardware/simulator\r\nall_components: 1\r\nsimulator: 0\r\n\r\n# camera navigation\r\ncamera_nav_calibration: 1\r\ncamera_nav: 0\r\n\r\n# recording data \r\nrosbag_launch: 0\r\n\r\n# TODO: Obstacle Avoidance\r\nsimple_obstacle_detection_launch: 0\r\n\r\n# rviz\r\nsensor_visualization: 0\r\n\r\n# control\r\nmanual_joy_control_launch: 0\r\nf1tenth_vesc_joy_launch: 0\r\npid_e_launch: 0\r\npid_llh_launch: 0\r\npid_servo_launch: 0\r\nlqr_launch: 0\r\nlqg_launch: 0\r\nlqg_w_launch: 0\r\nmpc_launch: 0\r\npid_gps_calibration_launch: 0\r\npid_gps_launch: 0\r\n\r\n# path planner\r\npath_nav_launch: 0\r\ntube_follower_launch: 0\r\ncurve_localizer_launch: 0\r\ngps_nav_launch: 1\r\n\r\n# Basics\r\nsub_camera_launch: 0\r\nsub_lidar_launch: 0\r\nsubpub_camera_actuator_launch: 0\r\nsubpub_lidar_actuator_launch: 0\n"})}),"\n",(0,t.jsx)(n.p,{children:"This would allow us to dynamically change our filters"}),"\n",(0,t.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,t.jsx)("img",{src:"https://user-content.gitlab-static.net/720fb2d2f68f04cf41fe3b5af37c5a8b2188e641/68747470733a2f2f6a2e676966732e636f6d2f7151374c766b2e676966",alt:"Raccoon Dancing"})}),"\n",(0,t.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,t.jsx)("img",{src:"https://user-content.gitlab-static.net/47e9e7c78fda7beaf699f0f2f5d269695c826e67/68747470733a2f2f6a2e676966732e636f6d2f36575271584e2e676966",alt:"Raccoon Dancing"})}),"\n",(0,t.jsx)(n.p,{children:"The only downside was that we had to write down these values and manually change them in another yaml file that was taken as arguments for the navigation and lane tracking nodes. The reason was that the camera navigation didn't overwrite the yaml file and instead was just for calibration."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"lane_detection_node: \r\n  ros__parameters: \r\n    Hue_low : 18 \r\n    Hue_high : 50 \r\n    Saturation_low : 75 \r\n    Saturation_high : 255 \r\n    Value_low : 145 \r\n    Value_high : 255 \r\n    number_of_lines : 100 \r\n    error_threshold : 0.16 \r\n    Width_min : 15 \r\n    Width_max : 112 \r\n    gray_lower : 61 \r\n    inverted_filter : 0 \r\n    kernal_size : 3 \r\n    erosion_itterations : 1 \r\n    dilation_itterations : 4 \r\n    crop_width_decimal  : 0.7 \r\n    rows_to_watch_decimal  : 0.2 \r\n    rows_offset_decimal  : 0.5\r\n    camera_centerline : 0.55 \r\ncalibration_node: \r\n  ros__parameters: \r\n    Hue_low : 18 \r\n    Hue_high : 50 \r\n    Saturation_low : 75 \r\n    Saturation_high : 255 \r\n    Value_low : 145 \r\n    Value_high : 255 \r\n    number_of_lines : 100 \r\n    error_threshold : 0.16 \r\n    Width_min : 15 \r\n    Width_max : 112 \r\n    gray_lower : 61 \r\n    inverted_filter : 0 \r\n    kernal_size : 3 \r\n    erosion_itterations : 1 \r\n    dilation_itterations : 4 \r\n    crop_width_decimal  : 0.7 \r\n    rows_to_watch_decimal  : 0.2 \r\n    rows_offset_decimal  : 0.5\r\n    camera_centerline : 0.55 \r\nlane_guidance_node: \r\n  ros__parameters: \r\n    Kp_steering : 0.8 \r\n    Ki_steering : 0.0 \r\n    Kd_steering : 0.0 \r\n    zero_throttle  : -0.03200000000000003 \r\n    max_throttle : 0.382 \r\n    min_throttle : 0.363 \r\n    error_threshold : 0.16 \r\n    max_right_steering : 0.792 \r\n    max_left_steering : -0.831 \r\nvesc_twist_node: \r\n  ros__parameters: \r\n    max_potential_rpm : 20000 \r\n    steering_polarity : 1 \r\n    throttle_polarity : 1 \r\n    zero_throttle  : -0.03200000000000003 \r\n    max_throttle : 0.382\r\n    min_throttle : 0.363 \r\n    max_right_steering : 0.792 \r\n    straight_steering : -0.21999999999999997 \r\n    max_left_steering : -0.831 \r\nadafruit_twist_node: \r\n  ros__parameters: \r\n    steering_polarity : 1 \r\n    throttle_polarity : 1 \r\n    zero_throttle  : -0.03200000000000003 \r\n    max_throttle : 0.382\r\n    min_throttle : 0.363 \r\n    max_right_steering : 0.792 \r\n    straight_steering : -0.21999999999999997 \r\n    max_left_steering : -0.831 \n"})}),"\n",(0,t.jsx)(n.p,{children:"If all was said and done, it would allow our car to automously navigate the lanes with our given filter."}),"\n",(0,t.jsx)(n.p,{children:"The video below is our car autonomously driving given calibrated mask."}),"\n",(0,t.jsx)("iframe",{width:"960",height:"520",src:"https://www.youtube.com/embed/rEJlq3KoeEM",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0,title:"GPS Video"})]})}function d(e={}){const{wrapper:n}={...(0,a.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},184:(e,n,r)=>{r.d(n,{c:()=>o});r(1504);var t=r(5456);const a={tabItem:"tabItem__kUE"};var i=r(7624);function o(e){let{children:n,hidden:r,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.c)(a.tabItem,o),hidden:r,children:n})}},6936:(e,n,r)=>{r.d(n,{c:()=>y});var t=r(1504),a=r(5456),i=r(7288),o=r(5592),l=r(3472),s=r(5068),c=r(604),u=r(6432);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}}))}(r);return function(e){const n=(0,c.w)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function _(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:r}=e;const a=(0,o.Uz)(),i=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,s._M)(i),(0,t.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function p(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,i=h(e),[o,s]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!_({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:i}))),[c,d]=f({queryString:r,groupId:a}),[p,m]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,i]=(0,u.IN)(r);return[a,(0,t.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:a}),g=(()=>{const e=c??p;return _({value:e,tabValues:i})?e:null})();(0,l.c)((()=>{g&&s(g)}),[g]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!_({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),m(e)}),[d,m,i]),tabValues:i}}var m=r(9788);const g={tabList:"tabList_fbd4",tabItem:"tabItem_v5XY"};var b=r(7624);function v(e){let{className:n,block:r,selectedValue:t,selectValue:o,tabValues:l}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.MV)(),u=e=>{const n=e.currentTarget,r=s.indexOf(n),a=l[r].value;a!==t&&(c(n),o(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=s.indexOf(e.currentTarget)+1;n=s[r]??s[0];break}case"ArrowLeft":{const r=s.indexOf(e.currentTarget)-1;n=s[r]??s[s.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.c)("tabs",{"tabs--block":r},n),children:l.map((e=>{let{value:n,label:r,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>s.push(e),onKeyDown:d,onClick:u,...i,className:(0,a.c)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function w(e){let{lazy:n,children:r,selectedValue:a}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function x(e){const n=p(e);return(0,b.jsxs)("div",{className:(0,a.c)("tabs-container",g.tabList),children:[(0,b.jsx)(v,{...e,...n}),(0,b.jsx)(w,{...e,...n})]})}function y(e){const n=(0,m.c)();return(0,b.jsx)(x,{...e,children:d(e.children)},String(n))}},4552:(e,n,r)=>{r.d(n,{I:()=>l,M:()=>o});var t=r(1504);const a={},i=t.createContext(a);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);