<template>
 
  <el-row :gutter="8">
    <el-col :span="12">
      <el-card shadow="always">

        <li class="back-menu" href="el-icon-close" >
        </li>

        <h1 class="title-state">Pedido enviado!</h1>
      <h4 class="subtitle-state">   Seu pedido já foi enviado e você pode acompanhar o estado do pedido já </h4>
      <img class="opa" src="https://img.freepik.com/free-vector/take-away-concept-illustration_114360-2982.jpg?w=996&t=st=1694569200~exp=1694569800~hmac=eb80d6945500e79a70b1e4a1639d1bf27d7ef5d26d22c67f56547ac7eb342143" alt="sent-order" >
        <div class="success">
        <el-progress type="circle" :percentage="100" status="success"></el-progress>
      </div>
      </el-card>
       <div class="butao-state">
        <el-button type="primary">Acompanhe o pedido</el-button>
      </div>
    </el-col>
  </el-row>
</template>

<style>

.opa{
  border-radius: 10%;
  max-width: 200px;
  height: auto;
  max-height: 350px;
}

.el-card__body {
    padding: var(--el-card-padding);
    margin-top: 10px;
}
.el-row {
  height: 50%;
  justify-content: center;
}

.title-state {
  font-weight: bold;
  color: #ffe500e8;
}
.subtitle-state{
  color: rgba(109, 109, 117, 0.575);
}

.butao-state {
  border-top: 1px dashed #dcdcdc;
  margin-top: 50px;
  
}
.el-progress-circle__track{
  color: #E6A23C;
}
</style>