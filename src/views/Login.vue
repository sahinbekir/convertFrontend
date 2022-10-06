<template>
  <div class="bg-light min-vh-100 d-flex flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol :md="4">
          <CCardGroup>
            <CCard class="p-4">
              <CCardBody>
                <CForm>
                  <h1>LOGIN</h1>
                  <p class="text-medium-emphasis">Login to your Account</p>
                  Username*
                  <CInputGroup class="mb-3">
                  
                    <CInputGroupText>
                    
                      <CIcon icon="cil-user" />
                      
                    </CInputGroupText>
                    
                    <input v-model="userData.username" type="text" placeholder="Username" class=" mb-0" />
                  </CInputGroup>
                  <!--<input v-model="userData.username" type="text" placeholder="Kullanıcı Adı" class="input mb-3" />
    <input v-model="userData.password" type="password" placeholder="Şifre" class="input mb-3" />
    <button @click="onSubmit" class="default-button">Giriş yap</button>-->
                  Password*
                  <CInputGroup class="mb-4">
                    <CInputGroupText>
                      <CIcon icon="cil-lock-locked" />
                    </CInputGroupText>
                    <input v-model="userData.password" type="password" placeholder="Password" class=" mb-0" />
                    
                  </CInputGroup>
                  <CRow>
                    <CCol :xs="6">
                      
                      <button @click="onSubmit(userData.login,userData.username,userData.password)" color="primary" class="px-4">Login</button>
                    </CCol>
                    <CCol :xs="6">
                      
                      <button @click="signin" color="primary" class="px-4">Register Now</button>
                    </CCol>
                    
                    <!--
buton <CButton  color="primary" class="px-4"> Login </CButton>

                      <CCol :xs="6" class="text-right">
                      <CButton color="link" class="px-0">
                        Forgot password?
                      </CButton>
                    </CCol>
                    -->
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>
            <!--
              <CCard class="text-white bg-primary py-5" style="width: 44%">
              <CCardBody class="text-center">
                <div>
                  <h2>Sign up</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <CButton color="light" variant="outline" class="mt-3">
                    Register Now!
                  </CButton>
                </div>
              </CCardBody>
            </CCard>
            -->
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
export default {
  name: 'Login',
  
  
  
  data() {
    return {
      userData: {
        username: "admin",
        password: "12345",
        usertype: null,
        login:"Match",
      
      curid: null,
      curfname: null,
      curlname:null,
      curphone:null,
      curemail:null,
      curusername:null,
      curpassword:null

    },
   curuserdata:[],
    };
  },
  methods: {
    signin(){
      this.$router.push({name:"Register",userId:0})
    },
    onSubmit(login,username,password){
      this.$appAxios
      .get("/Login/"+login+"?username="+username+"&password="+password)
      .then((login_response) => {
          if (login_response.data.userName===username) {
            if (login_response.data.userPassword===password){
              this.curuserdata=login_response.data
              if(login_response.data.userType==2){
                this.userData.usertype=2
                this.$router.push({ name: "UserHome" ,curuserdata:this.curuserdata});
              }
              else if (login_response.data.userType==1){
                this.$router.push({ name: "AdminHome" ,curuserdata:this.curuserdata});
              }
            }}       
        })
        .catch(e => alert(e.response.data));
    }
  }
}
</script>


