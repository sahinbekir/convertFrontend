<template>
  <div class="bg-light min-vh-100 d-flex flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol :md="9" :lg="7" :xl="6">
          <CCard class="mx-4">
            <CCardBody class="p-4">
              <CForm>
                <h1>Create User</h1>
                <p class="text-medium-emphasis">Create user account</p>

                User Type*
                <CInputGroup class="mb-3">
                  
                  <CInputGroupText>
                    <CIcon icon="cil-user" />
                  </CInputGroupText>
                  <input v-model="userData.usertype" type="text" placeholder="User Type" class=" mb-0" />
                </CInputGroup>



                User First Name*
                <CInputGroup class="mb-3">
                  <CInputGroupText>
                    <CIcon icon="cil-user" />
                  </CInputGroupText>
                  <input v-model="userData.userfname" type="text" placeholder="User First Name" class=" mb-0" />
                </CInputGroup>
                User Last Name*
                <CInputGroup class="mb-3">
                  <CInputGroupText>
                    <CIcon icon="cil-user" />
                  </CInputGroupText>
                  <input v-model="userData.userlname" type="text" placeholder="User Last Name" class=" mb-0" />
                </CInputGroup>
                User Phone Number*
                <CInputGroup class="mb-3">
                  <CInputGroupText>
                    <CIcon icon="cil-user" />
                  </CInputGroupText>
                  <input v-model="userData.userphone" type="text" placeholder="User Phone Number" class=" mb-0" />
                </CInputGroup>
                User Email Address*
                <CInputGroup class="mb-3">
                  <CInputGroupText>@</CInputGroupText>
                  <input v-model="userData.useremail" type="text" placeholder="User Email Address" class=" mb-0" />
                </CInputGroup>
                Username*
                <CInputGroup class="mb-3">
                  <CInputGroupText>
                    <CIcon icon="cil-user" />
                  </CInputGroupText>
                  <input v-model="userData.username" type="text" placeholder="Username" class=" mb-0" />
                </CInputGroup>
                Password*
                <CInputGroup class="mb-3">
                  <CInputGroupText>
                    <CIcon icon="cil-lock-locked" />
                  </CInputGroupText>
                  <input v-model="userData.userpassword" type="password" placeholder="Password" class=" mb-0" />
                </CInputGroup>
                Confirm*
                <CInputGroup class="mb-3">
                  <CInputGroupText>
                    <CIcon icon="cil-lock-locked" />
                  </CInputGroupText>
                  <input v-model="userData.confirmpassword" type="password" placeholder="Confirm Password" class=" mb-0" />
                </CInputGroup>
                
                <CCol>
                <button @click="userAdd" color="primary" class="px-4">Add User</button>
                </CCol>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
export default {
  name: 'UserAdd',
  data() {
    return {
      userData: {
        usertype: 2,
        userfname: null,
        userlname: null,
        userphone: null,
        useremail: null,
        username: null,
        userpassword: null,
        confirmpassword: null
      }
    };
  },

  methods: {
    userAdd(){
      
      if(this.userData.userpassword===this.userData.confirmpassword){
        this.$appAxios
      .post(`/User`, {userType:this.userData.usertype, userFirstName:this.userData.userfname,
      userLastName:this.userData.userlname, userPhone:this.userData.userphone,userEmail:this.userData.useremail, userName:this.userData.username,
      userPassword:this.userData.userpassword})
      .then(useradd_response => {
            alert("Kullanıcı Eklendi")
            //console.log(useradd_response.data);

        })
        .catch(e => console.log(e));
        
      }
      else {
        alert("Şifreler Uyuşmuyor")
      }
    }
  }
}
</script>