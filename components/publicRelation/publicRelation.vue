<template>
<div>

<mt-search placeholder="搜索">
</mt-search>

<div class="topDiv">
    <div class="homeDiv">
        <img src="../../assets/images/relationPublic_home.png" alt="" class="leftImg">
        <h4>
            公共关系管理
        </h4>
    </div>
    <div class="banerImg">
        <div class="banerInnerDiv">
            <div>
            <img src="../../assets/images/relationPublic_invite.png" alt="">
            <p>邀请新益友</p>
        </div>
        <div>
            <img src="../../assets/images/relationPublic_manage.png" alt="">
            <p>益友管理</p>
        </div>
        </div>
        
    </div>
    <div class="interSpaceDiv">

    </div>
    <div >
        <div class="homeDiv">
            <img src="../../assets/images/relationPublic_friend.png" alt="" class="leftImg">
            <h4>
            我的伙伴（3/34） 
            </h4>
        </div>
        <div>
            <li class="relationPublic_listDiv">
                <div class="innerListDiv">
                  <div class="floatLeftDiv">
                <div>
                    <img src="../../assets/images/relationPublic_header.png" alt="" >
                </div>
                <span>
                    王小明
                </span>
                <span class="remarkspan">
                    主负责人
                </span>
                </div>
                <div class="floatRightDiv">
                    <img src="../../assets/images/relationPublic_copy.png" alt="">
                    <img src="../../assets/images/relationPublic_remark.png" alt="">
                </div> 
                </div>
                
            </li>
            <li class="relationPublic_listDiv">
                <div class="innerListDiv">
                  <div class="floatLeftDiv">
                <div>
                    <img src="../../assets/images/relationPublic_header.png" alt="" >
                </div>
                <span>
                    王小明
                </span>
                </div>
                <div class="floatRightDiv">
                    <img src="../../assets/images/relationPublic_copy.png" alt="">
                    <img src="../../assets/images/relationPublic_remark.png" alt="">
                </div> 
                </div>
                
            </li>
        </div>
    </div>
</div>
</div>

  
</template>

<style scope>
.mint-search {
  height: 10vh;
}
.homeDiv {
  width: 90%;
  margin: auto;
  height: 65px;
  line-height: 65px;
  border-bottom: 1px solid #d6d6d6;
}
.topDiv h4 {
  display: inline-block;
  margin-left: 10px;
}
.remarkspan {
    display: inline-block;
    background-color: #f38258;
    color :#ffffff;
    padding:2px 10px;
    border-radius: 5px;
    font-size: 10px;
}
.floatRightDiv img:not(:first-child){
    display: inline-block;
    margin-left: 15px;
}
</style>

