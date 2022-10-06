<template>
  <div class="bg-light min-vh-100 d-flex flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol :md="9" :lg="7" :xl="6">
          <CCard class="mx-4">
            <CCardBody class="p-4">
              <CForm>
                <h1>Create Device</h1>
                <p class="text-medium-emphasis">Add new device</p>
                    Device User Id*
                <CInputGroup class="mb-3">
                  <CInputGroupText>
                    <CIcon icon="cil-user" />
                  </CInputGroupText>
                  <input v-model="deviceData.userid" type="text" placeholder="Device User ID" class=" mb-0" />
                </CInputGroup>


                    Device Unique Id*
                <CInputGroup class="mb-3">
                  <CInputGroupText>
                    <CIcon icon="cil-user" />
                  </CInputGroupText>
                  <input v-model="deviceData.deviceuid" type="text" placeholder="Device Unique ID" class=" mb-0" />
                </CInputGroup>
                Device Name*
                <CInputGroup class="mb-3">
                  <CInputGroupText>
                    <CIcon icon="cil-user" />
                  </CInputGroupText>
                  <input v-model="deviceData.devicename" type="text" placeholder="Device Name" class=" mb-0" />
                </CInputGroup>
                Device Is Active?*
                <CInputGroup class="mb-3">
                  <CInputGroupText>
                    <CIcon icon="cil-user" />
                    
                  </CInputGroupText>
                  <input v-model="deviceData.deviceisactive" type="text" placeholder="Is Active? true or false" class="mb-0" />
                  
                </CInputGroup>
                
                
                
                
                <CCol>
                <button @click="deviceAdd" color="primary" class="px-4">Add Device</button>
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
  name: 'DeviceAdd',
  data() {
    return {
      deviceData: {
        userid: null,
        deviceuid: null,
        devicename: null,
        deviceisactive: null,
        devicecreatetime: null,
        deviceupdatetime: null
      }
    };
  },

  methods: {
    deviceAdd(){
      if (this.deviceData.deviceisactive==="true"||this.deviceData.deviceisactive==="True"||this.deviceData.deviceisactive===true){
        this.deviceData.deviceisactive=true;
      }
      else if(this.deviceData.deviceisactive==="false"||this.deviceData.deviceisactive==="False"||this.deviceData.deviceisactive===false){
        this.deviceData.deviceisactive=false;
      }
      else{
        alert("Hata IsActive")
      }
      if (this.deviceData.devicecreatetime==null){
          this.deviceData.devicecreatetime = new Date()
          this.deviceData.deviceupdatetime = new Date()

      }
      else {
          this.deviceData.deviceupdatetime = new Date()

      }

    this.$appAxios
    .post(`/Device`, {userId:this.deviceData.userid, deviceUID:this.deviceData.deviceuid,
    deviceName:this.deviceData.devicename, deviceIsActive:this.deviceData.deviceisactive,
    deviceCreateTime:this.deviceData.devicecreatetime,deviceUpdateTime:this.deviceData.deviceupdatetime})
      .then(response => {
          
           alert("Cihaz Eklendi...")
            
         
        })
        .catch(e => console.log(e));
        

    }
    
  }
}
</script>